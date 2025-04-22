import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cakewaitown.com"),
  title: "Tin tức - CakewaiTown",
  description:
    "CakewaiTown cập nhật liên tục các thông tin nổi bật cùng với các sự kiện hấp dẫn mang đến cho khách hàng những trải nghiệm thú vị nhất",
  keywords:
    "bánh kem, tin tức CakewaiTown, sự kiện bánh ngọt, khuyến mãi bánh sinh nhật, giảm giá, thông báo, đặt bánh",
  openGraph: {
    title: "Tin tức - CakewaiTown",
    description: "CakewaiTown cập nhật liên tục các thông tin nổi bật cùng với các sự kiện hấp dẫn mang đến cho khách hàng những trải nghiệm thú vị nhất",
    type: "website",
    url: "https://cakewaitown.com/blogs",
    images: [{
        url: "https://cakewaitown.com/images/images_new/news7.png",
        width: 1200,
        height: 630,
        alt: "CakewaiTown tưng bừng khai trương chi nhánh Võ Văn Ngân",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cakewai_town",
    title: "Tin tức - CakewaiTown",
    description: "CakewaiTown cập nhật liên tục các thông tin nổi bật cùng với các sự kiện hấp dẫn mang đến cho khách hàng những trải nghiệm thú vị nhất",
    images: ["https://cakewaitown.com/images/images_new/news7.png"],
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
