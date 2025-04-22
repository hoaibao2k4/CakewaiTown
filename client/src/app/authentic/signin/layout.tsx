
import { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Đăng nhập - CakeWai',
  description: 'Đăng nhập để truy cập tài khoản của bạn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
        <>
               {children}
        </>            
  )
}