// "use client";
// import { useTasks } from "@/context/taskContext";
// import useDetectOutside from "@/hooks/useDetectOutside";
// import React from "react";

// function DeleteModal() {
//   const ref = React.useRef(null);

//   const { closeModal, deleteAllTasks } = useTasks();

//   useDetectOutside({
//     ref,
//     callback: () => {
//       closeModal();
//     },
//   });

//   return (
//     <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#333]/30 overflow-hidden">
//       <div
//         ref={ref}
//         className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md border-2 border-white"
//       >
//         <p className="mb-4">Вы действительно хотите удалить все задачи?</p>
//         <div className="flex justify-end">
//           <button
//             type="button"
//             className="py-3 px-4 bg-blue-500 text-white text-sm font-medium rounded-md mr-4
//                 hover:bg-blue-400 transition-all duration-300"
//             onClick={closeModal}
//           >
//             Отмена
//           </button>
//           <button
//             type="button"
//             className="py-3 px-4 bg-red-500 text-white text-sm font-medium rounded-md
//                 hover:bg-blue-400 transition-all duration-300"
//             onClick={() => {
//               deleteAllTasks();
//               closeModal();
//             }}
//           >
//             Удалить
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeleteModal;

"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React from "react";

function DeleteModal() {
  const ref = React.useRef(null);
  const { closeModal, deleteAllTasks } = useTasks();

  useDetectOutside({
    ref,
    callback: () => {
      closeModal();
    },
  });

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-ttbgmod flex items-center justify-center">
      <div
        ref={ref}
        className="py-6 px-8 max-w-[480px] w-full bg-ttbgsec rounded-xl shadow-lg border border-ttborder text-tttext"
      >
        <h2 className="text-lg font-semibold">Удаление задач</h2>
        <p className="mt-2 text-tttextsec">
          Вы действительно хотите удалить все задачи?
        </p>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            type="button"
            className="py-2.5 px-5 bg-ttac text-ttbgsec text-sm font-medium rounded-lg transition-all duration-300
            hover:bg-ttachov"
            onClick={closeModal}
          >
            Отмена
          </button>
          <button
            type="button"
            className="py-2.5 px-5 bg-ttdanger text-ttwhite text-sm font-medium rounded-lg transition-all duration-300
            hover:bg-ttdangerhov"
            onClick={() => {
              deleteAllTasks();
              closeModal();
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
