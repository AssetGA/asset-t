import { ArrowRight } from "@deemlol/next-icons";
import React from "react";
import BanerWindow from "../components/BanerWindow";
import Link from "next/link";
import CreateSite from "../components/CreateSite";

const images = [
  "/img/fone1.png",
  "/img/fone2.png",
  "/img/fone3.png",
  "/img/project1.jpg",
  "/img/project2.png",
  "/img/project2.png",
  "/img/almale/mission.webp",
  "/img/Iamproduce/products.png",
  "/img/gravitation/ga.png",
  "/img/homes/kokshe.jpeg",
];

const page = () => {
  return (
    <div className="flex flex-col w-full z-100">
      <div className="mt-20 mb-40">
        <div className="flex">
          <div className="px-4 text-3xl md:text-6xl">Избранные проекты</div>
        </div>
        <div className="flex md:justify-end md:px-10 py-6">
          <div className="md:w-1/2 flex flex-col">
            <p className="px-5 md:px-15 text-xl">
              Улучшение брендов и веб-сайтов, которые приносят результаты
              компаниям по всему миру и на местном уровне.
            </p>
            <div className="w-full px-15 my-10 ">
              <Link href={"/contact"}>
                <button className="flex pl-6 pr-4 py-4 bg-black/80 text-white rounded-md cursor-pointer">
                  <p className="hover:ml-5 transition-all duration-500 ease-in-out">
                    Начнем
                  </p>
                  <ArrowRight
                    size={24}
                    color="#FFFFFF"
                    className="mx-2 hover:ml-5 transition-all duration-500 ease-in-out"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:p-10">
        <BanerWindow
          buttons={["Продажа элитной недвижимости", "Недвижимость"]}
          name="Агенство"
          frontName="Компания по продаже элитной недвижимости"
          imageUrl={images[9]}
          color="#FFFFFF"
          linkTo={undefined}
          hrefTo="/projects/3"
        />
        <BanerWindow
          buttons={["Развитие бренда", "Дизайн", "Разработка"]}
          name="Разработки"
          frontName="Внедрение технологии блокчейн"
          imageUrl={images[0]}
          color="#FFFFFF"
          linkTo={undefined}
          hrefTo=""
        />

        <div className="w-full h-96 overflow-hidden rounded-xl relative col-span-2">
          <BanerWindow
            buttons={["Продажа", "Разработка посуды"]}
            name="Alma-le"
            frontName="Продажа элитной посуды для поваров и домохозяек"
            imageUrl={images[6]}
            color="#FFFFFF"
            linkTo="https://www.alma-le.com/ru"
            hrefTo="/projects/1"
          />
        </div>
      </section>
      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:p-10">
        <BanerWindow
          buttons={["Аналитика", "Контроль"]}
          name="Бухгалтерский учет"
          frontName="Бухучет - основа инвестиционного анализа"
          imageUrl={images[4]}
          color="#000000"
          linkTo={undefined}
          hrefTo=""
        />
        <BanerWindow
          buttons={["Развитие бренда", "Дизайн", "Разработка"]}
          name="Я Производитель"
          frontName="Магазин производителей"
          imageUrl={images[7]}
          color="#FFFFFF"
          linkTo={undefined}
          hrefTo=""
        />

        <div className="w-full h-96 overflow-hidden rounded-xl relative col-span-2">
          <BanerWindow
            buttons={[
              "Токенизация",
              "Анализатор проектов",
              "Инвестиционный мост",
            ]}
            name="GRAVITATION-ETHER"
            frontName="Анализатор криптопроектов с ИИ"
            imageUrl={images[8]}
            color="#FFFFFF"
            linkTo={undefined}
            hrefTo=""
          />
        </div>
      </section>

      <CreateSite />
    </div>
  );
};

export default page;
