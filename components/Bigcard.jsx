import Image from "next/image";
import React from "react";
import MiniLayout from "../Layout/MiniLayout";

const Bigcard = () => {
  return (
    <MiniLayout>
      <div className="grid grid-cols-2 w-full ">
        <div className=" bg-gold">
          <Image
            src="/images/post.webp"
            alt="Post Image "
            width="100%"
            height="100%"
          />
        </div>
        <div className=" bg-red-500"></div>
      </div>
    </MiniLayout>
  );
};

export default Bigcard;
