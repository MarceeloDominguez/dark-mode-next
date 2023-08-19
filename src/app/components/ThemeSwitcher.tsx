"use client";
import { useTheme } from "next-themes";
import { MoonIcon } from "./MooinIcon";
import { SunIcon } from "./SunIcon";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="ml-4">
      The current theme is: {theme}
      <br />
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-red-400 w-10 h-10 flex items-center justify-center"
        >
          <SunIcon />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-red-400 w-10 h-10 flex items-center justify-center"
        >
          <MoonIcon />
        </button>
      )}
      {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
    </div>
  );
}
