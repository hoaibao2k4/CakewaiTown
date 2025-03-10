"use client";

import dynamic from "next/dynamic";

const Sent_mail = dynamic(() => import("~/components/Forgot Password_tsx/EmailSent_tsx/sent_email"));

export default function Sent_page (){
    return (
          <Sent_mail />
      );
}