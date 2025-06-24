import Image from "next/image";
import React from "react";
import NextVideo from "../components/ui/NextVideo";
import { ArrowRight } from "@deemlol/next-icons";
import MyServices from "../components/MyServices";
import { works } from "../../utils/works";
import AnimatedLines from "../components/ui/AnimatedLines";
import ResponsiveText from "../components/ui/ResponsiveText";
import ColorOnScrollText from "../components/ui/ColorOnScrollText";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl xl:text-6xl py-10">
        <ResponsiveText
          text="Ваш сайт - это лицо вашего бизнеса, поэтому вы должны инвестировать в
        эстетику и ощущение вашего сайта. Я сосредотачиваюсь на создании
        веб-сайтов, которые адаптируются, креативны и ориентированы на
        пользователя, чтобы они идеально соответствовали потребностям вашего
        бизнеса."
        />
      </h1>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 my-30">
        <div className="flex flex-col md:w-[50%]">
          <h2 className="text-2xl py-4">Быть прозрачным</h2>
          <NextVideo
            src={"/videos/1.mp4"}
            // poster="/img/img3.jpeg"
            // preload={preload}
            className="w-[400px] h-[300px] rounded-md"
          />
        </div>
        <div className="relative w-full h-full">
          <Link href={"/contact"}>
            <button className="absolute left-0 bottom-0 flex flex-row py-4 px-6 border rounded-md text-white bg-black/80 transition-p hover:pr-4 duration-500 ease-in-out">
              <p className="transition-all duration-300 ease-in-out">
                Выйти на связь
              </p>
              <ArrowRight
                size={24}
                color="#FFFFFF"
                className="mx-2  text-black hover:text-white transition-p hover:pl-4 duration-500 ease-in-out"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 my-30">
        <div className="flex flex-col w-[50%]">
          <h2 className="text-xl md:text-2xl">Основное внимание</h2>
        </div>
        <div className="flex flex-col py-8 md:py-0">
          <p className="text-lg md:text-xl">
            С многолетним опытом я узнал, что все компании, большие и малые,
            разделяют одну фундаментальную черту: они работают на людях. Я
            понимаю, что для связи со своей аудиторией вы должны представить
            себя достоверно и эффективно, чтобы достичь нужных людей.
          </p>
          <div className="grid grid-cols-2 gap-5 my-12">
            <div className="">
              <h3 className="text-2xl">Намеренно маленький</h3>
              <p className="text-lg md:text-xl my-4">
                Я сотрудничаю с намеренно малыми компаниями, чтобы усилить их
                влияние и помочь им добиться значимых изменений.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Сотрудничество</h3>
              <p className="text-lg md:text-xl my-4">
                Вместе мы создаем проекты, которые не только выглядят
                потрясающе, но и оказывают длительное влияние.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 my-30 h-96">
        <div className="flex flex-col w-[50%]">
          <h2 className="text-2xl py-4">Произведение искусства</h2>
        </div>
        <div className="relative w-full h-full">
          <Link href={"/artwork"}>
            <button className="absolute left-0 bottom-0 flex flex-row py-4 px-6 border rounded-md text-white bg-black/80 transition-p hover:pr-4 duration-500 ease-in-out">
              <p className="transition-all duration-300 ease-in-out">
                Просмотр
              </p>
              <ArrowRight
                size={24}
                color="#FFFFFF"
                className="mx-2  text-black hover:text-white transition-p hover:pl-4 duration-500 ease-in-out"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 my-30 h-72">
        <div className="flex flex-col">
          <p className="text-3xl md:text-5xl w-full font-bold">Вдохновение</p>
        </div>
        <div className="w-full h-full flex items-end justify-end">
          <p className="text-xl">
            Я нахожу вдохновение в своем раннем детстве и повседневной жизни в
            зрелом возрасте. Я создаю на основе моих текущих эмоций, а не
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
      <MyServices
        works={works}
        name="Я объединяю стратегическое понимание с моим уникальным творческим подходом"
      />
      <div className="grid md:grid-cols-2 my-30 text-xl">
        <div>
          <h3 className="text-3xl md:text-6xl">
            Хотите развивать свой бизнес с новым сайтом?
          </h3>
          <p className="py-10">
            Заинтересованы в создании нового веб-сайта, брендингового проекта,
            приложения или криптопроекта?
          </p>
          <Link href={"/contact"}>
            <button className="flex flex-row py-4 px-6 border rounded-md text-white bg-black/80 transition-p hover:pr-4 duration-500 ease-in-out mb-30">
              <p className="transition-all duration-300 ease-in-out ">
                Обсудим
              </p>
              <ArrowRight
                size={24}
                color="#FFFFFF"
                className="mx-2  text-black hover:text-white transition-p hover:pl-4 duration-500 ease-in-out"
              />
            </button>
          </Link>
        </div>
        <div className="md:flex justify-end hidden ">
          <p className="p-4 h-15 rounded-2xl hover:bg-black/10 transition-colors duration-1000">
            Обсудим сотрудничество!
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
