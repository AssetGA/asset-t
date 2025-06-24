"use client";
import React, { useEffect, useState } from "react";

const History = () => {
  const [width, setWidth] = useState(600); // проценты
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setWidth(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex items-center md:w-[50%] ${
        width >= 1500 && width <= 4700 ? "fixed" : "absolute"
      } top-0 z-50`}
    >
      <div className="flex flex-col h-screen md:justify-center">
        <h1 className="text-4xl">Позвольте рассказать вам историю</h1>
        <p className="text-2xl md:text-xl py-10 md:pr-46">
          С юных лет я осознавал, насколько уникально работает мой разум. Цвета
          говорили громче эмоций, а мое воображение рисовало яркие миры. Как
          дизайнер, мое ремесло выходит за рамки вещей в области мыслей, эмоций
          и арт. прозрачность направляет мой подход, открыто создавая и
          используя эмоции не как секреты, а как инструменты, чтобы вдохновлять
          и провоцировать. Я верю в создание обстановки, в которой чувства
          разделяются, поощряя отход от простого наблюдения к связи с
          эмоциональной сущностью творения.
        </p>
      </div>
    </div>
  );
};

export default History;
