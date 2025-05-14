import type { Metadata } from "next";
import "./globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ReduxProvider } from "./reduxprovider";
import ModalWrapper from "./modalwapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Loading from "~/components/animation";
import type { Viewport } from "next";
import { Roboto } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CakewaiTown - Bánh ngọt làng đại học",
  description:
    "CakewaiTown một trang web trực tuyến về thương hiệu bánh ngọt uy tín được xây dựng dựa trên sự giao thoa giữa phong cách Á - Âu. Phục vụ đa dạng mẫu mã, hỗ trợ chuyên nghiệp tận tâm",
  robots: "index, follow",
  keywords:
    "CakewaiTown, Cakewai, Cakewai Town, bánh ngọt làng đại học, banh ngot lang dai hoc, am thuc lang dai hoc, bánh ngọt, bakery, bánh mềm mịn, đặt bánh online, khuyến mãi, bánh sinh nhật, minicakes, bánh mì, bánh mặn, bữa ăn nhẹ",
  openGraph: {
    title: "CakewaiTown - Bánh ngọt làng đại học",
    description:
      "CakewaiTown một trang web trực tuyến về thương hiệu bánh ngọt uy tín được xây dựng dựa trên sự giao thoa giữa phong cách Á - Âu. Phục vụ đa dạng mẫu mã, hỗ trợ chuyên nghiệp tận tâm",
    url: "https://cakewaitown.com/",
    siteName: "Cakewai Town",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "https://cakewaitown.com/images/images_new/thum.png",
        width: 1200,
        height: 630,
        alt: "CakewaiTown tưng bừng khai trương chi nhánh Võ Văn Ngân",
      },
    ],
  },
  other: {
    "p:domain_verify": "ea3f9abd15e3766f3e62b9070a6d46ea",
  },

  alternates: {
    canonical: "https://cakewaitown.com",
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

export const viewPort: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/flavicon.svg" />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <ReduxProvider>
          <ModalWrapper>
            <Header />
            <Suspense fallback={<Loading />}>
              <div>{children}</div>
            </Suspense>
            <Footer />
            <ToastContainer />
          </ModalWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
