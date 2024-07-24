import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link";
import { Input } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Input />
        <div className={styles.ctas}>
          <Link href={"/"}>link to home</Link>
        </div>
      </main>
    </div>
  );
}
