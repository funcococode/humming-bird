"use client";
import { squarePeg } from "@/assets/fonts/fonts";
import useToday from "@/hooks/use-today";
import { useNavStore } from "@/stores/useNavStore";
import { use, useEffect } from "react";

export default function Today({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const category = use(params);
  const { setCurrent, current } = useNavStore();
  const { data, isLoading } = useToday(category.cat);

  useEffect(() => {
    setCurrent(category.cat);
  }, [category, setCurrent]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <div className="flex flex-grow items-center justify-between">
      <p
        className={`relative !z-10 whitespace-pre-line text-xl dark:text-gray-400 ${current === "quote" && `flex flex-grow items-center text-5xl ${squarePeg.className}`}`}
      >
        {data?.lyrics}
      </p>
      <div className="space-y-4 text-[10vw] font-semibold">
        <h1 className="text-right text-2xl font-bold text-blue-700">
          <span className="capitalize">{current}</span> of the day
        </h1>
        <h1 className="text-8xl text-gray-100 dark:text-gray-800/30">
          {current !== "quote" && data?.name}
        </h1>
        <h4 className="text-right text-3xl font-light text-gray-200 dark:text-gray-800/30">
          {data?.user.name}
        </h4>
      </div>
    </div>
  );
}
