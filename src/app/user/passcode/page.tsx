'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routes from "@/config/routes";
import { useRouter } from "next/navigation";

export default function PasscodePage() {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex p-5 flex-col gap-8 items-center  h-full justify-center">
          <div className="text-3xl font-bold text-gray-700">Welcome</div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input type="password" id="password" placeholder="Passcode" />
              </div>
            </div>
            <Button className="w-full" onClick={() => { router.push(routes.user.signup) }}>Register</Button>
            <div className="cursor-pointer top-0 underline flex items-end justify-end font-bold text-sm text-gray-800"
              onClick={() => router.push(routes.admin.login)}>
              Go to Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}