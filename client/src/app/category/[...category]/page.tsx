import Categories from "~/components/Categories";

interface CategoryPageProps {
  params: { category?: string[] };
}

function Category({ params} : CategoryPageProps) {

  const category = params.category?.[0] || "default";
  return <Categories params={category}/>
}

export default Category;
