"use client";
import { ArrowRight } from "@deemlol/next-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import BanerWindow from "../components/BanerWindow";
import Link from "next/link";
import CreateSite from "../components/CreateSite";
import HoveredComponent from "../components/HoveredComponent";

const images = [
  "/img/gravitation/ga.png",
  "/img/fone2.png",
  "/img/fone3.png",
  "/img/homes/Link1.png",
  "/img/almale/history.webp",
];

const page = () => {
  return (
    <div className="flex flex-col w-full relative z-10 overflow-hidden">
      {/* Hero Section */}
      <section className="mt-20 mb-40 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Title */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Услуги разработки и web дизайна
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl lg:text-xl mb-8 leading-relaxed">
              Независимый разработчик с опытом работы и командой веб дизайнеров,
              я посвящаю себя созданию проектов, которые вдохновляют и расширяют
              возможности компаний, стремящихся к изменениям.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3 }}
              className="w-fit"
            >
              <Link href={"/contact"}>
                <button className="flex items-center gap-2 pl-6 pr-4 py-4 bg-black/80 text-white rounded-md cursor-pointer group">
                  <span className="group-hover:mr-2 transition-all duration-300">
                    Начнем
                  </span>
                  <ArrowRight
                    size={24}
                    className="transition-all duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <motion.div
        className="relative w-full h-[200px] md:h-[400px] lg:h-[500px] my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 10 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        <Image
          src="/img/fone1.png"
          fill
          className="object-cover rounded-xl"
          alt="Пример наших работ"
          priority
          quality={85}
        />
      </motion.div>
      <HoveredComponent />
      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:p-10">
        <BanerWindow
          buttons={["Продажа элитной недвижимости", "Недвижимость"]}
          name="GA"
          frontName="Компания по продаже элитной недвижимости"
          imageUrl={images[3]}
          color="#000000"
          linkTo={undefined}
          hrefTo="/projects/3"
        />
        <BanerWindow
          buttons={["Комплексная разработка", "Дизайн", "Развитие"]}
          name="Разработки"
          frontName="Внедрение технологии блокчейн"
          imageUrl={images[0]}
          color="#FFFFFF"
          linkTo={undefined}
          hrefTo="/services"
        />
        <div className="w-full h-96 overflow-hidden rounded-xl relative col-span-2">
          <BanerWindow
            buttons={["Посуда медная", "Элитная посуда"]}
            name="ALMA`LE"
            frontName="Элитная высококачественная посуда для дома и профессионалов"
            imageUrl={images[4]}
            color="#FFFFFF"
            linkTo="https://www.alma-le.com/ru"
            hrefTo="/projects/1"
          />
        </div>
      </section>
      <CreateSite />
    </div>
  );
};

export default page;
