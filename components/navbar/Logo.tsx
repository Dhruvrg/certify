"use client";

import { AiOutlineDatabase } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center md:text-xl md:font-extrabold font-bold cursor-pointer bg-gradient-to-r from-purple-900 via-pink-500 to-white text-transparent bg-clip-text bg-300% animate-gradient hover:scale-105 duration-500">
      <div className="bg-pink-500 rounded-full p-1">
        <AiOutlineDatabase className="text-black text-2xl" />
      </div>
      <p className="text-xl">CertifyPro</p>
    </div>
  );
};

export default Logo;
