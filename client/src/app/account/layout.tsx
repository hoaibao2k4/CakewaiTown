'use client'
import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/Breadcrumb';
import { usePathname } from 'next/navigation';
import AccountSideBar from '~/components/Account/sidebar';

interface AccountLayoutProps {
    children?: React.ReactNode;
}

interface MenuMapping {
    [key: string]: {
        link: string;
        title: string;
    };
}

function AccountLayout({ children }: AccountLayoutProps) {
    const pathname = usePathname();
    const [currentKey, setCurrentKey] = useState("profile");
    //
    console.log(currentKey, children);
    const [breadCrumbItems, setBreadcrumbItems] = useState([
        { title: "Trang chủ", link: "/" },
        { title: "Tài khoản" },
    ]);

    const [pageTitle, setPageTitle] = useState("Tài khoản");

    const menuMapping: MenuMapping = {
        "profile": {
            link: "/account/profile",
            title: "Tài khoản"
        },
        "address": {
            link: "/account/address",
            title: "Địa chỉ giao hàng"
        },
        "change-password": {
            link: "/account/change-password",
            title: "Đổi mật khẩu"
        },
        "orders": {
            link: "/account/orders",
            title: "Đơn hàng"
        },
    };

    useEffect(() => {
        const savedKey = localStorage.getItem("currentKey");
        if (savedKey && menuMapping[savedKey]) {
            setCurrentKey(savedKey);
            const menu = menuMapping[savedKey];
            setBreadcrumbItems([
                { title: "Trang chủ", link: "/" },
                { title: menu.title, link: menu.link },
            ]);
            setPageTitle(menu.title);
        }
    }, []);

    useEffect(() => {
        const pathKey = pathname!.split('/').pop();
        if (pathKey && menuMapping[pathKey]) {
            setCurrentKey(pathKey);
            const menu = menuMapping[pathKey];
            setBreadcrumbItems([
                { title: "Trang chủ", link: "/" },
                { title: menu.title, link: menu.link },
            ]);
            setPageTitle(menu.title);
        }
    }, [pathname]);

    // const handleUpdateContent = (key: string) => {
    //     const menu = menuMapping[key];

    //     if (menu) {
    //         setCurrentKey(key);
    //         setBreadcrumbItems([
    //             { title: "Trang chủ", link: "/" },
    //             { title: menu.title, link: menu.link },
    //         ]);
    //         setPageTitle(menu.title);
    //     }
    // };

    return (
        <div className='mt-16 mx-[5rem] sm:mx-[2rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[5rem]'>
            <BreadCrumb items={breadCrumbItems} />
            <div className="text-center text-3xl md:text-5xl font-bold leading-tight md:leading-[72px] pt-4 md:pt-8">{pageTitle}</div>
            <AccountSideBar />
        </div>
    );
}

export default AccountLayout;