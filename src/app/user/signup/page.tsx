'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import routes from "@/config/routes";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col gap-5 items-center p-5 h-full justify-center">
          <div className="flex flex-col gap-2 w-full">
            <Input type="email" id="email" placeholder="Email" />
            <Input type='text' id="password" placeholder="Phone" />
            <Input type="password" id="password" placeholder="Choose Password" />
            <Input type='text' id="password" placeholder="Choose Username" />
          </div>
          <Button className="w-full" onClick={() => { router.push(routes.user.dashboard) }}>Sign Up</Button>
          <div className="font-medium text-sm px-3 text-gray-600 text-center">By signing up, you agree to Terms and Conditions</div>
        </div>
      </div>
    </div>
  )
}