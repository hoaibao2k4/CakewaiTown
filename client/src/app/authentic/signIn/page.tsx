<<<<<<< HEAD
"use client";

import dynamic from "next/dynamic";

const SignInForm = dynamic(() => import("~/components/SignInForm_tsx/signInForm"));
=======

import dynamic from "next/dynamic";

const SignInForm = dynamic(() => import("~/components/SignInForm_tsx"));
>>>>>>> dev

export default function SignInPage() {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-screen">
      <SignInForm />
    </div>
  );
}
