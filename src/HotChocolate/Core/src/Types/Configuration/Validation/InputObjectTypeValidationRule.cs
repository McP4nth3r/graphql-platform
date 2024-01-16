#nullable enable

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using HotChocolate.Language;
using HotChocolate.Types;
using static HotChocolate.Configuration.Validation.TypeValidationHelper;
using static HotChocolate.Utilities.ErrorHelper;

namespace HotChocolate.Configuration.Validation;

internal sealed class InputObjectTypeValidationRule : ISchemaValidationRule
{
    public void Validate(
        ReadOnlySpan<ITypeSystemObject> typeSystemObjects,
        IReadOnlySchemaOptions options,
        ICollection<ISchemaError> errors)
    {
        if (!options.StrictValidation)
        {
            return;
        }

        List<string>? names = null;
        CycleValidationContext cycleValidationContext = new()
        {
            Visited = new(),
            CycleStartIndex = new(),
            Errors = errors,
            FieldPath = new(),
        };
        
        foreach (var type in typeSystemObjects)
        {
            if (type is not InputObjectType inputType)
            {
                continue;
            }

            EnsureTypeHasFields(inputType, errors);
            EnsureFieldNamesAreValid(inputType, errors);
            EnsureOneOfFieldsAreValid(inputType, errors, ref names);
            EnsureFieldDeprecationIsValid(inputType, errors);
            TryReachCycleRecursively(cycleValidationContext, inputType);

            cycleValidationContext.CycleStartIndex.Clear();
        }
    }

    private struct CycleValidationContext
    {
        public HashSet<InputObjectType> Visited { get; set; }
        public Dictionary<InputObjectType, int> CycleStartIndex { get; set; }
        public ICollection<ISchemaError> Errors { get; set; }
        public List<string> FieldPath { get; set; }
    }

    // https://github.com/IvanGoncharov/graphql-js/blob/408bcda9c88df85e039f5d072011b1cb465fe830/src/type/validate.js#L535
    private static void TryReachCycleRecursively(
        in CycleValidationContext context,
        InputObjectType type)
    {
        if (!context.Visited.Add(type))
        {
            return;
        }

        context.CycleStartIndex[type] = context.FieldPath.Count;

        foreach (var field in type.Fields)
        {
            var unwrappedType = UnwrapCompletelyIfRequired(field.Type);
            if (unwrappedType is not InputObjectType inputObjectType)
            {
                continue;
            }

            context.FieldPath.Add(field.Name);
            if (context.CycleStartIndex.TryGetValue(inputObjectType, out var cycleIndex))
            {
                var cyclePath = context.FieldPath.Skip(cycleIndex);
                context.Errors.Add(
                    InputObjectMustNotHaveRecursiveNonNullableReferencesToSelf(type, cyclePath));
            }
            else
            {
                TryReachCycleRecursively(context, inputObjectType);
            }
            context.FieldPath.Pop();
        }

        context.CycleStartIndex.Remove(type);
    }

    private static IType? UnwrapCompletelyIfRequired(IType type)
    {
        while (true)
        {
            if (type.Kind == TypeKind.NonNull)
            {
                type = ((NonNullType)type).Type;
            }
            else
            {
                return null;
            }

            switch (type.Kind)
            {
                case TypeKind.List:
                {
                    return null;
                }
                default:
                {
                    return type;
                }
            }
        }
    }

    private static void EnsureOneOfFieldsAreValid(
        InputObjectType type,
        ICollection<ISchemaError> errors,
        ref List<string>? temp)
    {
        if (!type.Directives.ContainsDirective(WellKnownDirectives.OneOf))
        {
            return;
        }

        temp ??= new List<string>();

        foreach (var field in type.Fields)
        {
            if (field.Type.Kind is TypeKind.NonNull || field.DefaultValue is not null)
            {
                temp.Add(field.Name);
            }
        }

        if (temp.Count == 0)
        {
            return;
        }

        var fieldNames = new string[temp.Count];
        for (var i = 0; i < temp.Count; i++)
        {
            fieldNames[i] = temp[i];
        }

        temp.Clear();
        errors.Add(OneofInputObjectMustHaveNullableFieldsWithoutDefaults(type, fieldNames));
    }
}
