import { useRouter } from "next/navigation";
import Link from "next/link";
import { url } from "inspector";
const Sent_Email = () => {
    const router = useRouter();
    return(
        <div className="mb-5 mt-16 h-fit w-full bg-slate-50">
            <div className="mx-[5rem]">
                <div className="flex h-11 items-center text-primary">
                    <div className="capitalize">
                        <Link href="/">Trang chủ </Link>
                        <span>&gt;&gt;</span>
                        <Link href="/authentic/recovery_email"> Quên mật khẩu </Link>
                    </div>
                </div>
                <div className="my-10">
                    <div className="flex h-12 w-full items-center bg-[#608C77]">
                        <p className="ml-5 text-sm text-slate-50">Email khôi phục mật khẩu đã được gửi.</p>
                    </div>
                </div>
                <p className="mr-6 text-base">
                    Một thư email khôi phục mật khẩu đã được gửi cho địa chỉ email tài khoản của bạn, nhưng có thể sẽ mất vài phút
                    để hiển thị trong Inbox của hộp thư. Vui lòng đợi ít nhất 10 phút trước khi gửi một yêu cầu khôi phục mật khẩu
                    khác.
                </p>
                <button onClick={() => router.push("/authentic/signIn")} className='px-6 py-3 bg-primary hover:bg-secondary text-slate-50 hover:text-black mt-4 rounded-lg'>Quay lại đăng nhập</button>
            </div>
        </div>
    );
}

export default Sent_Email;