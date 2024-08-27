'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import routes from "@/config/routes";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col gap-5 items-center p-5 h-full justify-center">
          <div className="flex flex-col gap-4 w-full">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <Button className="w-full" onClick={() => { router.push(routes.admin.dashboard) }}>Login</Button>
          <div className="font-medium text-base cursor-pointer">Forgot your password?</div>
        </div>
      </div>
    </div>
  )
}