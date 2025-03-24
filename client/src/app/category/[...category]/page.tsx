import Categories from "~/components/Categories";
type Params = Promise<{category?: string}>
export default async function CategoryPage(props : { params : Params}) {
  const params = await props.params
  const category = params.category
  return <Categories params={category} />;
}
