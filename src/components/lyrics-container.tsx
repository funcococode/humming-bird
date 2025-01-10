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
    <div className="">
      <div className="pointer-events-none fixed z-0 flex h-screen w-full flex-col items-end justify-center pr-16 text-[10vw] font-semibold text-gray-100 dark:text-gray-800/30">
        <h1 className="">{data?.name}</h1>
        <h4 className="text-4xl">{data?.user.name}</h4>
      </div>
      <p
        className={`${caveat.className} relative !z-10 whitespace-pre-line text-4xl dark:text-gray-400`}
      >
        {data?.lyrics}
      </p>
    </div>
  );
}
