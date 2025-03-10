
import { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Khôi phục thành công - CakeWai',
  description: 'Chúng tôi đã cung cấp mật khẩu qua email của bạn',
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