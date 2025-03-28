import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CakeWai - Câu chuyện, Dịch vụ, Lời cam kết",
  description:
    "Tìm hiểu về CakeWai Town - thương hiệu bánh ngọt hàng đầu với câu chuyện thú vị, dịch vụ tận tâm và cam kết chất lượng.",
  keywords:
    "bánh ngọt, CakeWai Town, bánh kem, dịch vụ bánh, câu chuyện CakeWai, cam kết chất lượng",
  openGraph: {
    title: "About CakeWai - Câu chuyện, Dịch vụ, Lời cam kết",
    description:
      "Tìm hiểu về CakeWai Town - thương hiệu bánh ngọt hàng đầu với câu chuyện thú vị, dịch vụ tận tâm và cam kết chất lượng.",
    type: "website",
    url: "https://cakewaitown.com/about",
    images: [
      {
        url: "/images/images_aboutUs/about_1.jpg",
        width: 1200,
        height: 630,
        alt: "Câu chuyện CakeWai Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cakewai_town",
    title: "About CakeWai - Câu chuyện, Dịch vụ, Lời cam kết",
    description:
      "Tìm hiểu về CakeWai Town - thương hiệu bánh ngọt hàng đầu với câu chuyện thú vị, dịch vụ tận tâm và cam kết chất lượng.",
    images: ["/images/images_aboutUs/about_1.jpg"],
  },
};

const AboutUs = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CakeWai Town",
    "url": "https://cakewaitown.com",
    "logo": "https://cakewaitown.com/logo.png",
    "description": "CakeWai Town - thương hiệu bánh ngọt hàng đầu với dịch vụ tận tâm và cam kết chất lượng.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "371 Đ.Đoàn Kết, P.Bình Thọ",
      "addressLocality": "Thủ Đức",
      "addressCountry": "Vietnam"
    },
    "telephone": "+84-91-247-65-21",
    "email": "cakewaitown@gmail.com",
    "sameAs": [
      "https://www.facebook.com/cakewai.town/",
      "https://www.instagram.com/cakewai_town/",
      "https://www.tiktok.com/@cakewai_town",
      "https://www.youtube.com/@CakewaiTown"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-91-247-65-21",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": ["Vietnamese", "English"]
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CakeWai Town" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content="CakeWai Town" />
        <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <link rel="canonical" href="https://cakewaitown.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      <div className="mx-full font-inter w-full items-center overflow-hidden text-primary">
        {/* Câu chuyện */}
        <section className="group img-scale mt-5 h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center relative">
          <Image
            src="/images/images_aboutUs/about_1.jpg"
            alt="Câu chuyện thương hiệu CakeWai Town - Bánh ngọt từ năm 2024"
            width={500}
            height={300}
            className="hidden"
            aria-hidden="true"
            priority
          />
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('/images/images_aboutUs/about_1.jpg')` }}
          />
          <div className="relative flex h-full items-center justify-start bg-gradient-to-r from-black to-transparent">
            <div className="ml-8 sm:ml-12 lg:ml-20 max-w-lg text-left transition-transform duration-500 ease-out group-hover:scale-110">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                <Link href="/about/story" className="hover:text-yellow-500">
                  Câu chuyện
                </Link>
              </h2>
              <p className="my-5 text-xs sm:text-sm text-white">
                Cakewai Town được thành lập vào năm 2024, bắt nguồn từ tình yêu dành
                cho đất Việt cùng với bánh ngọt và cộng đồng nơi đây.
              </p>
            </div>
          </div>
        </section>

        {/* Dịch vụ */}
        <section className="group img-scale h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center relative">
          <Image
            src="/images/images_aboutUs/about_2.jpg"
            alt="Dịch vụ tận tâm của CakeWai Town"
            width={500}
            height={300}
            className="hidden"
            aria-hidden="true"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('/images/images_aboutUs/about_2.jpg')` }}
          />
          <div className="relative flex h-full items-center justify-end bg-gradient-to-l from-transparent to-black">
            <div className="mr-8 sm:mr-12 lg:mr-20 max-w-lg text-right transition-transform duration-500 ease-out group-hover:scale-110">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                <Link href="/about/service" className="hover:text-yellow-500">
                  Dịch vụ
                </Link>
              </h2>
              <p className="my-5 text-xs sm:text-sm text-white">
                Cakewai Town là không gian của chúng mình, nơi mọi thứ đều vì
                sự thoải mái và trải nghiệm tuyệt vời của bạn.
              </p>
            </div>
          </div>
        </section>

        {/* Lời cam kết */}
        <section className="group img-scale h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center relative">
          <Image
            src="/images/images_aboutUs/about_3.jpg"
            alt="Lời cam kết chất lượng từ CakeWai Town"
            width={500}
            height={300}
            className="hidden"
            aria-hidden="true"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('/images/images_aboutUs/about_3.jpg')` }}
          />
          <div className="relative flex h-full items-center justify-start bg-gradient-to-r from-black to-transparent">
            <div className="ml-8 sm:ml-12 lg:ml-20 max-w-lg text-left transition-transform duration-500 ease-out group-hover:scale-110">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                <Link href="/about/promise" className="hover:text-yellow-500">
                  Lời cam kết
                </Link>
              </h2>
              <p className="my-5 text-xs sm:text-sm text-white">
                Cakewai cam kết mang đến những chiếc bánh ngọt tinh tế, tươi ngon
                và chất lượng nhất, thể hiện tâm huyết của chúng tôi với từng khách hàng.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
