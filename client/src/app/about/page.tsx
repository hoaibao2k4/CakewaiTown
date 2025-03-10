import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About CakeWai',
  description: 'Những câu chuyện thú vị xoay quanh CakeWai và sự gắn kết; Câu chuyện - Dịch vụ - Lời cam kết',
}

const AboutUs = () => {
    return (
        <div className="mx-full font-inter mt-28 w-full items-center overflow-hidden text-primary">
        <div className="mx-4 sm:mx-10 lg:mx-28">
          <Link href="/">Trang chủ </Link>
          <span>&gt;&gt;</span>
          <Link href="/about"> Về chúng tôi </Link>
        </div>

        {/* Câu chuyện */}
        <div className="group img-scale mt-5 h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center relative">
          <Image
            src="/images/images_aboutUs/about_1.jpg"
            alt="Câu chuyện"
            width={500} 
            height={300} 
            className="hidden" 
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('/images/images_aboutUs/about_1.jpg')` }} 
          />
          <div
            className="relative flex h-full items-center justify-start bg-gradient-to-r from-black to-transparent"
          >
            <div className="ml-8 sm:lm-12 lg:ml-20 max-w-lg text-left transition-transform duration-500 ease-out group-hover:scale-110">
              <Link href="/about/story" className="text-4xl sm:text-5xl font-bold text-white hover:text-yellow-500">
                Câu chuyện
              </Link>
              <div className="my-5 text-xs sm:text-sm text-white">
              Cakewai được thành lập vào năm 2024, bắt nguồn từ tình yêu dành cho đất Việt cùng với bánh ngọt và cộng
              đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát
              triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.
              </div>
            </div>
          </div>
        </div>

        {/* Dịch vụ */}
        <div className="group img-scale h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center relative">
          <Image
            src="/images/images_aboutUs/about_2.jpg"
            alt="Dịch vụ"
            width={500} 
            height={300} 
            className="hidden" 
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('/images/images_aboutUs/about_2.jpg')` }} 
          />
          <div
            className="relative flex h-full items-center justify-end bg-gradient-to-l from-transparent to-black"
          >
            <div className="mr-8 sm:mr-12 lg:mr-20 max-w-lg text-right transition-transform duration-500 ease-out group-hover:scale-110">
              <Link href="/about/service" className="text-4xl sm:text-5xl font-bold text-white hover:text-yellow-500">
                Dịch vụ
              </Link>
              <div className="my-5 text-xs sm:text-sm text-white">
              Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong
              lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.              </div>
            </div>
          </div>
        </div>

        {/* Lời cam kết */}
        <div className="group img-scale h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center relative">
          <Image
            src="/images/images_aboutUs/about_3.jpg"
            alt="Lời cam kết"
            width={500} 
            height={300} 
            className="hidden" 
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('/images/images_aboutUs/about_3.jpg')` }} 
          />
          <div
            className="relative flex h-full items-center justify-start bg-gradient-to-r from-black to-transparent"
          >
            <div className="ml-8 sm:lm-12 lg:ml-20 max-w-lg text-left transition-transform duration-500 ease-out group-hover:scale-110">
              <Link href="/about/promise" className="text-4xl sm:text-5xl font-bold text-white hover:text-yellow-500">
                Lời cam kết
              </Link>
              <div className="my-5 text-xs sm:text-sm text-white">
              Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất. Chúng
              tôi hiểu rằng mỗi chiếc bánh không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.              </div>
            </div>
          </div>
        </div>

      </div>
    );
}

export default AboutUs;
