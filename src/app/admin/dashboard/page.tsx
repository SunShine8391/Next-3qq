'use client'

import { Button } from "@/components/ui/button";
import routes from "@/config/routes";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col p-5 justify-center h-full items-center gap-2">
          <div className="font-bold text-3xl cursor-pointer">Home</div>
          <div className="font-bold text-3xl cursor-pointer" onClick={() => router.push(routes.admin.usermanage)}>User Database</div>
          <div className="font-bold text-3xl cursor-pointer">Url Database</div>
          <div className="font-bold text-3xl cursor-pointer">Passcode Database</div>
          <div className="font-bold text-3xl cursor-pointer">Logo Database</div>
          <div className="font-bold text-3xl cursor-pointer">Settings</div>
          <div className="bottom-0 fixed w-[375px] pb-5 px-5">
            <Button className="w-full"
              onClick={() => {
                supabase.auth.signOut().then(() => router.push(routes.admin.login));
              }}
            >Sign Out</Button>
          </div>
        </div>
      </div>
    </div>
  )
}