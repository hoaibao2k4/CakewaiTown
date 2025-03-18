import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký - CakeWai",
  description: "Đăng ký để trở thành thành viên của đại gia đình CakeWai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
