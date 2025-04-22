import { RiErrorWarningLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { logOutUser } from "~/redux/apiRequest";
import { setCart } from "~/redux/cartSlice";
import { IoClose } from 'react-icons/io5';
import { persistor } from "~/redux/store";
function ExpiryModal({isExpiry}) {
    const dispatch = useDispatch()
    const router = useRouter()
    const pathname = usePathname()
    console.log(pathname)
    const user = useSelector(state => state.auth.login.currentUser)
    const handleLogout = () => {
        logOutUser(dispatch, user.refresh_token, router)
        isExpiry(false)
        dispatch(setCart([]))
        persistor.purge();
    }
    const handleClose = () => {
      logOutUser(dispatch, user.refresh_token, router, pathname)
      isExpiry(false)
      dispatch(setCart([]))
      persistor.purge();
    }
    return (
        <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/10 bg-opacity-10">
        <div className="rounded-lg bg-white px-12 py-10 shadow-lg flex flex-col items-center gap-2 relative">
            <RiErrorWarningLine size={50} className="text-orange-500"/>
          <h3 className="text-xl font-semibold text-slate-800 text-center">Phiên đăng nhập đã hết hạn. <br />Vui lòng đăng nhập lại!</h3>
          <button onClick={handleLogout} className="text-blue-800 hover:text-blue-500 pt-4 text-xl font-medium">Đồng ý</button>
          <IoClose
          size={30}
          onClick={() => handleClose()}
          className="absolute right-2 top-2 cursor-pointer hover:text-black/60"
        />
        </div>
      </div>
    )
}

export default ExpiryModal;