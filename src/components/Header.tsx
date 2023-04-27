import { BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header() {
  const [theme, setTheme] = useState("light");

  //   const toggleTheme = () => {
  //     if (
  //       localStorage.theme === "dark" ||
  //       (!("theme" in localStorage) &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches)
  //     ) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   };

  useEffect(() => {
    toggleTheme();
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className=" flex justify-between w-full mx-auto py-4 px-4 dark:text-white">
      <span className="text-2xl font-semibold">dev Finder</span>

      <div onClick={themeSwitch}>
        {localStorage.theme === "dark" ? (
          <div className=" flex gap-4 items-center">
            <span>Night</span>
            <span>
              <BsFillMoonStarsFill className="w-[20px] h-[20px] cursor-pointer" />
            </span>
          </div>
        ) : (
          <div className=" flex gap-4 items-center">
            <span>Light</span>
            <span>
              <BsSunFill className="w-[30px] h-[30px] cursor-pointer" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
