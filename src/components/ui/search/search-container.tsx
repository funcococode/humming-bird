"use client";

import { useSearchStore } from "@/stores/useSearchStore";
import { TbX } from "react-icons/tb";

export function SearchContainer() {
  const { searchOpen, toggleSearch } = useSearchStore();
  return searchOpen ? (
    <section className="fixed left-0 top-0 !z-[99999] h-screen w-screen bg-white p-5">
      <header className="flex items-center justify-between text-lg">
        <h1 className="font-semibold">Search</h1>
        <button
          onClick={toggleSearch}
          className="rounded-lg bg-yellow-800/10 p-2 hover:bg-yellow-800/20"
        >
          <TbX />
        </button>
      </header>
      <main className="mt-10 space-y-8">
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 bg-gray-100 p-4 text-xl text-gray-300 placeholder-gray-300 outline-none"
          placeholder="Search poems, quotes, writers, etc..."
        />
        <div className="grid grid-cols-4"></div>
      </main>
    </section>
  ) : (
    <></>
  );
}
