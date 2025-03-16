import PaymentPolicy from "~/components/ComPolicy/PaymentPolicy";
import GeneralPolicy from "~/components/ComPolicy/GeneralPolicy";
import DeliveryPolicy from "~/components/ComPolicy/DeliveryPolicy";
import ReturnPolicy from "~/components/ComPolicy/ReturnPolicy";
import SecurityPolicy from "~/components/ComPolicy/SecurityPolicy";
import { useLocation } from "react-router-dom";
function Policy() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const policy = searchParams.get("mode") || "default";

  const renderTypeOfPolicy = () => {
    switch (policy) {
      case "payment":
        return <PaymentPolicy />;
      case "general":
        return <GeneralPolicy />;
      case "delivery":
        return <DeliveryPolicy />;
      case "security":
        return <SecurityPolicy />;
      case "return":
        return <ReturnPolicy />;
      default:
        return <h1>Page not found 404</h1>;
    }
  };

  return <div>{renderTypeOfPolicy()}</div>;
}

export default Policy;
