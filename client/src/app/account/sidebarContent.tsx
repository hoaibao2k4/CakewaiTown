import React from 'react'
import AccountProfile from './profile/page';
import AccountAddress from './address/page';
import AccountChangePassword from './change-password/page';
import AccountOrders from './orders/page';

interface IProps {
    currentKey: string | null
}
const AccountSidebarContent = ({ currentKey }: IProps) => {
    let content;
    switch (currentKey) {
        case 'profile':
            content =
                <AccountProfile
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        case 'address':
            content =
                <AccountAddress
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        case 'change-password':
            content =
                <AccountChangePassword
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        case 'orders':
            content =
                <AccountOrders
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        default:
            content =
                <AccountProfile
                // currentUser={currentUser}
                // instance={instance}
                />;
    }
    return (
        <div className="h-fit rounded-[8px] border-[1px] border-[#ccc] border-[solid] bg-[#fff]">
            <div className="mx-[16px] my-[16px]">{content}</div>
        </div>
    )
}

export default AccountSidebarContent