'use client'

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useMemo, useState } from "react";

export default function UserManagePage() {
  const router = useRouter();
  const [userList, setUserList] = useState<any>([]);

  const fetchData = async () => {
    await supabase
      .from('user')
      .select('*')
      .then((res) => {
        setUserList(res.data?.filter(it => it.role !== 'admin'));
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const tableData = useMemo(
    () =>
      userList &&
      userList.map((item: any, index: any) => ({
        ...item,
        listId: index + 1,
      })),
    [userList]
  )

  console.log(userList);

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[375px] h-full bg-gray-100">
        <div className="flex flex-col p-5 h-full gap-2">
          <div className="flex flex-row justify-between">
            <div className="font-extrabold text-2xl">User Manage</div>
            <div className="cursor-pointer font-bold text-lg" onClick={() => router.back()}>Back</div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((item: any, index: any) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.listId}</TableCell>
                  <TableCell>{item.username.split(' ')[0]}</TableCell>
                  <TableCell>{item.username.split(' ')[1]}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell className="text-right">{item.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}