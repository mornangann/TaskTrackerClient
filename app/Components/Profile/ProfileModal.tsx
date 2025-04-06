// // "use client";
// // import { useTasks } from "@/context/taskContext";
// // import { useUserContext } from "@/context/userContext";
// // import useDetectOutside from "@/hooks/useDetectOutside";
// // import { badge, check, github, mail, Times } from "@/utils/icons";
// // import Image from "next/image";
// // import React, { useEffect } from "react";

// // function ProfileModal() {
// //   const ref = React.useRef(null);

// //   const { closeModal } = useTasks();
// //   const {
// //     user,
// //     updateUser,
// //     handlerUserInput,
// //     userState,
// //     changePassword,
// //     emailVerification,
// //   } = useUserContext();

// //   useDetectOutside({
// //     ref,
// //     callback: () => {
// //       closeModal();
// //     },
// //   });

// //   useEffect(() => {
// //     console.log(user.isVerified);
// //   }, []);

// //   const { name, email, photo } = user;

// //   //state
// //   const [oldPassword, setOldPassword] = React.useState("");
// //   const [newPassword, setNewPassword] = React.useState("");

// //   const handlePassword = (type: string) => (e: any) => {
// //     if (type === "old") {
// //       setOldPassword(e.target.value);
// //     } else {
// //       setNewPassword(e.target.value);
// //     }
// //   };

// //   return (
// //     <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#333]/30 overflow-hidden">
// //       <div
// //         ref={ref}
// //         className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md border-2 border-white"
// //       >
// //         <div className="absolute left-0 top-0 w-full h-[80px] bg-[#323232]/10 rounded-tr-md rounded-tl-md"></div>

// //         <div className="mt-4 relative flex justify-between">
// //           <div className="relative inline-block">
// //             <Image
// //               src={photo}
// //               alt="profile"
// //               width={80}
// //               height={80}
// //               className="rounded-full"
// //             />
// //             {user.isVerified ? (
// //               <>
// //                 <div className="absolute bottom-0 right-1 ">
// //                   <span className="text-lg text-blue-400">{badge}</span>
// //                   <span className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-white">
// //                     {check}
// //                   </span>
// //                 </div>
// //               </>
// //             ) : (
// //               <></>
// //             )}
// //           </div>
// //           <div className="self-end flex items-center gap-2">
// //             {/* <button className="flex items-center gap-2 border-2 border-[#323232]/10 rounded-md py-1 px-3 text-xs font-medium text-[#323232]">
// //               {github} Github
// //             </button> */}
// //             <button
// //               className="flex items-center gap-2 border-2 border-[#323232]/10 rounded-md py-1 px-3 text-xs font-medium text-[#323232]"
// //               onClick={emailVerification}
// //             >
// //               {user.isVerified ? (
// //                 <>
// //                   <i className="fas fa-check"></i> Верифицирован
// //                 </>
// //               ) : (
// //                 <>
// //                   <i className="fas fa-times"></i> Не верифицирован
// //                 </>
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //         <div>
// //           <h1 className="text-lg font-bold">{name}</h1>
// //           <p className="text-sm text-gray-500">{email}</p>
// //         </div>

// //         <form
// //           action=""
// //           className="mt-4 pt-2 flex flex-col gap-4 border-t-2 border-t-[#323232]/10"
// //           onSubmit={(e) => {
// //             e.preventDefault();
// //             updateUser(e, {
// //               name: userState.name,
// //               email: userState.email,
// //             });
// //           }}
// //         >
// //           <div className="pt-2 grid grid-cols-[150px_1fr]">
// //             <label htmlFor="name" className="text-sm font-medium">
// //               Имя
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               defaultValue={name}
// //               onChange={(e) => handlerUserInput("name")(e)}
// //               className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#323232]/10"
// //             />
// //           </div>

// //           {/* <div className="pt-4 grid grid-cols-[150px_1fr] border-t-2 border-t-[#323232]/10">
// //             <label htmlFor="email" className="text-sm font-medium">
// //               Адрес электронной почты
// //             </label>
// //             <div className="relative w-full">
// //               <input
// //                 type="text"
// //                 id="email"
// //                 name="email"
// //                 value={email}
// //                 onChange={(e) => handlerUserInput("email")(e)}
// //                 className="w-full py-[0.4rem] pl-9 pr-2 font-medium rounded-lg border-2 border-[#323232]/10"
// //               />
// //               <span className="absolute left-0 top-0 bottom-0 flex items-center px-3 text-[#323232]/50">
// //                 {mail}
// //               </span>
// //             </div>
// //           </div> */}

// //           <div className="pt-4 grid grid-cols-2 gap-4 border-t-2 border-t-[#323232]/10">
// //             <div className="flex flex-col gap-1">
// //               <label htmlFor="oldPassWord" className="text-sm font-medium">
// //                 Старый пароль
// //               </label>
// //               <input
// //                 type="password"
// //                 id="oldPassword"
// //                 value={oldPassword}
// //                 onChange={handlePassword("old")}
// //                 className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#323232]/10"
// //               />
// //             </div>

// //             <div className="flex flex-col gap-1">
// //               <label htmlFor="newPassword" className="text-sm font-medium">
// //                 Новый пароль
// //               </label>
// //               <input
// //                 type="password"
// //                 id="newPassword"
// //                 value={newPassword}
// //                 onChange={handlePassword("new")}
// //                 className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#323232]/10"
// //               />
// //             </div>
// //           </div>
// //           <div className="flex justify-end">
// //             <button
// //               type="button"
// //               className="py-3 px-4 bg-blue-500 text-white text-sm font-medium rounded-md
// //                 hover:bg-blue-400 transition-all duration-300"
// //               onClick={() => changePassword(oldPassword, newPassword)}
// //             >
// //               Сменить пароль
// //             </button>
// //           </div>

// //           <div className="flex justify-end gap-4 border-t-2 border-t-[#323232]/10">
// //             <button
// //               className="mt-3 py-2 px-4 bg-transparent text-black text-sm font-medium rounded-md border-2 border-[#323232]/10
// //                 hover:bg-[#EB4E31] hover:border-transparent hover:text-white transition-all duration-300"
// //               onClick={closeModal}
// //             >
// //               Отмена
// //             </button>
// //             <button
// //               type="submit"
// //               className="mt-3 py-2 px-4 bg-[#3aafae] text-white text-sm font-medium rounded-md
// //                 hover:bg-[#2e8d8c]/90 transition-all duration-300"
// //             >
// //               Сохранить
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProfileModal;

// "use client";
// import { useTasks } from "@/context/taskContext";
// import { useUserContext } from "@/context/userContext";
// import useDetectOutside from "@/hooks/useDetectOutside";
// import { badge, check, github, mail, Times } from "@/utils/icons";
// import Image from "next/image";
// import React, { useEffect } from "react";

// function ProfileModal() {
//   const ref = React.useRef(null);

//   const { closeModal } = useTasks();
//   const {
//     user,
//     updateUser,
//     handlerUserInput,
//     userState,
//     changePassword,
//     emailVerification,
//   } = useUserContext();

//   useDetectOutside({
//     ref,
//     callback: () => {
//       closeModal();
//     },
//   });

//   useEffect(() => {
//     console.log(user.isVerified);
//   }, []);

//   const { name, email, photo } = user;

//   //state
//   const [oldPassword, setOldPassword] = React.useState("");
//   const [newPassword, setNewPassword] = React.useState("");

//   const handlePassword = (type: string) => (e: any) => {
//     if (type === "old") {
//       setOldPassword(e.target.value);
//     } else {
//       setNewPassword(e.target.value);
//     }
//   };

//   return (
//     <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#0d1117]/90 overflow-hidden">
//       <div
//         ref={ref}
//         className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-[#161b22] text-[#c9d1d9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md border-2 border-[#30363d]"
//       >
//         <div className="absolute left-0 top-0 w-full h-[80px] bg-[#161b22] rounded-tr-md rounded-tl-md"></div>

//         <div className="mt-4 relative flex justify-between">
//           <div className="relative inline-block">
//             <Image
//               src={photo}
//               alt="profile"
//               width={80}
//               height={80}
//               className="rounded-full"
//             />
//             {user.isVerified ? (
//               <div className="absolute bottom-0 right-1 ">
//                 <span className="text-lg text-[#3aafae]">{badge}</span>
//                 <span className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-white">
//                   {check}
//                 </span>
//               </div>
//             ) : null}
//           </div>
//           <div className="self-end flex items-center gap-2">
//             <button
//               className="flex items-center gap-2 border-2 border-[#30363d] rounded-md py-1 px-3 text-xs font-medium text-[#c9d1d9]"
//               onClick={emailVerification}
//             >
//               {user.isVerified ? (
//                 <>
//                   <i className="fas fa-check"></i> Верифицирован
//                 </>
//               ) : (
//                 <>
//                   <i className="fas fa-times"></i> Не верифицирован
//                 </>
//               )}
//             </button>
//             <button className="flex items-center gap-2 border-2 border-[#30363d] rounded-md py-1 px-3 text-xs font-medium text-[#c9d1d9]">
//               {user.isVerified ? (
//                 <>
//                   <i className="fa-regular fa-moon"></i> Тёмная
//                 </>
//               ) : (
//                 <>
//                   <i className="fas fa-sun"></i> Светлая
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-lg font-bold">{name}</h1>
//           <p className="text-sm text-[#8b949e]">{email}</p>
//         </div>

//         <form
//           action=""
//           className="mt-4 pt-2 flex flex-col gap-4 border-t-2 border-t-[#30363d]"
//           onSubmit={(e) => {
//             e.preventDefault();
//             updateUser(e, {
//               name: userState.name,
//               email: userState.email,
//             });
//           }}
//         >
//           <div className="pt-2 grid grid-cols-[150px_1fr]">
//             <label htmlFor="name" className="text-sm font-medium">
//               Имя
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               defaultValue={name}
//               onChange={(e) => handlerUserInput("name")(e)}
//               className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#30363d] bg-[#0d1117] text-[#c9d1d9]"
//             />
//           </div>

//           <div className="pt-4 grid grid-cols-2 gap-4 border-t-2 border-t-[#30363d]">
//             <div className="flex flex-col gap-1">
//               <label htmlFor="oldPassWord" className="text-sm font-medium">
//                 Старый пароль
//               </label>
//               <input
//                 type="password"
//                 id="oldPassword"
//                 value={oldPassword}
//                 onChange={handlePassword("old")}
//                 className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#30363d] bg-[#0d1117] text-[#c9d1d9]"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label htmlFor="newPassword" className="text-sm font-medium">
//                 Новый пароль
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={handlePassword("new")}
//                 className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#30363d] bg-[#0d1117] text-[#c9d1d9]"
//               />
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="py-3 px-4 bg-[#3aafae] text-white text-sm font-medium rounded-md hover:bg-[#7263f3] transition-all duration-300"
//               onClick={() => changePassword(oldPassword, newPassword)}
//             >
//               Сменить пароль
//             </button>
//           </div>

//           <div className="flex justify-end gap-4 border-t-2 border-t-[#30363d]">
//             <button
//               className="mt-3 py-2 px-4 bg-transparent text-[#c9d1d9] text-sm font-medium rounded-md border-2 border-[#30363d] hover:bg-[#EB4E31] hover:border-transparent hover:text-white transition-all duration-300"
//               onClick={closeModal}
//             >
//               Отмена
//             </button>
//             <button
//               type="submit"
//               className="mt-3 py-2 px-4 bg-[#3aafae] text-white text-sm font-medium rounded-md hover:bg-[#7263f3] transition-all duration-300"
//             >
//               Сохранить
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ProfileModal;

"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { badge, check } from "@/utils/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ProfileModal() {
  const ref = React.useRef(null);

  const { closeModal } = useTasks();
  const {
    user,
    updateUser,
    handlerUserInput,
    userState,
    changePassword,
    emailVerification,
  } = useUserContext();

  useDetectOutside({
    ref,
    callback: () => {
      closeModal();
    },
  });

  useEffect(() => {
    console.log(user.isVerified);
  }, []);

  const { name, email, photo } = user;

  //state
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handlePassword = (type: string) => (e: any) => {
    if (type === "old") {
      setOldPassword(e.target.value);
    } else {
      setNewPassword(e.target.value);
    }
  };

  //смена темы
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-ttbgmod overflow-hidden">
      <div
        ref={ref}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-ttbgsec text-tttext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md border-2 border-ttac"
      >
        <div className="mt-4 relative flex items-center gap-4">
          <div className="relative">
            <Image
              src={photo}
              alt="profile"
              width={80}
              height={80}
              className="rounded-full"
            />
            {user.isVerified && (
              <div className="absolute bottom-0 right-1 ">
                <span className="text-lg text-ttac">{badge}</span>
                <span className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-tttext">
                  {check}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col flex-grow">
            <h1 className="text-xl font-extrabold text-tttext">{name}</h1>
            <p className="text-base font-semibold text-tttextsec">{email}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="flex items-center gap-2 border-2 border-ttborder rounded-md py-1 px-3 text-xs font-medium text-tttext
                hover:border-ttac transition-all duration-300
                "
                onClick={emailVerification}
              >
                {user.isVerified ? (
                  <>
                    <i className="fas fa-check"></i> Верифицирован
                  </>
                ) : (
                  <>
                    <i className="fas fa-times"></i> Не верифицирован
                  </>
                )}
              </button>
              <button
                className="flex items-center gap-2 border-2 border-ttborder rounded-md py-1 px-3 text-xs font-medium text-tttext hover:border-ttac transition-all duration-300"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <>
                    <i className="fas fa-sun"></i> Светлая тема
                  </>
                ) : (
                  <>
                    <i className="fas fa-moon"></i> Тёмная тема
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <form
          action=""
          className="mt-4 pt-2 flex flex-col gap-4 border-t-2 border-t-ttborder"
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(e, {
              name: userState.name,
              email: userState.email,
            });
          }}
        >
          <div className="pt-2 grid grid-cols-[150px_1fr]">
            <label htmlFor="name" className="text-sm font-medium">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              onChange={(e) => handlerUserInput("name")(e)}
              className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-ttborder bg-ttbg text-tttext"
            />
          </div>

          <div className="pt-4 grid grid-cols-2 gap-4 border-t-2 border-t-ttborder">
            <div className="flex flex-col gap-1">
              <label htmlFor="oldPassWord" className="text-sm font-medium">
                Старый пароль
              </label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={handlePassword("old")}
                className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-ttborder bg-ttbg text-tttext"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="newPassword" className="text-sm font-medium">
                Новый пароль
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handlePassword("new")}
                className="py-[0.4rem] px-3 font-medium rounded-lg border-2 border-ttborder bg-ttbg text-tttext"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 border-t-2 border-t-ttborder">
            <button
              className="mt-3 py-2 px-4 bg-transparent text-tttext text-sm font-medium rounded-md border-2 border-ttborder hover:bg-ttdanger hover:border-transparent hover:text-ttwhite transition-all duration-300"
              onClick={closeModal}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="mt-3 py-2 px-4 bg-ttac text-ttwhite text-sm font-medium rounded-md hover:bg-ttachov transition-all duration-300"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;
