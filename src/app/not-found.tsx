import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="grid place-content-center">
      Are you lost baby girl? go back{" "}
      <Link href={"/"} className="text-blue-500">
        Home
      </Link>
    </div>
  );
}
