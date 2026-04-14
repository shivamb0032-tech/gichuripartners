"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/Admin/AdminSidebar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.push("/admin-login"); 
    } else {
      setIsAuth(true);
    }
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return <AdminSidebar>{children}</AdminSidebar>;
}