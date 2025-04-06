"use client";
import Sidebar from "@/app/Components/Sidebar/Sidebar";
import { useUserContext } from "@/context/userContext";
import React from "react";

function SidebarProvider() {
  const userId = useUserContext().user._id;
  return <div className="mr-2">{userId && <Sidebar />}</div>;
}

export default SidebarProvider;
