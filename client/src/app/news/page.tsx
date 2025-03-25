import dynamic from "next/dynamic";
import Head from "next/head";

const Newsfeed = dynamic(() => import ("~/components/Newsfeed_tsx"));

export default function ListNewsFeed(){
  return(
    <>
      <Head>
        <title>Tin tức - CakewaiTown</title>
        <meta name="description" content="Cập nhật tin tức mới nhất về CakewaiTown, chương trình khuyến mãi, sự kiện đặc biệt và các mẫu bánh mới nhất." />
        <meta name="keywords" content="bánh kem, tin tức CakewaiTown, sự kiện bánh ngọt, khuyến mãi bánh sinh nhật, giảm giá, thông báo, đặt bánh" />
        <meta name="robots" content="all" />
        <meta http-equiv="content-language" content="vi" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta property="og:title" content="Tin tức - CakewaiTown" />
        <meta property="og:description" content="Khám phá những tin tức mới nhất về các chương trình khuyến mãi, sự kiện và bộ sưu tập bánh mới nhất tại CakewaiTown." />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:url" content="https://cakewaitown.com/news" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content="Tin tức - CakewaiTown" />
        <meta name="twitter:description" content="Cập nhật tin tức mới nhất về CakewaiTown, chương trình khuyến mãi, sự kiện đặc biệt và các mẫu bánh mới nhất." />
        {/* <meta name="twitter:image" content="/images/newsfeed-cover.jpg" /> */}
        <link rel="canonical" href="https://cakewaitown.com/news" />
      </Head>
      <div>
        <Newsfeed/>
      </div>
    </>

  )
}