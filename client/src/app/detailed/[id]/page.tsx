import DetailedCake from "./index"
type Params = Promise<{ id?: string }>;
export default async function DetailedProduct(props: { params: Params }) {
      const params = await props.params;
      const id = params.id;
    return (
        <>
        <DetailedCake id ={id}/>
        </>
    )
}