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
    keywords: [
      "thông báo nghỉ tết nguyên đán",
      "cakewaitown nghỉ lễ",
      "bánh kem tết 2025",
    ],
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
    keywords: [
      "bánh kem 20/11",
      "bánh kem mừng ngày Nhà giáo",
      "bánh kem tặng thầy cô",
      "bánh sinh nhật tặng cô giáo",
      "mẫu bánh 20/11 đẹp",
      "bánh kem ý nghĩa ngày Nhà giáo",
      "bánh ngọt tặng giáo viên",
      "bánh kem tri ân thầy cô",
      "cakewaitown bánh 20/11",
      "quà tặng 20/11 độc đáo",
    ],
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
    keywords: [
      "bánh kem 20/10",
      "bánh tặng phụ nữ",
      "quà tặng 20/10 ý nghĩa",
      "bánh ngọt tặng mẹ",
      "bánh kem đẹp tặng bạn gái",
      "bánh mừng ngày phụ nữ Việt Nam",
      "cakewaitown bánh 20/10",
      "bánh tặng chị em công ty",
      "bánh kem tinh tế cho ngày lễ",
    ],
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
    keywords: [
      "bánh mousse chanh dây",
      "bánh passion cheesecake",
      "bánh mousse cheesecake ngon",
      "bánh chanh dây phô mai",
      "bánh ngọt thanh mát mùa hè",
      "passion fruit mousse cake",
      "cheesecake vị chanh dây",
      "bánh mousse ngon ở Thủ Đức",
      "cakewaitown passion mousse",
      "bánh mousse lạnh trái cây",
    ],
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
    keywords: [
      "bánh Âu CakewaiTown",
      "bánh ngọt châu Âu",
      "hương vị trời Tây",
      "bánh Pháp ngon tại Thủ Đức",
      "bánh truyền thống châu Âu",
      "bánh Croissant trứng muối",
      "bánh brownie slab cake",
      "bánh Madeira cake",
      "bánh Berry Cream Cheese Bun",
      "bánh Âu đa văn hóa",
    ],
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
    keywords: [
      "đặt bánh teabreak TP.HCM",
      "bánh tiệc nhẹ hội thảo",
      "bánh sự kiện công ty",
      "bánh ngọt tiệc buffet",
      "tiệc bánh ngọt khai trương",
      "bánh teabreak chất lượng",
      "bánh minicake TP.HCM",
      "đặt bánh sự kiện CakewaiTown",
      "bánh cookies, macaron, su kem",
      "tiệc bánh ngọt chuyên nghiệp",
    ],
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
    keywords: [
      "khai trương bánh kem Võ Văn Ngân",
      "CakewaiTown chi nhánh Thủ Đức",
      "mua bánh kem Võ Văn Ngân",
      "khai trương cửa hàng bánh ngọt",
      "ưu đãi khai trương CakewaiTown",
      "tiệm bánh ngon Võ Văn Ngân",
      "bánh kem Thủ Đức",
      "đặt bánh sinh nhật Thủ Đức",
      "cửa hàng bánh ngọt mới Thủ Đức",
      "bánh ngọt khai trương khuyến mãi",
    ],
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
    keywords: [
      "bánh Valentine đẹp",
      "bánh tặng người yêu ngày 14/2",
      "quà Valentine ngọt ngào",
      "bánh tình nhân giảm giá",
      "ưu đãi bánh kem ngày Valentine",
      "bánh Valentine tặng bạn gái",
      "bánh ngọt cho ngày lễ tình nhân",
      "bánh kem Valentine 2025",
      "đặt bánh Valentine online",
      "giảm giá 50% bánh Valentine",
    ],
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
    keywords: [
      "Entremet",
      "Bánh mousse Pháp",
      "Bánh mousse nhiều lớp",
      "Bánh mousse mềm mịn",
      "Bánh Entremet CakewaiTown",
      "Bánh mousse Pháp tại CakewaiTown",
      "Bánh mousse sang trọng",
      "Trà xanh dâu latte",
      "Bánh hạt phỉ",
      "Bánh chuối 9 lớp",
      "Bánh trà bá tước",
      "Bánh mousse độc đáo",
      "Bánh mousse tan chảy",
      "Nghệ thuật làm bánh mousse",
      "Bánh tráng miệng Pháp",
      "CakewaiTown bánh mousse",
      "Bánh mousse cao cấp",
      "Cửa hàng bánh CakewaiTown",
      "Món tráng miệng Pháp",
      "Địa chỉ bánh mousse Thủ Đức",
    ],
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
    keywords: [
      "Bánh giỏ quýt",
      "Bánh quýt tươi",
      "Bánh vỏ mềm nhân quýt",
      "Bánh giỏ quýt CakewaiTown",
      "Bánh ngọt",
      "Bánh quýt ngọt thanh",
      "Bánh quà tặng Tết",
      "Bánh thủ công tự nhiên",
      "Bánh quýt tươi mát",
      "Bánh giỏ quýt handmade",
      "Quà tặng bánh ngọt",
      "CakewaiTown bánh ngọt",
      "Bánh giỏ quýt tươi ngon",
      "Bánh giỏ quýt ngon",
      "Bánh giỏ quýt cao cấp",
      "Món bánh mùa xuân",
      "Bánh ngon tươi sạch",
    ],
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
    keywords: [
      "Su kem hạt phỉ",
      "Bánh su kem",
      "Nhân kem hạt phỉ",
      "Bánh truyền thống Việt Nam",
      "Bánh kem hạt phỉ",
      "Bánh su giòn",
      "Bánh ngọt béo ngậy",
      "Bánh kem phô mai",
      "Bánh hạt phỉ nhập khẩu",
      "Bánh handmade CakewaiTown",
      "Quà tặng bánh ngọt",
      "Bánh kem ngon",
      "Bánh su kem cao cấp",
      "Bánh kem béo mịn",
      "CakewaiTown bánh ngọt",
      "Bánh su kem giòn tan",
      "Bánh hạt phỉ thơm bùi",
      "Bánh ngọt truyền thống",
      "Tiệc trà bánh ngọt",
      "Bánh kem cho dịp lễ",
    ],
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
    keywords: [
      "Bánh Kisses",
      "Bánh Kisses trà Bá Tước",
      "Bánh Kisses việt quất",
      "Bánh kem trà Bá Tước",
      "Bánh kem việt quất",
      "Bánh ngọt thanh mát",
      "Kem việt quất tươi",
      "Hương trà Bá Tước tự nhiên",
      "Bánh ngọt CakewaiTown",
      "Bánh kem phô mai tươi",
      "Bánh hình nụ hôn",
      "Quà tặng bánh ngọt",
      "Bánh Kisses cao cấp",
      "Bánh handmade Việt Nam",
      "Bánh kem hương trà",
      "Bánh ngọt thanh lịch",
      "Bánh việt quất ngon",
      "Bánh kem thơm ngon",
      "CakewaiTown bánh ngọt",
      "Bánh kem cho tiệc trà",
    ],
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
    keywords: [
      "CakewaiTown",
      "VnuEats",
      "Hợp tác CakewaiTown VnuEats",
      "CakewaiTown Làng Đại học",
      "Cộng đồng ẩm thực Làng Đại học Thủ Đức",
      "Review ẩm thực Làng Đại học",
      "Đặt bánh CakewaiTown",
      "Menu bánh CakewaiTown",
      "Đặt bánh trực tuyến Thủ Đức",
      "CakewaiTown tại VnuEats",
      "Ẩm thực Thủ Đức",
      "Bánh ngọt CakewaiTown",
      "Đặt bánh online",
      "Cộng đồng sành ăn Thủ Đức",
      "Đánh giá bánh CakewaiTown",
      "CakewaiTown địa chỉ Thủ Đức",
      "Cửa hàng bánh CakewaiTown",
      "Bánh ngọt Sài Gòn",
      "CakewaiTown liên hệ",
      "CakewaiTown cơ sở Thủ Đức",
    ],
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
    keywords: [
      "Bánh ngọt Làng Đại Học",
      "CakewaiTown Làng Đại Học",
      "Bánh ngọt KTX khu A",
      "Bánh ngọt KTX khu B",
      "Giao bánh nhanh Làng Đại Học",
      "Bánh sinh nhật CakewaiTown",
      "Bánh mousse Thủ Đức",
      "Đặt bánh online Làng Đại Học",
      "Bánh su kem CakewaiTown",
      "Bánh trà Bá Tước việt quất",
      "CakewaiTown giao hàng 30 phút",
      "Bánh tươi ngon Thủ Đức",
      "Mua bánh ngọt ở Làng Đại Học",
      "Dịch vụ giao bánh sinh viên",
      "CakewaiTown KTX Thủ Đức",
      "Bánh giỏ quýt CakewaiTown",
      "CakewaiTown địa chỉ Thủ Đức",
      "Bánh ngọt cho sinh viên",
      "Bánh ngọt giao nhanh TP Thủ Đức",
      "Bánh ngọt khu A khu B",
    ],
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
    keywords: [
      "Bánh sinh nhật in hình",
      "Bánh sinh nhật theo yêu cầu",
      "Bánh sinh nhật AI CakewaiTown",
      "Mua bánh sinh nhật in hình",
      "In hình lên bánh sinh nhật",
      "Bánh sinh nhật độc đáo",
      "Bánh sinh nhật cá nhân hóa",
      "Bánh sinh nhật thú cưng",
      "Bánh sinh nhật in ảnh",
      "CakewaiTown bánh sinh nhật AI",
      "Thiết kế bánh sinh nhật AI",
      "Đặt bánh sinh nhật online",
      "Bánh sinh nhật đẹp Thủ Đức",
      "Giao bánh sinh nhật tận nơi",
      "CakewaiTown dịch vụ bánh sinh nhật",
      "Bánh sinh nhật kỷ niệm",
      "Bánh sinh nhật sáng tạo",
      "Công nghệ AI làm bánh sinh nhật",
      "Bánh sinh nhật phong cách cá nhân",
      "Bánh sinh nhật giao nhanh",
    ],
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
    keywords: [
      "bánh mì Pháp",
      "bánh mì baguette",
      "bánh mì Pháp chuẩn vị",
      "bánh mì giòn tan",
      "bánh mì thủ công",
      "bánh mì Paris",
      "bánh mì croissant",
      "cửa hàng bánh mì gần đây",
      "bánh mì nhập khẩu Pháp",
      "bánh mì ngon TP HCM",
      "CakewaiTown bánh mì",
      "đặt bánh mì online",
      "bánh mì giao hàng tận nơi",
    ],
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
    id: "news23",
    image: "/images/images_new/news23.png",
    date: "2025-05-20",
    title: "Hướng dẫn làm bánh giỏ quýt tại nhà",
    description:
      "Bánh giỏ quýt với vị ngọt thanh của quýt và lớp vỏ mềm mịn sẽ là món bánh tuyệt vời để bạn tự tay thực hiện tại nhà. Cùng CakewaiTown vào bếp nhé!",
    author: "CakewaiTown",
    keywords: [
      "bánh giỏ quýt",
      "hướng dẫn làm bánh giỏ quýt",
      "bánh quýt tại nhà",
      "công thức bánh giỏ quýt",
      "bánh quýt ngọt thanh",
      "làm bánh tại nhà",
      "bánh mềm mịn",
      "CakewaiTown bánh quýt",
      "bánh tự làm ngon",
      "cách làm bánh quýt đơn giản",
      "bánh quýt thơm ngon",
      "bánh quýt mềm mịn",
      "bánh giỏ quýt siêu xịn",
    ],
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-orange-500 mb-4">
    🍊 Hướng Dẫn Làm Bánh Giỏ Quýt Tại Nhà – Ngọt Thanh & Thơm Mát!
  </h2>

  <Image src="/images/images_new/news23.png" alt="Hướng dẫn làm bánh giỏ quýt" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Đây là sản phẩm tâm đắc và bán chạy bậc nhất tại CakewaiTown, hôm nay nhà CakewaiTown xin bật mí công thức đơn giản để làm ra chiếc bánh siêu xịn mịn này. Sự kết hợp giữa lớp vỏ mềm mịn và nhân quýt ngọt thanh tạo nên một chiếc bánh vừa lạ miệng vừa hấp dẫn.
  </p>

  <div class="mt-6">
    <h3 class="text-xl font-semibold text-orange-600">🍊 Nguyên liệu cần chuẩn bị:</h3>
    <ul class="mt-2 list-disc list-inside space-y-1">
      <li>200g bột mì đa dụng</li>
      <li>100ml nước cốt quýt tươi</li>
      <li>50g đường trắng</li>
      <li>30g bơ lạt</li>
      <li>1 thìa cà phê men nở</li>
      <li>Một chút muối</li>
    </ul>
  </div>

  <div class="mt-6">
    <h3 class="text-xl font-semibold text-orange-600">👩‍🍳 Các bước thực hiện:</h3>
    <ol class="list-decimal list-inside space-y-2 mt-2">
      <li>Trộn đều bột mì, đường, muối và men nở trong một tô lớn.</li>
      <li>Thêm nước cốt quýt và bơ lạt vào, nhồi đều tay đến khi bột mịn và không dính.</li>
      <li>Ủ bột khoảng 1 tiếng để bột nở gấp đôi.</li>
      <li>Chia bột thành từng phần nhỏ, tạo hình như “giỏ quýt” và cho nhân quýt vào giữa.</li>
      <li>Nướng bánh ở 180°C trong 20-25 phút hoặc cho đến khi vàng đều.</li>
    </ol>
  </div>

  <p class="mt-6 text-lg text-center font-medium">
    ✨ Chỉ với vài bước đơn giản, bạn đã có ngay những chiếc bánh giỏ quýt thơm lừng, mềm mại và đầy hấp dẫn để chiêu đãi người thân!
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p>🛒 Order: <a href="https://cakewaitown.com/detailed/banh-gio-quyt" class="text-blue-600">cakewaitown.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 Gửi trọn yêu thương trong từng chiếc bánh bạn tự tay làm!</p>
  </div>
</div>
`,
  },
  {
    id: "news24",
    image: "/images/images_new/news24.png",
    date: "2025-05-21",
    title: "Top 3 cách hiệu quả bảo quản bánh kem khỏi “ruồi bu kiến đậu”",
    description:
      "Bạn vừa mua một chiếc bánh kem xinh xắn nhưng lại lo lắng vì thời tiết nóng và côn trùng? Cùng CakewaiTown khám phá 3 mẹo cực đơn giản để giữ bánh luôn thơm ngon, sạch sẽ!",
    author: "CakewaiTown",
    keywords: [
      "bảo quản bánh kem",
      "bảo quản bánh kem khỏi ruồi",
      "bảo quản bánh kem khỏi kiến",
      "cách giữ bánh kem sạch",
      "mẹo bảo quản bánh kem",
      "bảo quản bánh kem đúng cách",
      "hộp bảo quản bánh kem",
      "bảo quản bánh kem trong tủ lạnh",
      "chống ruồi kiến cho bánh kem",
      "bảo quản bánh kem ngon",
      "bánh kem không bị kiến đậu",
      "bí quyết bảo quản bánh kem",
      "bảo quản bánh kem CakewaiTown",
    ],
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-rose-600 mb-4">
     Top 3 Cách Hiệu Quả Bảo Quản Bánh Kem Khỏi “Ruồi Bu Kiến Đậu”
  </h2>


  <p class="text-lg text-center">
    Thời tiết nóng bức và không khí ẩm dễ khiến bánh kem nhanh chảy, đồng thời thu hút ruồi và kiến. Nhưng đừng lo! Chỉ cần áp dụng 3 cách đơn giản sau, bạn có thể giữ bánh luôn sạch sẽ và thơm ngon.
  </p>

  <div class="mt-6">
    <h3 class="text-xl font-semibold text-rose-500">1. Đậy kín bằng hộp bảo quản chuyên dụng</h3>
    <p class="mt-2">
      Sử dụng hộp nhựa hoặc mica đậy kín là cách đơn giản nhất để ngăn ruồi, kiến tiếp xúc với bánh. Ưu tiên chọn loại có khóa chặt và độ trong suốt để dễ kiểm tra bên trong.
    </p>
  </div>

  <div class="mt-6">
    <h3 class="text-xl font-semibold text-rose-500">2. Bảo quản trong tủ lạnh đúng cách</h3>
    <p class="mt-2">
      Luôn để bánh trong ngăn mát tủ lạnh ở nhiệt độ từ 2–6°C. Tránh để bánh gần thực phẩm có mùi mạnh (như tỏi, hành) để giữ hương vị nguyên bản. Nếu bánh cần trang trí trước tiệc, hãy lấy ra trước 20 phút để kem mềm lại tự nhiên.
    </p>
  </div>

  <div class="mt-6">
    <h3 class="text-xl font-semibold text-rose-500">3. Sử dụng mẹo dân gian chống kiến</h3>
    <p class="mt-2">
      Bạn có thể đặt chiếc bánh trên đĩa lớn, rồi đổ một ít nước xung quanh phần đáy đĩa tạo thành “rãnh nước” – kiến sẽ không vượt qua. Hoặc rắc vài lát chanh/một ít tinh dầu bạc hà gần bánh – côn trùng cực kỳ “ngán” mùi này!
    </p>
  </div>

  <p class="mt-6 text-center text-lg font-medium">
    ✅ Một chiếc bánh đẹp xinh sẽ càng trọn vẹn hơn nếu được bảo quản đúng cách. Áp dụng ngay để chiếc bánh của bạn luôn hoàn hảo cho mọi dịp nhé!
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p>🛒 Order: <a href="https://cakewaitown.com/category/birthday" class="text-blue-600">cakewaitown.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 Gửi trọn yêu thương trong từng chiếc bánh – và từng mẹo nhỏ bạn cần biết!</p>
  </div>
</div>
`,
  },
  {
    id: "news25",
    image: "/images/images_new/news25.png",
    date: "2025-05-22",
    title: "Top các bánh cháu yêu mừng thọ Ông Bà",
    description:
      "Bánh cookies mừng thọ là món quà đầy ý nghĩa, mang theo tình cảm chân thành và lời chúc sức khỏe, trường thọ gửi đến ông bà trong ngày đặc biệt.",
    author: "CakewaiTown",
    keywords: [
      "bánh cookies mừng thọ",
      "bánh mừng thọ ông bà",
      "bánh quà tặng ông bà",
      "bánh cookies ý nghĩa",
      "bánh mừng thọ ngon",
      "bánh dành cho người lớn tuổi",
      "bánh quà mừng thọ",
      "bánh cookies CakewaiTown",
      "quà tặng sức khỏe ông bà",
      "bánh trang trí chữ thọ",
      "bánh cookies đa dạng vị",
      "bánh ngũ cốc rong biển",
      "bánh ruốc thịt cay",
      "bánh chanh dây thơm ngon",
      "bánh cream cheese mềm mịn",
      "bánh biscotti trái cây hạt",
    ],
    contentHtml: `
<div class="text-black">
  <h2 class="text-2xl font-bold text-center text-amber-600 mb-4">
    🎉 Bánh Cookies Mừng Thọ Ông Bà – Ngọt Ngào Lời Chúc Phúc
  </h2>

  <Image src="/images/images_new/cook_1.png" alt="Bánh cookies mừng thọ ông bà CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Mỗi dịp mừng thọ không chỉ là thời khắc sum họp gia đình, mà còn là cơ hội để gửi đến ông bà những lời chúc tốt đẹp nhất. Và còn gì tinh tế hơn một hộp <strong>bánh cookies mừng thọ</strong> – vừa ngon miệng, vừa ý nghĩa?
  </p>

  <p class="mt-4">
    Những chiếc cookies nhỏ xinh được trang trí họa tiết như chữ “Thọ”, hình hoa mai, hay sắc đỏ vàng truyền thống – tất cả được làm từ những nguyên liệu tự nhiên, an toàn cho sức khỏe người lớn tuổi.
  </p>

  <div class="bg-amber-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-amber-700">💝 Vì sao bánh cookies mừng thọ là lựa chọn lý tưởng?</h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🎂 Hình dáng đa dạng, dễ thương, gợi sự ấm áp và may mắn.</li>
      <li>🧧 Có thể cá nhân hóa lời chúc, in tên ông bà lên từng chiếc bánh.</li>
      <li>🥰 Vị bơ sữa nhẹ nhàng, ngọt dịu – phù hợp khẩu vị người lớn tuổi.</li>
    </ul>
  </div>

  <div class="bg-orange-50 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-orange-700 text-center">🍪 Gợi ý các vị bánh cookies đặc biệt tại CakewaiTown:</h3>
    <ul class="mt-3 list-disc list-inside space-y-1 text-base">
      <li><strong>Grain Seaweed Cookie</strong> – Bánh ngũ cốc rong biển, thanh đạm và lạ miệng.</li>
      <li><strong>Spicy Meat Floss Cookie</strong> – Bánh mặn cay nhẹ với ruốc thịt, rất được các cụ yêu thích.</li>
      <li><strong>Passion Fruit Cookie</strong> – Vị chua chua thơm thơm từ chanh dây, giúp kích thích vị giác.</li>
      <li><strong>Cream Cheese Cookie</strong> – Mềm mịn, béo nhẹ và cực kỳ “gây nghiện”.</li>
      <li><strong>Fruits and Nuts Biscotti</strong> – Bánh khô giòn với hạt và trái cây khô, lý tưởng để dùng kèm trà nóng.</li>
    </ul>
  </div>

  <p class="mt-6 text-center text-lg font-medium">
    Một món quà nhỏ nhưng chứa đựng cả tình yêu thương – hãy để <strong>CakewaiTown</strong> cùng bạn tạo nên khoảnh khắc đáng nhớ trong ngày mừng thọ ông bà nhé!
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">CakewaiTown</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p>🛒 Order: <a href="https://cakewaitown.com/category/cookie" class="text-blue-600">cakewaitown.com</a></p>
    <p class="mt-2 text-amber-600 font-semibold">💛 Gửi trọn yêu thương trong từng chiếc bánh – đặc biệt là những chiếc bánh dành cho người bạn yêu quý nhất.</p>
  </div>
</div>
`,
  },
  {
    id: "news26",
    image: "/images/images_new/news26.png",
    date: "2025-05-24",
    title: "Sự khác nhau giữa bánh mì và bánh mặn",
    description:
      "Bánh mì và bánh mặn có gì khác nhau? Tìm hiểu chi tiết về đặc điểm, cách chế biến và công dụng của hai loại bánh phổ biến này.",
    author: "Phước Lộc",
    contentHtml: `
  <div class="text-black">
  <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
    Bánh mì và Bánh mặn khác nhau như thế nào?
  </h2>
  <img src="/images/images_new/news26.png" alt="So sánh bánh mì và bánh mặn" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="space-y-4 text-justify leading-relaxed">
    <p>
      <strong>Bánh mì</strong> và <strong>bánh mặn</strong> là hai loại bánh phổ biến trong ẩm thực Việt Nam. Tuy nhiên, không phải ai cũng hiểu rõ sự khác biệt giữa chúng. Hãy cùng CakewaiTown tìm hiểu chi tiết về hai loại bánh này để lựa chọn món phù hợp với khẩu vị của bạn nhé!
    </p>

    <h3 class="text-xl font-semibold text-purple-600 mt-6">Bánh Mì Là Gì?</h3>
    <p>
      Bánh mì là loại bánh làm từ bột mì, men nở, nước và muối. Sau khi nhào và ủ, bánh được nướng ở nhiệt độ cao để tạo lớp vỏ giòn đặc trưng. Bên trong mềm xốp, bánh mì thường được dùng kèm với nhiều loại nhân như pate, thịt, trứng, rau củ…
    </p>
    <ul class="list-disc list-inside ml-4">
      <li>Nguyên liệu chính: bột mì, men nở, nước, muối</li>
      <li>Cách chế biến: nướng ở nhiệt độ cao</li>
      <li>Sử dụng: thường dùng làm món chính, ăn sáng</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-600 mt-6">Bánh Mặn Là Gì?</h3>
    <p>
      Bánh mặn là thuật ngữ chỉ các loại bánh có nhân hoặc vị mặn. Loại bánh này có thể làm từ nhiều loại bột khác nhau như bột mì, bột gạo, bột năng… Cách chế biến đa dạng: hấp, chiên hoặc nướng. Bánh mặn thường dùng làm món ăn nhẹ hoặc ăn vặt.
    </p>
    <ul class="list-disc list-inside ml-4">
      <li>Nguyên liệu đa dạng: bột mì, bột gạo, trứng, nhân mặn</li>
      <li>Cách chế biến: hấp, chiên, nướng</li>
      <li>Sử dụng: món ăn vặt, ăn chơi</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-600 mt-6">Bảng So Sánh Bánh Mì Và Bánh Mặn</h3>
    <div class="overflow-x-auto">
      <table class="table-auto border border-gray-300 w-full text-sm text-left mt-2">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-4 py-2">Tiêu chí</th>
            <th class="border px-4 py-2">Bánh mì</th>
            <th class="border px-4 py-2">Bánh mặn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Nguyên liệu chính</td>
            <td class="border px-4 py-2">Bột mì, men nở</td>
            <td class="border px-4 py-2">Bột mì, bột gạo, trứng, nhân mặn</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Cách chế biến</td>
            <td class="border px-4 py-2">Nướng</td>
            <td class="border px-4 py-2">Hấp, chiên, nướng</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Hương vị</td>
            <td class="border px-4 py-2">Vị nhạt, ăn kèm nhân</td>
            <td class="border px-4 py-2">Có vị mặn từ nhân</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Công dụng</td>
            <td class="border px-4 py-2">Món chính</td>
            <td class="border px-4 py-2">Món phụ, ăn vặt</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-600 mt-6">Nên Chọn Bánh Mì Hay Bánh Mặn?</h3>
    <p>
      Việc lựa chọn giữa bánh mì và bánh mặn phụ thuộc vào nhu cầu sử dụng của bạn. Nếu bạn cần một bữa ăn chính, bánh mì với nhân đầy đủ dinh dưỡng là lựa chọn tuyệt vời. Nếu muốn một món nhẹ nhàng, dễ ăn, bánh mặn sẽ làm hài lòng bạn.
    </p>

    <p>
      Dù là bánh mì hay bánh mặn, mỗi loại bánh đều mang hương vị và nét đặc trưng riêng, góp phần làm phong phú thêm nền ẩm thực Việt.
    </p>
  </div>

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
      "phân biệt bánh mì và bánh mặn, so sánh bánh mì với bánh mặn, bánh mì là gì, bánh mặn là gì, đặc điểm của bánh mặn, đặc điểm của bánh mì",
  },
  {
    id: "news27",
    image: "/images/images_new/news27.png",
    date: "2025-05-24",
    title: " Top những bánh ngọt ít calo tại CakewaiTown",
    description:
      "Khám phá các loại bánh ngọt ít calo tại CakewaiTown, bao gồm Passion Mousse Cheesecake, Tiramisu Mâm Xôi, High Fiber Bread và nhiều loại bánh ngon lành mạnh khác.",
    author: "Phước Lộc",
    contentHtml: `
    <div class="text-black">
  <h2 class="text-2xl font-bold text-center text-purple-500 mb-4">
    Top những loại bánh ngọt ít calo cực hot tại CakewaiTown
  </h2>
  <Image src="/images/images_new/news27.png" alt="Top bánh ngọt ít calo" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="mb-4">
    Với xu hướng ăn uống lành mạnh ngày càng phổ biến, việc lựa chọn các loại bánh ngọt ít calo nhưng vẫn ngon miệng là điều mà nhiều thực khách quan tâm. Dưới đây là những lựa chọn bánh ngọt ít calo tại <strong>CakewaiTown</strong> – vừa đẹp mắt, vừa tốt cho sức khỏe.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">1. Bánh kem cam sữa chua mật ong</h3>
  <p class="mb-4">
    Với lớp mousse sữa chua nhẹ nhàng kết hợp cùng cam tươi và mật ong nguyên chất, chiếc bánh này không chỉ thanh mát mà còn ít béo, ít đường. Sự cân bằng giữa vị chua và ngọt giúp giảm cảm giác thèm ăn mà vẫn thưởng thức được vị ngon khó cưỡng.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">2. Passion Mousse Cheesecake</h3>
  <p class="mb-4">
    Với lớp mousse chanh dây mát lạnh phủ trên nền bánh phô mai mềm mịn, bánh Passion Mousse Cheesecake không sử dụng quá nhiều đường hoặc kem béo, giúp giảm thiểu lượng calo đáng kể. Đây là lựa chọn lý tưởng cho người đang ăn kiêng.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">3. Bánh Tiramisu Mâm Xôi</h3>
  <p class="mb-4">
    Vị béo nhẹ của kem mascarpone được cân bằng với độ chua tự nhiên từ mâm xôi tươi, tạo nên chiếc bánh Tiramisu mâm xôi thanh mát, ít ngọt. Tiramisu phiên bản này được làm ít đường hơn so với truyền thống, phù hợp cho thực đơn ít calo.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">4. Apple and Vanilla Tea Cake</h3>
  <p class="mb-4">
    Một chiếc bánh đơn giản nhưng đầy dinh dưỡng, làm từ táo tươi và vani, sử dụng ít bơ và đường. Đây là lựa chọn hoàn hảo cho những ai yêu thích bánh trái cây mà vẫn muốn kiểm soát lượng calo nạp vào.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">5. High Fiber Bread</h3>
  <p class="mb-4">
    Không phải là bánh ngọt truyền thống, nhưng High Fiber Bread vẫn có thể kết hợp cùng mứt trái cây ít đường hoặc bơ hạnh nhân để trở thành món tráng miệng lý tưởng cho người ăn kiêng. Với lượng chất xơ cao và calo thấp, bánh này rất phù hợp cho người kiểm soát cân nặng.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">6. Su Kem Hạt Phỉ (Hazelnut Cream Puff)</h3>
  <p class="mb-4">
    Dù là bánh su, nhưng phiên bản này tại CakewaiTown sử dụng lớp kem hạt phỉ ít béo và không quá ngọt. Nhỏ gọn, nhẹ nhàng và ít calo – đây là món ăn vặt hoàn hảo cho những ai vừa muốn ăn ngon, vừa muốn khỏe mạnh.
  </p>

  <h3 class="text-xl font-semibold text-purple-600 mt-6 mb-2">7. Fruits and Nuts Biscotti</h3>
  <p class="mb-4">
    Bánh biscotti nướng giòn với trái cây khô và các loại hạt, không dùng bơ hoặc dầu, chứa rất ít calo. Đây là lựa chọn tuyệt vời cho người đang ăn clean hoặc theo chế độ low-carb.
  </p>

  <p class="mt-6">
    Dù đang trong quá trình giảm cân hay chỉ đơn giản là muốn có một chế độ ăn uống lành mạnh hơn, bạn hoàn toàn có thể yên tâm thưởng thức những chiếc bánh ít calo nhưng vẫn ngon miệng tại CakewaiTown. Hãy ghé qua và trải nghiệm sự khác biệt!
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
      "bánh ít calo, bánh ngọt healthy, bánh mousse, bánh cheesecake ít béo, CakewaiTown, bánh ngọt giảm cân",
  },

  {
    id: "news28",
    image: "/images/images_new/news28.png",
    date: "2025-05-23",
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
    date: "2025-05-24",
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
  {
    id: "news30",
    image: "/images/images_new/news30.png",
    date: "2025-05-30",
    title:
      "Đặt Bánh Liên Hoan Cuối Năm Cho Công Ty - Gửi Gắm Lời Tri Ân Qua Từng Vị Ngọt",
    description:
      "Những dịp cuối năm, người ta thường loay hoay tất bật chuẩn bị đón năm mới. Song. chúng ta cũng không nên quên rằng ăn mừng cuối năm cũng rất quan trọng, đánh dấu một năm làm việc thành công!",
    author: "Hoài Bảo",
    contentHtml: `<div class="text-black">
  <h1 class="text-2xl font-bold text-center text-purple-500 mb-4">
    🎉 Đặt Bánh Liên Hoan Cuối Năm Cho Công Ty – Gửi Gắm Lời Tri Ân Qua Từng Vị Ngọt 🎉
  </h1>

  <Image src="/images/images_new/news20.png" alt="Bánh liên hoan cuối năm cho công ty" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Mỗi dịp <strong>liên hoan cuối năm</strong>, chiếc bánh ngọt không chỉ là món tráng miệng, mà còn là <strong>biểu tượng tinh thần</strong>, thay lời cảm ơn gửi đến tập thể đã đồng hành trong suốt một năm vừa qua.
  </p>

  <p class="mt-4">
    Việc <strong>đặt bánh liên hoan cuối năm cho công ty</strong> không còn đơn thuần là một thói quen – đó là cách để gắn kết, tri ân và tạo nên kỷ niệm đáng nhớ trong bữa <strong>tiệc tất niên</strong>.
  </p>

  <div class="bg-purple-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-purple-600">
      🎯 Vì sao nên đặt bánh cho tiệc liên hoan cuối năm?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>✅ Tạo điểm nhấn cho bữa tiệc: Chiếc bánh giúp khoảnh khắc tổng kết trở nên trang trọng và đáng nhớ hơn.</li>
      <li>✅ Truyền tải thông điệp tri ân: Trang trí bánh bằng thông điệp “Cảm ơn vì đã đồng hành” hoặc logo công ty.</li>
      <li>✅ Gắn kết tập thể: Cùng nhau cắt bánh, chia sẻ ngọt ngào – là lúc nhìn lại hành trình đã qua.</li>
    </ul>
  </div>

  <Image src="/images/images_new/news30.png" alt="Các mẫu bánh ngọt cho tiệc liên hoan cuối năm" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="bg-yellow-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-yellow-600">
      🍰 Những mẫu bánh phù hợp cho tiệc tất niên công ty
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🎂 Bánh cỡ lớn 2-3 tầng: Sang trọng, phù hợp công ty đông người.</li>
      <li>🍰 Bánh vuông hoặc chữ nhật: Dễ chia phần, tiện lợi.</li>
      <li>🧁 Cupcake theo bộ: Dễ bày trí, phù hợp buổi tiệc nhỏ.</li>
      <li>💬 Gợi ý trang trí: logo công ty, biểu tượng năm mới, hoa văn kim tuyến, thông điệp tri ân.</li>
    </ul>
  </div>

  <div class="bg-blue-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-blue-600">
      📌 Lưu ý khi đặt bánh liên hoan cuối năm
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>📅 Đặt sớm ít nhất 3-5 ngày, nhất là giai đoạn cao điểm cuối năm.</li>
      <li>📍 Chọn tiệm bánh uy tín, có kinh nghiệm phục vụ công ty.</li>
      <li>🧾 Yêu cầu hóa đơn / biên nhận rõ ràng nếu công ty cần xuất chi.</li>
      <li>🎁 Có thể kèm thiệp chúc mừng hoặc hộp quà mini.</li>
    </ul>
  </div>

  <Image src="/images/mockup-cakewaitown-company-cakes.png" alt="Đặt bánh cuối năm CakewaiTown" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="bg-green-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-green-600">
      🏆 Gợi ý địa chỉ đặt bánh uy tín cho công ty
    </h3>
    <p class="mt-3">
      <strong>CakewaiTown</strong> – Chuyên bánh cho sự kiện và tiệc cuối năm:
    </p>
    <ul class="mt-2 list-disc list-inside space-y-2">
      <li>✨ Giao bánh tận nơi tại TP.HCM</li>
      <li>✨ Có hơn 30 mẫu bánh chuyên cho tiệc công ty</li>
      <li>✨ Nhận trang trí logo riêng, viết thông điệp cá nhân hóa</li>
      <li>✨ Giá tốt cho đơn hàng số lượng lớn</li>
    </ul>

    <p class="mt-4">📞 Hotline: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>🌐 Website: <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">cakewaitown.com</a></p>
  </div>

  <div class="mt-6 text-center font-semibold text-lg text-purple-700">
    Một chiếc bánh ngọt nhỏ, nhưng mang trong mình ý nghĩa to lớn – là món quà tri ân, là kết thúc đẹp cho hành trình đã qua, và là khởi đầu cho một năm mới đầy hy vọng.
  </div>

  <p class="mt-4 text-center">
    👉 <strong>Liên hệ đặt bánh ngay hôm nay</strong> để bữa tiệc của bạn thêm trọn vẹn và ngọt ngào nhé!
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
    keywords: "dat banh tiec lien hoan, dat banh kem, dat banh kem cho cong ty",
  },
  {
    id: "news31",
    image: "/images/images_new/news31.png",
    date: "2025-05-30",
    title: "Siêu hot 2025 - Mẫu bánh kem tiệc cưới đã có ở Cakewai Town",
    description:
      "Sau bao ngày mong ngóng từ CakewaiFan, chúng tôi vừa ra mắt mẫu bánh kem dành riêng cho tiệc cưới hỏi, mang dấu ấn riêng của tiệc cưới.",
    author: "Hoài Bảo",
    contentHtml: `<div class="text-black">
  <h1 class="text-2xl font-bold text-center text-pink-500 mb-4">
    🎊 Siêu hot 2025 – Mẫu Bánh Kem Tiệc Cưới Đẹp Lung Linh Đã Có Mặt Tại Cakewai Town 🎊
  </h1>

  <Image src="/images/images_new/news11.png" alt="Bánh kem tiệc cưới tại Cakewai Town" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Ngày cưới là một trong những khoảnh khắc thiêng liêng và đáng nhớ nhất cuộc đời, và không thể thiếu trong bữa tiệc hạnh phúc ấy chính là <strong>bánh kem tiệc cưới</strong> – biểu tượng cho sự ngọt ngào, viên mãn và khởi đầu hạnh phúc.
  </p>

  <p class="mt-4">
    Tại <strong>Cakewai Town</strong>, chúng tôi tự hào ra mắt bộ sưu tập <strong>bánh kem tiệc cưới 2025</strong>, mang đến cho các cặp đôi những lựa chọn hiện đại, tinh tế và đầy ý nghĩa trong ngày trọng đại.
  </p>

  <div class="bg-pink-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-pink-600">
      💍 Vì sao chiếc bánh kem cho đám cưới lại quan trọng?
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>✅ Là điểm nhấn sang trọng trong không gian <strong>tiệc cưới</strong></li>
      <li>✅ Thể hiện cá tính, phong cách của cô dâu – chú rể qua thiết kế riêng biệt</li>
      <li>✅ Gắn kết khoảnh khắc “cắt bánh” cùng nhau – biểu tượng cho sự sẻ chia trọn đời</li>
      <li>✅ Tạo điểm nhấn hình ảnh ấn tượng cho album cưới và video ngày trọng đại</li>
    </ul>
  </div>

  <Image src="/images/images_new/news31.png" alt="Mẫu bánh kem đám cưới 2025" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="bg-white border border-pink-300 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-pink-600">
      🎂 Mẫu Bánh Kem Tiệc Cưới 2025 Gây Sốt Tại Cakewai Town
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🌸 <strong>Bánh cưới trang trí hoa tươi</strong> – nhẹ nhàng, tinh tế, mang hơi thở thiên nhiên</li>
      <li>💎 <strong>Bánh kem tone trắng – vàng ánh kim</strong> – sang trọng, phù hợp tiệc cưới nhà hàng</li>
      <li>🎀 <strong>Bánh cưới pastel nhiều tầng</strong> – dịu dàng, lý tưởng cho concept cưới ngoài trời</li>
      <li>🎨 <strong>Bánh cưới viết tên cô dâu – chú rể</strong> kèm thông điệp cá nhân hóa</li>
    </ul>
  </div>

  <p class="mt-6 text-lg">
    Khi <strong>đặt bánh kem tiệc cưới</strong>, hãy lưu ý:
  </p>
  <ul class="list-disc list-inside space-y-2">
    <li>📆 Đặt trước ít nhất 5 – 7 ngày để đảm bảo thiết kế đúng yêu cầu</li>
    <li>🏷️ Chọn kích cỡ bánh phù hợp số lượng khách mời</li>
    <li>🎁 Có thể yêu cầu trang trí tên, ngày cưới hoặc biểu tượng riêng</li>
    <li>🧁 Kết hợp bánh lớn và cupcake để tiện chia phần</li>
  </ul>

  <p class="mt-6 text-center font-semibold text-lg">
    💗 Đặt bánh cưới đẹp – bắt trọn khoảnh khắc yêu thương 💗
  </p>

  <p class="mt-4">
    Tại <strong>Cakewai Town</strong>, chúng tôi cam kết mang đến những mẫu <strong>bánh kem tiệc cưới</strong> không chỉ đẹp về hình thức mà còn chất lượng vượt trội:
  </p>

  <ul class="list-disc list-inside space-y-2">
    <li>✔️ Miễn phí tư vấn mẫu bánh theo phong cách cưới</li>
    <li>✔️ Giao bánh đúng giờ, đúng địa điểm tại TP.HCM</li>
    <li>✔️ Chất lượng bánh mềm – xốp – ngọt thanh – an toàn cho sức khỏe</li>
    <li>✔️ Nhận làm bánh theo concept cá nhân hóa riêng cho mỗi cặp đôi</li>
  </ul>

  <p class="mt-4 text-center">
    👉 Xem thêm và đặt mẫu bánh cưới tại <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a>
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">Cakewai Town</p>
    <p>✨ Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>✨ Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-pink-600 font-semibold">💝 Cakewai Town – Gửi trọn ngọt ngào vào ngày trọng đại của bạn!</p>
  </div>
</div>
`,
    keywords:
      "mau banh kem tiec cuoi, banh kem ngay cuoi, tiec cuoi, banh kem, dat banh cho tiec cuoi",
  },
  {
    id: "news32",
    image: "/images/images_new/news32.png",
    date: "2025-05-30",
    title: "Đặt bánh kem đám hỏi - Tại sao không?",
    description:
      "Nhiều người thường quan tâm đến tiệc cưới mà hay bỏ qua đám hỏi - một truyền thống tốt đẹp của chúng ta. Đám hỏi thường sẽ không hoành tráng như tiệc cưới, tuy nhiên cũng cần phải có sự chuẩn bị chỉn chu cho nó.",
    author: "Hoài Bảo",
    contentHtml: `<div class="text-black mt-10">
  <h2 class="text-2xl font-bold text-center text-rose-500 mb-4">
    💒 Đặt Bánh Kem Đám Hỏi – Tại Sao Không?
  </h2>

  <Image src="/images/images_new/news21.png" alt="Bánh kem đám hỏi đẹp" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Nếu <strong>đám cưới</strong là đích đến, thì <strong>đám hỏi</strong> chính là cột mốc đầu tiên khẳng định mối quan hệ gắn kết giữa hai bên gia đình. Và giờ đây, bên cạnh trầu cau, mâm quả, thì <strong>bánh kem đám hỏi</strong> đang trở thành điểm nhấn được nhiều cặp đôi lựa chọn để làm nổi bật buổi lễ trang trọng này.
  </p>

  <div class="bg-rose-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-rose-600">
      🎁 Bánh Kem Đám Hỏi – Món Quà Ngọt Ngào Cho Ngày Trọng Đại
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>💖 Tô điểm thêm sự trang trọng cho bàn lễ gia tiên</li>
      <li>🌹 Là lời chúc ngọt ngào đến cặp đôi chuẩn bị bước vào cuộc sống hôn nhân</li>
      <li>📸 Tạo thêm góc chụp hình độc đáo trong không gian <strong>ngày đám hỏi</strong></li>
      <li>🎊 Gắn kết hai gia đình bằng hình ảnh chia sẻ và thưởng thức bánh kem cùng nhau</li>
    </ul>
  </div>

  <p class="mt-6">
    Không chỉ dành riêng cho <strong>lễ cưới</strong>, bánh kem giờ đây còn được “thiết kế riêng” cho lễ đính hôn với những mẫu <strong>bánh kem đám hỏi</strong> mang vẻ đẹp thanh nhã, nhẹ nhàng nhưng không kém phần sang trọng. Những tông màu như hồng pastel, đỏ đô hay trắng – vàng kim được ưu ái sử dụng để biểu trưng cho sự hòa hợp và may mắn.
  </p>

  <Image src="/images/images_new/news32.png" alt="Mẫu bánh kem đám hỏi sang trọng" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="bg-white border border-rose-300 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-rose-600">
      🌸 Gợi Ý Mẫu Bánh Kem Đám Hỏi Được Ưa Chuộng 2025
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🎀 <strong>Bánh kem hoa cưới mini</strong> – dành cho buổi lễ gia đình ấm cúng</li>
      <li>💌 <strong>Bánh có chữ “Lễ Đính Hôn” và tên hai bạn</strong> – đầy ý nghĩa</li>
      <li>💗 <strong>Bánh đôi trái tim</strong> – biểu tượng gắn kết tình yêu</li>
      <li>🌺 <strong>Bánh kết hợp mâm quả</strong> – sáng tạo, tiện lợi và trang trọng</li>
    </ul>
  </div>

  <p class="mt-6">
    Khi <strong>đặt bánh kem đám hỏi</strong> tại <strong>Cakewai Town</strong>, bạn có thể:
  </p>

  <ul class="list-disc list-inside space-y-2">
    <li>📝 Thiết kế mẫu bánh theo phong cách & gam màu phù hợp với tone trang trí</li>
    <li>📦 Chọn kích cỡ phù hợp với số lượng người tham dự</li>
    <li>📷 In ảnh, chữ hoặc biểu tượng tình yêu trực tiếp lên bánh</li>
    <li>🚚 Giao tận nơi đúng giờ trong khu vực TP.HCM và lân cận</li>
  </ul>

  <p class="mt-6 text-lg text-center font-semibold">
    🍰 Đặt bánh kem đám hỏi – Không chỉ là xu hướng, mà là lựa chọn đầy tinh tế 💝
  </p>

  <p class="mt-4">
    Hãy để <strong>Cakewai Town</strong> đồng hành cùng bạn trong từng khoảnh khắc trọng đại, từ <strong>đám hỏi</strong> đến <strong>lễ cưới</strong>. Chúng tôi không chỉ tạo ra những chiếc bánh đẹp mà còn là món quà mang đầy tình cảm và sự trân trọng.
  </p>

  <p class="mt-4 text-center">
    👉 Đặt ngay tại: <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a>
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">Cakewai Town</p>
    <p>🏡 Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>🏡 Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-rose-600 font-semibold">🎉 Cakewai Town – Đưa ngọt ngào đến từng nghi lễ yêu thương!</p>
  </div>
</div>
`,
    keywords:
      "dat banh hoi, banh kem dam hoi, tiec dam hoi, le ket hon, dat banh",
  },
  {
    id: "news33",
    image: "/images/images_new/news33.png",
    date: "2025-05-30",
    title:
      "Bánh sinh nhật giao trong ngày khu vực Thủ Đức? Uy tín tạo niềm tin",
    description:
      "Với thời đại công nghệ hiện nay, việc làm hài lòng khách hàng luôn được các nhà kinh doanh đặt lên hàng đầu. Và Cakewai Town luôn chú trọng điều đó, vì vậy bánh sinh nhật đặt tại Cakewai Town sẽ giao hỏa tốc ngay trong ngày đến tay khách hàng",
    author: "Hoài Bảo",
    contentHtml: `<div class="text-black mt-10">
  <h2 class="text-2xl font-bold text-center text-rose-500 mb-4">
    🎂 Bánh Sinh Nhật Giao Trong Ngày Khu Vực Thủ Đức? Uy Tín Tạo Niềm Tin
  </h2>

  <Image src="/images/images_new/news12.png" alt="Bánh sinh nhật giao trong ngày ở Thủ Đức" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <p class="text-lg text-center">
    Bạn cần <strong>đặt bánh sinh nhật giao trong ngày</strong> ở khu vực <strong>Thủ Đức</strong>? Gấp rút nhưng vẫn muốn có chiếc bánh tươi ngon, thiết kế đẹp và giao đúng giờ? <strong>Cakewai Town</strong> chính là nơi bạn có thể tin tưởng tuyệt đối.
  </p>

  <div class="bg-rose-100 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-rose-600">
      🚚 Giao Bánh Sinh Nhật Tận Nơi – Gấp Mấy Cũng Có
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>⚡ Đặt gấp – giao nhanh chỉ từ 2 giờ trong ngày</li>
      <li>🎨 Nhiều mẫu bánh sinh nhật sẵn có: đơn giản, cute, sang trọng</li>
      <li>🍓 Bánh luôn tươi mới, làm mới trong ngày, không đông lạnh</li>
      <li>📍 Phục vụ nhanh chóng khu vực Thủ Đức – Linh Trung – Bình Thọ – Tam Phú</li>
    </ul>
  </div>

  <p class="mt-6">
    Với hệ thống <strong>cửa hàng bánh sinh nhật tại Thủ Đức</strong>, chúng tôi đáp ứng mọi nhu cầu gấp rút: <strong>đặt bánh sinh nhật giao trong ngày</strong> cho người thân, bạn bè, đồng nghiệp. Dù là buổi trưa bất chợt nhận ra hôm nay là sinh nhật ai đó – chúng tôi cũng luôn sẵn sàng phục vụ.
  </p>

  <Image src="/images/images_new/news33.png" alt="Giao bánh sinh nhật tận nơi Thủ Đức" width="600px" class="mx-auto block my-5 w-full max-w-[600px]" />

  <div class="bg-white border border-rose-300 p-4 rounded-lg mt-6">
    <h3 class="text-xl font-semibold text-center text-rose-600">
      💡 Những Lý Do Nên Chọn Cakewai Town
    </h3>
    <ul class="mt-3 list-disc list-inside space-y-2">
      <li>🧁 Bánh làm thủ công – mỗi chiếc bánh là một tác phẩm riêng</li>
      <li>🕒 Giao nhanh nội khu Thủ Đức trong 1–3 giờ</li>
      <li>👨‍🍳 Đội ngũ làm bánh chuyên nghiệp, hỗ trợ tư vấn tận tình</li>
      <li>📦 Đóng gói kỹ, giữ bánh nguyên vẹn đến tay</li>
    </ul>
  </div>

  <p class="mt-6">
    Những dịp đặc biệt không nên chờ đợi – vì vậy dịch vụ <strong>giao bánh sinh nhật tận nơi trong ngày</strong> của chúng tôi ra đời để bạn luôn có thể gửi đi một lời chúc ngọt ngào dù chỉ còn vài giờ chuẩn bị.
  </p>

  <p class="mt-4 font-semibold text-center text-lg">
    🎁 Đặt bánh sinh nhật giao trong ngày – Món quà ngọt ngào, nhanh chóng và đầy ý nghĩa!
  </p>

  <p class="mt-4">
    Đừng lo lắng khi cần <strong>đặt bánh gấp trong ngày</strong>, hãy để <strong>Cakewai Town</strong> đồng hành cùng bạn. Hơn 95% khách hàng quay lại bởi sự uy tín, đúng hẹn và chất lượng bánh tuyệt vời.
  </p>

  <p class="mt-4 text-center">
    👉 Đặt ngay tại: <a href="https://cakewaitown.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://cakewaitown.com</a>
  </p>

  <div class="mt-6 text-center text-base">
    <p class="font-semibold">Cakewai Town</p>
    <p>🏡 Cơ sở 1: 371 Đ. Đoàn Kết, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>🏡 Cơ sở 2: 123 Đ. Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM</p>
    <p>📞 Liên hệ: <a href="tel:+84966888888" class="text-blue-600">+84 966 888888</a></p>
    <p>📩 Email: <a href="mailto:cakewaitown@gmail.com" class="text-blue-600">cakewaitown@gmail.com</a></p>
    <p class="mt-2 text-rose-600 font-semibold">🎂 Giao nhanh – Ngọt ngào – Đúng hẹn – Chọn Cakewai là đúng!</p>
  </div>
</div>
`,
    keywords:
      "dat banh giao trong ngay, dat banh sinh nhat giao trong ngay, giao hoa toc, ship nhanh chong, dat banh giao nhanh thu duc",
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
    keywords: news?.keywords ?? [],
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
