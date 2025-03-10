"use client";

import dynamic from "next/dynamic";

const Recovery_mail = dynamic(() => import("~/components/Forgot Password_tsx/EmailRecovery_tsx/recovery_email"));

export default function Recovery_page (){
    return (
          <Recovery_mail />
      );
}