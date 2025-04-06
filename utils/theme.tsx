// // components/ThemeSwitcher.tsx
// import React, { useState, useEffect } from "react";

// const ThemeSwitcher: React.FC = () => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     // Применяем атрибут data-theme на <html>
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   return (
//     <button onClick={toggleTheme} className="p-2 bg-primary text-white rounded">
//       Switch to {theme === "dark" ? "Light" : "Dark"} Theme
//     </button>
//   );
// };

// export default ThemeSwitcher;
