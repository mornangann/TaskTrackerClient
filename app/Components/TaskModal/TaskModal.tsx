import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { formatTime } from "@/utils/utilities";

interface TaskModalProps {
  task: {
    title: string;
    description: string;
    createdAt: string;
    dueDate: string;
    priority: string;
  };
  onClose: () => void;
  isOpen: boolean;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, isOpen }) => {
  if (!isOpen) return null;

  const priorityColor = useMemo(() => {
    switch (task.priority) {
      case "низкий":
        return "text-green-500";
      case "средний":
        return "text-yellow-500";
      case "высокий":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  }, [task.priority]);

  return (
    <motion.div
      className="fixed inset-0 bg-ttbgmod bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-ttbgsec text-tttext rounded-lg shadow-lg w-[90%] max-w-[600px] p-6 relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          onClick={onClose}
        >
          ✖
        </button> */}

        <h2 className="text-2xl font-bold mb-4">{task.title}</h2>

        <div className="max-h-[40vh] overflow-y-auto text-tttextsec p-2 custom-scroll">
          <p>{task.description}</p>
        </div>

        <div className="mt-4 border-t border-ttgray pt-4 text-sm text-tttextsec">
          <p>📅 Дата создания: {formatTime(task.createdAt)}</p>
          <p>⏳ Дедлайн: {formatTime(task.dueDate)}</p>
          <p className={`font-bold mt-2 ${priorityColor}`}>
            Приоритет: {task.priority}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TaskModal;
