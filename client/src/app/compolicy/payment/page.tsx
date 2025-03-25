import { Metadata } from "next";
import dynamic from "next/dynamic";

const Payment = dynamic(() => import ("~/components/ComPolicy/PaymentPolicy"));
export const metadata: Metadata = {
    title: "Chính sách giao dịch & thanh toán - CakewaiTown",
    description: "Tìm hiểu các phương thức thanh toán tại CakewaiTown, bao gồm thanh toán trực tiếp, chuyển khoản và các điều khoản liên quan.",
    keywords: "Chính sách thanh toán, phương thức thanh toán Cakewai, giao dịch mua hàng, thanh toán chuyển khoản, thanh toán tại cửa hàng",
    openGraph: {
      title: "Chính sách giao dịch & thanh toán - CakewaiTown",
      description: "CakewaiTown cung cấp nhiều phương thức thanh toán thuận tiện cho khách hàng, đảm bảo giao dịch an toàn và nhanh chóng.",
      url: "https://cakewaitown.com/compolicy/payment",
      type: "article",
      images: ["https://cakewaitown.com/images/payment-policy-cover.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Chính sách giao dịch & thanh toán - CakewaiTown",
      description: "Hướng dẫn chi tiết về các phương thức thanh toán tại CakewaiTown, bao gồm thanh toán trực tiếp và chuyển khoản.",
      images: ["https://cakewaitown.com/images/payment-policy-cover.jpg"]
    },
    alternates: {
      canonical: "https://cakewaitown.com/compolicy/payment"
    }
  };
  
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính sách giao dịch & thanh toán - CakewaiTown",
    "url": "https://cakewaitown.com/compolicy/payment",
    "description": "Tìm hiểu các phương thức thanh toán tại CakewaiTown, bao gồm thanh toán trực tiếp, chuyển khoản và các điều khoản liên quan.",
    "publisher": {
      "@type": "Organization",
      "name": "CakewaiTown",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    }
  };
  
export default function paymentPolicy(){
    return(
        <>
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>

        <div>
            <Payment/>
        </div>
    </>
    );

}