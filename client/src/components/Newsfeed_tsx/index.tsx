'use client'

import Link from "next/link"; 
import Image from "next/image";
import Head from "next/head";
import * as React from 'react';
import { Pagination, Stack } from "@mui/material";




const newsfeedData_onpage = [
      {
        id: "news7",
        image: "/images/images_new/newsfeed7.png",
        date: "2025-03-06",
        title: "Cakewai - Tưng bừng khai trương chi nhán...",
        description: "CaKewai xin chân thành cảm ơn sự quan tâm và ủng hộ từ quý khách hàng trong thời gian qua, đó là động lực to lớn thúc đẩy đội ngũ Cakewai...",
        author: "CakeWai",
    },
    {
      id: "news8",
      image: "/images/images_new/newsfeed10.png",
      date: "2025-02-01",
      title: "Valentine Ngọt Ngào - Giảm Giá 50% Mừng Lễ Tình Nh...",
      description: "Ngày 14/02 - ngày của tình yêu, hãy dành tặng cho người thương những chiếc bánh thơm ngon như một lời yêu thương n...",
      author: "Gia Mẫn",
    },
    {
        id: "news1",
        image: "/images/images_new/newsfeed8.png",
        date: "2025-01-05",
        title: "Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán...",
        description: "Cakewai: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025. Kính Chúc Quý Khách Hàng Năm Mới An Khang...",
        author: "CakeWai",
    },
    {
        id: "news2",
        image: "/images/images_new/newsfeed9.png",
        date: "2024-11-02",
        title: "Mẫu bánh kem mừng 20/11 ngày Nhà Giáo...",
        description: "Ngày 20/11 được xem là ngày lễ lớn trọng đại nhằm tôn vinh vẻ đẹp và sự cống hiến...",
        author: "Cakewai",
    },
    {
      id: "news3",
      image: "/images/images_new/newsfeed14.png",
      date: "2024-10-20",
      title: "Women day - 20/10 Dành tặng cho những đóa hoa hồn...",
      description: "Happy Women day - 20/10. Dành tặng cho người phụ nữ tôi yêu----- Vẻ đẹp hút hồn của những quý cô được so sánh như bông hoa hồng nở rộ...",
      author: "Gia Mẫn",
  },
    {
        id: "news4",
        image: "/images/images_new/newsfeed11.png",
        date: "2024-07-29",
        title: "Tưng bừng đắm chìm vào không gian huyền ảo cùng...",
        description: "Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy của...",
        author: "Cakewai",
    },
    {
        id: "news5",
        image: "/images/images_new/newsfeed12.png",
        date: "2024-04-12",
        title: "Bầu trời châu âu được ra mắt hoành tráng với...",
        description: "Nhà Cakewai đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và mang tính biểu tượng đến...",
        author: "Gia Mẫn",
    },
    {
        id: "news6",
        image: "/images/images_new/newsfeed13.png",
        date: "2024-01-03",
        title: "Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo,...",
        description: "Cakewai cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư...",
        author: "Gia Mẫn",
    },


  
];

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", { year: "numeric", month: "short", day: "numeric" });
}



export default function Newsfeed() {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 6; // Số tin tức trên mỗi trang

  // Tính tổng số trang cần hiển thị
  const totalPages = Math.ceil(newsfeedData_onpage.length / itemsPerPage);

  // Cắt dữ liệu theo trang hiện tại
  const displayedNews = newsfeedData_onpage.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
    <Head>
        <title>Tin tức - CakewaiTown</title>
        <meta name="description" content="Cập nhật tin tức mới nhất về CakewaiTown, chương trình khuyến mãi, sự kiện đặc biệt và các mẫu bánh mới nhất." />
        <meta name="robots" content="index, follow" />
    </Head>
<div className="flex flex-col px-7 md:px-10 lg:px-28 my-24 items-center justify-center text-black text-primary">
      <div className="text-left w-full">
        <Link href="/">Trang chủ</Link> <span>&gt;&gt;</span> <Link href="/news">Tin tức</Link>
      </div>
      <h1 className="font-inter mb-10 text-center  text-4xl font-extrabold leading-none text-primary">TIN TỨC</h1>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center items-stretch ">
        {/* <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
          {displayedNews.map((news) => (
            <div key={news.id} className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2 transition-transform duration-300 hover:scale-105">
              <Link href={`/news/${news.id}`}>
                <Image src={news.image} alt={news.title} width={354} height={200} className="w-full object-cover " />
              </Link>
              <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
                <div className="mx-3">
                  <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                    <Image src="/images/images_new/Circle Avatar.svg" alt="Avatar" width={20} height={20} className="mr-1 inline-flex" />
                    <h3>{news.author}</h3>
                    <hr className="mx-4 w-[24px] border border-gray-400" />
                    <Image src="/images/images_new/calendar.svg" alt="Calendar" width={20} height={20} className="mr-1 inline-flex" />
                    <h3>{formatDate(news.date)}</h3>
                  </div>
                  <Link href={`/news/${news.id}`}>
                    <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900 min-h-[56px]">
                      {news.title}
                    </h2>
                  </Link>
                  <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">{news.description}</h3>
                </div>
              </div>
            </div>
          ))}
        {/* </div> */}
      </div>
        {/* Pagination */}
        <Stack spacing={2} className="mt-6">
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
    </div>    
    </>
    
  );
};
