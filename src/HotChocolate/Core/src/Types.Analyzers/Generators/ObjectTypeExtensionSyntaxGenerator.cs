using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using HotChocolate.Types.Analyzers.Helpers;
using HotChocolate.Types.Analyzers.Inspectors;
using Microsoft.CodeAnalysis;

namespace HotChocolate.Types.Analyzers.Generators;

public sealed class ObjectTypeExtensionSyntaxGenerator
{
    private readonly string _ns;
    private readonly CodeWriter _writer;

    public ObjectTypeExtensionSyntaxGenerator(StringBuilder sb, string ns)
    {
        _ns = ns;
        _writer = new(sb);
    }

    public void WriterHeader()
    {
        _writer.WriteFileHeader();
        _writer.WriteLine();
    }

    public void WriteBeginNamespace()
    {
        _writer.WriteIndentedLine("namespace {0}", _ns);
        _writer.WriteIndentedLine("{");
        _writer.IncreaseIndent();
    }

    public void WriteEndNamespace()
    {
        _writer.DecreaseIndent();
        _writer.WriteIndentedLine("}");
        _writer.WriteLine();
    }

    public string WriteBeginClass(string typeName)
    {
        _writer.WriteIndentedLine("public static partial class {0}", typeName);
        _writer.WriteIndentedLine("{");
        _writer.IncreaseIndent();
        return typeName;
    }

    public void WriteEndClass()
    {
        _writer.DecreaseIndent();
        _writer.WriteIndentedLine("}");
    }

    public void WriteInitializeMethod(ObjectTypeExtensionInfo objectTypeExtension)
    {
        _writer.WriteIndentedLine(
            "internal static void Initialize(global::HotChocolate.Types.IObjectTypeDescriptor<{0}> descriptor)",
            objectTypeExtension.RuntimeType.ToFullyQualified());
        _writer.WriteIndentedLine("{");

        using (_writer.IncreaseIndent())
        {
            _writer.WriteIndentedLine("const global::System.Reflection.BindingFlags bindingFlags =");
            using (_writer.IncreaseIndent())
            {
                _writer.WriteIndentedLine("global::System.Reflection.BindingFlags.Public |");
                using (_writer.IncreaseIndent())
                {
                    _writer.WriteIndentedLine("System.Reflection.BindingFlags.NonPublic |");
                    _writer.WriteIndentedLine("System.Reflection.BindingFlags.Static;");
                }
            }

            _writer.WriteIndentedLine(
                "var thisType = typeof({0});",
                objectTypeExtension.Type.ToFullyQualified());

            if (objectTypeExtension.NodeResolver is not null)
            {
                _writer.WriteLine();
                _writer.WriteIndentedLine("descriptor");
                using (_writer.IncreaseIndent())
                {
                    _writer.WriteIndentedLine(".ImplementsNode()");
                    _writer.WriteIndentedLine(
                        ".ResolveNodeWith((global::System.Reflection.MethodInfo)" +
                        "thisType.GetMember(\"{0}\", bindingFlags)[0]);",
                        objectTypeExtension.NodeResolver.Name);
                }
            }

            if (objectTypeExtension.Members.Length > 0)
            {
                _writer.WriteLine();
                foreach (var member in objectTypeExtension.Members)
                {
                    _writer.WriteIndentedLine(
                        "descriptor.Field(thisType.GetMember(\"{0}\", bindingFlags)[0]);",
                        member.Name);
                }
            }

            _writer.WriteLine();
            _writer.WriteIndentedLine("Configure(descriptor);");
        }

        _writer.WriteIndentedLine("}");
    }

    public void WriteConfigureMethod(ObjectTypeExtensionInfo objectTypeExtension)
    {
        _writer.WriteIndentedLine(
            "static partial void Configure(global::HotChocolate.Types.IObjectTypeDescriptor<{0}> descriptor);",
            objectTypeExtension.RuntimeType.ToFullyQualified());
    }
}

public sealed class ResolverSyntaxGenerator(StringBuilder sb, string ns)
{
    private readonly CodeWriter _writer = new(sb);

    public void WriterHeader()
    {
        _writer.WriteFileHeader();
        _writer.WriteLine();
    }

    public void WriteBeginNamespace()
    {
        _writer.WriteIndentedLine("namespace {0}", ns);
        _writer.WriteIndentedLine("{");
        _writer.IncreaseIndent();
    }

    public void WriteEndNamespace()
    {
        _writer.DecreaseIndent();
        _writer.WriteIndentedLine("}");
        _writer.WriteLine();
    }

    public string WriteBeginClass(string typeName)
    {
        _writer.WriteIndentedLine("internal static class {0}", typeName);
        _writer.WriteIndentedLine("{");
        _writer.IncreaseIndent();
        return typeName;
    }

    public void WriteEndClass()
    {
        _writer.DecreaseIndent();
        _writer.WriteIndentedLine("}");
    }

    public void AddResolverDeclarations(IEnumerable<ResolverName> resolvers)
    {
        _writer.WriteIndentedLine(
            "private readonly static global::{0}[] _fieldResolver =",
            WellKnownTypes.FieldResolverDelegate);

        using (_writer.IncreaseIndent())
        {
            _writer.WriteIndentedLine("[");
            using (_writer.IncreaseIndent())
            {
                foreach (var resolver in resolvers)
                {
                    _writer.WriteIndentedLine(
                        "{0}_{1},",
                        resolver.TypeName,
                        resolver.MemberName);
                }
            }
            _writer.WriteIndentedLine("];");
        }

        foreach (var resolver in resolvers)
        {
            _writer.WriteIndentedLine(
                "private readonly static {0}[] _args_{1} = new {0}[1];",
                WellKnownTypes.ParameterBinding,
                $"{resolver.TypeName}_{resolver.MemberName}");
        }
    }

    public void AddResolver(ResolverName resolverName, ISymbol member)
    {
        const string task = $"{WellKnownTypes.Task}<";
        const string valueTask = $"{WellKnownTypes.ValueTask}<";

        if (member is IMethodSymbol method)
        {
            if (method.ReturnsVoid || method.ReturnsByRef || method.ReturnsByRefReadonly)
            {
                // error return void
                return;
            }

            var returnType = method.ReturnType.ToFullyQualified();

            if (returnType.StartsWith(task) ||
                returnType.StartsWith(valueTask))
            {
                AddAsyncResolver(resolverName, method);
                return;
            }

            if (returnType.StartsWith(WellKnownTypes.Task) ||
                returnType.StartsWith(WellKnownTypes.ValueTask))
            {
                // error return void
                return;
            }

            AddSyncResolver(resolverName, method);
            return;
        }

        AddPropertyResolver(resolverName, member);
    }

    private void AddAsyncResolver(ResolverName resolverName, IMethodSymbol method)
    {
        _writer.WriteIndentedLine(
            "private static async global::{0}<object?> {1}_{2}(global::{3} context)",
            WellKnownTypes.ValueTask,
            resolverName.TypeName,
            resolverName.MemberName,
            WellKnownTypes.ResolverContext);
        _writer.WriteIndentedLine("{");
        using (_writer.IncreaseIndent())
        {
            AddResolverArguments(resolverName, method);

            _writer.WriteIndentedLine("var obj = context.Parent<{0}>();", method.ContainingType.ToFullyQualified());
            _writer.WriteIndentedLine(
                "return await obj.{0}({1});",
                resolverName.MemberName,
                GetResolverArguments(resolverName, method));
        }
        _writer.WriteIndentedLine("}");
    }

    private void AddSyncResolver(ResolverName resolverName, IMethodSymbol method)
    {
        _writer.WriteIndentedLine(
            "private static async global::{0}<object?> {1}_{2}(global::{3} context)",
            WellKnownTypes.ValueTask,
            resolverName.TypeName,
            resolverName.MemberName,
            WellKnownTypes.ResolverContext);
        _writer.WriteIndentedLine("{");
        using (_writer.IncreaseIndent())
        {
            AddResolverArguments(resolverName, method);

            _writer.WriteIndentedLine(
                "var result = {0}.{1}({2});",
                method.ContainingType.ToFullyQualified(),
                resolverName.MemberName,
                GetResolverArguments(resolverName, method));

            _writer.WriteIndentedLine(
                "return new global::{0}<{1}?>(result);",
                WellKnownTypes.ValueTask,
                WellKnownTypes.Object);
        }
        _writer.WriteIndentedLine("}");
    }

    private void AddResolverArguments(ResolverName resolverName, IMethodSymbol method)
    {
        if (resolverName.ArgumentsCount > 0)
        {
            _writer.WriteIndentedLine(
                "var args = global::{0}.GetReference({1}_{2}.AsSpan());",
                WellKnownTypes.MemoryMarshal,
                resolverName.TypeName,
                resolverName.MemberName);

            for (var i = 0; i < method.Parameters.Length; i++)
            {
                _writer.WriteIndentedLine(
                    "var args{0} = global::{1}.Add(ref args, {0}).Resolve<global::{2}>(context)",
                    i,
                    WellKnownTypes.Unsafe,
                    method.Parameters[i].Type.ToFullyQualified());
            }
        }
    }

    private string GetResolverArguments(ResolverName resolverName, IMethodSymbol method)
    {
        if (resolverName.ArgumentsCount == 0)
        {
            return string.Empty;
        }

        var arguments = new StringBuilder();

        for (var i = 0; i < method.Parameters.Length; i++)
        {
            if (i > 0)
            {
                arguments.Append(", ");
            }
            arguments.Append($"args{i}");
        }

        return arguments.ToString();
    }

    private void AddPropertyResolver(ResolverName resolverName, ISymbol method)
    {
        _writer.WriteIndentedLine(
            "private static async global::{0}<object?> {1}_{2}(global::{3} context)",
            WellKnownTypes.ValueTask,
            resolverName.TypeName,
            resolverName.MemberName,
            WellKnownTypes.ResolverContext);
        _writer.WriteIndentedLine("{");
        using (_writer.IncreaseIndent())
        {
            _writer.WriteIndentedLine(
                "var result = {0}.{1};",
                method.ContainingType.ToFullyQualified(),
                resolverName.MemberName);

            _writer.WriteIndentedLine(
                "return new global::{0}<global::{1}?>(result);",
                WellKnownTypes.ValueTask,
                WellKnownTypes.Object);
        }
        _writer.WriteIndentedLine("}");
    }
}

public readonly struct ResolverName(string typeName, string memberName, int argsCount)
{
    public readonly string TypeName = typeName;

    public readonly string MemberName = memberName;

    public readonly int ArgumentsCount = argsCount;
}
