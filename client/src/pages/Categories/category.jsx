import { useLocation } from "react-router-dom";
import Categories from "~/components/Categories";

function Category() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = searchParams.get('mode') || 'default'

  return <Categories params={category}/>
}

export default Category;
