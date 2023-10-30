"use client";
import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';
const Facebook = () => {
  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/");
  };

  return (
    <div >
      facebook page
      <div>
        <Button variant="success">Facebook</Button>
        <button onClick={() => handleBtnClick()}>Back Home</button>
      </div>
    </div>
  );
};

export default Facebook;
