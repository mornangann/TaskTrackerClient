// "use client";
// import { useUserContext } from "@/context/userContext";
// import React from "react";

// function LoginForm() {
//   const { loginUser, userState, handlerUserInput } = useUserContext();
//   const { email, password } = userState;
//   const [showPassword, setShowPassword] = React.useState(false);

//   const togglePassword = () => setShowPassword(!showPassword);
//   return (
//     <form className="m-[2rem] px-10 py-14 rounded-lg bg-white w-full max-w-[520px]">
//       <div className="relative z-10">
//         <h1 className="mb-2 text-center text-[1.35rem] font-medium">
//           Авторизация
//         </h1>
//         <p className="mb-8 text-center text-[#999] text-[14px]">
//           Войдите в свой аккаунт. У вас его нет?{" "}
//           <a
//             href="/register"
//             className="font-bold text-[#2ecc71] hover:text-[#7263f3] transition-all duration-300"
//           >
//             Зарегистрируйтесь здесь
//           </a>
//         </p>
//         <div className="mt-[1rem] flex flex-col">
//           <label htmlFor="email" className="mb-1 text-[#999]">
//             Электронная почта
//           </label>
//           <input
//             type="text"
//             id="email"
//             value={email}
//             onChange={(e) => handlerUserInput("email")(e)}
//             name="email"
//             className="px-4 py-3 border-[2px] rounded-md outline-[#2ecc71] text-gray-800"
//             placeholder="ivanov@mail.ru"
//           />
//         </div>
//         <div className="relative mt-[1rem] flex flex-col">
//           <label htmlFor="password" className="mb-1 text-[#999]">
//             Пароль
//           </label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             value={password}
//             onChange={(e) => handlerUserInput("password")(e)}
//             name="password"
//             className="px-4 py-3 border-[2px] rounded-md outline-[#2ecc71] text-gray-800"
//             placeholder="***********"
//           />
//           <button
//             type="button"
//             className="absolute p-1 right-4 top-[43%] text-[22px] opacity-45"
//           >
//             {showPassword ? (
//               <i className="fas fa-eye-slash" onClick={togglePassword}></i>
//             ) : (
//               <i className="fas fa-eye" onClick={togglePassword}></i>
//             )}
//           </button>
//         </div>
//         <div className="mt-4 flex justify-end">
//           <a
//             href="/forgot-password"
//             className="font-bold text-[#2ecc71] text-[14px] hover:text-[#7263f3] transition-all duration-300"
//           >
//             Забыли пароль?
//           </a>
//         </div>
//         <div className="flex">
//           <button
//             type="submit"
//             className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#2ECC71] text-white rounded-md hover:bg-[#1abc9c] transition-colors"
//             onClick={loginUser}
//           >
//             Войти
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default LoginForm;

"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function LoginForm() {
  const { loginUser, userState, handlerUserInput } = useUserContext();
  const { email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <form className="m-[2rem] px-10 py-14 rounded-lg bg-ttbgsec w-full max-w-[520px]">
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-tttext text-[1.35rem] font-medium">
          Авторизация
        </h1>
        <p className="mb-8 text-center text-tttextsec text-[14px]">
          Войдите в свой аккаунт. У вас его нет?{" "}
          <a
            href="/register"
            className="font-bold text-ttac hover:text-ttachov transition-all duration-300"
          >
            Зарегистрируйтесь здесь
          </a>
        </p>
        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-tttextsec">
            Электронная почта
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => handlerUserInput("email")(e)}
            name="email"
            className="px-4 py-3 border-[2px] border-ttac rounded-md outline-ttac text-ttbgsec"
            placeholder="ivanov@mail.ru"
          />
        </div>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="password" className="mb-1 text-tttextsec">
            Пароль
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handlerUserInput("password")(e)}
            name="password"
            className="px-4 py-3 border-[2px] border-ttac rounded-md outline-ttac text-ttbgsec"
            placeholder="***********"
          />
          <button
            type="button"
            className="absolute p-1 right-4 top-[43%] text-tttext opacity-45"
            onClick={togglePassword}
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="/forgot-password"
            className="font-bold text-ttac text-[14px] hover:text-ttachov transition-all duration-300"
          >
            Забыли пароль?
          </a>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-ttac text-white rounded-md hover:bg-ttachov transition-colors"
            onClick={loginUser}
          >
            Войти
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
