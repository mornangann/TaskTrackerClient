"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { github, month, vk } from "@/utils/icons";
import Link from "next/link";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { activeTasks, openModalForAdd } = useTasks();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-2 w-full flex items-center justify-between bg-ttbgsec">
      {/* <div></div>
      <div className="">
        <h1 className="main-header">Задачникъ</h1>
      </div> */}
      <div className="h-[10px] flex items-center gap-[10.4rem]">
        <div className="flex gap-4 items-center">
          {/* <div className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#e6e6e6]">
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
