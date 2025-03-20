'use client'
import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import AccountSidebarContent from './SidebarContent';
import './index.css';

type MenuItem = Required<MenuProps>['items'][number];

const AccountSideBar = () => {
    const [currentKey, setCurrentKey] = useState(() => {
        const savedKey = localStorage.getItem("currentKey");
        return savedKey || 'profile';
    });
    useEffect(() => {
        setCurrentKey(currentKey);
    }, [currentKey]);
    useEffect(() => {
        localStorage.setItem("currentKey", currentKey);
    }, [currentKey]);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrentKey(e.key);
    };

    const items: MenuItem[] = [
        {
            label: <Link href="/account/profile">Hồ sơ</Link>,
            key: 'profile',
        },
        {
            label: <Link href="/account/address">Địa chỉ giao hàng</Link>,
            key: 'address',
        },
        {
            label: <Link href="/account/change-password">Đổi mật khẩu</Link>,
            key: 'change-password',
        },
        {
            label: <Link href="/account/orders">Đơn hàng</Link>,
            key: 'orders',
        },
    ];

    return (

        <div className="mt-16 mb-16 gap-[20px] flex flex-col md:flex-row md:items-start">
            <div className="[flex-basis:25%]">
                <Menu
                    onClick={onClick}
                    style={{ width: "100%" }}
                    selectedKeys={[currentKey]}
                    mode="vertical"
                    theme="light"
                    items={items}
                    getPopupContainer={(node) => node.parentNode as HTMLElement}
                />
            </div>
            <div className="[flex-basis:75%]">
                <AccountSidebarContent currentKey={currentKey} />
                {/* test */}
            </div>

        </div>
    );
};

export default AccountSideBar;