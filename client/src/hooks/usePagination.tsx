"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { CreateCake } from "~/types";
function usePagination(data : CreateCake[]) {
    const itemsPerPage = 12;
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Lấy query page từ URL, mặc định là 1
    const queryPage = Math.max(parseInt(searchParams?.get("page") ?? "1", 10), 1);

    const [currentPage, setCurrentPage] = useState(
        maxPage === 0 ? 1 : Math.min(Math.max(queryPage, 1), maxPage)
    );

    // Khi query `mode` thay đổi, reset trang về 1
    useEffect(() => {
        setCurrentPage(1);
    }, [searchParams?.get("mode")]);

    // Cập nhật URL khi `currentPage` thay đổi
    useEffect(() => {
        if (!searchParams) return; // Kiểm tra searchParams có giá trị
    
        const params = new URLSearchParams(searchParams.toString()); 
        params.set("page", currentPage.toString());
    
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [currentPage, searchParams, pathname, replace]);
    

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };

    const next = () => {
        setCurrentPage((prev) => Math.min(prev + 1, maxPage));
    };

    const previous = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const jump = (page: number) => {
        const pageNumber = Math.max(1, Math.min(page, maxPage));
        setCurrentPage(pageNumber);
    };

    return { currentPage, maxPage, currentData, next, previous, jump, setCurrentPage };
}

export default usePagination;
