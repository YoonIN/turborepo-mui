import { Input } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Input />
      <Link href={"/main"}>link to main (app router)</Link>
    </>
  );
}
