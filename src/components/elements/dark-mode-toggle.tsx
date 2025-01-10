"use client";
import { useThemeStore } from "@/stores/useThemeStore";
import { useEffect } from "react";
import { TbMoon, TbSun } from "react-icons/tb";

export default function DarkModeToggle() {
  const { isDark, toggleIsDark } = useThemeStore();
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <>
      <button
        onClick={toggleIsDark}
        className={`rounded-lg border p-2 text-xl ${isDark ? "border-blue-800 bg-blue-700/10 text-blue-600" : "border-yellow-100 bg-yellow-800/10"}`}
      >
        {isDark ? <TbMoon /> : <TbSun />}
      </button>
    </>
  );
}
