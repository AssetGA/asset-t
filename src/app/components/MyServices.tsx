import { ArrowRight } from "@deemlol/next-icons";
import React from "react";
import ButtonWithSign from "./ui/ButtonWithSign";
import Link from "next/link";

interface Work {
  name: string;
  description: string;
}

type PropsWork = {
  works: Work[];
  name: string | null;
};

const MyServices = (props: PropsWork) => {
  const { works, name } = props;
  return (
    <div className="flex mt-30 md:mt-50">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/2">
          <p className="text-3xl lg:text-5xl w-full font-bold">
            {name !== null ? name : ""}
          </p>
          <div className="flex w-full py-10">
            <Link href={"/contact"}>
              <button className="flex pl-6 pr-4 py-4 bg-black/80 text-white rounded-md cursor-pointer">
                <div className="flex hover:mr-5 transition-all duration-500 ease-in-out">
                  <p className="">К услугам</p>
                  <ArrowRight
                    size={24}
                    color="#FFFFFF"
                    className="mx-2 hover:ml-5"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 py-5 grid  gap-4">
          {works.map((elem, index) => (
            <ButtonWithSign
              key={index}
              name={elem.name}
              description={elem.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
