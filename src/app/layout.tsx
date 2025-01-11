import DarkModeToggle from "@/components/ui/dark-mode-toggle";
import DropdownMenu from "@/components/ui/dropdown-menu";
import { SearchButton } from "@/components/ui/search/search-button";
import { SearchContainer } from "@/components/ui/search/search-container";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import { TbCategory, TbPencil, TbPlus, TbUser, TbX } from "react-icons/tb";
import { Inter } from "next/font/google";
import NavLinks from "@/components/ui/nav-links";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const menuOptions = [
  {
    label: "Users",
    url: "/user",
    icon: <TbUser />,
    isLink: true,
  },
  {
    label: "Lyrics",
    url: "/lyrics",
    icon: <TbPencil />,
    isLink: true,
  },
  {
    label: "Category",
    url: "/category",
    icon: <TbCategory />,
    isLink: true,
  },
];

const links = [
  {
    label: "Poems",
    url: "/today/poem",
    key: "poem",
  },
  {
    label: "Quotes",
    url: "/today/quote",
    key: "quote",
  },
  {
    label: "Philosophies",
    url: "/today/philosophy",
    key: "philosophy",
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className={`flex min-h-screen flex-col dark:bg-gray-900 ${inter.className}`}
      >
        <header className="sticky top-0 !z-[99999999] flex items-center justify-between border-b border-gray-100 bg-white p-5">
          <SearchContainer />
          <nav className="flex items-center">
            <Link href={"/"} className="text-xl font-semibold dark:text-white">
              Humming Bird
            </Link>
          </nav>
          <NavLinks links={links} />
          <div className="flex items-center gap-2">
            <SearchButton />
            <DarkModeToggle />
            <DropdownMenu
              options={menuOptions}
              openIcon={<TbX />}
              closeIcon={<TbPlus />}
              label="Add"
              variant="both"
            />
          </div>
        </header>
        <main className="flex flex-1 flex-col p-5">{children}</main>
      </body>
    </html>
  );
}
