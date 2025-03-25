<<<<<<< HEAD
"use client";

import dynamic from "next/dynamic";

const Sent_mail = dynamic(() => import("~/components/Forgot Password_tsx/EmailSent_tsx/sent_email"));
=======


import dynamic from "next/dynamic";

const Sent_mail = dynamic(() => import("~/components/ForgotPassword_tsx/EmailSent"));
>>>>>>> dev

export default function Sent_page (){
    return (
          <Sent_mail />
      );
}