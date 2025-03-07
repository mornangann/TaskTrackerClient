// import { Task } from "@/utils/types";
// import { formatTime } from "@/utils/utilities";
// import { done, edit, trash } from "@/utils/icons";
// import React, { useState } from "react";
// import { useTasks } from "@/context/taskContext";
// import { motion } from "framer-motion";
// import { item } from "@/utils/animations";

// interface TaskItemProps {
//   task: Task;
// }

// function TaskItem({ task }: TaskItemProps) {
//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case "низкий":
//         return "text-green-500";
//       case "средний":
//         return "text-yellow-500";
//       case "высокий":
//         return "text-red-500";
//       default:
//         return "text-red-500";
//     }
//   };
//   const getPriorityColorForBorder = (priority: string) => {
//     switch (priority) {
//       case "низкий":
//         return "hover:shadow-[0_0_20px_rgba(0,255,0,0.8)]";
//       case "средний":
//         return "hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]";
//       case "высокий":
//         return "hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]";
//       default:
//         return "hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]";
//     }
//   };
//   const getPriorityColorForShadow = (priority: string) => {
//     switch (priority) {
//       case "низкий":
//         return "hover:border-green-700";
//       case "средний":
//         return "hover:border-yellow-500";
//       case "высокий":
//         return "hover:border-red-600";
//       default:
//         return "hover:border-red-600";
//     }
//   };

//   const { getTask, openModalForEdit, deleteTask, openTaskModal } = useTasks();

//   return (
//     <motion.div
//       className={`h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#161b22] rounded-lg border-2 border-transparent ${getPriorityColorForBorder(
//         task.priority
//       )} hover:border-2 ${getPriorityColorForShadow(
//         task.priority
//       )}  transition-all duration-300`}
//       variants={item}
//       onClick={openTaskModal}
//     >
//       <div>
//         <h4 className="font-bold text-2xl text-[#c9d1d9]">{task.title}</h4>
//         <p className="text-[#8b949e]">{task.description}</p>
//       </div>
//       <div className="mt-auto flex justify-between items-center">
//         <p className="text-sm text-gray-400">{formatTime(task.createdAt)}</p>
//         <p className={`text-sm font-bold ${getPriorityColor(task.priority)}`}>
//           {task.priority}
//         </p>
//         <div>
//           <div className="flex items-center gap-3 text-gray-400 text-[1.2rem]">
//             <button
//               className={`${
//                 task.completed ? "text-green-400" : "text-gray-400"
//               }`}
//             >
//               {done}
//             </button>
//             <button
//               className="text-gray-400 hover:text-[#00A1f1] transition-all duration-300 ease-in-out"
//               onClick={() => {
//                 getTask(task._id);
//                 openModalForEdit(task);
//               }}
//             >
//               {edit}
//             </button>
//             <button
//               className="text-gray-400 hover:text-[#F65314] transition-all duration-300 ease-in-out"
//               onClick={() => {
//                 deleteTask(task._id);
//               }}
//             >
//               {trash}
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default TaskItem;
import { Task } from "@/utils/types";
import { formatTime } from "@/utils/utilities";
import { done, edit, trash } from "@/utils/icons";
import React, { useState } from "react";
import { useTasks } from "@/context/taskContext";
import { motion } from "framer-motion";
import { item } from "@/utils/animations";
import TaskModal from "../TaskModal/TaskModal";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "низкий":
        return "text-green-500";
      case "средний":
        return "text-yellow-500";
      case "высокий":
        return "text-red-500";
      default:
        return "text-red-500";
    }
  };

  const getPriorityColorForBorder = (priority: string) => {
    switch (priority) {
      case "низкий":
        return "hover:shadow-[0_0_10px_rgba(0,255,0,0.8)]";
      case "средний":
        return "hover:shadow-[0_0_10px_rgba(255,255,0,0.8)]";
      case "высокий":
        return "hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]";
      default:
        return "hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]";
    }
  };
  const getPriorityColorForShadow = (priority: string) => {
    switch (priority) {
      case "низкий":
        return "hover:border-green-700";
      case "средний":
        return "hover:border-yellow-500";
      case "высокий":
        return "hover:border-red-600";
      default:
        return "hover:border-red-600";
    }
  };

  const { getTask, openModalForEdit, deleteTask, openTaskModal } = useTasks();

  return (
    <>
      <motion.div
        className={`h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-ttbgsec rounded-lg border-2 border-transparent ${getPriorityColorForBorder(
          task.priority
        )} hover:border-2 ${getPriorityColorForShadow(
          task.priority
        )}  transition-all duration-300`}
        variants={item}
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <h4 className="font-bold text-2xl text-tttext line-clamp-2 overflow-hidden text-ellipsis mb-2">
            {task.title}
          </h4>

          <p className="text-tttextsec line-clamp-4 overflow-hidden text-ellipsis">
            {task.description}
          </p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <p className="text-sm text-tttextsec">{formatTime(task.createdAt)}</p>
          <p className={`text-sm font-bold ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </p>
          <div className="flex items-center gap-3 text-tttextsec text-[1.2rem]">
            <button
              className={`${
                task.completed ? "text-green-400" : "text-tttextsec"
              }`}
            >
              {done}
            </button>
            <button
              className="text-tttextsec hover:text-ttac transition-all duration-300 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                getTask(task._id);
                openModalForEdit(task);
              }}
            >
              {edit}
            </button>
            <button
              className="text-tttextsec hover:text-ttdanger transition-all duration-300 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task._id);
              }}
            >
              {trash}
            </button>
          </div>
        </div>
      </motion.div>

      <TaskModal
        task={task}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default TaskItem;
