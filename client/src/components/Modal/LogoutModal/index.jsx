import { RiErrorWarningLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logOutUser } from '~/redux/apiRequest';
import { setCart } from '~/redux/cartSlice';
import { persistor } from '~/redux/store';
import { logOutSuccess } from '~/redux/authSlice';
function LogoutModal({ isLogout }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.login.currentUser);
  const handleLogout = () => {
    if (user.refresh_token) {
      logOutUser(dispatch, user.refresh_token, router);
      isLogout(false);
      dispatch(setCart([]));
      persistor.purge();
    }
    else {
      dispatch(logOutSuccess())
      router.push('/authentic/signin')
      isLogout(false);
      dispatch(setCart([]));
      persistor.purge();
    }
  };
  return (
    <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/20 bg-opacity-10">
      <div className="flex flex-col items-center gap-2 rounded-lg bg-slate-50 px-12 py-10 shadow-lg">
        <RiErrorWarningLine size={50} className="text-orange-500" />
        <h3 className="text-center text-xl font-semibold text-slate-800">
          Quý khách có chắc chắn muốn thoát <br /> khỏi phiên đăng nhập này không?
        </h3>
        <div className="mt-4 flex gap-20">
          <button
            onClick={() => isLogout(false)}
            className="rounded-xl border-2 border-primary px-[18px] py-1 text-xl font-medium text-primary hover:text-fourth"
          >
            Đóng
          </button>
          <button
            onClick={handleLogout}
            className="rounded-xl bg-primary px-4 py-2 text-xl font-medium text-slate-100 hover:text-third"
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
