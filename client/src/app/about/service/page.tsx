import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ - CakeWai",
  description:
    "Dịch vụ tận tâm, chỉnh chu và sứ mệnh phục vụ khách hàng của CakeWai, mang lại trải nghiệm ngọt ngào và đáng nhớ.",
  keywords:
    "dịch vụ bánh ngọt, CakeWai, chăm sóc khách hàng, dịch vụ tận tâm, bánh kem chất lượng",
  openGraph: {
    title: "Dịch vụ - CakeWai",
    description:
      "Dịch vụ tận tâm, chỉnh chu và sứ mệnh phục vụ khách hàng của CakeWai, mang lại trải nghiệm ngọt ngào và đáng nhớ.",
    type: "article",
    url: "https://cakewaitown.com/about/service",
    images: [
      {
        url: "/images/images_aboutUs/about_2.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ tận tâm của CakeWai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cakewai",
    title: "Dịch vụ - CakeWai",
    description:
      "Dịch vụ tận tâm, chỉnh chu và sứ mệnh phục vụ khách hàng của CakeWai, mang lại trải nghiệm ngọt ngào và đáng nhớ.",
    images: ["/images/images_aboutUs/about_2.jpg"],
  },
};

const ServicePage = () => {
  const ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dịch vụ bánh ngọt & chăm sóc khách hàng",
    "provider": {
      "@type": "Organization",
      "name": "CakeWai Town",
      "url": "https://cakewaitown.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Vietnam"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://cakewaitown.com/about/service"
    }
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
        <link rel="canonical" href="https://cakewaitown.com/about/service" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }}
        />
      </Head>

      <div className="mx-full font-inter w-full items-center overflow-hidden text-black">
        {/* Hình ảnh tiêu đề */}
        <div
          className="flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
          style={{ backgroundImage: `url('/images/images_aboutUs/about_2.jpg')` }}
        ></div>

        {/* Nội dung chính */}
        <section className="my-10 flex flex-col lg:flex-row space-x-0 lg:space-x-20">
          <div className="my-5 lg:ml-20 mx-10 max-w-4xl text-left">
            <h1 className="text-5xl font-bold text-black">DỊCH VỤ</h1>
            <p className="my-5 text-black">
              Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình.
              Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.
            </p>
            <p className="text-black">
              Tại Cakewai, mỗi dịch vụ và sản phẩm đều được tạo nên với sự chân thành và tâm huyết.
              Chúng mình không ngừng lắng nghe và đổi mới để mang lại trải nghiệm tốt nhất cho khách hàng.
              Mỗi phản hồi của bạn là động lực để chúng mình hoàn thiện hơn từng ngày, từ chất lượng bánh đến cách phục vụ.
            </p>
            <p className="text-black">
              Đến với Cakewai, bạn sẽ cảm nhận được không gian gần gũi, nơi mà mọi người có thể tận hưởng những khoảnh khắc ý nghĩa bên nhau.
              Cakewai không chỉ là nơi để thưởng thức bánh ngọt, mà còn là nơi lan tỏa sự sẻ chia và niềm vui.
            </p>

            <h2 className="text-3xl font-semibold text-black mt-6">
              Liên hệ với chúng tôi:
            </h2>
            <p className="text-black">Email: <span className="text-red-300">cakewai@gmail.com</span></p>
            <p className="text-black">Phone: <span className="text-red-300">0912476521</span></p>
          </div>

          {/* Liên kết đến các trang khác */}
          <div className="flex flex-col space-y-5">
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
                  className="mt-3 text-5xl font-bold text-white hover:text-yellow-500"
                >
                  Câu chuyện
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

export default ServicePage;
