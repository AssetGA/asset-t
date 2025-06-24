"use client";

import React, { useEffect, useState } from "react";

type TimeProps = {
  open: boolean;
  handleOpen: () => void;
};

const AstanaTime = ({ open, handleOpen }: TimeProps) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatter.format(new Date()));
    };

    updateTime(); // сразу показать время
    const interval = setInterval(updateTime, 1000); // обновлять каждую секунду
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="flex flex-row ">
        <p className="pr-1">Astana</p>
        <p className="">{" - " + time}</p>
      </div>
      <button
        className="w-24 px-4 py-2 cursor-pointer
"
        onClick={handleOpen}
      >
        <p
          className={`w-full border-t-2 pt-2 ${
            open
              ? "border-white hover:border-white/80"
              : "border-black hover:border-black/80"
          }`}
        ></p>
        <p
          className={`w-full border-t-4 pt-2 ${
            open
              ? "border-white hover:border-white/80"
              : "border-black hover:border-black/80"
          }`}
        ></p>
      </button>
    </div>
  );
};

export default AstanaTime;
