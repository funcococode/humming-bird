import { redirect } from "next/navigation";

export default async function HomePage() {
  redirect("/today/poem");
  return <></>;
}
