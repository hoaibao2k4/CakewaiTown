import Address from "~/app/account/address/page";
import ChangePassword from "~/app/account/change-password/page";
import Orders from "~/app/account/orders/page";
import Profile from "~/app/account/profile/page";


interface IProps {
    currentKey: string | null
}
const AccountSidebarContent = ({ currentKey }: IProps) => {
    let content;
    switch (currentKey) {
        case 'profile':
            content =
                <Profile
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        case 'address':
            content =
                <Address
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        case 'change-password':
            content =
                <ChangePassword
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        case 'orders':
            content =
                <Orders
                // currentUser={currentUser}
                // instance={instance}
                />;
            break;
        default:
            content =
                <Profile
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