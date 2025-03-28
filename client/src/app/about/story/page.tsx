import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu chuyện - CakeWai",
  description:
    "Những câu chuyện làm nghề và sứ mệnh của CakeWai trong hành trình mang đến những chiếc bánh ngọt đầy yêu thương.",
  keywords:
    "bánh ngọt, câu chuyện CakeWai, sứ mệnh CakeWai, bánh kem, kết nối cộng đồng, bánh tươi ngon",
  openGraph: {
    title: "Câu chuyện - CakeWai",
    description:
      "Những câu chuyện làm nghề và sứ mệnh của CakeWai trong hành trình mang đến những chiếc bánh ngọt đầy yêu thương.",
    type: "article",
    url: "https://cakewai.com/about/story",
    images: [
      {
        url: "/images/images_aboutUs/about_1.jpg",
        width: 1200,
        height: 630,
        alt: "Câu chuyện thương hiệu CakeWai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cakewai",
    title: "Câu chuyện - CakeWai",
    description:
      "Những câu chuyện làm nghề và sứ mệnh của CakeWai trong hành trình mang đến những chiếc bánh ngọt đầy yêu thương.",
    images: ["/images/images_aboutUs/about_1.jpg"],
  },
};

const StoryPage = () => {
  const StorySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Câu chuyện về CakeWai Town",
    "author": {
      "@type": "Organization",
      "name": "CakeWai Town"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CakeWai Town",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cakewaitown.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": "https://cakewaitown.com/about/story"
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CakeWai Team" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content="CakeWai" />
        <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <link rel="canonical" href="https://cakewai.com/about/story" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(StorySchema) }}
        />
      </Head>

      <div className="mx-full font-inter w-full items-center overflow-hidden text-black">
        {/* Hình ảnh tiêu đề */}
        <div
          className="flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
          style={{ backgroundImage: `url('/images/images_aboutUs/about_1.jpg')` }}
        ></div>

        {/* Nội dung chính */}
        <section className="my-10 flex flex-col lg:flex-row space-x-0 lg:space-x-20">
          <div className="my-5 lg:ml-20 mx-10 max-w-4xl text-left">
            <h1 className="text-5xl font-bold text-black">CÂU CHUYỆN</h1>
            <p className="my-5 text-black">
              Cakewai được thành lập vào năm 2024, bắt nguồn từ tình yêu dành
              cho đất Việt cùng với bánh ngọt và cộng đồng nơi đây. Ngay từ
              những ngày đầu tiên, mục tiêu của chúng mình là kết nối con
              người bằng những chiếc bánh ngọt tinh tế.
            </p>
            <p className="text-black">
              Bên cạnh việc mang đến những chiếc bánh ngọt ngào với hương vị
              truyền thống, Cakewai luôn đặt chất lượng và tình cảm vào từng
              sản phẩm. Chúng mình tin rằng mỗi chiếc bánh không chỉ là một
              món ăn mà còn là một thông điệp yêu thương, giúp kết nối cộng đồng.
            </p>
          </div>

          {/* Liên kết đến các trang khác */}
          <div className="flex flex-col space-y-5">
            <div className="group relative h-64 w-80 overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('/images/images_aboutUs/about_2.jpg')`,
                }}
              />
              <div className="relative flex h-full items-start justify-center">
                <Link
                  href="/about/service"
                  className="mt-3 text-5xl font-bold text-white hover:text-yellow-500"
                >
                  Dịch vụ
                </Link>
              </div>
            </div>

            <div className="group relative h-64 w-80 overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('/images/images_aboutUs/about_3.jpg')`,
                }}
              />
              <div className="relative flex h-full items-start justify-center">
                <Link
                  href="/about/promise"
                  className="mt-3 text-5xl font-bold text-white hover:text-yellow-500"
                >
                  Lời cam kết
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StoryPage;
