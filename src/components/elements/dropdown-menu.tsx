"use client";
import Link from "next/link";
import { type ReactElement, useState } from "react";
import { TbChevronDown, TbChevronUp, TbLink } from "react-icons/tb";

interface Props {
  label?: string;
  openIcon?: ReactElement;
  closeIcon?: ReactElement;
  variant?: "icon" | "label" | "both";
  options: {
    label: string;
    url?: string;
    action?: () => void;
    isLink?: boolean;
    icon?: ReactElement;
  }[];
}

export default function DropdownMenu({
  label = "",
  openIcon = <TbChevronUp />,
  closeIcon = <TbChevronDown />,
  variant = "label",
  options,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative !z-[999] flex items-end space-y-2">
      <button
        className={`${variant === "icon" ? "rounded-full" : "rounded-md pl-3"} flex items-center gap-2 bg-gray-800 p-2 text-lg text-white`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {variant !== "icon" && label && (
          <span className="text-sm font-medium">{label}</span>
        )}
        {variant !== "label" && (isOpen ? openIcon : closeIcon)}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full w-max min-w-52 divide-y overflow-hidden rounded-lg border bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
          {options?.map((item) => (
            <Link
              key={crypto.randomUUID()}
              href={item.url ?? ""}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 hover:text-indigo-700 dark:bg-gray-900 dark:text-gray-300"
            >
              <div className="flex items-center gap-2">
                {item.icon && item.icon}
                {item.label}
              </div>
              {item.isLink && <TbLink />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
