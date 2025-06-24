"use client";

import { works } from "@/utils/works";
import React, { useState } from "react";

export default function HoveredComponent() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <section className="my-30">
      {isHovered ? (
        <div className="my-10 mx-10 w-full px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg transition-opacity duration-300 z-10">
          При наведении
        </div>
      ) : (
        <div className="my-10 mx-10 w-full px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg transition-opacity duration-300 z-10">
          Благодарю за посещение страницы
        </div>
      )}
      <div
        className="flex flex-col md:flex-row"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex md:w-1/2">
          <div className="w-full flex justify-end md:flex-row md:justify-between">
            <h1 className="text-2xl pr-10">Услуги</h1>
          </div>
        </div>

        <ul className="md:w-1/2 py-5 grid gap-4">
          {works.map((elem, index) => (
            <li key={index} className={`border-t-2 py-5`}>
              <h3 className="text-2xl">{elem.name}</h3>

              <p
                className={`py-5 text-lg transition-colors duration-1000 text-black md:text-gray-200 hover:text-black`}
              >
                {elem.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
