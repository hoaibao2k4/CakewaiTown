"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/authentic/signin"); // Chuyển hướng về trang đăng nhập
  }, [router]);

  return null; // Không hiển thị gì cả, chỉ để chuyển hướng
}



