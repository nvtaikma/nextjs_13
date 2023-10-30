"use client";
import { useRouter } from "next/navigation";
const Facebook = () => {
  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/admin");
  };

  return (
    <div>
      facebook page
      <div>
        <button onClick={() => handleBtnClick()}>Back Home</button>
      </div>
    </div>
  );
};

export default Facebook;
