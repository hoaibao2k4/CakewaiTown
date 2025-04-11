"use client"
import Lottie from "lottie-react";
import animationData from "~/components/animation/loading.json"

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Lottie animationData={animationData} style={{ width: 100, height: 100 }}  loop={true} />
    </div>
  );
}
