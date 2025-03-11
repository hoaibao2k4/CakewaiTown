import Categories from "~/components/Categories";

interface CategoryPageProps {
  params: { category?: string[] }; // category là mảng hoặc undefined
}

function Category({ params} : CategoryPageProps) {

  const category = params.category?.[0] || "default";
  console.log("Path is: ",category)
  return <Categories params={category}/>
}

export default Category;
