
import { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Khôi phục mật khẩu - CakeWai',
  description: 'Tiến hành cung cấp email để chúng tôi có thể khôi phục mật khẩu của bạn',
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