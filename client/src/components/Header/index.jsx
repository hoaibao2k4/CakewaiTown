"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import MobMenu from "../MobMenu";
import { useDispatch, useSelector } from "react-redux";
import { UserTooltip } from "../UserTooltip";
import { Drawer } from "antd";
import { ChevronDown } from "lucide-react";
import { Cakewai, Cart, UserProfile } from "../../../public/assets/icons";
import ListItems from "~/components/ListItems";
import { logOutUser } from "~/redux/apiRequest";
import { persistor } from "~/redux/store";
import { getCart } from "~/api/apiCart";
import { createInstance } from "~/redux/interceptors";
import { loginSuccess } from "~/redux/authSlice";
import { setCart } from "~/redux/cartSlice";
import { updateCartItem } from "~/api/apiCart";
import { AddToCartContext } from "~/app/modalwapper";
import Script from "next/script";
function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const search = useSearchParams();
  const user = useSelector((state) => state.auth.login.currentUser);
  const [open, setOpen] = useState(false);
  const { list } = useSelector((state) => state.cart);
  const [originalList, setOriginalList] = useState([]);
  const { setIsLogout } = useContext(AddToCartContext);

  let instance = createInstance(user, dispatch, loginSuccess);

  const viewCart = async () => {
    setOpen(true);
  };

  const onClose = async () => {
    if (list.length > 0) {
      try {
        const itemsToUpdate = list.filter(
          (item, index) =>
            item?.buy_quantity !== originalList[index].buy_quantity
        );
        if (itemsToUpdate.length > 0) {
          await Promise.all(
            itemsToUpdate.map((item) =>
              updateCartItem(user.access_token, instance, item)
            )
          );
        }
        setOpen(false);
      } catch (err) {
        console.error("Failed to update cart items", err);
      }
    } else setOpen(false);
  };
  const handleLogin = () => {
    router.push("/authentic/signin");
  };
  const handleLogOut = () => {
    if (user?.refresh_token) logOutUser(dispatch, user?.refresh_token, router);
    else {
      const refresh_token = localStorage.getItem("refreshToken");
      logOutUser(dispatch, refresh_token, router);
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
    }
    dispatch(setCart([]));
    persistor.purge();
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const res = await getCart(user?.access_token, instance);
        if (res) {
          dispatch(setCart(res?.items));
          setOriginalList(res?.items);
        }
      }
    };
    fetchCart(user, instance);
  }, [user, open]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  const urls = ["/category", "/birthday", "/tradition", "/cookie", "/bread"];
  return (
    <div>
      {/* Script Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CMNJ5664ZY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CMNJ5664ZY');
        `}
      </Script>
      <header className="fixed top-0 z-[100] h-16 w-full bg-fifth">
        <div className="mx-10 flex h-full items-center justify-between gap-4 text-primary lg:mx-20">
          <Link href="/">
            <Cakewai className="mt-2" />
          </Link>
          <ul className="hidden gap-12 px-4 text-base uppercase lg:flex">
            <li className={pathname === "/" ? "menu-active" : "menu-navbar"}>
              <Link href="/">TRANG CHỦ</Link>
            </li>
            <li
              className={
                urls.includes(pathname)
                  ? "menu-active group"
                  : "menu-navbar group"
              }
            >
              <Link href="/category/all" className="relative">
                <span>MENU BÁNH</span>
                <i>
                  <ChevronDown className="icon mx-0.5 inline-block size-5" />
                </i>
              </Link>

              <div className="absolute left-0 top-full h-4 w-full cursor-default bg-transparent"></div>
              <ul className="absolute left-0 top-10 z-10 hidden w-max rounded-lg bg-[#CAB6B6] text-sm uppercase group-hover:block">
                <Link href="/category/birthday">
                  <li className="px-2 py-2 text-[#444444] hover:rounded-t-lg hover:bg-primary hover:text-slate-100">
                    Bánh Sinh Nhật
                  </li>
                </Link>
                <Link href="/category/tradition">
                  <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                    Bánh Truyền Thống
                  </li>
                </Link>
                <Link href="/category/cookie">
                  <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                    Cookie & Mini cake
                  </li>
                </Link>
                <Link href="/category/bread">
                  <li className="px-2 py-2 text-[#444444] hover:rounded-b-lg hover:bg-primary hover:text-slate-100">
                    Bánh Mì và Bánh mặn
                  </li>
                </Link>
              </ul>
            </li>
            <li
              className={pathname === "/news" ? "menu-active" : "menu-navbar"}
            >
              <Link href="/news">TIN TỨC</Link>
            </li>
            <li
              className={
                pathname === "/generator" ? "menu-active" : "menu-navbar"
              }
            >
              <Link href="/generator">AI</Link>
            </li>
            <li
              className={pathname === "/about" ? "menu-active" : "menu-navbar"}
            >
              <Link href="/about">VỀ CHÚNG TÔI</Link>
            </li>
          </ul>

          <div className="flex gap-6">
            {/* Cart Logo */}

            <div className="relative">
              <Cart className="navbar-icon" onClick={viewCart} />
              <span className="absolute bottom-3 left-4 rounded-full bg-fourth px-2.5 text-sm text-slate-100">
                {list?.length}
              </span>
            </div>

            <Drawer
              title={
                <span style={{ fontSize: "20px", color: "#664545" }}>
                  Giỏ hàng
                </span>
              }
              onClose={onClose}
              open={open}
            >
              {list?.length > 0 ? (
                <ListItems list={list} />
              ) : (
                <>
                  <h1 className="m-6">Thông tin giỏ hàng sẽ xuất hiện ở đây</h1>
                </>
              )}
            </Drawer>
            {/* User Logo */}
            {user ? (
              <UserTooltip
                onClick={() => setIsLogout(true)}
                currentUser={user.user}
              />
            ) : (
              <UserProfile
                className="navbar-icon"
                onClick={() => handleLogin()}
              />
            )}
            <div className="lg:hidden">
              <MobMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
