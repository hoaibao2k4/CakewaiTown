import dynamic from "next/dynamic";

const Recovery_mail = dynamic(
  () => import("~/components/ForgotPassword/EmailRecovery")
);

export default function Recovery_page() {
  return <Recovery_mail />;
}
