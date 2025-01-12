"use client";
import { useNavStore } from "@/stores/useNavStore";
import type { NavigationLink } from "@/types/common";
import Link from "next/link";

interface Props {
  links: NavigationLink[];
}

export default function NavLinks({ links }: Props) {
  const { current } = useNavStore();
  return (
    <ul className="flex items-center gap-2">
      {links?.map((item) => (
        <Link
          key={item.key}
          href={item.url}
          className={`flex items-center gap-2 px-4 text-gray-200 ${current?.toLowerCase() == item.key ? "text-gray-800" : "hover:text-gray-400"} relative`}
        >
          <span className="text-lg">{item.icon && item.icon}</span>
          {item.label}
          {current.toLowerCase() === item.key && (
            <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-500"></div>
          )}
        </Link>
      ))}
    </ul>
  );
}
