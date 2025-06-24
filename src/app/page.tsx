import { ArrowRight } from "@deemlol/next-icons";
import FloatingImagesMultiColumn from "./components/FloatingImagesMultiColumn";
import BanerWindow from "./components/BanerWindow";
import MyServices from "./components/MyServices";
import { works } from "../utils/works";
import Link from "next/link";
import CreateSite from "./components/CreateSite";

export default function Home() {
  const images = [
    "/img/sila-sporta/photo2.png",
    "/img/paint/foto3.jpg",
    "/img/almale/mission.webp",
  ];
  return (
    <div className="flex flex-col w-full z-100">
      <section className="flex py-4">
        <div className="flex border-2 py-2 px-4 bg-gray-100 rounded-md">
          <div className="px-4">Доступно для новых проектов</div>
          <div className="bg-green-400 rounded-full w-3 h-3 mt-1"></div>
        </div>
      </section>
      <section className="flex md:justify-end justify-center xl:px-10">
        <div className="w-full py-10 md:py-0 md:w-1/2  flex flex-col">
          <p className="px-2 xl:px-15">
            Местоположение г. Астана, Казахстан, работаем по всему миру, создаем
            веб-сайты, которые визуально потрясающие и способствуют повышению
            вовлеченности.
          </p>
          <div className="w-full flex justify-end md:justify-start md:px-15 my-10 ">
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
      </section>
      <div className="w-full my-24">
        <FloatingImagesMultiColumn />
      </div>
      <section className="w-full my-30">
        <div className="grid sm:grid-cols-2">
          <div className="sm:hidden"></div>
          <div className="flex flex-row gap-4 px-1">
            <Link href={"/about"}>
              <button className="flex flex-row py-4 px-6 border rounded-md hover:bg-black/80 hover:text-white transition-all duration-500 ease-in-out">
                <p className="transition-all duration-800 ease-in-out">О нас</p>
                <ArrowRight
                  size={24}
                  color="#FFFFFF"
                  className="mx-2 text-black hover:text-white"
                />
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="flex flex-row py-4 px-6 border rounded-md hover:bg-black/80 hover:text-white transition-all duration-500 ease-in-out">
                <p className="transition-all duration-300 ease-in-out">
                  Выйти на связь
                </p>
                <ArrowRight
                  size={24}
                  color="#FFFFFF"
                  className="mx-2  text-black hover:text-white"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between sm:px-10 my-15">
        <p className="text-5xl w-full font-bold">Избранные проекты</p>
        <div className="flex justify-end w-full py-10 md:py-0">
          <Link href={"/projects"}>
            <button className="flex pl-6 pr-4 py-4 bg-black/80 text-white rounded-md cursor-pointer">
              <div className="flex hover:mr-5 transition-all duration-500 ease-in-out">
                <p className="">К проектам</p>
                <ArrowRight
                  size={24}
                  color="#FFFFFF"
                  className="mx-2 hover:ml-5"
                />
              </div>
            </button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:p-10">
        <BanerWindow
          buttons={["Печать на стенах", "Дизайн", "Печать"]}
          name="Студия"
          frontName="Независимая дизайн студия, печать на стенах и т. д."
          imageUrl={images[1]}
          color="#FFFFFF"
          linkTo="https://paint-liart.vercel.app/"
          hrefTo="/projects/0"
        />
        <BanerWindow
          buttons={["Дизайн", "Пошив", "Спортивная одежда"]}
          name="SILA-SPORTA"
          frontName="Пошив одежды для спорта"
          imageUrl={images[0]}
          color="#FFFFFF"
          linkTo="https://silasport.kz"
          hrefTo="/projects/2"
        />

        <div className="w-full h-96 overflow-hidden rounded-xl relative col-span-2">
          <BanerWindow
            buttons={["Посуда медная", "Элитная посуда"]}
            name="ALMA`LE"
            frontName="Элитная высококачественная посуда для дома и профессионалов"
            imageUrl={images[2]}
            color="#FFFFFF"
            linkTo="https://www.alma-le.com/ru"
            hrefTo="/projects/1"
          />
        </div>
      </section>

      <MyServices
        works={works}
        name="Я объединяю стратегическое понимание с уникальными технологиями"
      />
      <CreateSite />
    </div>
  );
}
