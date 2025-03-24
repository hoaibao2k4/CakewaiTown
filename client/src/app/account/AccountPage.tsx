import AccountLayout from "./layout"

interface IProps {
    children?: React.ReactNode
}
const AccountPage = ({ children }: IProps) => {
    return (
        <div className="mt-16 mx-[5rem] sm:mx-[2rem] md:mx-[3rem] lg:mx-[4rem] xl:mx-[5rem] bg-white">
            <AccountLayout>
                {children}
            </AccountLayout>
        </div>
    )
}

export default AccountPage