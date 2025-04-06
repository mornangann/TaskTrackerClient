// "use client";
// import { useTasks } from "@/context/taskContext";
// import IconCheck from "@/public/icons/IconCheck";
// import IconDeleteAll from "@/public/icons/IconDeleteAll";
// import IconFileCheck from "@/public/icons/IconFileCheck";
// import IconGrid from "@/public/icons/IconGrid";
// import IconStopwatch from "@/public/icons/IconStopwatch";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// function MiniSideBar() {
//   const pathname = usePathname();

//   const { openModalForDelete } = useTasks();

//   const getStrokeColor = (link: string) => {
//     return pathname === link ? "#3aafae" : "#717171";
//   };

//   const navItems = [
//     {
//       icon: <IconGrid strokeColor={getStrokeColor("/")} />,
//       title: "Все",
//       link: "/",
//     },
//     {
//       icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
//       title: "Выполненные",
//       link: "/completed",
//     },
//     {
//       icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
//       title: "В процессе",
//       link: "/pending",
//     },
//     {
//       icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
//       title: "Истёкшие",
//       link: "/overdue",
//     },
//   ];
//   return (
//     <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
//       <div className="flex items-center justify-center h-[5rem]">
//         <Image src="/logo.png" width={50} height={50} alt="logo" />
//       </div>
//       <div className="mt-8 flex flex-1 flex-col items-center justify-between">
//         <ul className="flex flex-col gap-10">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative group">
//               <Link href={item.link}>{item.icon}</Link>

//               <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] dark:bg-2 px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {item.title}
//               </span>
//             </li>
//           ))}
//         </ul>

//         <div className="mb-[1.5rem]">
//           <button
//             className="w-12 h-12 flex justify-center items-center border-2 border-[#eb4e31] p-2 rounded-full"
//             onClick={openModalForDelete}
//           >
//             <IconDeleteAll strokeColor="#Eb4e31" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MiniSideBar;

"use client";
import { useTasks } from "@/context/taskContext";
import IconCheck from "@/public/icons/IconCheck";
import IconDeleteAll from "@/public/icons/IconDeleteAll";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import IconStopwatch from "@/public/icons/IconStopwatch";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MiniSideBar() {
  const pathname = usePathname();

  const { openModalForDelete } = useTasks();

  const getStrokeColor = (link: string) => {
    return pathname === link ? "var(--tt-accent)" : "var(--tt-text-secondary)";
  };

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "Все",
      link: "/",
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Выполненные",
      link: "/completed",
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "В процессе",
      link: "/pending",
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Истёкшие",
      link: "/overdue",
    },
  ];

  return (
    <div className="basis-[5rem] flex flex-col bg-ttbgsec">
      <div className="flex items-center justify-center h-[7rem]">
        <Image src="/logo.svg" width={40} height={40} alt="logo" />
      </div>
      <div className="mt-8 flex flex-1 flex-col items-center justify-between">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.link}
                className="p-2 rounded-lg transition-colors"
              >
                {item.icon}
              </Link>
              <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-ttwhite bg-ttac px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-[1.5rem]">
          <button
            className="w-12 h-12 flex justify-center items-center border-2 border-ttdanger p-2 rounded-full hover:bg-ttdanger hover:border-transparent transition-colors duration-300"
            onClick={openModalForDelete}
          >
            <IconDeleteAll strokeColor="var(--tt-danger)" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniSideBar;
