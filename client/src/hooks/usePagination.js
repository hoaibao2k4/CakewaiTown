"use client"
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
function usePagination(data) {
    const itemsPerPage = 12;
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const searchParams = useSearchParams();
    const queryPage = Math.max(parseInt(searchParams.get("page"), 10) || 1, 1);

    const [currentPage, setCurrentPage] = useState(
        maxPage === 0 ? 1 : Math.min(Math.max(queryPage, 1), maxPage)
    );
    const params = Object.fromEntries(searchParams.entries())['mode'];
    useEffect(() => {
        setCurrentPage(1)
    }, [params])

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());
        params.page = currentPage; 
    }, [currentPage, searchParams]);

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

    const jump = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage((prev) => Math.min(pageNumber, maxPage));
    };

    return { currentPage, maxPage, currentData, next, previous, jump, setCurrentPage };
}

export default usePagination;
