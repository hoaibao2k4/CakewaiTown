import DetailedCake from "./index";
import { getCakeBySlug } from "~/api/apiCakes";
import { Metadata } from "next";
import { CreateCake } from "~/types";
type Params = Promise<{ slug?: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  try {
    const cake: CreateCake = await getCakeBySlug(slug!);
    return {
      title: cake?.product_name || "Chi tiết bánh",
      description: cake?.description || "Thông tin chi tiết bánh kem",
      robots: "index, follow",
      keywords: `${cake.product_name}, bánh ngọt làng đại học, banh ngot lang dai hoc, banh sinh nhat, banh mi, banh man, banh kem, banh cookie`,
      openGraph: {
        title: cake?.product_name,
        description: cake?.description,
        url: `https://cakewaitown.com/detailed/${cake.slug}`,
        siteName: "Cakewai Town",
        type: "website",
        locale: "vi_VN",
        images: [
          {
            url: cake?.image_link || "/default-og.jpg",
            width: 800,
            height: 600,
            alt: cake.product_name
          },
        ],
      },
      alternates: {
        canonical: `https://cakewaitown.com/detailed/${cake.slug}`,
      },
    };
  } catch (error) {
    console.log(error)
    return {
      title: "Không tìm thấy bánh",
      description: "Không có thông tin bánh tương ứng.",
    };
  }
}

export default async function DetailedProduct(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;
  return (
    <>
      <DetailedCake slug={slug} />
    </>
  );
}
