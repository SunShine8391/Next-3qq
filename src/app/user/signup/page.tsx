'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import routes from "@/config/routes";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email, password: password
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        await supabase
          .from('user')
          .insert([{ id: data.user.id, role: 'user', username: `${firstName} ${lastName}`, email: email, phone: phone }])
          .single()
          .then((res) => {
            if (res.status === 201) {
              toast.success('Success!');
              router.push(routes.user.dashboard);
            }
          });
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col gap-5 items-center p-5 h-full justify-center">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row gap-2">
              <Input type='text' id="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
              <Input type='text' id="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <Input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Input type='text' id="phone" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <Input type="password" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="w-full" onClick={() => handleSignUp()}>Sign Up</Button>
          <div className="font-medium text-sm px-3 text-gray-600 text-center">By signing up, you agree to Terms and Conditions</div>
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