import dynamic from "next/dynamic";
import { Metadata } from "next";
const ClaAndCond = dynamic(() => import ("~/components/ClaAndCond"));
export const metadata: Metadata = {
    title: "Điều khoản và điều kiện - CakewaiTown",
    description: "CakewaiTown quy định về các điều khoản và điều kiện nhằm mang đến cho bạn trải nghiệm mua sắm bánh ngọt tốt nhất với chất lượng sản phẩm cao cấp và dịch vụ tận tâm.",
    keywords: "Điều khoản Cakewai, chính sách mua hàng, điều kiện thanh toán, chính sách đổi trả, bảo mật thông tin, giao hàng Cakewai",
    openGraph: {
      title: "Điều khoản và điều kiện - CakewaiTown",
      description: "CakewaiTown quy định về các điều khoản và điều kiện giúp khách hàng có trải nghiệm tốt nhất.",
      url: "https://cakewaitown.com/claandcons",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Điều khoản và điều kiện - CakewaiTown",
      description: "CakewaiTown cam kết cung cấp sản phẩm và dịch vụ chất lượng với các điều khoản rõ ràng và minh bạch.",
    },
    alternates: {
        canonical: "https://cakewaitown.com/claandcons"
      }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Điều khoản và điều kiện - CakewaiTown",
    "url": "https://cakewaitown.com/claandcons",
    "description": "CakewaiTown quy định về các điều khoản và điều kiện nhằm đảm bảo quyền lợi khách hàng và chất lượng dịch vụ.",
    "publisher": {
      "@type": "Organization",
      "name": "CakewaiTown",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    }
  };
export default function claAndcond(){
  return(
    <>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      <div>
        <ClaAndCond/>
      </div>
    </>

  )
}