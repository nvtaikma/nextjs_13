"use client";
import style from "@/styles/app.module.css";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import TableExample from "../components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log(">> Fetch data", data);
  //   };
  //   fetchData();
  // }, []);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log(">>> data", data);

  return (
    <div>
      <div>{data?.length}</div>
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
