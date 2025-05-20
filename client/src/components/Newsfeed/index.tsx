'use client'

import Link from "next/link"; 
import Image from "next/image";
import Head from "next/head";
import * as React from 'react';
import { Pagination, Stack } from "@mui/material";
import slugify from "slugify";


export const toSlug = (title: string) =>
  slugify(title, {
    lower: true,
    locale: "vi", 
    strict: true, 
    trim: true,
  });

const newsfeedData_onpage = [
            {
  id: "news25",
  image: "/images/images_new/news25.png",
  date: "2025-05-22",
  title: "Top các bánh cháu yêu mừng thọ Ông Bà",
  description: "Bánh cookies mừng thọ là món quà đầy ý nghĩa, mang theo tình cảm chân thành và lời chúc sức khỏe, trường thọ gửi đến ông bà trong ngày đặc biệt.",
  author: "CakewaiTown",
}, 
            {
    id: "news24",
    image: "/images/images_new/news24.png",
  date: "2025-05-21",
  title: "Top 3 cách hiệu quả bảo quản bánh kem khỏi “ruồi bu kiến đậu”",
  description: "Bạn vừa mua một chiếc bánh kem xinh xắn nhưng lại lo lắng vì thời tiết nóng và côn trùng? Cùng CakewaiTown khám phá 3 mẹo cực đơn giản để giữ bánh luôn thơm ngon, sạch sẽ!",
  author: "CakewaiTown",
}, 
          {
    id: "news23",
    image: "/images/images_new/news23.png",
  date: "2025-05-20",
  title: "Hướng dẫn làm bánh giỏ quýt tại nhà",
  description: "Bánh giỏ quýt với vị ngọt thanh của quýt và lớp vỏ mềm mịn sẽ là món bánh tuyệt vời để bạn tự tay thực hiện tại nhà. Cùng CakewaiTown vào bếp nhé!",
  author: "CakewaiTown",
}, 
        {
    id: "news22",
    image: "/images/images_new/news22.png",
  date: "2025-05-12",
  title: "Cửa Hàng Bán Bánh Mì Pháp Chuẩn Vị Gần Đây",
  description: "Bạn đang tìm cửa hàng bán bánh mì Pháp chuẩn vị gần đây? Đến ngay CakewaiTown để thưởng thức những chiếc bánh mì baguette giòn tan, đậm chất Pháp, được làm thủ công với công thức truyền thống!",
  author: "Gia Mẫn",
}, 
      {
    id: "news21",
    image: "/images/images_new/news21.png",
  date: "2025-05-11",
  title: "Mua Bánh Sinh Nhật In Hình Theo Yêu Cầu",
  description: "Giờ đây bạn có thể mua bánh sinh nhật in hình theo yêu cầu tại CakewaiTown! Với công nghệ AI hiện đại, chúng tôi giúp bạn tạo ra những chiếc bánh sinh nhật độc đáo, in hình cá nhân, thú cưng hoặc khoảnh khắc yêu thích, mang dấu ấn riêng của bạn.",
    author: "CakeWaiTown",
}, 
    {
    id: "news20",
    image: "/images/images_new/news20.png",
    date: "2025-05-10",
    title: "Bánh ngọt Làng Đại Học",
    description: "Tin vui cho sinh viên KTX khu A và khu B: CakewaiTown đã có mặt tại Làng Đại Học, mang đến những chiếc bánh ngọt thơm ngon cùng dịch vụ giao hàng nhanh, giúp bạn dễ dàng thưởng thức chỉ trong 30 phút.",
    author: "CakeWaiTown",
}, 
  {
    id: "news19",
    image: "/images/images_new/news19.png",
    date: "2025-04-27",
    title: "CakewaiTown chính thức hợp tác cùng VnuEats!",
    description: "Sự hợp tác này là bước tiến mới giúp CakewaiTown đến gần hơn với các tín đồ bánh ngọt trong khu vực Làng Đại học, đồng thời kết nối chúng mình với cộng đồng ẩm thực trẻ năng động và sành ăn.",
    author: "CakeWaiTown",
}, 
{
  id: "news18",
  image: "/images/images_new/news18.png",
  date: "2025-04-24",
  title: "Bánh Kisses Trà Bá Tước & Việt Quất – Khi Thanh Mát Gặp Ngọt Ngào",
  description: "Bánh Kisses là sự hòa quyện tinh tế giữa hương trà Bá Tước dịu nhẹ và vị chua ngọt của kem việt quất. Một chiếc bánh quyến rũ từ hình thức đến hương vị, dành cho người yêu phong cách thanh lịch.",
  author: "CakeWaiTown",
},   
{
  id: "news17",
  image: "/images/images_new/news17.png",
  date: "2025-04-23",
  title: "Su Kem Hạt Phỉ – Ngọt Ngọt Và Bùi Bùi Đến Từ Sự Tinh Tế",
  description: "Su kem hạt phỉ là món bánh quyến rũ với lớp vỏ su giòn và phần nhân kem hạt phỉ thơm bùi, béo ngậy. Một lựa chọn hoàn hảo cho những ai yêu thích vị bánh truyền thống nhưng đầy tinh tế.",
  author: "CakeWaiTown",
},  
{
  id: "news16",
  image: "/images/images_new/news16.png",
  date: "2025-04-22",
  title: "Bánh Giỏ Quýt – Hương Vị Truyền Thống Đầy Tươi Mát",
  description: "Mang trong mình hương vị đặc trưng từ quả quýt tươi, bánh giỏ quýt là sự kết hợp tinh tế giữa lớp vỏ mềm mịn và nhân quýt ngọt thanh, tạo nên món bánh đậm chất truyền thống nhưng vẫn đầy cuốn hút.",
  author: "CakeWaiTown",
},  
  {
      id: "news15",
      image: "/images/images_new/news15.png",
      date: "2025-04-21",
      title: "Núng Na Núng Nính Cùng Entremet – Tinh Hoa Bánh Mousse Pháp Tại CakewaiTown",
      description: "Nếu bạn là tín đồ của những chiếc bánh vừa đẹp mắt vừa tinh tế, chắc chắn Entremet sẽ khiến bạn mê mẩn! Xuất phát từ nền ẩm thực Pháp, Entremet là dòng bánh mousse nhiề,...",
      author: "CakeWaiTown",
  },    
  {
        id: "news7",
        image: "/images/images_new/news7.png",
        date: "2025-03-06",
        title: "CakewaiTown - Tưng bừng khai trương chi nhánh Võ Văn Ngân.",
        description: "CaKewaiTown xin chân thành cảm ơn sự quan tâm và ủng hộ từ quý khách hàng trong thời gian qua, đó là động lực to lớn thúc đẩy đội ngũ CakewaiTown...",
        author: "CakeWaiTown",
    },
    {
      id: "news8",
      image: "/images/images_new/news10.png",
      date: "2025-02-01",
      title: "Valentine Ngọt Ngào - Giảm Giá 50% Mừng Lễ Tình Nhân!",
      description: "Ngày 14/02 - ngày của tình yêu, hãy dành tặng cho người thương những chiếc bánh thơm ngon như một lời yêu thương n...",
      author: "Gia Mẫn",
    },
    {
        id: "news1",
        image: "/images/images_new/news8.png",
        date: "2025-01-05",
        title: "CakewaiTown Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025.",
        description: "CakewaiTown: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025. Kính Chúc Quý Khách Hàng Năm Mới An Khang...",
        author: "CakeWaiTown",
    },
    {
        id: "news2",
        image: "/images/images_new/news9.png",
        date: "2024-11-02",
        title: "Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.",
        description: "Ngày 20/11 được xem là ngày lễ lớn trọng đại nhằm tôn vinh vẻ đẹp và sự cống hiến...",
        author: "CakewaiTown",
    },
    {
      id: "news3",
      image: "/images/images_new/news14.png",
      date: "2024-10-20",
      title: "Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.",
      description: "Happy Women day - 20/10. Dành tặng cho người phụ nữ tôi yêu----- Vẻ đẹp hút hồn của những quý cô được so sánh như bông hoa hồng nở rộ...",
      author: "Gia Mẫn",
  },
    {
        id: "news4",
        image: "/images/images_new/news11.png",
        date: "2024-07-29",
        title: "Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.",
        description: "Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy của...",
        author: "CakewaiTown",
    },
    {
        id: "news5",
        image: "/images/images_new/news12.png",
        date: "2024-04-12",
        title: "Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà CakewaiTown - Hương vị trời tây.",
        description: "Nhà CakewaiTown đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và mang tính biểu tượng đến...",
        author: "Gia Mẫn",
    },
    {
        id: "news6",
        image: "/images/images_new/news13.png",
        date: "2024-01-03",
        title: "CakewaiTown - Đặt bánh teabreak cho sự kiện, hội thảo, hội nghị... Tại TP.Hồ Chí Minh.",
        description: "CakewaiTown cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư...",
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
        <meta name="author" content="CakewaiTown" />
        <meta name="publisher" content="CakewaiTown" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

    </Head>
<div className="flex flex-col px-7 md:px-10 lg:px-28 my-24 items-center justify-center text-black text-primary">
      <div className="text-left w-full">
        <Link href="/">Trang chủ</Link> <span>&gt;&gt;</span> <Link href="/blogs">Tin tức</Link>
      </div>
      <h1 className="font-inter mb-10 text-center  text-4xl font-extrabold leading-none text-primary">TIN TỨC</h1>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center items-stretch ">
        {/* <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
          {displayedNews.map((news) => (
            <div key={news.id} className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2 transition-transform duration-300 hover:scale-105">
              <Link href={`/blogs/${toSlug(news.title)}`}>
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
                  <Link href={`/blogs/${toSlug(news.title)}`}>
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
