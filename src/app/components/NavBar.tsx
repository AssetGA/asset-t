"use client";

import React, { useEffect, useState } from "react";
import AstanaTime from "./AstanaTime";
import SlideUpImage from "./ui/SlideUpImage";
import SlideInFromRight from "./ui/SlideFromRight";
import SlideFromUp from "./ui/SlideFromUp";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const pages = [
  { name: "О нас", linkName: "about" },
  { name: "Проекты", linkName: "projects" },
  { name: "Услуги", linkName: "services" },
  { name: "Контакты", linkName: "contact" },
];

const NavBar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [vision, setVision] = useState(true);
  const router = useRouter();

  const handleOpen = () => {
    if (open === false) {
      setOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setOpen(false);
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (vision === false) {
      setVision(true);
    } else {
      setTimeout(() => {
        setVision(false);
      }, 800);
    }
  }, [open]);

  const handleLink = (name: string) => {
    handleOpen();
    router.push(`/${name}`);
  };

  return (
    <div
      className={`flex flex-row justify-between fixed top-0 left-0 w-full z-500 py-5 px-10 transition-colors duration-1000 ease-in-out ${
        open ? "bg-[#323232]" : "bg-white"
      }`}
    >
      <div className="flex flex-col w-full">
        <div
          className={`flex flex-row justify-between ${
            open ? "text-white" : "text-black"
          }`}
        >
          <Link href={"/"}>
            <div className="text-xl">Asset Tazhibayev</div>
          </Link>
          <div>
            <AstanaTime open={open} handleOpen={handleOpen} />
          </div>
        </div>
        {vision && (
          <div
            className={`w-full my-0 transition-opacity duration-500 ease-in-out  ${
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full flex flex-row text-white">
              <div className="w-[50%] h-screen">
                <div className="relative h-screen m-5 md:m-20">
                  <div className="absolute bottom-64 left-0 rounded-xl w-[300px] h-[400px]">
                    <SlideUpImage delay={1.8} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%]">
                <SlideInFromRight number={500} num={0} duration={1.5}>
                  <ul className="text-3xl md:text-5xl my-46">
                    {pages.map((elem, index) => (
                      <li
                        className="flex flex-row justify-between items-center border-b-2 border-white overflow-hidden"
                        key={index}
                      >
                        <SlideFromUp num={3.8}>
                          <button
                            className="w-full py-10 flex hover:pl-10 transition-p duration-500 ease-in-out cursor-pointer"
                            onClick={() => handleLink(`${elem.linkName}`)}
                          >
                            {elem.name}
                          </button>
                        </SlideFromUp>
                        <span className="text-xl">{"0" + `${index + 1}`}</span>
                      </li>
                    ))}
                  </ul>
                </SlideInFromRight>
                <SlideFromUp num={3.8}>
                  <div className="w-full">
                    <ul className="grid grid-cols-3">
                      <li className="flex justify-end">Facebook</li>
                      <li className="flex justify-end">LinkedIn</li>
                      <li className="flex justify-end">Instagram</li>
                    </ul>
                  </div>
                </SlideFromUp>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
