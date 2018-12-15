namespace HotChocolate.Types.Paging
{
    public class PageInfoType
        : ObjectType<IPageInfo>
    {
        protected override void Configure(IObjectTypeDescriptor<IPageInfo> descriptor)
        {
            descriptor.Name("PageInfo");

            descriptor.Field(t => t.HasNextPage)
                .Name("hasNextPage")
                .Type<NonNullType<BooleanType>>();

            descriptor.Field(t => t.HasPreviousPage)
                .Name("hasPreviousPage")
                .Type<NonNullType<BooleanType>>();
        }
    }
}
