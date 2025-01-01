import React from "react";
import Image from "next/image";
const Generate = () => {
  return (
    <div className="bg-[#eac1ea] min-h-screen grid grid-cols-2">
      <div className="div.picture  ml-44">
        <Image alt="image" src="/generate.png" width={320} height={320} />
      </div>
      <div className="inputs flex flex-col justify-center items-center">
        <p>Create your link</p>
        <input type="text" placeholder="Enter Link text" />
        <input type="text" placeholder="Enter Link " />
      </div>
    </div>
  );
};

export default Generate;
