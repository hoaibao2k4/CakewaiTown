import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lời cam kết - CakeWai",
  description:
    "Nụ cười của khách hàng là động lực của CakeWai. Chúng tôi cam kết mang đến những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất.",
  keywords:
    "bánh ngọt, CakeWai, bánh kem, cam kết chất lượng, bánh ngon, bánh tươi",
  openGraph: {
    title: "Lời cam kết - CakeWai",
    description:
      "Nụ cười của khách hàng là động lực của CakeWai. Chúng tôi cam kết mang đến những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất.",
    type: "article",
    url: "https://cakewaitown.com/about/promise",
    images: [
      {
        url: "/images/images_aboutUs/about_3.jpg",
        width: 1200,
        height: 630,
        alt: "Lời cam kết từ CakeWai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cakewai",
    title: "Lời cam kết - CakeWai",
    description:
      "Nụ cười của khách hàng là động lực của CakeWai. Chúng tôi cam kết mang đến những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất.",
    images: ["/images/images_aboutUs/about_3.jpg"],
  },
};

const PromisePage = () => {
  const PromiseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Lời cam kết - CakeWai Town",
    "url": "https://cakewaitown.com/about/promise",
    "description": "Cam kết của CakeWai Town với khách hàng về chất lượng bánh ngọt và dịch vụ tận tâm."
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
        <link rel="canonical" href="https://cakewaitown.com/about/promise" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PromiseSchema) }}
        />
      </Head>

      <div className="mx-full font-inter w-full items-center overflow-hidden text-black">
        {/* Hình ảnh tiêu đề */}
        <div
          className="flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
          style={{ backgroundImage: `url('/images/images_aboutUs/about_3.jpg')` }}
        ></div>

        {/* Nội dung chính */}
        <section className="my-10 flex flex-col lg:flex-row space-x-0 lg:space-x-20">
          <div className="my-5 lg:ml-20 mx-10 max-w-4xl text-left">
            <h1 className="text-5xl font-bold text-black">LỜI CAM KẾT</h1>
            <p className="my-5 text-black">
              Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh
              tế, tươi ngon và chất lượng nhất. Chúng tôi hiểu rằng mỗi chiếc bánh
              không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.
            </p>
            <p className="text-black">
              Tại Cakewai, chúng tôi không ngừng tìm kiếm nguyên liệu tươi mới và
              an toàn nhất, đảm bảo mỗi sản phẩm đều đạt tiêu chuẩn cao nhất về
              chất lượng và hương vị. Đội ngũ của chúng tôi luôn đặt cả tâm huyết
              vào từng công đoạn, từ lựa chọn nguyên liệu đến trang trí, với mong
              muốn mang đến cho bạn và những người thân yêu những trải nghiệm ngọt
              ngào nhất.
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
                  backgroundImage: `url('/images/images_aboutUs/about_1.jpg')`,
                }}
              />
              <div className="relative flex h-full items-start justify-center whitespace-nowrap">
                <Link
                  href="/about/story"
                  className="mt-3 text-5xl font-bold text-white hover:text-yellow-500 "
                >
                  Câu chuyện
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PromisePage;
