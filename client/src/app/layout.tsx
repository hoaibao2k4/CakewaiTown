import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ReduxProvider } from "./reduxprovider";
import ModalWrapper from "./modalwapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CakewaiTown (Tận tụy - Chất lượng - Phụng sự) nơi chiếc bánh vẽ nên câu chuyện",
  description:
    'CakewaiTown một trang web trực tuyến về thương hiệu bánh ngọt uy tín được xây dựng dựa trên sự giao thoa giữa phong cách Á - Âu. Phục vụ đa dạng mẫu mã, hỗ trợ chuyên nghiệp tận tâm',
  robots: "index, follow",
  keywords:"CakewaiTown, bánh ngọt, bakery, bánh mềm mịn, đặt bánh online, khuyến mãi, bánh sinh nhật, minicakes, bánh mì, bánh mặn, bữa ăn nhẹ",
  openGraph: {
    title: 'CakewaiTown (Tận tụy - Chất lượng - Phụng sự)',
    description: 'CakewaiTown một trang web trực tuyến về thương hiệu bánh ngọt uy tín được xây dựng dựa trên sự giao thoa giữa phong cách Á - Âu. Phục vụ đa dạng mẫu mã, hỗ trợ chuyên nghiệp tận tâm',
    url: 'https://cakewaitown.com/',
    siteName: 'Website bánh ngọt',
    type: 'website',
    locale: 'vi_VN'
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  alternates: {
    canonical: "https://cakewaitown.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/flavicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ModalWrapper>
            <Header />
            <div>{children}</div>
            <Footer />
            <ToastContainer />
          </ModalWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
