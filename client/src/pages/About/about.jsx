import { useLocation } from 'react-router-dom';
import AboutUs from '~/components/AboutUs';
import Info1 from '~/components/AboutUs/Story';
import Info2 from '~/components/AboutUs/Services';
import Info3 from '~/components/AboutUs/Promise';
function About() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const about = searchParams.get('mode') || 'default';
  const renderAboutUs = () => {
    switch (about) {
      case 'info1':
        return <Info1 />;
      case 'info2':
        return <Info2 />;
      case 'info3':
        return <Info3 />;
      default:
        return <AboutUs />;
    }
  };
  return <div>{renderAboutUs()}</div>;
}

export default About;
