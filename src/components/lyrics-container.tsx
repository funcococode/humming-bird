"use client";
import { Indie_Flower } from "next/font/google";
import useToday from "@/hooks/use-today";
const caveat = Indie_Flower({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function LyricsContainer() {
  const { data, isLoading } = useToday();

  if (isLoading) {
    return "loading...";
  }

  return (
    <div className="relative">
      <h1 className="pointer-events-none fixed z-0 h-screen text-[30vw] font-semibold text-gray-100 dark:text-gray-800/30">
        {data?.name}
      </h1>
      <p
        className={`${caveat.className} relative !z-10 whitespace-pre-line text-4xl dark:text-gray-400`}
      >
        {data?.lyrics}
      </p>
    </div>
  );
}
