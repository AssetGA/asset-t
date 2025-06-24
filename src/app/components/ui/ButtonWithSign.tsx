"use client";
import { Plus } from "@deemlol/next-icons";
import React, { useState } from "react";

type buttonProps = {
  name: string;
  description: string;
};

const ButtonWithSign = (props: buttonProps) => {
  const { name, description } = props;
  const [add, setAdd] = useState<boolean>(false);

  const handleOpen = () => {
    if (add === false) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  };

  return (
    <button
      className="flex flex-col w-full border py-6 px-6 rounded-md text-3xl text-left cursor-pointer"
      onClick={handleOpen}
    >
      <div className="flex flex-row justify-between w-full">
        <p> {name}</p>

        <Plus
          size={30}
          color="#000000"
          className={`${
            add === true
              ? "transform rotate-45 transition-transform duration-1000"
              : "transform rotate-90 transition-transform duration-1000"
          }`}
        />
      </div>
      <div
        className={`transition-all duration-1500 ease-in-out overflow-hidden ${
          add ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-xl mt-5">{description}</p>
      </div>
    </button>
  );
};

export default ButtonWithSign;
