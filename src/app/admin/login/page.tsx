'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import routes from "@/config/routes";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    supabase.auth.signInWithPassword({
      email: email,
      password: password
    }).then(({ data, error }) => {
      supabase
        .from('user')
        .select('*')
        .eq('id', data.user?.id)
        .eq('role', 'admin')
        .then(({ data, error }) => {
          if (data && data.length > 0) {
            router.push(routes.admin.dashboard);
          }
        })
    })
      .catch(err => toast.error('Email Or Password is incorrect!'));
  }
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col gap-5 items-center p-5 h-full justify-center">
          <div className="flex flex-col gap-4 w-full">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <Button className="w-full" onClick={() => handleLogin()}>Login</Button>
          <div className="font-medium text-base cursor-pointer">Forgot your password?</div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  )
}