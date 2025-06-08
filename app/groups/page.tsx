"use client";
import useRedirect from "@/hooks/useUserRedirect";
import { useTasks } from "@/context/taskContext";
import { Task } from "@/utils/types";
import { plusTask } from "@/utils/icons";
import { filteredTasks } from "@/utils/utilities";
import Filters from "../Components/Filters/Filters";
import TaskItem from "../Components/TaskItem/TaskItem";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";

export default function Home() {
  useRedirect("/login");
  const { tasks, openModalForAdd, priority, completedTasks, setPriority } =
    useTasks();

  const filtered = filteredTasks(completedTasks, priority);

  useEffect(() => {
    setPriority("все");
  }, []);

  return (
    <main className="m-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-[2rem] text-tttext   font-bold">
          Группы задач
        </h1>
       
      </div>

      <motion.div
        className="pb-[2rem] mt-6 flex justify-center items-center h-[60vh]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
       <h2  className="text-4xl font-semibold text-tttext text-center">В разработке</h2>
      </motion.div>
    </main>
  );
}
