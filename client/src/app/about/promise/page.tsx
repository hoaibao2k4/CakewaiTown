import Link from "next/link";
import { Metadata } from "next"
<<<<<<< HEAD

=======
>>>>>>> dev
export const metadata: Metadata = {
  title: 'Lời cam kết - CakeWai',
  description: 'Nụ cười của khách hàng là động lực của CakeWai',
}
const PromisePage = () => {

    return(
        <div className="mx-full font-inter mt-28 w-full items-center overflow-hidden text-black text-primary">
        <div className="mx-28">
<<<<<<< HEAD
          <a href="/">Trang chủ </a>
          <span>&gt;&gt;</span>
          <a href="/about"> Về chúng tôi </a>
=======
          <Link href="/">Trang chủ </Link>
          <span>&gt;&gt;</span>
          <Link href="/about"> Về chúng tôi </Link>
>>>>>>> dev
          <span>&gt;&gt;</span>
          <span>Lời cam kết </span>
        </div>
        <div
          className="mt-5 flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
          style={{ backgroundImage: `url('/images/images_aboutUs/about_3.jpg')` }}
        ></div>
        <div className="my-10 flex lg:flex-row flex-col space-x-20">
          <div className="my-5 lg:ml-20 mx-10 max-w-4xl text-left">
            <h1 className="text-5xl font-bold text-black">LỜI CAM KẾT</h1>
            <div className="text-bg my-5 text-black">
            Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất. Chúng
            tôi hiểu rằng mỗi chiếc bánh không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.
            </div>
            <div className="text-bg text-black">
            Tại Cakewai, chúng tôi không ngừng tìm kiếm nguyên liệu tươi mới và an toàn nhất, đảm bảo mỗi sản phẩm đều
            đạt tiêu chuẩn cao nhất về chất lượng và hương vị. Đội ngũ của chúng tôi luôn đặt cả tâm huyết vào từng công
            đoạn, từ lựa chọn nguyên liệu đến trang trí, với mong muốn mang đến cho bạn và những người thân yêu những
            trải nghiệm ngọt ngào nhất.
            </div>
          </div>
  
          <div className="flex flex-col space-y-5">
                    <div className="group relative h-64 w-80 overflow-hidden rounded-lg">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" 
                            style={{ backgroundImage: `url('/images/images_aboutUs/about_2.jpg')` }}
                        />
                        <div className="relative flex h-full items-start justify-center">
                            <Link href="/about/service" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">
                                Dịch vụ 
                            </Link>
                        </div>
                    </div>
  
                    <div className="group relative h-64 w-80 overflow-hidden rounded-lg">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" 
                            style={{ backgroundImage: `url('/images/images_aboutUs/about_1.jpg')` }}
                        />
                        <div className="relative flex h-full items-start justify-center whitespace-nowrap">
                            <Link href="/about/story" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500 ">
                                Câu chuyện 
                            </Link>
                        </div>
                    </div>
          </div>
        </div>
      </div>        
    );
}

export default PromisePage;