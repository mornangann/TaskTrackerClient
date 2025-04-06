// import React from "react";
// import Profile from "../Profile/Profile";
// import RadialChart from "../RadialChart/RadialChart";
// import { useUserContext } from "@/context/userContext";

// function Sidebar() {
//   const { logoutUser } = useUserContext();
//   return (
//     <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
//       <Profile />
//       <div className="mt-4 mx-6">
//         <RadialChart />
//       </div>

//       <button
//         className="mt-auto mb-6 mx-6 py-4 px-8 bg-[#EB4E31] text-white rounded-[50px] hover:bg-[#3aafae] transition duration-200 ease-in-out"
//         onClick={logoutUser}
//       >
//         Выйти
//       </button>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className="w-[20rem] h-full fixed right-0 top-0 bg-ttbgsec flex flex-col text-tttext">
      <Profile />
      <div className="flex flex-col h-full justify-between">
        <div className="mt-4 mx-6">
          <RadialChart />
        </div>

        <button
          className="mb-5 mx-6 py-4 px-8 bg-ttac text-ttbg rounded-[50px] 
        hover:bg-ttachov transition duration-200 ease-in-out"
          onClick={logoutUser}
        >
          <p className="exit-btn font-semibold">Выйти</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
