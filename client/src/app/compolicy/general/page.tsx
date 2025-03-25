import { Metadata } from "next";
import dynamic from "next/dynamic";

const General = dynamic(() => import ("~/components/ComPolicy/GeneralPolicy"));
export const metadata: Metadata = {
    title: "Chính sách và quy định chung - CakewaiTown",
    description: "Tìm hiểu các chính sách và quy định chung của CakewaiTown về tiêu chuẩn dịch vụ, quy trình sản xuất và quy định kinh doanh.",
    keywords: "Chính sách CakewaiTown, quy định chung, tiêu chuẩn dịch vụ, quy trình sản xuất, quy định kinh doanh CakewaiTown",
    openGraph: {
      title: "Chính sách và quy định chung - CakewaiTown",
      description: "CakewaiTown cam kết cung cấp sản phẩm chất lượng cao, đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm và dịch vụ tận tâm.",
      url: "https://cakewaitown.com/compolicy/general",
      type: "article",
      images: ["https://cakewaitown.com/images/general-policy-cover.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Chính sách và quy định chung - CakewaiTown",
      description: "CakewaiTown đảm bảo mang đến cho khách hàng sản phẩm chất lượng cao và quy trình kinh doanh minh bạch.",
      images: ["https://cakewaitown.com/images/general-policy-cover.jpg"]
    },
    alternates: {
      canonical: "https://cakewaitown.com/compolicy/general"
    }
  };
  
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính sách và quy định chung - CakewaiTown",
    "url": "https://cakewaitown.com/compolicy/general",
    "description": "Tìm hiểu các chính sách và quy định chung của CakewaiTown về tiêu chuẩn dịch vụ, quy trình sản xuất và quy định kinh doanh.",
    "publisher": {
      "@type": "Organization",
      "name": "CakewaiTown",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    }
  };
export default function generalPolicy(){
    return(
        <>
              <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>

        <div>
            <General/>
        </div>
    </>
    );

}