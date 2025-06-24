"use client";

import React, { useEffect, useState } from "react";
import ScrollZoomImage from "../components/ScrollZoomImage";
import Image from "next/image";
import StackedScrollImages from "../components/StackedScrollImages";
import AnimatedHeading from "../components/AnimatedHeading";

const page = () => {
  const [width, setWidth] = useState(600); // проценты
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Если скроллим вверх — увеличиваем ширину (до 150%)

      setWidth(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full z-100">
      <div className="mt-20 mb-40">
        <div className="flex md:w-[60%]">
          <div className="px-4 text-3xl md:text-7xl">
            «Сражение выигрывает тот, кто твердо решает победить»
          </div>
        </div>
      </div>
      <div className="flex justify-end text-2xl">
        <p>Наполеон Бонапард</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-20">
        <div className="md:grid grid-cols-2 gap-4 hidden">
          <div className="row-span-2 flex items-center">
            <Image
              src="/img/img5.jpeg"
              alt="Zooming image"
              width={1600}
              height={600}
              className="rounded-xl object-cover w-full h-auto "
            />
          </div>
          <Image
            src="/img/img5.jpeg"
            alt="Zooming image"
            width={1600}
            height={900}
            className="rounded-xl object-cover w-full h-auto"
          />
          <Image
            src="/img/img5.jpeg"
            alt="Zooming image"
            width={1600}
            height={900}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
        <ScrollZoomImage />
        <div className="md:grid grid-cols-2 gap-4 hidden ">
          <Image
            src="/img/img5.jpeg"
            alt="Zooming image"
            width={1600}
            height={900}
            className="rounded-xl object-cover w-full h-auto"
          />
          <div className="row-span-2 flex items-center">
            <Image
              src="/img/img5.jpeg"
              alt="Zooming image"
              width={1600}
              height={900}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <Image
            src="/img/img5.jpeg"
            alt="Zooming image"
            width={1600}
            height={900}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="pb-20 ">
        <div className="flex flex-col md:flex-row relative">
          <div
            className={`flex items-center md:w-[50%] ${
              width >= 1500 && width <= 5000 ? "fixed" : "absolute"
            } top-0 z-50`}
          >
            <div className="flex flex-col h-screen md:justify-center">
              <h1 className="text-4xl">Позвольте рассказать вам историю</h1>
              <p className="text-2xl md:text-xl py-10 md:pr-46">
                С юных лет я осознавал, насколько уникально работает мой разум.
                Цвета говорили громче эмоций, а мое воображение рисовало яркие
                миры. Как дизайнер, мое ремесло выходит за рамки вещей в области
                мыслей, эмоций и арт. прозрачность направляет мой подход,
                открыто создавая и используя эмоции не как секреты, а как
                инструменты, чтобы вдохновлять и провоцировать. Я верю в
                создание обстановки, в которой чувства разделяются, поощряя
                отход от простого наблюдения к связи с эмоциональной сущностью
                творения.
              </p>
            </div>
          </div>
          <div className={`flex flex-row w-full `}>
            <div className="md:w-[50%]"></div>

            <StackedScrollImages />
          </div>
        </div>
        <div className="my-[10px]">
          <AnimatedHeading />
        </div>
        <div className="flex flex-col">
          <div className="w-full grid md:grid-cols-2 my-30 h-72">
            <div className="flex flex-col py-4 md:py-0">
              <p className="text-5xl w-full font-bold">Вдохновение</p>
            </div>
            <div className="w-full h-full flex md:items-end justify-end">
              <p className="text-2xl md:text-xl">
                Я нахожу вдохновение в своем раннем детстве и повседневной жизни
                в зрелом возрасте. Я создаю на основе моих текущих эмоций, а не
                текущей тенденции. Я создаю с прозрачностью, чтобы создавать для
                людей, а не для алгоритмов.
              </p>
            </div>
          </div>
          <div className="w-full grid grid-flow-col grid-rows-3 gap-4 my-30">
            <div className="row-span-3 col-span-3">
              <div className="w-full h-[900px] relative">
                <Image
                  src={"/img/img5.jpeg"}
                  fill
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="w-[300px] h-[300px] relative">
                <Image
                  src={"/img/img5.jpeg"}
                  fill
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
            <div className="col-span-2 row-span-2">
              <div className="w-full h-[580px] relative">
                <Image
                  src={"/img/img5.jpeg"}
                  fill
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
