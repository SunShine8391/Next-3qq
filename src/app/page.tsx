"use client";

import { imagePaths } from "@/config/image-paths";
import routes from "@/config/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(routes.user.passcode);
    }, 1500);
  }, []);

  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col items-center h-full justify-center">
          <Image src={imagePaths.loading} height={300} width={150} alt="" />
          <div className="font-bold text-3xl">WELCOME</div>
          <div className="font-normal text-xl">3qq.ai</div>
        </div>
      </div>
    </div>
  );
}
