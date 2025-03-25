import { Metadata } from "next";
import dynamic from "next/dynamic";

const Delivery = dynamic(() => import ("~/components/ComPolicy/DeliveryPolicy"));
export const metadata: Metadata = {
    title: "Chính sách vận chuyển - CakewaiTown",
    description: "Tìm hiểu chính sách giao hàng của CakewaiTown, bao gồm phí ship, khu vực áp dụng và điều kiện vận chuyển.",
    keywords: "Chính sách vận chuyển, giao hàng CakewaiTown, ship bánh ngọt, phí giao hàng, ship tận nơi, CakewaiTown shipping policy",
    openGraph: {
      title: "Chính sách vận chuyển - CakewaiTown",
      description: "Tìm hiểu chi tiết chính sách giao hàng của CakewaiTown, bao gồm phí ship, khu vực áp dụng và các điều kiện vận chuyển.",
      url: "https://cakewaitown.com/compolicy/delivery",
      type: "article",
      images: ["https://cakewaitown.com/images/delivery-policy-cover.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Chính sách vận chuyển - CakewaiTown",
      description: "Thông tin chi tiết về dịch vụ giao hàng Cakewai, điều kiện và chi phí ship hàng tận nơi.",
      images: ["https://cakewaitown.com/images/delivery-policy-cover.jpg"]
    },
    alternates: {
      canonical: "https://cakewaitown.com/compolicy/delivery"
    }
  };
  
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính sách vận chuyển - CakewaiTown",
    "url": "https://cakewaitown.com/compolicy/delivery",
    "description": "Tìm hiểu chi tiết chính sách giao hàng của CakewaiTown, bao gồm phí ship, khu vực áp dụng và các điều kiện vận chuyển.",
    "publisher": {
      "@type": "Organization",
      "name": "CakewaiTown",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    }
  };
export default function deliveryPolicy(){
    return(
        <>
              <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>

        <div>
            <Delivery/>
        </div>
    </>
    );

}