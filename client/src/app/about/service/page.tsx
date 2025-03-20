import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dịch vụ - CakeWai',
  description: 'Dịch vụ tận tâm phụng sự và chỉnh chu của nhà CakeWai',
}
const ServicePage = () => {

    return(
        <div className="mx-full font-inter mt-28 w-full items-center overflow-hidden text-black text-primary">
        <div className="mx-28">
          <Link href="/">Trang chủ </Link>
          <span>&gt;&gt;</span>
          <Link href="/about"> Về chúng tôi </Link>
          <span>&gt;&gt;</span>
          <span>Dịch vụ</span>
        </div>
        <div
          className="mt-5 flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
          style={{ backgroundImage: `url('/images/images_aboutUs/about_2.jpg')` }}
        ></div>
        <div className="my-10 flex lg:flex-row flex-col space-x-20">
          <div className="my-5 lg:ml-20 mx-10 max-w-4xl text-left">
            <h1 className="text-5xl font-bold text-black">DỊCH VỤ</h1>
            <div className="text-bg my-5 text-black">
            Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong
            lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.
            </div>
            <div className="text-bg text-black">
            Tại Cakewai, mỗi dịch vụ và sản phẩm đều được tạo nên với sự chân thành và tâm huyết. Chúng mình không ngừng
            lắng nghe và đổi mới để mang lại trải nghiệm tốt nhất cho khách hàng. Mỗi phản hồi của bạn là động lực để
            chúng mình hoàn thiện hơn từng ngày, từ chất lượng bánh đến cách phục vụ. Đến với Cakewai, bạn sẽ cảm nhận
            được không gian gần gũi, nơi mà mọi người có thể tận hưởng những khoảnh khắc ý nghĩa bên nhau. Cakewai không
            chỉ là nơi để thưởng thức bánh ngọt, mà còn là nơi lan tỏa sự sẻ chia và niềm vui.
            </div>
            <div className="text-bg mb-2 font-bold text-black">Đừng ngần ngại chia sẽ ý kiến của bạn tại:</div>
          <div className="text-bg text-black">
            Email: <span className="text-red-300">cakewai@gmail.com</span>
          </div>
          <div className="text-bg text-black">
            Phone: <span className="text-red-300">0912476521</span>
          </div>
          </div>
  
          <div className="flex flex-col space-y-5">
                    <div className="group relative h-64 w-80 overflow-hidden rounded-lg">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" 
                            style={{ backgroundImage: `url('/images/images_aboutUs/about_1.jpg')` }}
                        />
                        <div className="relative flex h-full items-start justify-center whitespace-nowrap">
                            <Link href="/about/story" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">
                            Câu chuyện 
                            </Link>
                        </div>
                    </div>
  
                    <div className="group relative h-64 w-80 overflow-hidden rounded-lg">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" 
                            style={{ backgroundImage: `url('/images/images_aboutUs/about_3.jpg')` }}
                        />
                        <div className="relative flex h-full items-start justify-center">
                            <Link href="/about/promise" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">
                            Lời cam kết 
                            </Link>
                        </div>
                    </div>
          </div>
        </div>
      </div>        
    );
}

export default ServicePage;