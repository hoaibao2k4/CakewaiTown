import { Metadata } from "next";
import dynamic from "next/dynamic";

const Return = dynamic(() => import ("~/components/ComPolicy/ReturnPolicy"));
export const metadata: Metadata = {
    title: "Chính sách đổi trả - CakewaiTown",
    description: "Tìm hiểu chính sách đổi trả của CakewaiTown, bao gồm các điều kiện đổi trả, hoàn tiền và hướng dẫn quy trình đổi trả hàng.",
    keywords: "Chính sách đổi trả, hoàn tiền Cakewai, đổi trả sản phẩm, điều kiện đổi trả, hướng dẫn đổi trả hàng",
    openGraph: {
      title: "Chính sách đổi trả - CakewaiTown",
      description: "CakewaiTown cung cấp chính sách đổi trả rõ ràng nhằm đảm bảo quyền lợi khách hàng trong quá trình mua sắm.",
      url: "https://cakewaitown.com/compolicy/return",
      type: "article",
      images: ["https://cakewaitown.com/images/return-policy-cover.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Chính sách đổi trả - CakewaiTown",
      description: "Hướng dẫn chi tiết về chính sách đổi trả của CakewaiTown, bao gồm điều kiện đổi trả và quy trình hoàn tiền.",
      images: ["https://cakewaitown.com/images/return-policy-cover.jpg"]
    },
    alternates: {
      canonical: "https://cakewaitown.com/compolicy/return"
    }
  };
  
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính sách đổi trả - CakewaiTown",
    "url": "https://cakewaitown.com/compolicy/return",
    "description": "Tìm hiểu chính sách đổi trả của CakewaiTown, bao gồm các điều kiện đổi trả, hoàn tiền và hướng dẫn quy trình đổi trả hàng.",
    "publisher": {
      "@type": "Organization",
      "name": "CakewaiTown",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    }
  };
export default function returnPolicy(){
    return(
        <>
              <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>

        <div>
            <Return/>
        </div>
    </>
    );

}