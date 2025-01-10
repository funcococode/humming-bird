"use client";
import WritersContainer from "@/components/writers-container";
import LyricsContainer from "@/components/lyrics-container";

export default function HomePage() {
  return (
    <div className="flex flex-grow gap-2">
      {/* <div className="">
        <WritersContainer />
      </div> */}
      <div className="flex-1 flex-grow">
        <LyricsContainer />
      </div>
    </div>
  );
}
