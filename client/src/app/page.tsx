import Slider from "~/components/Slider";
import Seller from "~/components/Seller";
import Blog from "~/components/Blog";
import { GoogleCallBack } from "../components/GoogleCallBack/GoogleCallBack";
export default function Home() {
  
  return (
    <>
      <GoogleCallBack />
      <Slider />
      <Seller params="" />
      <Blog />
    </>
  );
}
