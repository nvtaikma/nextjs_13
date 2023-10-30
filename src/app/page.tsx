"use client";
import style from "@/styles/app.module.css";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import TableExample from "../components/app.table";

export default function Home() {
  return (
    <div>
      <ul>
        <li className={style["red"]}>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li className={style["green"]}>
          <Link href="/tiktok">TikTok</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
      </ul>
      <TableExample />
    </div>
  );
}
