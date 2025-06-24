"use client";

import { ArrowUpRight } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  buttons: string[];
  name: string;
  frontName: string;
  imageUrl: string;
  color: string;
  linkTo: string | undefined;
  hrefTo: string;
};

const BanerWindow = (props: Props) => {
  const router = useRouter();
  const { buttons, name, frontName, imageUrl, color, linkTo, hrefTo } = props;
  const [show, setShow] = useState(false);
  const handleMouseMove = () => {
    setShow(true);
  };
  const handleMouseMoveRemove = () => {
    setShow(false);
  };

  return (
    <div
      className="w-full h-96 overflow-hidden rounded-xl relative text-xl"
      onMouseLeave={handleMouseMoveRemove}
    >
      <div
        className={`absolute z-100 h-full ${
          color === "#FFFFFF" ? "text-white" : "text-black"
        } py-5 px-2 md:p-5 w-full `}
        onMouseOver={handleMouseMove}
      >
        <div className="flex flex-col justify-between h-full relative">
          <div className="flex flex-col pr-4">
            <div className="text-md md:text-xl">{frontName}</div>
            <div className="text-2xl md:text-3xl">{name}</div>
          </div>
          <div className="flex h-full justify-center items-center w-full py-5">
            <Link href={hrefTo}>
              <button
                className={`flex w-20 h-20 rounded-full bg-opacity-30 bg-white/30 border justify-center items-center transition-all duration-700 ${
                  !show ? "hidden " : "flex "
                }`}
              >
                <ArrowUpRight size={30} color={color} />
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 py-5">
            {buttons.length > 0 &&
              buttons.map((elem, index) => (
                <button
                  key={index}
                  className={`px-2 md:px-4 py-1 md:py-2 border rounded-md bg-opacity-50 bg-white/10  hover:bg-white/20 transition text-sm md:text-xl`}
                  onClick={() =>
                    router.push(`${linkTo !== undefined ? linkTo : "#"}`)
                  }
                >
                  {elem}
                </button>
              ))}
          </div>
        </div>
      </div>

      <Image
        src={imageUrl}
        fill
        sizes="1500px"
        alt=""
        className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${
          show ? "scale-110" : ""
        }`}
      />
    </div>
  );
};

export default BanerWindow;
