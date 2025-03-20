import { useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RootState } from "~/redux/store";
function PrivateRoute({ children } : {children : React.ReactNode}) {
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.login.currentUser)

  if (!user) {
    const isAdminRoute = pathname?.includes("/admin");
    return <Link href={isAdminRoute ? "/admin/login" : "/auth?mode=signin"} />;
  }

  return children;
}

export default PrivateRoute;
