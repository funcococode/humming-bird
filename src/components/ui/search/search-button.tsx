"use client";
import { useSearchStore } from "@/stores/useSearchStore";
import { TbSearch } from "react-icons/tb";

export function SearchButton() {
  const { toggleSearch } = useSearchStore();
  return (
    <>
      <button
        onClick={toggleSearch}
        className="rounded-lg border bg-yellow-800/10 p-2 text-lg"
      >
        <TbSearch />
      </button>
    </>
  );
}
