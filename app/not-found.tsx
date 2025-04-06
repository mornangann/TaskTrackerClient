import React from "react";

function Custom404() {
  return (
    <div className="h-screen flex items-center justify-center bg-ttbg text-tttext">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-tttext mb-4">404</h1>
        <p className="text-2xl text-tttextsec mb-6">
          Упс! Мы не можем найти эту страницу.
        </p>
        <p className="text-xl text-tttextsec mb-6">
          Пожалуйста, проверьте URL или перейдите на главную страницу.
        </p>
        <a
          href="/"
          className="text-xl text-ttac hover:text-tttext transition duration-300 ease-in-out"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}

export default Custom404;
