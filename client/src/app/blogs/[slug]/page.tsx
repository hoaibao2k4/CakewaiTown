import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import type { Metadata } from "next";
import slugify from "slugify";

export const newsfeedData = [
  {
    id: "news1",
    date: "2025-01-05",
    title: "CakewaiTown Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025.",
    description: "CakewaiTown Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025",
    author: "CakeWaiTown",
    contentHtml: `
          <div class="text-center text-black ">
            <div class="my-5">CakewaiTown: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025.</div>
            <div>Kính Chúc Quý Khách Hàng Năm Mới An Khang Và Thịnh Vượng.</div>
            <div> Cảm Ơn Quý Khách Hàng Đã Luôn Ủng Hộ Cakewai và đồng hành trong suốt thời gian vừa qua.</div>
            <Image src="/images/images_new/news8.png" alt="Thông báo nghỉ tết"  class="mx-auto my-5 block w-full max-w-[600px]" />
          </div>  
    `,
  },
  {
    id: "news2",
    date: "2024-11-02",
    title: "Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.",
    description:
      "Mẫu bánh kem 20/11 mừng ngày Nhà giáo Việt Nam được chọn lọc đẹp nhất có tại CakewaiTown. Mời các bạn cùng tham khảo!",
    author: "CakewaiTown",
    contentHtml: `   
          <div class="text-black">
            <h2 class="my-5">"Không thầy đố mày làm nên"</h2>
            <h2 class="my-5">
              Ngày 20/11 được xem là ngày lễ lớn trọng đại của con người Việt Nam nhằm tôn vinh vẻ đẹp trong sáng và
              trân quý nhất đối với những người lái đò đã dìu dắt bao thế hệ tiến bước đến cánh cổng rực rỡ của tương
              lai.
            </h2>
            <h2>
              Ngày 20/11 là ngày Nhà Giáo Việt Nam, cũng được gọi là ngày Hiến chương Nhà Giáo Việt Nam. Đây là một dịp
              lễ quan trọng và ý nghĩa được tổ chức hàng năm để bao thế hệ học sinh, sinh viên có cơ hội để bày tỏ lòng
              biết ơn và tri ân đến với các quý thầy cô giáo - những người đã hết mình tận tụy vì một sự nghiệp trồng
              người của đất nước.
            </h2>
            <h2>
              Trong dịp lễ này, đại đa số các trường học, học sinh và sinh viên sẽ tổ chức những hoạt động ý nghĩa, kỉ
              niệm để thể hiện tấm lòng tôn kính của mình dành cho các bậc thầy cô. Các hoạt động có thể kể đến như viết
              thư tay, làm báo tường, thiết kế, trang trí bảng hiệu, tặng hoa, quà để thể hiện sự biết ơn đấy một cách
              sâu sắc nhất. Ngoài ra, các trường còn tổ chức các buổi tọa đàm, gặp mặt và kết nối thầy - trò để cùng gắn
              kết chia sẻ nhiều kỉ niệm đã trải qua trong đoạn thời gian vô giá ấy.
            </h2>
            <h1 class="font-inter my-5 text-lg sm:text-xl lg:text-2xl font-bold leading-none text-black">
              Mẫu bánh kem 20/11 mừng ngày Nhà giáo Việt Nam
            </h1>
            <h2 class="mb-3 mt-5">
              Sau đây là những mẫu bánh kem được chọn lọc đẹp nhất có tại CakewaiTown. Mời các bạn cùng tham khảo!
            </h2>
            <Image src="/images/images_new/20-11_1.png" alt="Bánh kem khoai môn" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/20-11_2.png" alt="Bánh Kem Trà Bá Tước, quả Lý Chua Đen" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/20-11_3.png" alt="Bánh kem nhân dâu" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <h2 class="italic">"More than cake"</h2>
            <h2>
              Chỉ một câu nói nhỏ cũng có thể miêu tả chiếc bánh kem mang chủ đề 20/11 năm nay đến từ nhà CakewaiTown.
            </h2>
          </div>
    `,
  },
  {
    id: "news3",
    date: "2024-10-20",
    title:
      "Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.",
    description:
      "CakewaiTown cho ra mắt bộ sưu tập bánh kem 20/10 đầy tinh tế với mong muốn giúp đỡ bạn bày tỏ những lời yêu thương qua những chiếc bánh ngọt dịu kì.",
    author: "Gia Mẫn",
    contentHtml: `
          <div class="text-black">
            <div class="my-5">Happy Women's Day - 20.10</div>
            <div class="my-5">Dành tặng những người phụ nữ tôi yêu !!!</div>
            <div>------------</div>
            <div class="my-2">
              Vẻ đẹp của người phụ nữ được so sánh với những đóa hoa hồng lung linh và ngọt ngào như những chiếc bánh
              ngọt.
            </div>
            <div class="my-2">
              CakewaiTown hiểu rõ được điều đó, đội ngũ thiết kế và sản xuất luôn sáng tạo không ngừng để mang đến những
              chiếc bánh kem độc đáo sánh tựa như vẻ đẹp ngọc ngà son sắc của các cô gái.
            </div>
            <Image src="/images/images_new/20-10_1.png" alt="Bánh Red Velvet Mousse Cheesecake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div>------------</div>
            <div class="my-5">Đắn đo suy nghĩ nên tặng gì cho bà, cho mẹ hay những cô thiên thần nhỏ.</div>
            <div class="my-5">Tạo bất ngờ như thế nào là hợp lí với chị em trong công ty.</div>
            <div class="my-5">Món quà nào vừa đẹp vừa tinh tế cho dịp lễ đặc biệt này.</div>
            <Image src="/images/images_new/20-10_2.png" alt="Bánh kem dâu và vani" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Nắm rõ các mưu cầu đó - CakewaiTown cho ra mắt bộ sưu tập bánh kem 20/10 đầy tinh tế với mong muốn giúp đỡ bạn
              bày tỏ những lời yêu thương qua những chiếc bánh ngọt dịu kì.
            </div>
            <div>------------</div>
            <div class="my-5 italic">Nhân ngày Phụ Nữ Việt Nam </div>
            <div>
              Nhà CakewaiTown xin gửi lời chúc yêu thương và sức khỏe đến với chị, em phụ nữ thành công trong công việc,
              hạnh phúc trong tình yêu và trọn vẹn trong cuộc sống.
            </div>
          </div>
`,
  },
  {
    id: "news4",
    date: "2024-07-29",
    title:
      "Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.",
    description:
      "Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy của phô mai hòa cùng lớp mouse mịn màng tan chảy bên trong lớp cheesecake mềm mại và đế bánh giòn rụm.",
    author: "CakewaiTown",
    contentHtml: `
          <div class="text-black">
            <Image src="/images/images_new/news11.png" alt="Ra mắt Passion Mousse Cheesecake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy của
              phô mai hòa cùng lớp mouse mịn màng tan chảy bên trong lớp cheesecake mềm mại và đế bánh giòn rụm.
            </div>
            <h2 class="font-inter my-5 text-left text-xl sm:text-2xl lg:text-3xl font-bold leading-none text-black">Cấu trúc bánh</h2>
            <ol class="ml-4 sm:ml-6 list-decimal">
              <li>
                Lớp cốt bánh
                <ul class="ml-3 sm:ml-5 list-disc space-y-2">
                  <li>
                    Cốt bánh quy nghiền: Loại cốt này thường làm từ bánh quy nghiền nhỏ (như bánh quy graham hoặc bánh
                    quy digestive), sau đó trộn với bơ tan chảy để tạo độ kết dính. Lớp này thường hơi giòn và có vị bơ
                    thơm, tạo sự tương phản thú vị với lớp mousse mịn phía trên.
                  </li>
                  <li>
                    Cốt bông lan: Một số phiên bản dùng lớp bông lan mềm làm đế, giúp bánh có kết cấu nhẹ và xốp hơn.
                    Cốt bông lan cũng dễ dàng thấm hương chanh dây, làm tăng thêm mùi vị cho bánh.
                  </li>
                  <li>
                    Cốt genoise hoặc sponge cake: Một số tiệm bánh cao cấp có thể sử dụng lớp cốt bánh genoise hoặc
                    sponge cake nhẹ và xốp, tạo độ thanh thoát cho phần nền mà vẫn không làm mất đi hương vị của lớp
                    mousse.
                  </li>
                </ul>
              </li>
              <li>
                Lớp Mousse Chanh Dây
                <ul class="ml-3 sm:ml-5 list-disc space-y-2">
                  <li>
                    Lớp mousse chanh dây là phần chính của bánh, được làm từ nước cốt chanh dây, kem tươi, gelatin và
                    phô mai (cream cheese). Đặc điểm của lớp mousse này là kết cấu mềm mịn, nhẹ và tan ngay trong miệng,
                    mang lại vị chua thanh đặc trưng của chanh dây kết hợp với chút ngọt.
                  </li>
                  <li>
                    Lớp mousse thường được phủ lên trên lớp cốt bánh đã chuẩn bị, sau đó được làm lạnh để mousse đạt độ
                    đặc vừa phải nhưng vẫn mềm mại.
                  </li>
                </ul>
              </li>
              <li>
                Lớp trang trí
                <ul class="ml-3 sm:ml-5 list-disc space-y-2">
                  <li>
                    Lớp trang trí thường là lớp thạch chanh dây mỏng, làm từ nước cốt chanh dây, đường, và gelatin. Lớp
                    thạch này vừa tạo độ bóng bẩy cho bề mặt bánh, vừa giữ nguyên vẹn hương vị chanh dây tự nhiên. Để
                    tăng thêm phần hấp dẫn, có thể thêm hạt chanh dây tươi lên bề mặt lớp thạch, tạo cảm giác tươi mát
                    và độc đáo.
                  </li>
                </ul>
              </li>
            </ol>
            <h2 class="font-inter my-5 text-left text-xl sm:text-2xl lg:text-3xl font-bold leading-none text-black">Hương Vị</h2>
            <ul class="ml-4 sm:ml-6 list-disc space-y-2">
              <li>
                <span class="font-bold">Vị ngọt tự nhiên:</span> Độ ngọt nhẹ, kết hợp từ chanh dây và phần mousse
                phô mai, vừa đủ để không át đi vị chua đặc trưng của chanh dây.
              </li>
              <li>
                <span class="font-bold">Vị béo nhẹ:</span> Phô mai và kem tươi mang đến vị béo mềm mại, nhưng không
                quá ngấy, nhờ sự cân bằng từ chanh dây.
              </li>
              <li>
                
                <span class="font-bold">Hương thơm dễ chịu:</span> Mùi thơm của chanh dây rất tự nhiên, quyện với
                hương kem và phô mai, làm bánh thơm mát và thanh nhã.
              </li>
            </ul>
            <h2 class="font-inter my-5 text-left text-xl sm:text-2xl lg:text-3xl font-bold leading-none text-black">Dịp thưởng thức</h2>
            <span>
              Passion Mousse Cheesecake rất thích hợp cho các dịp sinh nhật, tiệc trà hoặc gặp gỡ gia đình, bạn bè; các
              buổi tiệc hoặc họp mặt nhẹ nhàng, nơi mọi người có thể thưởng thức món tráng miệng thanh mát. Bánh cũng là
              lựa chọn lý tưởng cho mùa hè, vì vị chua mát của chanh dây giúp giải nhiệt và làm mới khẩu vị.
            </span>
            <h2 class="font-inter my-5 text-left text-xl sm:text-2xl lg:text-3xl font-bold leading-none text-black">Lợi ích sức khỏe</h2>
            <ul class="ml-4 sm:ml-6 list-disc space-y-2">
              <li>
                <span class="font-bold">Cung cấp vitamin:</span> Chanh dây giàu vitamin C, A và các chất chống oxy
                hóa, giúp tăng cường hệ miễn dịch, làm sáng da và bảo vệ cơ thể.
              </li>
              <li>
                <span class="font-bold">Lợi khuẩn cho hệ tiêu hóa:</span> Thành phần phô mai và kem tươi có thể cung
                cấp một lượng lợi khuẩn nhất định cho hệ tiêu hóa, hỗ trợ tiêu hóa tốt hơn khi ăn uống điều độ.
              </li>
              <li>
                <span class="font-bold">Giảm căng thẳng:</span> Hương thơm dễ chịu và vị chua nhẹ của chanh dây có
                thể giúp kích thích vị giác, mang lại cảm giác thư giãn, dễ chịu khi thưởng thức.
              </li>
            </ul>
            </div>
    `,
  },
  {
    id: "news5",
    date: "2024-04-12",
    title:
      "Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà CakewaiTown - Hương vị trời tây.",
    description:
      "Nhà CakewaiTown đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và mang tính biểu tượng đến từ Châu Âu và La Tinh mang tên Hương vị trời tây.",
    author: "Gia Mẫn",
    contentHtml: `
          <div class="text-black">
            <div class="my-5">
              Nhà CakewaiTown đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và
              mang tính biểu tượng đến từ Châu Âu và La Tinh mang tên "Hương vị trời tây".
            </div>
            <div class="my-2">
              
              Bộ sưu tập được ra mắt cực độc đáo và đa dạng nhưng không thiếu chất lượng về mặt dinh dưỡng lẫn tinh thần
              xuất phát từ các nền văn hóa khác nhau có thể kể đến như Anh, Mỹ, Pháp,...
            </div>
            <div class="my-2">
              Traditional cakes được xem như tính biểu tượng và được người dân bản địa tiêu thụ như các món ăn chính
              hằng ngày cũng như là linh hồn của "Hương vị trời tây" mà CakewaiTown mang đến. Đồng thời trong các dịp lễ lớn hoặc các buổi tiệc thì những chiếc bánh sẽ được bày biện để phục
              vụ thực khách thay lời yêu thương.
            </div>
            <div>CakewaiTown xin giới thiệu một số sản phẩm gửi đến quý khách hàng tham khảo!!!</div>
            <Image src="/images/images_new/eur_1.png" alt="Chocolate brownie slab cake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/eur_2.png" alt="Madeira cake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/eur_3.png" alt="Bánh Croissant Trứng Muối" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Với sự cập nhật mới này, CakewaiTown hứa hẹn sẽ mang đến một luồng gió mới về mặt trải nghiệm đến quý khách
              hàng.
            </div>
            <Image src="/images/images_new/eur_4.png" alt="Berry Cream Cheese Bun" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Bằng cả sự nhiệt huyết với nghề, nhà CakewaiTown rất mong nhận được sự ủng hộ và hưởng ứng vô cùng quý giá của
              CakewaiTown-ers.
            </div>
          </div>
    `,
  },
  {
    id: "news6",
    date: "2024-01-03",
    title:
      "CakewaiTown - Đặt bánh teabreak cho sự kiện, hội thảo, hội nghị... Tại TP.Hồ Chí Minh.",
    description:
      "CakewaiTown cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư vấn",
    author: "Gia Mẫn",
    contentHtml: `
                <div class="text-black">
                    <div class="font-bold my-5">CakewaiTown cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư vấn: 0912476521</div>
                    <div>Tiệc teabreak là loại tiệc nhẹ thường được phục vụ trong các buổi họp, hội thảo, hội nghị hoặc sự kiện ngắn. Tiệc này tạo ra không gian thoải mái để khách mời thư giãn, giao lưu trong thời gian nghỉ giải lao. Tiệc teabreak được tổ chức với rất nhiều những loại bánh ngọt, trà, nước trái cây và hoa quả tươi. </div>
                    <Image src="/images/images_new/news13.png" alt="Minicakes - special sales" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <div class="my-5">Nếu bạn cần tìm những loại bánh ngọt phù hợp cho tiệc teabreak tại công ty hay sự kiện khai trương cửa hàng,... Bạn là đơn vị tổ chức sự kiện. Bạn cần tham khảo những dòng bánh ngọt trong bữa tiệc sắp tới.</div>
                    <div class="my-5">CakewaiTown xin gửi đến quý khách hàng thực đơn tiệc teabreak vô cùng đa dạng và phong phú. Mong quý khách hàng có thể lựa chọn những loại bánh phù hợp nhất cho mình.</div>
                    <Image src="/images/images_new/mini_1.png" alt="Bánh Giỏ Quýt" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_2.png" alt="Su Kem Hạt Phỉ" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_3.png" alt="Bánh Tiramisu Lava" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_4.png" alt="Bánh Kisses Trà Bá Tước và Việt Quất" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_5.png" alt="Bánh Macaron Lý Chua Đen & Oải Hương" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_6.png" alt="Bánh Macaron Caramen" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <div class="my-5">Nhà CakewaiTown cung cấp đầy đủ các loại bánh như su kem, coockie, macaron, socola, tiramisu,...</div>
                </div>.
    `,
  },
  {
    id: "news7",
    image: "/images/images_new/news7.png",
    date: "2025-03-06",
    title: "CakewaiTown - Tưng bừng khai trương chi nhánh Võ Văn Ngân.",
    description:
      "CakewaiTown hân hạnh giới thiệu chi nhánh mới được đặt tại trung tâm Thủ Đức, cụ thể là con đường sầm uất Võ Văn Ngân.",
    author: "CakewaiTown",
    contentHtml: `
        <div class="text-black">
            <h2 class="text-2xl font-bold text-center text-red-600 mb-4">
                🎉 CakewaiTown - Tưng Bừng Khai Trương Chi Nhánh Võ Văn Ngân! 🎉
            </h2>
            <p class="text-lg text-center">📍 <span class="font-semibold">Địa điểm mới - Trải nghiệm mới!</span></p>
            <p class="mt-4">
                Chúng tôi vui mừng thông báo sự kiện <span class="font-semibold">khai trương chi nhánh mới tại Võ Văn Ngân</span>, 
                đánh dấu một bước phát triển quan trọng trong hành trình mang đến những chiếc bánh thơm ngon và chất lượng nhất đến gần hơn với khách hàng.
            </p>
            <Image src="/images/images_new/news7.png" alt="Khai trương chi nhánh Võ Văn Ngân" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
            <div class="bg-yellow-100 p-4 rounded-lg mt-6">
                <h3 class="text-xl font-semibold text-center text-yellow-700">💖 Sự Kiện Đặc Biệt - Ưu Đãi Hấp Dẫn 💖</h3>
                <ul class="mt-3 space-y-2">
                    <li>✅ <span class="font-semibold">Giảm giá 20%</span> cho tất cả các loại bánh trong 3 ngày đầu tiên.</li>
                    <li>✅ <span class="font-semibold">Tặng ngay 1 phần bánh miễn phí</span> cho 100 khách hàng đầu tiên.</li>
                    <li>✅ Cơ hội tham gia <span class="font-semibold">bốc thăm trúng thưởng</span> với nhiều phần quà hấp dẫn.</li>
                </ul>
            </div>

            <p class="mt-6 text-center font-semibold text-lg">
                🎈 Đừng bỏ lỡ cơ hội trải nghiệm không gian mới, hương vị mới và những ưu đãi tuyệt vời từ CakewaiTown!
            </p>

            <div class="mt-6 text-center">
                <p class="text-lg font-semibold">📅 Thời gian: <span class="text-blue-600">9 giờ - ngày 17/03/2025</span></p>
                <p class="text-lg font-semibold">📍 Địa điểm: <span class="text-blue-600">123 Đường Võ Văn Ngân, Phường Bình Thọ, TP. Thủ Đức, TP. Hồ Chí Minh</span></p>
            </div>

            <p class="mt-6 text-center text-red-500 font-bold text-xl">📌 Hãy đến và cùng chúng tôi tạo nên những khoảnh khắc ngọt ngào nhé! ❤️🎂</p>
        </div>
    `,
  },
  {
    id: "news8",
    image: "/images/images_new/news14.png",
    date: "2025-02-01",
    title: "Valentine Ngọt Ngào - Giảm Giá 50% Mừng Lễ Tình Nhân!",
    description:
      "Ngày 14/02 - ngày của tình yêu, hãy dành tặng cho người thương những chiếc bánh thơm ngon như một lời yêu thương ngọt ngào. CakewaiTown hân hạnh mang đến chương trình ưu đãi hấp dẫn giảm shock 50%",
    author: "Gia Mẫn",
    contentHtml: `
    <div class = 'text-black'>
            <h2 class="text-2xl font-bold text-center text-red-500 mb-4">
                💝 Món Quà Ngọt Ngào Cho Ngày Valentine - Giảm Giá 50%! 💝
            </h2>
            <Image src="/images/images_new/news14.png" alt="Valentine - big sales" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
            <p class="text-lg text-center">💌 Valentine này, gửi trọn yêu thương cùng những chiếc bánh ngọt ngào từ CakewaiTown!</p>

            <p class="mt-4">
                Ngày 14/02 - ngày của tình yêu, hãy dành tặng cho người thương những chiếc bánh thơm ngon như một lời yêu thương ngọt ngào.
                CakewaiTown hân hạnh mang đến chương trình ưu đãi hấp dẫn:
            </p>

            <div class="bg-pink-100 p-4 rounded-lg mt-6">
                <h3 class="text-xl font-semibold text-center text-pink-600">🎁 ƯU ĐÃI ĐẶC BIỆT - GIẢM GIÁ 50% 🎁</h3>
                <ul class="mt-3 space-y-2">
                    <li>💘 <span class="font-semibold">Giảm ngay 50%</span> cho tất cả sản phẩm bánh Valentine.</li>
                    <li>💘 Tặng kèm <span class="font-semibold">thiệp chúc mừng</span> miễn phí cho mỗi đơn hàng.</li>
                    <li>💘 Cơ hội nhận <span class="font-semibold">bánh mini miễn phí</span> cho hóa đơn từ 300.000đ.</li>
                </ul>
            </div>

            <p class="mt-6 text-center font-semibold text-lg">
                🎀 Đừng bỏ lỡ cơ hội thể hiện tình cảm với nửa kia của bạn bằng những chiếc bánh tình yêu từ CakewaiTown!
            </p>

            <div class="mt-6 text-center">
                <p class="text-lg font-semibold">📅 Thời gian: <span class="text-red-600">Từ 10/02 - 14/02</span></p>
                <p class="text-lg font-semibold">📍 Địa điểm: <span class="text-red-600">Tất cả cửa hàng CakewaiTown & đặt hàng online</span></p>
            </div>

            <p class="mt-6 text-center text-red-500 font-bold text-xl">❤️ Hãy để CakewaiTown cùng bạn tạo nên những khoảnh khắc ngọt ngào trong mùa Valentine này! ❤️ </p>
    </div>
`,
  },
  {
    id: "news15",
    image: "/images/images_new/news15.png",
    date: "2025-04-21",
    title:
      "Núng Na Núng Nính Cùng Entremet – Tinh Hoa Bánh Mousse Pháp Tại CakewaiTown",
    description:
      "Entremet là một dòng bánh mousse nhiều lớp có nguồn gốc từ nền ẩm thực Pháp. Loại bánh này nổi bật với cấu trúc mềm mịn, từng lớp mousse được kết hợp hài hòa cùng lớp gương bóng bên ngoài. Tất cả hòa quyện thành một trải nghiệm tan chảy ngay khi chạm lưỡi – đầy quyến rũ và khó quên.",
    author: "CakewaiTown",
    contentHtml: `
  <div class='text-black'>
    <h2 class="text-2xl font-bold text-center text-amber-600 mb-4">
      🎊 Núng Na Núng Nính Cùng Entremet
    </h2>
    <Image src="/images/images_new/news15.png" alt="Entremet CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    
    <p class="text-lg">
      Nếu bạn là tín đồ của những chiếc bánh vừa đẹp mắt vừa tinh tế, chắc chắn <strong>Entremet</strong> sẽ khiến bạn mê mẩn!
      Xuất phát từ nền ẩm thực Pháp, Entremet là dòng bánh mousse nhiều lớp, kết hợp khéo léo giữa kết cấu mềm mịn, lớp gương bóng bẩy và hương vị tinh tế,
      mang đến trải nghiệm tan chảy ngay khi chạm lưỡi.
    </p>

    <p class="mt-4 text-lg">
      💖 Tại <strong>CakewaiTown</strong>, dòng Entremet luôn được cập nhật đa dạng với nhiều hương vị độc đáo, mang đến trải nghiệm mới lạ và đầy hấp dẫn.
      Có thể kể đến các dòng Entremet nổi bật như: Trà xanh dâu latte, hạt phỉ, chuối 9 lớp, trà bá tước,...
    </p>
    <Image src="/images/images_new/entre_1.png" alt="Entremet CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    <Image src="/images/images_new/entre_2.png" alt="Entremet CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    <Image src="/images/images_new/entre_3.png" alt="Entremet CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    <Image src="/images/images_new/entre_4.png" alt="Entremet CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    <Image src="/images/images_new/entre_5.png" alt="Entremet CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

    <p class="mt-4 text-lg">
      💫 Không chỉ là một món tráng miệng, <strong>Entremet</strong> còn là sự kết tinh của nghệ thuật làm bánh,
      giúp bạn tận hưởng trọn vẹn từng khoảnh khắc ngọt ngào.
    </p>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <h3 class="text-lg font-semibold text-amber-700">📍 Thưởng thức ngay tại:</h3>
      <p class="mt-2">✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
      <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    </div>

    <div class="mt-6 text-center text-base">
      <p class="font-semibold">CakewaiTown</p>
      <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
      <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
      <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Nơi mỗi chiếc bánh là một câu chuyện ngọt ngào!</p>
    </div>
  </div>
`,
  },
  {
    id: "news16",
    image: "/images/images_new/news16.png",
    date: "2025-04-22",
    title: "Bánh Giỏ Quýt – Hương Vị Truyền Thống Đầy Tươi Mát",
    description:
      "Mang trong mình hương vị đặc trưng từ quả quýt tươi, bánh giỏ quýt là sự kết hợp tinh tế giữa lớp vỏ mềm mịn và nhân quýt ngọt thanh, tạo nên món bánh đậm chất truyền thống nhưng vẫn đầy cuốn hút.",
    author: "CakewaiTown",
    contentHtml: `
  <div class='text-black'>
    <h2 class="text-2xl font-bold text-center text-orange-500 mb-4">
      🍊 Bánh Giỏ Quýt – Món Quà Nhỏ Gói Trọn Hương Xuân 🍊
    </h2>
    <Image src="/images/images_new/mini_1.png" alt="Bánh Giỏ Quýt CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    <p class="text-lg text-center">
      Nếu bạn đang tìm kiếm một món bánh truyền thống nhưng vẫn mang nét tươi mới, thì bánh giỏ quýt chắc chắn là lựa chọn không thể bỏ qua!
    </p>

    <p class="mt-4">
      Bánh giỏ quýt là một loại bánh ngọt mang đậm hương vị của quả quýt – tươi mát, dịu nhẹ nhưng đầy cuốn hút. Với phần vỏ bánh mềm mịn được làm từ bột mì chất lượng cao, nhân bên trong là sự hòa quyện giữa nước cốt quýt, đường và một chút bơ béo ngậy, tạo nên lớp nhân thơm lừng, tan chảy trong miệng.
    </p>

    <p class="mt-4">
      Không chỉ là món bánh ngon miệng, bánh giỏ quýt còn gợi nhắc về nét đẹp của những ngày đầu xuân – khi quýt chín rộ, mang theo vị ngọt lành và sự sum vầy. Đây cũng là món quà được nhiều người lựa chọn để biếu tặng trong dịp lễ Tết.
    </p>

    <div class="bg-orange-100 p-4 rounded-lg mt-6">
      <h3 class="text-xl font-semibold text-center text-orange-600">🎁 Tại sao nên thử ngay bánh giỏ quýt tại CakewaiTown?</h3>
      <ul class="mt-3 space-y-2 list-disc list-inside">
        <li>🍊 Nguyên liệu tự nhiên, không phẩm màu.</li>
        <li>🍊 Nhân quýt tươi được chế biến thủ công theo công thức riêng.</li>
        <li>🍊 Hình thức nhỏ gọn, đẹp mắt – thích hợp làm quà tặng.</li>
      </ul>
    </div>

    <p class="mt-6 text-center font-semibold text-lg">
      ✨ Thưởng thức ngay bánh giỏ quýt tại CakewaiTown và cảm nhận vị ngọt lành lan tỏa!
    </p>

    <div class="mt-6 text-center text-base">
      <p class="font-semibold">CakewaiTown</p>
      <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
      <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
      <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Nơi mỗi chiếc bánh là một câu chuyện ngọt ngào!</p>
    </div>
  </div>
  `,
  },
  {
    id: "news17",
    image: "/images/images_new/news17.png",
    date: "2025-04-23",
    title: "Su Kem Hạt Phỉ – Ngọt Ngọt Và Bùi Bùi Đến Từ Sự Tinh Tế",
    description:
      "Su kem hạt phỉ là món bánh quyến rũ với lớp vỏ su giòn và phần nhân kem hạt phỉ thơm bùi, béo ngậy. Một lựa chọn hoàn hảo cho những ai yêu thích vị bánh truyền thống nhưng đầy tinh tế.",
    author: "CakewaiTown",
    contentHtml: `
  <div class='text-black'>
    <h2 class="text-2xl font-bold text-center text-amber-500 mb-4">
      🌰 Su Kem Hạt Phỉ – Ngọt Béo Tinh Tế Cho Mọi Khoảnh Khắc
    </h2>
    <Image src="/images/images_new/mini_2.png" alt="Su kem hạt phỉ CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    
    <p class="text-lg text-center">
      Một chiếc su kem giòn tan, thơm phức vị bơ, ẩn chứa bên trong phần nhân kem hạt phỉ béo ngậy – đó chính là Su Kem Hạt Phỉ tại CakewaiTown!
    </p>

    <p class="mt-4">
      Lớp vỏ su được làm từ bột mì, trứng và bơ, nướng đến khi vàng ruộm, giòn tan ngay khi cắn vào. Bên trong là nhân kem mịn mượt, kết hợp giữa kem phô mai và hạt phỉ nghiền mịn, tạo nên vị bùi ngọt tự nhiên, không gắt, không ngấy.
    </p>

    <div class="bg-amber-100 p-4 rounded-lg mt-6">
      <h3 class="text-xl font-semibold text-center text-amber-600">💛 Lý do nên thử su kem hạt phỉ tại CakewaiTown:</h3>
      <ul class="mt-3 list-disc list-inside space-y-2">
        <li>🌰 Hạt phỉ nguyên chất, nhập khẩu, rang thơm giòn.</li>
        <li>🧁 Kem tươi béo ngậy, mềm mịn không ngấy.</li>
        <li>✨ Hình thức đẹp mắt – thích hợp tiệc trà, quà biếu.</li>
      </ul>
    </div>

    <p class="mt-6 text-center font-semibold text-lg">
      Hãy để vị su kem hạt phỉ lan tỏa niềm vui trong từng khoảnh khắc ngọt ngào!
    </p>
        <div class="mt-6 text-center text-base">
      <p class="font-semibold">CakewaiTown</p>
      <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
      <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
      <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Nơi mỗi chiếc bánh là một câu chuyện ngọt ngào!</p>
    </div>
  </div>
  `,
  },
  {
    id: "news18",
    image: "/images/images_new/news18.png",
    date: "2025-04-24",
    title: "Bánh Kisses Trà Bá Tước & Việt Quất – Khi Thanh Mát Gặp Ngọt Ngào",
    description:
      "Bánh Kisses là sự hòa quyện tinh tế giữa hương trà Bá Tước dịu nhẹ và vị chua ngọt của kem việt quất. Một chiếc bánh quyến rũ từ hình thức đến hương vị, dành cho người yêu phong cách thanh lịch.",
    author: "CakewaiTown",
    contentHtml: `
  <div class='text-black'>
    <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
      🫐 Kisses Trà Bá Tước & Việt Quất – Hương Vị Thanh Lịch Khó Cưỡng
    </h2>
    <Image src="/images/images_new/mini_4.png" alt="Bánh Kisses Trà Bá Tước CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
    
    <p class="text-lg text-center">
      Mang vẻ ngoài dịu dàng nhưng ẩn chứa bên trong là sự bùng nổ hương vị – bánh Kisses trà Bá Tước & việt quất chắc chắn sẽ chạm đến trái tim những ai yêu vị bánh thanh mát.
    </p>

    <p class="mt-4">
      Lớp cốt bánh mềm mịn, thơm hương trà Bá Tước sang trọng. Nhân kem bên trong là việt quất tươi xay nhuyễn, kết hợp kem phô mai tươi – tạo nên sự cân bằng hoàn hảo giữa vị chát nhẹ và ngọt thanh.
    </p>

    <div class="bg-purple-100 p-4 rounded-lg mt-6">
      <h3 class="text-xl font-semibold text-center text-purple-600">💜 Vì sao bạn sẽ yêu Kisses Trà & Việt Quất?</h3>
      <ul class="mt-3 list-disc list-inside space-y-2">
        <li>🫖 Hương trà Bá Tước tự nhiên, không đắng gắt.</li>
        <li>🫐 Nhân kem việt quất nguyên trái – vị chua ngọt dịu nhẹ.</li>
        <li>💝 Thiết kế hình “nụ hôn” đáng yêu – món quà cực kỳ tinh tế.</li>
      </ul>
    </div>

    <p class="mt-6 text-center font-semibold text-lg">
      Một chiếc bánh nhỏ – một trải nghiệm vị giác đầy cảm hứng!
    </p>
            <div class="mt-6 text-center text-base">
      <p class="font-semibold">CakewaiTown</p>
      <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
      <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
      <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Nơi mỗi chiếc bánh là một câu chuyện ngọt ngào!</p>
    </div>
  </div>
  `,
  },

  {
    id: "news19",
    image: "/images/images_new/news19.png",
    date: "2025-04-27",
    title: "CakewaiTown chính thức hợp tác cùng VnuEats!",
    description:
      "Sự hợp tác này là bước tiến mới giúp CakewaiTown đến gần hơn với các tín đồ bánh ngọt trong khu vực Làng Đại học, đồng thời kết nối chúng mình với cộng đồng ẩm thực trẻ năng động và sành ăn.",
    author: "CakewaiTown",
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🎉 CakewaiTown chính thức hợp tác cùng VnuEats! 🎉
  </h2>

  <Image src="/images/images_new/news19.png" alt="CakewaiTown hợp tác với VnuEats" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Bạn đã từng nghe đến <strong>VnuEats</strong> chưa? 👀 Đây là cộng đồng review ẩm thực đáng tin cậy dành riêng cho khu vực <strong>Làng Đại học Thủ Đức</strong>, nơi bạn có thể dễ dàng tìm kiếm, đánh giá và đặt món ngon chỉ trong vài cú click!
  </p>

  <p class="mt-4">
    Và giờ đây, <strong>CakewaiTown</strong> rất vui mừng thông báo: <span class="text-purple-600 font-semibold">chúng mình đã chính thức có mặt trên VnuEats!</span> Từ giờ, bạn có thể nhanh chóng khám phá các mẫu bánh xinh xắn, đọc đánh giá thực tế từ cộng đồng, và đặt bánh cực kỳ tiện lợi!
  </p>

  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      🤝 Sự hợp tác mang lại điều gì?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🌟 Dễ dàng tìm kiếm và tham khảo menu bánh tại CakewaiTown.</li>
      <li>🌟 Đọc nhận xét chân thực từ những khách hàng đã trải nghiệm.</li>
      <li>🌟 Đặt bánh nhanh chóng chỉ trong vài bước đơn giản.</li>
    </ul>
  </div>

  <p class="mt-6 text-center font-semibold text-lg">
    Cùng CakewaiTown và VnuEats lan tỏa thêm nhiều khoảnh khắc ngọt ngào nhé!
  </p>

  <p class="mt-4 text-center">
    👉 Truy cập ngay: <a href="https://vnueats.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://vnueats.com</a>
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Gửi gắm yêu thương trong từng chiếc bánh!</p>
  </div>
</div>
`,
  },
  {
    id: "news20",
    image: "/images/images_new/news20.png",
    date: "2025-05-10",
    title: "Bánh ngọt Làng Đại Học",
    description:
      "Tin vui cho sinh viên KTX khu A và khu B: CakewaiTown đã có mặt tại Làng Đại Học, mang đến những chiếc bánh ngọt thơm ngon cùng dịch vụ giao hàng nhanh, giúp bạn dễ dàng thưởng thức chỉ trong 30 phút.",
    author: "CakewaiTown",
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🎉 CakewaiTown chính thức phục vụ tại Làng Đại Học! 🎉
  </h2>

  <Image src="/images/images_new/news20.png" alt="Bánh ngọt CakewaiTown tại Làng Đại Học " width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Tin vui dành cho các bạn sinh viên <strong>KTX khu A</strong>, <strong>KTX khu B</strong> và toàn bộ khu vực <strong>Làng Đại Học Thủ Đức</strong>: từ nay, bạn có thể dễ dàng đặt những chiếc bánh ngọt thơm ngon của <strong>CakewaiTown</strong> mà không cần đi đâu xa!
  </p>

  <p class="mt-4">
    Chúng tôi mang đến đa dạng các loại bánh: bánh sinh nhật, bánh mousse, su kem, bánh trà Bá Tước & việt quất, bánh giỏ quýt… Tất cả đều được làm mới mỗi ngày, đảm bảo hương vị tươi ngon và hình thức bắt mắt.
  </p>

  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      🚚 Giao hàng nhanh – Chỉ từ 30 phút!
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>⚡ Giao bánh tận tay tại <strong>KTX khu A</strong>, <strong>KTX khu B</strong>, Làng Đại Học.</li>
      <li>⚡ Đặt hàng online nhanh gọn, không mất thời gian chờ đợi.</li>
      <li>⚡ Đảm bảo chất lượng bánh mềm, tươi mới khi đến tay khách hàng.</li>
    </ul>
  </div>

  <p class="mt-6 text-center font-semibold text-lg">
    Bạn đang tìm kiếm “bánh ngọt làng đại học” hay “mua bánh ngọt ở khu A hoặc khu B”? Đừng quên CakewaiTown nhé!
  </p>

  <p class="mt-4 text-center">
    👉 Đặt bánh ngay hôm nay tại: <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a>
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Mang vị ngọt đến từng khoảnh khắc sinh viên!</p>
  </div>
</div>
`,
  },
  {
    id: "news21",
    image: "/images/images_new/news21.png",
    date: "2025-05-11",
    title: "Mua Bánh Sinh Nhật In Hình Theo Yêu Cầu",
    description:
      "Giờ đây bạn có thể mua bánh sinh nhật in hình theo yêu cầu tại CakewaiTown! Với công nghệ AI hiện đại, chúng tôi giúp bạn tạo ra những chiếc bánh sinh nhật độc đáo, in hình cá nhân, thú cưng hoặc khoảnh khắc yêu thích, mang dấu ấn riêng của bạn.",
    author: "CakewaiTown",
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🎂 Mua Bánh Sinh Nhật In Hình Theo Yêu Cầu – Công Nghệ AI Độc Quyền Tại CakewaiTown! 🎂
  </h2>

  <Image src="/images/images_new/news21.png" alt="Bánh sinh nhật in hình theo yêu cầu CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Bạn muốn sở hữu một chiếc bánh sinh nhật thật độc đáo, mang dấu ấn cá nhân? 💡 Tại <strong>CakewaiTown</strong>, chúng tôi mang đến dịch vụ <strong>mua bánh sinh nhật in hình theo yêu cầu</strong> – giúp bạn biến những bức ảnh yêu thích thành tác phẩm ngọt ngào!
  </p>

  <p class="mt-4">
    Với công nghệ AI tiên tiến, khách hàng chỉ cần tải lên hình ảnh (ảnh bản thân, thú cưng, bạn bè, khoảnh khắc đáng nhớ…), hệ thống của chúng tôi sẽ tự động xử lý, tạo mẫu thiết kế bánh và gửi bản xem trước cho bạn duyệt. Sau khi xác nhận, đội ngũ CakewaiTown sẽ bắt tay thực hiện chiếc bánh hoàn hảo nhất!
  </p>

  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      ✨ Vì sao nên chọn bánh sinh nhật in hình tại CakewaiTown?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>📸 In hình theo yêu cầu – không giới hạn ý tưởng.</li>
      <li>🤖 Công nghệ AI hiện đại – tạo mẫu chính xác, đẹp mắt.</li>
      <li>🎨 Đa dạng phong cách trang trí: dễ thương, sang trọng, sáng tạo.</li>
      <li>⚡ Đặt nhanh – giao hàng tận nơi đúng hẹn.</li>
    </ul>
  </div>

  <p class="mt-6 text-center font-semibold text-lg">
    Dù là sinh nhật, kỷ niệm, hay bất kỳ dịp đặc biệt nào – hãy để CakewaiTown cùng bạn tạo nên những chiếc bánh không thể quên!
  </p>

  <p class="mt-4 text-center">
    👉 Đặt bánh ngay hôm nay tại: <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a>
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Mang yêu thương gửi gắm qua từng chiếc bánh!</p>
  </div>
</div>
`,
  },
  {
    id: "news22",
    image: "/images/images_new/news22.png",
    date: "2025-05-12",
    title: "Cửa Hàng Bán Bánh Mì Pháp Chuẩn Vị Gần Đây",
    description:
      "Bạn đang tìm cửa hàng bán bánh mì Pháp chuẩn vị gần đây? Đến ngay CakewaiTown để thưởng thức những chiếc bánh mì baguette giòn tan, đậm chất Pháp, được làm thủ công với công thức truyền thống!",
    author: "Gia Mẫn",
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🥖 Cửa Hàng Bán Bánh Mì Pháp Chuẩn Vị Gần Đây – Trải Nghiệm Ngon Đúng Điệu Tại CakewaiTown 🥖
  </h2>

  <Image src="/images/images_new/news22.png" alt="Bánh mì Pháp chuẩn vị CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Nếu bạn đang tìm kiếm <strong>cửa hàng bán bánh mì Pháp chuẩn vị gần đây</strong>, hãy đến ngay <strong>CakewaiTown</strong> – nơi nổi tiếng với những chiếc bánh mì baguette giòn rụm, thơm phức, được làm thủ công từ công thức truyền thống Pháp.
  </p>
  <Image src="/images/images_new/eur_2.png" alt="Bánh mì Pháp chuẩn vị CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
  <Image src="/images/images_new/eur_4.png" alt="Bánh mì Pháp chuẩn vị CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
  <p class="mt-4">
    Chúng tôi sử dụng nguyên liệu chất lượng cao: bột mì Pháp, men tự nhiên và bơ nhập khẩu, để tạo ra lớp vỏ giòn tan, ruột mềm mịn, mang đúng hương vị bánh mì Paris chính gốc. Mỗi ổ bánh ra lò đều được kiểm soát kỹ lưỡng, đảm bảo vị ngon hoàn hảo từ hình thức đến chất lượng.
  </p>


  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      💡 Vì sao nên chọn bánh mì Pháp tại CakewaiTown?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🇫🇷 Công thức chuẩn Pháp – nguyên liệu nhập khẩu.</li>
      <li>🔥 Nướng bánh hàng ngày – luôn nóng giòn khi giao.</li>
      <li>🚀 Giao hàng nhanh – phục vụ tận nơi cho khu vực gần bạn.</li>
      <li>💖 Đa dạng lựa chọn: bánh mì sandwich, baguette, croissant…</li>
    </ul>
  </div>

  <p class="mt-6 text-center font-semibold text-lg">
    Một chiếc bánh mì ngon không chỉ là món ăn, mà còn là trải nghiệm tinh tế của văn hóa ẩm thực!
  </p>

  <p class="mt-4 text-center">
    👉 Ghé ngay <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a> để đặt bánh mì Pháp chuẩn vị gần bạn nhé!
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Gửi gắm yêu thương qua từng chiếc bánh!</p>
  </div>
</div>
`,
  },
  {
    id: "news28",
    image: "/images/images_new/news28.png",
    date: "2025-05-20",
    title: "Muốn mua bánh ngọt tại KTX Khu A? Đã có Cakewai Town lo",
    description:
      "Nhận biết được nhu cầu cũng như sự ủng hộ của sinh viên làng đại học, chúng tôi quyết định khai trương chi nhánh mới ngay tại KTX Khu A để phục vụ các bạn một cách tốt nhất!",
    author: "Hoài Bảo",
    contentHtml: `
<div class="text-black">
  <h1 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🎉 CakewaiTown Khai Trương Tại KTX Khu A – ĐHQG-HCM: Thiên Đường Bánh Ngọt Giữa Làng Đại Học 🎉
  </h1>

  <Image src="/images/images_new/news28.png" alt="Khai trương CakewaiTown tại KTX Khu A" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Với mong muốn hiểu được nhu cầu muốn mua bánh ngọt tại KTX Khu A và mang đến trải nghiệm ẩm thực tuyệt vời nhất cho sinh viên, <strong>CakewaiTown</strong> chính thức khai trương chi nhánh mới tại <strong>KTX Khu A - Làng Đại Học ĐHQG-HCM</strong>! 🍰
  </p>

  <Image src="/images/images_new/entre_1.png" alt="Không khí khai trương rộn ràng" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />
  <Image src="/images/images_new/entre_2.png" alt="Gian hàng bánh ngọt tại KTX" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="mt-4">
    Nhận được sự yêu mến từ cộng đồng sinh viên, chúng tôi quyết định "đặt chân" đến nơi đây để phục vụ các bạn tốt hơn – với đầy đủ các dòng bánh ngọt signature: <strong>bánh phô mai cháy, bánh trà xanh, red velvet, mousse chocolate</strong>… tất cả đều được làm mới mỗi ngày bằng nguyên liệu chất lượng cao.
  </p>

  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      💡 Có gì đặc biệt tại CakewaiTown – Cơ sở KTX Khu A?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🎂 Bánh ngọt tươi mỗi ngày – không chất bảo quản.</li>
      <li>📍 Vị trí ngay trong KTX – thuận tiện cho sinh viên.</li>
      <li>🧋 Kết hợp nước uống mát lạnh – combo siêu hời.</li>
      <li>🎁 Nhiều ưu đãi khai trương – nhận quà liền tay.</li>
    </ul>
  </div>

  <p class="mt-6 text-center font-semibold text-lg">
    Hãy cùng bạn bè đến trải nghiệm những chiếc bánh ngọt thơm ngon, giá sinh viên và không khí dễ thương tại CakewaiTown nhé!
  </p>

  <p class="mt-4 text-center">
    👉 Xem thêm tại <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a> hoặc ghé trực tiếp cửa hàng tại KTX Khu A!
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>✨ Cơ sở mới: KTX Khu A - ĐHQG-HCM, P. Đông Hòa, TP. Dĩ An, Bình Dương</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Gửi gắm yêu thương qua từng chiếc bánh!</p>
  </div>
</div>
`,
    keywords:
      "mua banh ngot ktx khu a, mua banh ngot sinh vien ktx khu a, banh ngot lang dai hoc, khai truong chi nhanh",
  },
  {
    id: "news29",
    image: "/images/images_new/news29.png",
    date: "2025-05-20",
    title:
      "Bánh kem chợ Nhân Văn - Sự lựa chọn hàng đầu của sinh viên làng đại học",
    description:
      "Bánh kem chợ Nhân Văn của Cakewai Town luôn thu hút hàng ngàn lượt mua mỗi tháng, luôn trong tình trạng không đủ bán. Đó là vì sao?",
    author: "Hoài Bảo",
    contentHtml: `
<div class="text-black">
  <h1 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🎂 Bánh Kem Chợ Nhân Văn – Món Ngọt Gây Sốt Trong Làng Đại Học Từ Nhà Cakewai Town 🎂
  </h1>

  <Image src="/images/images_new/news29.png" alt="Bánh kem chợ Nhân Văn Cakewai Town" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Đã từ rất lâu, <strong>chợ Nhân Văn</strong> luôn là nơi quen thuộc với sinh viên Làng Đại học – không chỉ vì đồ ăn rẻ, mà còn bởi những món ngon gây thương nhớ. Và <strong>bánh kem Cakewai Town tại chợ Nhân Văn</strong> chính là một trong số đó.
  </p>

  <p class="mt-4">
    Mỗi ngày, hàng trăm chiếc bánh kem được bán ra chỉ trong vài tiếng đồng hồ. Có những hôm, khách đến muộn phải ngậm ngùi ra về vì… “hết bánh sớm quá”. Điều gì khiến chiếc bánh kem này trở thành <strong>hiện tượng trong giới sinh viên</strong>?
  </p>

  <Image src="/images/images_new/mini_1.png" alt="Bánh kem nhân văn đông khách" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      💡 Vì sao bánh kem Cakewai Town tại chợ Nhân Văn lại hot đến vậy?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🎨 Thiết kế dễ thương, trang trí tinh tế – phù hợp cả sinh nhật và quà tặng bất ngờ.</li>
      <li>🍰 Chất lượng kem mịn, ngọt thanh – không bị ngấy như các loại bánh thông thường.</li>
      <li>📍 Vị trí dễ tìm, ngay trung tâm chợ – tiện lợi cho sinh viên ghé mua bất cứ lúc nào.</li>
      <li>💸 Giá siêu sinh viên – chỉ từ 30.000đ, ai cũng có thể thưởng thức.</li>
    </ul>
  </div>

  <p class="mt-6 text-center font-semibold text-lg">
    Một chiếc bánh nhỏ, nhưng mang lại niềm vui lớn – đó là thông điệp mà Cakewai Town muốn gửi đến các bạn sinh viên qua từng chiếc bánh tại chợ Nhân Văn.
  </p>

  <p class="mt-4 text-center">
    👉 Xem thêm tại <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a> để đặt bánh hoặc biết thêm các chi nhánh gần bạn!
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 CakewaiTown – Gửi gắm yêu thương qua từng chiếc bánh!</p>
  </div>
</div>
`,
    keywords:
      "mụa banh kem cho nhan van, banh kem ngon o cho nhan van, Bánh kem chợ Nhân Văn, banh kem cho sinh vien o cho nhan van",
  },
];

// Format ngày tháng
// const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("vi-VN", { year: "numeric", month: "short", day: "numeric" });
// };
export const toSlug = (title: string) =>
  slugify(title, {
    lower: true,
    locale: "vi",
    strict: true,
    trim: true,
  });
// 🟢 Hàm tạo danh sách đường dẫn tĩnh
export async function generateStaticParams() {
  return newsfeedData.map((news) => ({
    slug: toSlug(news.title),
  }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params; // Đảm bảo params được xử lý đồng bộ
  const news = newsfeedData.find((item) => toSlug(item.title) === slug);
  const metadataBase = new URL("https://cakewaitown.com");

  if (!news) {
    return {
      title: "Bài viết không tồn tại - CakewaiTown",
      description:
        "Bài viết bạn đang tìm không tồn tại. Xem thêm tin tức tại CakewaiTown.",
      metadataBase,
    };
  }

  return {
    title: `${news.title} - CakewaiTown`,
    description: news.description,
    openGraph: {
      title: news.title,
      description: news.description,
      url: `https://cakewaitown.com/blogs/${slug}`,
      images: [`${news.image}`],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.description,
      images: [`${news.image}`],
    },
    metadataBase,
    keywords: news?.keywords,
  };
}

// 🟢 Server Component (thay cho getStaticProps)
export default async function NewsDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params; // Đảm bảo params được xử lý đồng bộ
  const news = newsfeedData.find((item) => toSlug(item.title) === slug);

  if (!news) {
    return (
      <div className="text-center text-red-500 my-10">
        Bài viết không tồn tại.
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    datePublished: news.date,
    url: `https://cakewaitown.com/blogs/${slug}`,
    image: news.image,
    author: {
      "@type": "Person",
      name: news.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CakewaiTown",
      logo: {
        "@type": "ImageObject",
        url: "https://cakewaitown.com/logo.png",
      },
    },
    sameAs: [
      "https://www.facebook.com/cakewai.town/",
      "https://www.instagram.com/cakewaitown",
      "https://www.tiktok.com/@cakewai_town",
      "https://www.youtube.com/@CakewaiTown",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "371 Đ.Đoàn Kết, P.Bình Thọ",
      addressLocality: "Thủ Đức",
      addressCountry: "Vietnam",
    },
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://cakewaitown.com/blogs/${slug}`} />
        <title>{news.title} - CakewaiTown</title>
      </Head>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />
      <div className="mx-4 sm:mx-10 lg:mx-28 my-24 text-black">
        <div className="text-left">
          <Link href="/">Trang chủ</Link> <span>&gt;&gt;</span>{" "}
          <Link href="/blogs">Tin tức</Link>
        </div>

        <div className="flex justify-center text-lg">
          <div className="my-5 max-w-[900px] rounded-xl border-2 bg-[#E8E1E1] p-5">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              {news.title}
            </h1>
            <div className="flex items-center space-x-4 sm:space-x-8 mt-4">
              <div className="flex items-center">
                <Image
                  src="/images/images_new/Circle Avatar.svg"
                  alt="Avatar"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/images_new/calendar.svg"
                  alt="Calendar"
                  width={24}
                  height={24}
                  className="mr-1"
                />
                <p>{formatDate(news.date)}</p>
              </div>
            </div>
            <hr className="my-5 border-gray-400" />
            {news.contentHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: news.contentHtml }}
                className="prose max-w-none"
              />
            ) : (
              <p className="italic text-gray-500">Nội dung sẽ được cập nhật.</p>
            )}{" "}
            <h2 className="text-2xl font-extrabold mt-5">
              CÁC BÀI VIẾT LIÊN QUAN
            </h2>
            <ul className="ml-4 list-disc">
              {newsfeedData
                .filter((item) => item.id !== news.id)
                .map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/blogs/${toSlug(item.title)}`}
                      className="hover:text-blue-700 underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
