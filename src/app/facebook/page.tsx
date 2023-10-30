"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
const Facebook = () => {
  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/");
  };

  return (
    <div>
      facebook page
      <div>
        <Button variant="success" onClick={() => handleBtnClick()}>
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Facebook;
