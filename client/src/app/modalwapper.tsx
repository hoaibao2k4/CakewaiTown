"use client";
// defaut layout react cakewai
import AddToCart from "~/components/Modal/AddToCart";
import { useState, useCallback, createContext, useEffect, ReactNode } from "react";
import { SuccessPopup } from "~/components/Modal/SuccessPopup";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import ExpiryModal from "~/components/Modal/Expiry";
//import { logOutUser } from "~/redux/apiRequest";
import { useRouter } from "next/navigation";
import LogoutModal from "~/components/Modal/LogoutModal";
import OrderModal from "~/components/Modal/OrderModal";
import ImageAIModal from "~/components/Modal/ImageAIModal";
import { FaArrowUp } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

interface SomeContextType {
  handleAddToCartPopup: (cake: any) => void;
  triggerSuccessPopup: () => void;
  setIsLogout: Dispatch<SetStateAction<boolean>>;
  setIsOrder: Dispatch<SetStateAction<boolean>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}
export const AddToCartContext = createContext<SomeContextType | null>(null);

export default function ModalWrapper({children} : {children: ReactNode}) {
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false);
  const [isExpiry, setIsExpiry] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const user = useSelector((state : any) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  //const router = useRouter();

  const handleAddToCartPopup = useCallback((cake :any) => {
    setCartContent(cake);
    setShowCart(true);
  }, []);

  const closeCart = (isClose: boolean) => {
    if (!isClose) {
      setCartContent(null);
      setShowCart(false);
      triggerSuccessPopup();
    }
    setCartContent(null);
    setShowCart(false);
  };

  const triggerSuccessPopup = () => {
    setSuccessPopup(true);
    setTimeout(() => setSuccessPopup(false), 2000);
  };

  useEffect(() => {
    if (user && user.refresh_token) {
      const decoded = jwtDecode(user.refresh_token);
      if (decoded.exp) {
        const expirationTime = decoded.exp * 1000;
        const currentTime = Date.now();
        const timeRemaining = expirationTime - currentTime;

        if (timeRemaining > 0) {
          setTimeout(() => {
            setIsExpiry(true);
          }, timeRemaining);
        } else {
          //dispatch(logOutUser(dispatch, user?.refresh_token, router));
        }
      }
    }
  }, [user, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AddToCartContext.Provider
        value={{
          handleAddToCartPopup,
          triggerSuccessPopup,
          setIsLogout,
          setIsOrder,
          setIsLogin,
        }}
      >
        {children}
        {/* {/* Popup thêm vào giỏ hàng */}
        {showCart && <AddToCart content={cartContent} close={closeCart} />}

        {/* Popup thành công */}
        {successPopup && <SuccessPopup />}

        {isExpiry && <ExpiryModal isExpiry={setIsExpiry} />}

        {isLogout && <LogoutModal isLogout={setIsLogout} />}

        {isOrder && <OrderModal isOrder={setIsOrder} />}

        {isLogin && <ImageAIModal isLogin={setIsLogin} />}

        {/* Back To Top */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="hover:bg-primary-dark fixed bottom-6 right-6 z-50 rounded-full bg-primary p-3 text-white shadow-lg focus:outline-none"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </AddToCartContext.Provider>
    </>
  );
}
