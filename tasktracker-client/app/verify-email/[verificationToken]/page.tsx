// "use client";
// import { useUserContext } from "@/context/userContext";
// import React, { use } from "react";
// import { useParams } from "next/navigation";

// interface Props {
//   params: {
//     verificationToken: string;
//   };
// }

// function page({ params }: Props) {
//   const { verificationToken } = params;

//   const { verifyUser } = useUserContext();

//   return (
//     <div className="auth-page  flex flex-col justify-center items-center">
//       <div className="bg-white flex flex-col justify-center gap-[1rem] px-[4rem] py-[2rem] rounded-md">
//         <h1 className="text-[#999] text-[2rem]">Подтвердите ваш аккаунт</h1>
//         <button
//           className="px-4 py-2 self-center bg-blue-500 text-white rounded-md"
//           onClick={() => {
//             verifyUser(verificationToken);
//           }}
//         >
//           Подтвердить
//         </button>
//       </div>
//     </div>
//   );
// }

// export default page;

// "use client";
// import { useUserContext } from "@/context/userContext";
// import React from "react";
// import { useParams } from "next/navigation";

// function Page() {
//   const params = useParams();
//   const { verificationToken } = params;

//   const { verifyUser } = useUserContext();

//   return (
//     <div className="auth-page flex flex-col justify-center items-center">
//       <div className="bg-white flex flex-col justify-center gap-[1rem] px-[4rem] py-[2rem] rounded-md">
//         <h1 className="text-[#999] text-[2rem]">Подтвердите ваш аккаунт</h1>
//         <button
//           className="px-4 py-2 self-center bg-blue-500 text-white rounded-md"
//           onClick={() => {
//             verifyUser(verificationToken);
//           }}
//         >
//           Подтвердить
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Page;

"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  const { verificationToken } = params;

  const { verifyUser } = useUserContext();

  return (
    <div className="auth-page flex flex-col justify-center items-center bg-ttbgsec min-h-screen">
      <div className="bg-ttbg flex flex-col justify-center gap-[1rem] px-[4rem] py-[2rem] rounded-md">
        <h1 className="text-tttext text-[2rem] text-center">
          Подтвердите ваш аккаунт
        </h1>
        <button
          className="px-4 py-2 self-center bg-ttac text-ttwhite rounded-md hover:bg-ttachov transition-colors"
          onClick={() => {
            verifyUser(verificationToken);
          }}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
}

export default Page;
