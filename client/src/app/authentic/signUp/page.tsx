

import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("~/components/SignUpForm_tsx"));

export default function SignUpPage() {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-screen">
      <SignUpForm />
    </div>
  );
}
