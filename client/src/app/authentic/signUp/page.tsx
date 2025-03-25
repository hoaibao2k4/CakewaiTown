<<<<<<< HEAD
"use client";

import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("~/components/SignUpForm_tsx/signUpForm"));
=======


import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("~/components/SignUpForm_tsx"));
>>>>>>> dev

export default function SignUpPage() {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-screen">
      <SignUpForm />
    </div>
  );
}
