"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import React from "react";

function Profile() {
  const { user } = useUserContext();
  const { tasks, completedTasks, activeTasks, openProfileModal } = useTasks();

  return (
    <div className="m-6">
      <div
        className="px-2 py-4 items-center gap-3 bg-ttbg flex rounded-[0.8rem]  transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-2 hover:border-ttac"
        onClick={openProfileModal}
      >
        <div>
          <Image
            src={user?.photo}
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="flex flex-col text-xl">
            <span className="font-medium">Привет,</span>
            <span className="font-bold">
              {user?.name}
              <span className="font-medium">!</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="flex mt-6 flex-col gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-tttext">
            <p>Всего задач:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-ttac rounded-[5px]"></span>
              <span className="font-medium text-4xl text-tttextsec">
                {tasks.length}
              </span>
            </p>
          </div>
          <div className="text-tttext">
            <p>В процессе:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute bg-yellow-500 h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] rounded-[5px]"></span>
              <span className="font-medium text-4xl text-tttextsec">
                {activeTasks.length}
              </span>
            </p>
          </div>
          {/* <div className="text-tttext">
            <p>Истёкшие:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-red-400 rounded-[5px]"></span>
              <span className="font-medium text-4xl text-tttextsec">3</span>
            </p>
          </div> */}
          <div className="text-tttext">
            <p>Выполнено:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-400 rounded-[5px]"></span>
              <span className="font-medium text-4xl text-tttextsec">
                {completedTasks.length}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <h3 className="mt-8 font-medium">Activity</h3> */}
    </div>
  );
}

export default Profile;
