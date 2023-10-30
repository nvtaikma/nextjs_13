import style from "@/styles/app.module.css";
import Link from "next/link";
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
    </div>
  );
}
