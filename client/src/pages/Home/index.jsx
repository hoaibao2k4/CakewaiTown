import Slider from '~/components/Slider';
import Seller from '~/components/Seller';
import Blog from '~/components/Blog';
import { GoogleCallBack } from '~/components/GoogleCallBack/GoogleCallBack';
import { useLocation } from 'react-router-dom';

function Home() {
  GoogleCallBack()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = searchParams.get('mode') || 'default'
  return (
    <>
      <Slider />
      <Seller params={category} />
      <Blog />
    </>
  );
}

export default Home;
