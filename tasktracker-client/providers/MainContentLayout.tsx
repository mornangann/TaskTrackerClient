"use client";

import { useUserContext } from "@/context/userContext";
import React from "react";

interface MainContentLayoutProps {
  children: React.ReactNode;
}

function MainContentLayout({ children }: MainContentLayoutProps) {
  const userId = useUserContext().user._id;

  return (
    <main
      className={`${userId ? "pr-[20rem]" : ""}  flex h-[95.5%] bg-ttbgsec`}
    >
      {children}
    </main>
  );
}

export default MainContentLayout;
