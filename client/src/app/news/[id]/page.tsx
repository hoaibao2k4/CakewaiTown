import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import type { Metadata } from "next";

// Dữ liệu mẫu (tạm thời, sau này dùng API)
const newsfeedData = [
  {
    id: "news1",
    date: "2025-01-05",
    title: "Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025.",
    description: "",
    author: "CakeWai",
    contentHtml: 
    `
          <div class="text-center text-black ">
            <div class="my-5">Cakewai: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025.</div>
            <div>Kính Chúc Quý Khách Hàng Năm Mới An Khang Và Thịnh Vượng.</div>
            <div> Cảm Ơn Quý Khách Hàng Đã Luôn Ủng Hộ Cakewai và đồng hành trong suốt thời gian vừa qua.</div>
            <Image src="/images/images_new/newsfeed8.png" alt="Thông báo nghỉ tết"  class="mx-auto my-5 block w-full max-w-[600px]" />
          </div>  
    `,
},
{
    id: "news2",
    date: "2024-11-02",
    title: "Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.",
    description: "",
    author: "Cakewai",
    contentHtml: 
    `   
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
              Sau đây là những mẫu bánh kem được chọn lọc đẹp nhất có tại Cakewai. Mời các bạn cùng tham khảo!
            </h2>
            <Image src="/images/images_new/20-11_1.png" alt="Bánh kem khoai môn" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/20-11_2.png" alt="Bánh Kem Trà Bá Tước, quả Lý Chua Đen" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/20-11_3.png" alt="Bánh kem nhân dâu" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <h2 class="italic">"More than cake"</h2>
            <h2>
              Chỉ một câu nói nhỏ cũng có thể miêu tả chiếc bánh kem mang chủ đề 20/11 năm nay đến từ nhà Cakewai.
            </h2>
          </div>
    `,
},
{
    id: "news3",
    date: "2024-10-20",
    title: "Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.",
    description: "",
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
              Cakewai hiểu rõ được điều đó, đội ngũ thiết kế và sản xuất luôn sáng tạo không ngừng để mang đến những
              chiếc bánh kem độc đáo sánh tựa như vẻ đẹp ngọc ngà son sắc của các cô gái.
            </div>
            <Image src="/images/images_new/20-10_1.png" alt="Bánh Red Velvet Mousse Cheesecake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div>------------</div>
            <div class="my-5">Đắn đo suy nghĩ nên tặng gì cho bà, cho mẹ hay những cô thiên thần nhỏ.</div>
            <div class="my-5">Tạo bất ngờ như thế nào là hợp lí với chị em trong công ty.</div>
            <div class="my-5">Món quà nào vừa đẹp vừa tinh tế cho dịp lễ đặc biệt này.</div>
            <Image src="/images/images_new/20-10_2.png" alt="Bánh kem dâu và vani" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Nắm rõ các mưu cầu đó - Cakewai cho ra mắt bộ sưu tập bánh kem 20/10 đầy tinh tế với mong muốn giúp đỡ bạn
              bày tỏ những lời yêu thương qua những chiếc bánh ngọt dịu kì.
            </div>
            <div>------------</div>
            <div class="my-5 italic">Nhân ngày Phụ Nữ Việt Nam </div>
            <div>
              Nhà Cakewai xin gửi lời chúc yêu thương và sức khỏe đến với chị, em phụ nữ thành công trong công việc,
              hạnh phúc trong tình yêu và trọn vẹn trong cuộc sống.
            </div>
          </div>
`,
},
{
    id: "news4",
    date: "2024-07-29",
    title: "Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.",
    description: "",
    author: "Cakewai",
    contentHtml: `
          <div class="text-black">
            <Image src="/images/images_new/newsfeed11.png" alt="Ra mắt Passion Mousse Cheesecake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
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
    title: "Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà Cakewai.",
    description: "",
    author: "Gia Mẫn",
    contentHtml: `
          <div class="text-black">
            <div class="my-5">
              Nhà Cakewai đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và
              mang tính biểu tượng đến từ Châu Âu và La Tinh.
            </div>
            <div class="my-2">
              
              Bộ sưu tập được ra mắt cực độc đáo và đa dạng nhưng không thiếu chất lượng về mặt dinh dưỡng lẫn tinh thần
              xuất phát từ các nền văn hóa khác nhau có thể kể đến như Anh, Mỹ, Pháp,...
            </div>
            <div class="my-2">
              Traditional cakes được xem như tính biểu tượng và được người dân bản địa tiêu thụ như các món ăn chính
              hằng ngày. Đồng thời trong các dịp lễ lớn hoặc các buổi tiệc thì những chiếc bánh sẽ được bày biện để phục
              vụ thực khách thay lời yêu thương.
            </div>
            <div>Cakewai xin giới thiệu một số sản phẩm gửi đến quý khách hàng tham khảo!!!</div>
            <Image src="/images/images_new/eur_1.png" alt="Chocolate brownie slab cake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/eur_2.png" alt="Madeira cake" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <Image src="/images/images_new/eur_3.png" alt="Bánh Croissant Trứng Muối" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Với sự cập nhật mới này, Cakewai hứa hẹn sẽ mang đến một luồng gió mới về mặt trải nghiệm đến quý khách
              hàng.
            </div>
            <Image src="/images/images_new/eur_4.png" alt="Berry Cream Cheese Bun" width="600px" class="mx-auto my-5 block w-full max-w-[600px]" />
            <div class="my-5">
              Bằng cả sự nhiệt huyết với nghề, nhà Cakewai rất mong nhận được sự ủng hộ và hưởng ứng vô cùng quý giá của
              Cakewai-ers.
            </div>
          </div>
    `,
},
{
    id: "news6",
    date: "2024-01-03",
    title: "Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo, hội nghị... Tại TP.Hồ Chí Minh.",
    description: "",
    author: "Gia Mẫn",
    contentHtml: `
                <div class="text-black">
                    <div class="font-bold my-5">Cakewai cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư vấn: 0912476521</div>
                    <div>Tiệc teabreak là loại tiệc nhẹ thường được phục vụ trong các buổi họp, hội thảo, hội nghị hoặc sự kiện ngắn. Tiệc này tạo ra không gian thoải mái để khách mời thư giãn, giao lưu trong thời gian nghỉ giải lao. Tiệc teabreak được tổ chức với rất nhiều những loại bánh ngọt, trà, nước trái cây và hoa quả tươi. </div>
                    <Image src="/images/images_new/newsfeed13.png" alt="Minicakes - special sales" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <div class="my-5">Nếu bạn cần tìm những loại bánh ngọt phù hợp cho tiệc teabreak tại công ty hay sự kiện khai trương cửa hàng,... Bạn là đơn vị tổ chức sự kiện. Bạn cần tham khảo những dòng bánh ngọt trong bữa tiệc sắp tới.</div>
                    <div class="my-5">Cakewai xin gửi đến quý khách hàng thực đơn tiệc teabreak vô cùng đa dạng và phong phú. Mong quý khách hàng có thể lựa chọn những loại bánh phù hợp nhất cho mình.</div>
                    <Image src="/images/images_new/mini_1.png" alt="Bánh Giỏ Quýt" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_2.png" alt="Su Kem Hạt Phỉ" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_3.png" alt="Bánh Tiramisu Lava" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_4.png" alt="Bánh Kisses Trà Bá Tước và Việt Quất" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_5.png" alt="Bánh Macaron Lý Chua Đen & Oải Hương" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <Image src="/images/images_new/mini_6.png" alt="Bánh Macaron Caramen" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
                    <div class="my-5">Nhà Cakewai cung cấp đầy đủ các loại bánh như su kem, coockie, macaron, socola, tiramisu,...</div>
                </div>.
    `,
},
{
    id: "news7",
    image: "/images/images_new/newsfeed7.png",
    date: "2025-03-06",
    title: "Cakewai - Tưng bừng khai trương chi nhánh Võ Văn Ngân.",
    description: "",
    author: "Cakewai",
    contentHtml: `
        <div class="text-black">
            <h2 class="text-2xl font-bold text-center text-red-600 mb-4">
                🎉 Cakewai - Tưng Bừng Khai Trương Chi Nhánh Võ Văn Ngân! 🎉
            </h2>
            <p class="text-lg text-center">📍 <span class="font-semibold">Địa điểm mới - Trải nghiệm mới!</span></p>
            <p class="mt-4">
                Chúng tôi vui mừng thông báo sự kiện <span class="font-semibold">khai trương chi nhánh mới tại Võ Văn Ngân</span>, 
                đánh dấu một bước phát triển quan trọng trong hành trình mang đến những chiếc bánh thơm ngon và chất lượng nhất đến gần hơn với khách hàng.
            </p>
            <Image src="/images/images_new/newsfeed7.png" alt="Khai trương chi nhánh Võ Văn Ngân" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
            <div class="bg-yellow-100 p-4 rounded-lg mt-6">
                <h3 class="text-xl font-semibold text-center text-yellow-700">💖 Sự Kiện Đặc Biệt - Ưu Đãi Hấp Dẫn 💖</h3>
                <ul class="mt-3 space-y-2">
                    <li>✅ <span class="font-semibold">Giảm giá 20%</span> cho tất cả các loại bánh trong 3 ngày đầu tiên.</li>
                    <li>✅ <span class="font-semibold">Tặng ngay 1 phần bánh miễn phí</span> cho 100 khách hàng đầu tiên.</li>
                    <li>✅ Cơ hội tham gia <span class="font-semibold">bốc thăm trúng thưởng</span> với nhiều phần quà hấp dẫn.</li>
                </ul>
            </div>

            <p class="mt-6 text-center font-semibold text-lg">
                🎈 Đừng bỏ lỡ cơ hội trải nghiệm không gian mới, hương vị mới và những ưu đãi tuyệt vời từ Cakewai!
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
    image: "/images/images_new/newsfeed14.png",
    date: "2025-02-01",
    title: " Valentine Ngọt Ngào - Giảm Giá 50% Mừng Lễ Tình Nhân! ",
    description: "",
    author: "Gia Mẫn",
    contentHtml: `
    <div class = 'text-black'>
            <h2 class="text-2xl font-bold text-center text-red-500 mb-4">
                💝 Món Quà Ngọt Ngào Cho Ngày Valentine - Giảm Giá 50%! 💝
            </h2>
            <Image src="/images/images_new/newsfeed14.png" alt="Valentine - big sales" width="600px" class="mx-auto block my-5 w-full max-w-[600px]"/>
            <p class="text-lg text-center">💌 Valentine này, gửi trọn yêu thương cùng những chiếc bánh ngọt ngào từ Cakewai!</p>

            <p class="mt-4">
                Ngày 14/02 - ngày của tình yêu, hãy dành tặng cho người thương những chiếc bánh thơm ngon như một lời yêu thương ngọt ngào.
                Cakewai hân hạnh mang đến chương trình ưu đãi hấp dẫn:
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
                🎀 Đừng bỏ lỡ cơ hội thể hiện tình cảm với nửa kia của bạn bằng những chiếc bánh tình yêu từ Cakewai!
            </p>

            <div class="mt-6 text-center">
                <p class="text-lg font-semibold">📅 Thời gian: <span class="text-red-600">Từ 10/02 - 14/02</span></p>
                <p class="text-lg font-semibold">📍 Địa điểm: <span class="text-red-600">Tất cả cửa hàng Cakewai & đặt hàng online</span></p>
            </div>

            <p class="mt-6 text-center text-red-500 font-bold text-xl">❤️ Hãy để Cakewai cùng bạn tạo nên những khoảnh khắc ngọt ngào trong mùa Valentine này! ❤️ </p>
    </div>
`,
},
];

// Format ngày tháng
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", { year: "numeric", month: "short", day: "numeric" });
};

// 🟢 Hàm tạo danh sách đường dẫn tĩnh
export async function generateStaticParams() {
    return newsfeedData.map((news) => ({ id: news.id }));
}
type Params = Promise<{id? : string}>


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const news = newsfeedData.find((item) => item.id === params.id);
  
  if (!news) {
    return {
      title: "Bài viết không tồn tại - CakewaiTown",
      description: "Bài viết bạn đang tìm không tồn tại. Xem thêm tin tức tại CakewaiTown.",
    };
  }

  return {
    title: `${news.title} - CakewaiTown`,
    description: news.description || news.title,
    keywords: `Cakewai, tin tức bánh kem, ${news.title}`,
    openGraph: {
      title: news.title,
      description: news.description || news.title,
      url: `https://cakewaitown.com/news/${news.id}`,
      images: [`https://cakewaitown.com${news.image}`],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.description || news.title,
      images: [`https://cakewaitown.com${news.image}`],
    },
  };
}
// 🟢 Server Component (thay cho getStaticProps)
export default async function NewsDetail( props : { params: Params }) {
    const params = await props.params
    const id = params.id
    const news = newsfeedData.find((item) => item.id === id);

    if (!news) {
        return <div className="text-center text-red-500">Bài viết không tồn tại.</div>;
    }
    const newsSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": news.title,
      "datePublished": news.date,
      "author": {
        "@type": "Person",
        "name": news.author
      },
      "image": `https://cakewaitown.com${news.image}`,
      "publisher": {
        "@type": "Organization",
        "name": "CakewaiTown",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cakewaitown.com/logo.png"
        }
      }
    };


    return (
      <>
      <Head>
        <title>{news.title} - CakewaiTown</title>
        <meta name="description" content={news.description || news.title} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={`bánh kem, tin tức CakewaiTown, sự kiện bánh ngọt, khuyến mãi bánh sinh nhật, giảm giá, thông báo, đặt bánh,CakewaiTown, ${news.title}, bánh kem 20/11, bánh kem Nhà Giáo, quà tặng 20/11, ngày Nhà Giáo Việt Nam, CakewaiTown khai trương, khai trương chi nhánh mới, bánh kem CakewaiTown, ưu đãi khai trương`} />
        <meta name="robots" content="all" />
        <meta http-equiv="content-language" content="vi" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.description || news.title} />
        <meta property="og:image" content={`https://cakewaitown.com${news.image}`} />
        <meta property="og:url" content={`https://cakewaitown.com/news/${news.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={news.title} />
        <meta name="twitter:description" content={news.description || news.title} />
        <meta name="twitter:image" content={`https://cakewaitown.com${news.image}`} />
        <script type="application/ld+json">{JSON.stringify(newsSchema)}</script>
      </Head>
        <div className="mx-4 sm:mx-10 lg:mx-28 my-24 text-black">
            <div className="text-left">
                <Link href="/">Trang chủ</Link> <span>&gt;&gt;</span> <Link href="/news">Tin tức</Link> <span>&gt;&gt;</span> <span>Nội dung</span>
            </div>
            <div className="flex justify-center text-lg">
                <div className="my-5 max-w-[900px] rounded-xl border-2 bg-[#E8E1E1] p-5">
                    <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold">{news.title}</h1>
                    <div className="flex items-center space-x-4 sm:space-x-8 mt-4">
                        <div className="flex items-center">
                            <Image src="/images/images_new/Circle Avatar.svg" alt="Avatar" width={24} height={24} className="mr-1" />
                            <span>{news.author}</span>
                        </div>
                        <div className="flex items-center">
                            <Image src="/images/images_new/calendar.svg" alt="Calendar" width={24} height={24} className="mr-1" />
                            <p>{formatDate(news.date)}</p>
                        </div>
                    </div>
                    <hr className="my-5 border-gray-400" />
                    {/* <div dangerouslySetInnerHTML={{ __html: news.contentHtml }} className="prose max-w-none" /> */}
                    <h3 dangerouslySetInnerHTML={{ __html: news.contentHtml }} className="prose max-w-none"></h3>
                    <h2 className="text-2xl font-extrabold mt-5">CÁC BÀI VIẾT LIÊN QUAN</h2>
                    <ul className="ml-4 list-disc">
                        {newsfeedData.filter((item) => item.id !== news.id).map((item) => (
                            <li key={item.id} className="hover:underline hover:text-slate-900">
                                <Link href={`/news/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>     
      </>

    );
}
