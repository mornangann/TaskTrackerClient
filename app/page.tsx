"use client";
import useRedirect from "@/hooks/useUserRedirect";
import { useTasks } from "@/context/taskContext";
import Filters from "./Components/Filters/Filters";
import TaskItem from "./Components/TaskItem/TaskItem";
import { Task } from "@/utils/types";
import { plusTask } from "@/utils/icons";
import { filteredTasks } from "@/utils/utilities";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";
import { useUserContext } from "@/context/userContext";

export default function Home() {
  useRedirect("/login");
  const { tasks, openModalForAdd, priority, setPriority } = useTasks();

  const filtered = filteredTasks(tasks, priority);

  useEffect(() => {
    setPriority("все");
  }, []);

  return (
    <main
      className="m-6
      h-full"
    >
      <div className="flex justify-between">
        <h1 className="text-[2rem] text-tttext font-bold sign">Все задачи</h1>
        <Filters />
      </div>

      <motion.div
        className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {filtered?.map((task: Task, i: number) => (
          <TaskItem key={i} task={task} />
        ))}
        <motion.button
          className="h-[16rem] w-full py-2 rounded-md text-lg font-medium text-tttextsec  add-task"
          onClick={openModalForAdd}
          variants={item}
        >
          {plusTask}
        </motion.button>
      </motion.div>
    </main>
  );
}
