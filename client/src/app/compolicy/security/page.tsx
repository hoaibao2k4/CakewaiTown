import { Metadata } from "next";
import dynamic from "next/dynamic";

const Security = dynamic(() => import ("~/components/ComPolicy/SecurityPolicy"));
export const metadata: Metadata = {
    title: "Chính sách bảo mật - CakewaiTown",
    description: "Tìm hiểu chính sách bảo mật của CakewaiTown về thu thập, lưu trữ và bảo vệ thông tin cá nhân khách hàng.",
    keywords: "Chính sách bảo mật, bảo vệ thông tin khách hàng, lưu trữ dữ liệu, quyền riêng tư Cakewai, bảo mật tài khoản",
    openGraph: {
      title: "Chính sách bảo mật - CakewaiTown",
      description: "CakewaiTown cam kết bảo mật thông tin khách hàng, không chia sẻ dữ liệu cá nhân với bên thứ ba khi chưa có sự đồng ý.",
      url: "https://cakewaitown.com/compolicy/security",
      type: "article",
      images: ["https://cakewaitown.com/images/security-policy-cover.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Chính sách bảo mật - CakewaiTown",
      description: "Tìm hiểu cách CakewaiTown bảo vệ thông tin cá nhân của khách hàng và cam kết không chia sẻ dữ liệu với bên thứ ba.",
      images: ["https://cakewaitown.com/images/security-policy-cover.jpg"]
    },
    alternates: {
      canonical: "https://cakewaitown.com/compolicy/security"
    }
  };
  
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính sách bảo mật - CakewaiTown",
    "url": "https://cakewaitown.com/compolicy/security",
    "description": "Tìm hiểu chính sách bảo mật của CakewaiTown về thu thập, lưu trữ và bảo vệ thông tin cá nhân khách hàng.",
    "publisher": {
      "@type": "Organization",
      "name": "CakewaiTown",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    }
  };
export default function securityPolicy(){
    return( 
        <>
              <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>

        <div>
            <Security/>
        </div>
    </>
    );

}