"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { requestPasswordUser } from "~/api/apiUser";

const Recovery_Email = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const handleRequest = async () => {
        if (email !== '') {
            try {
            const res = await requestPasswordUser(email);
              console.log(res);
              sessionStorage.setItem('recovery', 'true');
              router.push("/authentic/sent_email");
            } catch (err) {
              console.log(err);
            }
          }
          else {
            toast.error('Bạn chưa nhập email', {
              position: 'bottom-right',
              autoClose: 3000
            })
          }       
    }
    
    return (
        <div>
            <Head>
                <title>Quên mật khẩu - Đặt lại mật khẩu</title>
                <meta name="description" content="Nhập email để nhận liên kết đặt lại mật khẩu." />
            </Head>
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
                        <div className="flex h-12 w-11/12 items-center bg-[#455666]">
                            <p className="ml-5 text-sm text-slate-50">
                            Quên mật khẩu? Vui lòng nhập địa chỉ email bạn đã đăng ký. Bạn sẽ nhận được một liên kết tạo mật khẩu mới
                            qua email.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="text">Email</label>
                        <input
                            type="text"
                            className="mt-2 w-64 p-2 rounded-xl border border-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button
                            onClick={handleRequest}
                            className="my-6 rounded-lg bg-primary px-6 py-3 text-sm uppercase text-slate-50 hover:bg-secondary hover:text-black"
                        >
                            Đặt lại mật khẩu
                        </button>
                    </div>                                                            
                </div>
            </div>            
        </div>
    );
}

export default Recovery_Email;