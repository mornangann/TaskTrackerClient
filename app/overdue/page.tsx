"use client";
import useRedirect from "@/hooks/useUserRedirect";
import { useTasks } from "@/context/taskContext";
import { Task } from "@/utils/types";
import { plusTask } from "@/utils/icons";
import { filteredTasks, overdueTasks } from "@/utils/utilities";
import Filters from "../Components/Filters/Filters";
import TaskItem from "../Components/TaskItem/TaskItem";
import { useEffect } from "react";
import { container, item } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Home() {
  useRedirect("/login");
  const { tasks, openModalForAdd, priority, completedTasks, setPriority } =
    useTasks();

  const overdue = overdueTasks(tasks);
  const filtered = filteredTasks(overdue, priority);

  useEffect(() => {
    setPriority("все");
  }, []);

  return (
    <main className="m-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-[2rem] text-tttext  font-bold">Истёкшие задачи</h1>
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
      </motion.div>
    </main>
  );
}
