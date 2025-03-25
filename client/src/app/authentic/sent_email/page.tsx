
import dynamic from "next/dynamic";

const Sent_mail = dynamic(() => import("~/components/ForgotPassword_tsx/EmailSent"));

export default function Sent_page (){
    return (
          <Sent_mail />
      );
}