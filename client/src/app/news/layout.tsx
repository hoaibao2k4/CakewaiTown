import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức - CakewaiTown",
  description:
    "CakewaiTown cập nhật liên tục các thông tin nổi bật cùng với các sự kiện hấp dẫn mang đến cho khách hàng những trải nghiệm thú vị nhất",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
