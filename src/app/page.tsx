"use client";
import WritersContainer from "@/components/writers-container";
import LyricsContainer from "@/components/lyrics-container";

export default function HomePage() {
  return (
    <div className="flex flex-grow flex-col gap-2">
      <WritersContainer />
      <LyricsContainer />
    </div>
  );
}
