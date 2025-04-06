// "use client";
// import { useTasks } from "@/context/taskContext";
// import useDetectOutside from "@/hooks/useDetectOutside";
// import React, { useEffect } from "react";

// function Modal() {
//   const {
//     task,
//     handleInput,
//     createTask,
//     isEditing,
//     closeModal,
//     modalMode,
//     activeTask,
//     updateTask,
//   } = useTasks();
//   const ref = React.useRef<HTMLFormElement | null>(null);

//   useDetectOutside({
//     ref,
//     callback: () => {
//       if (isEditing) {
//         closeModal();
//       }
//     },
//   });

//   useEffect(() => {
//     if (modalMode === "edit" && activeTask) {
//       handleInput("setTask")(activeTask);
//     }
//   }, [modalMode, activeTask]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (modalMode === "edit") {
//       updateTask(task);
//     } else if (modalMode === "add") {
//       createTask(task);
//     }

//     closeModal();
//   };

//   return (
//     <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#333]/30 overflow-hidden">
//       <form
//         ref={ref}
//         action=""
//         className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex flex-col gap-1">
//           <label htmlFor="title">Заголовок</label>
//           <input
//             className="bg-[#F9F9F9] p-2 rounded-md border"
//             type="text"
//             id="title"
//             placeholder="Название задачи"
//             name="title"
//             value={task.title || ""}
//             onChange={(e) => handleInput("title")(e)}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="description">Описание</label>
//           <textarea
//             className="bg-[#F9F9F9] p-2 rounded-md border resize-none"
//             name="description"
//             placeholder="Опишите вашу задачу"
//             rows={4}
//             value={task.description}
//             onChange={(e) => handleInput("description")(e)}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="priority">Приоритет задачи</label>
//           <select
//             className="bg-[#F9F9F9] p-2 rounded-md border cursor-pointer"
//             name="priority"
//             value={task.priority}
//             onChange={(e) => handleInput("priority")(e)}
//           >
//             <option value="низкий">Низкий</option>
//             <option value="средний">Средний</option>
//             <option value="высокий">Высокий</option>
//           </select>
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="dueDate">Срок выполнения</label>
//           <input
//             className="bg-[#F9F9F9] p-2 rounded-md border"
//             type="date"
//             name="dueDate"
//             value={task.dueDate || ""}
//             onChange={(e) => handleInput("dueDate")(e)}
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="completed">Статус выполнения</label>
//           <div className="flex items-center justify-between bg-[#F9F9F9] p-2 rounded-md border">
//             <label htmlFor="completed">Задача выполнена?</label>
//             <div>
//               <select
//                 className="bg-[#F9F9F9] p-2 rounded-md border cursor-pointer"
//                 name="completed"
//                 value={task.completed ? "true" : "false"}
//                 onChange={(e) => handleInput("completed")(e)}
//               >
//                 <option value="false">Нет</option>
//                 <option value="true">Да</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <button
//             type="submit"
//             className={`text-white py-2 rounded-md w-full hover:bg-blue-500 transition duration-200 ease-in-out
//               ${modalMode === "edit" ? "bg-blue-400" : "bg-green-400"}
//               `}
//           >
//             {modalMode === "edit" ? "Обновить задачу" : "Создать задачу"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Modal;

"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function Modal() {
  const {
    task,
    handleInput,
    createTask,
    isEditing,
    closeModal,
    modalMode,
    activeTask,
    updateTask,
  } = useTasks();
  const ref = React.useRef<HTMLFormElement | null>(null);

  useDetectOutside({
    ref,
    callback: () => {
      if (isEditing) {
        closeModal();
      }
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && activeTask) {
      handleInput("setTask")(activeTask);
    }
  }, [modalMode, activeTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (modalMode === "edit") {
      updateTask(task);
    } else if (modalMode === "add") {
      createTask(task);
    }

    closeModal();
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-ttbgmod backdrop-blur-sm flex items-center justify-center">
      <form
        ref={ref}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-ttbgsec text-tttext border border-ttborder rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm text-tttextsec">
            Заголовок
          </label>
          <input
            className="bg-ttbg p-2 rounded-md border border-ttborder text-tttext focus:border-ttac focus:outline-none"
            type="text"
            id="title"
            placeholder="Название задачи"
            name="title"
            value={task.title || ""}
            onChange={(e) => handleInput("title")(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm text-tttextsec">
            Описание
          </label>
          <textarea
            className="bg-ttbg p-2 rounded-md border border-ttborder text-tttext resize-none focus:border-ttac focus:outline-none"
            name="description"
            placeholder="Опишите вашу задачу"
            rows={4}
            value={task.description}
            onChange={(e) => handleInput("description")(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="priority" className="text-sm text-tttextsec">
            Приоритет задачи
          </label>
          <select
            className="bg-ttbg p-2 rounded-md border border-ttborder text-tttext cursor-pointer focus:border-ttac focus:outline-none"
            name="priority"
            value={task.priority}
            onChange={(e) => handleInput("priority")(e)}
          >
            <option value="низкий">Низкий</option>
            <option value="средний">Средний</option>
            <option value="высокий">Высокий</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="dueDate" className="text-sm text-tttextsec">
            Срок выполнения
          </label>
          <input
            className="bg-ttbg p-2 rounded-md border border-ttborder text-tttext focus:border-ttac focus:outline-none"
            type="date"
            name="dueDate"
            value={task.dueDate || ""}
            onChange={(e) => handleInput("dueDate")(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="completed" className="text-sm text-tttextsec">
            Статус выполнения
          </label>
          <div className="flex items-center justify-between bg-ttbg p-2 rounded-md border border-ttborder">
            <label htmlFor="completed" className="text-tttext text-sm">
              Задача выполнена?
            </label>
            <select
              className="bg-ttbg p-2 rounded-md border border-ttborder text-tttext cursor-pointer focus:border-ttac focus:outline-none"
              name="completed"
              value={task.completed ? "true" : "false"}
              onChange={(e) => handleInput("completed")(e)}
            >
              <option value="false">Нет</option>
              <option value="true">Да</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className={`text-ttwhite py-2 rounded-md w-full transition duration-200 ease-in-out
              ${
                modalMode === "edit"
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-green-600 hover:bg-green-500"
              }
              `}
          >
            {modalMode === "edit" ? "Обновить задачу" : "Создать задачу"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
