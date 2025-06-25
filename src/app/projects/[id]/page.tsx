import NewCanvasBlock from "@/app/components/ui/NewCanvasBlocks";
import { ArrowRight } from "@deemlol/next-icons";
import Image from "next/image";
import React from "react";
import { getCompanyById } from "@/lib/api";
import { notFound } from "next/navigation";

// type aboutProps = {
//   name: string;
//   about: string;
//   year: string;
//   services: string;
//   status: string;
// };

type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  const num = Number(params.id);
  const company = getCompanyById(num);

  if (!company) return notFound();

  return (
    <div className="flex flex-col">
      <section className="w-full flex flex-row my-28">
        <div className="w-1/2">
          <h1 className="text-7xl mb-20">{company.name}</h1>
          <button className="flex p-4 bg-black/80 text-white hover:bg-black/70 rounded-md cursor-pointer">
            все проекты
          </button>
        </div>
        <div className="w-1/2">
          <p className="text-xl">{company.about}</p>
        </div>
      </section>
      <div className="py-20">
        <NewCanvasBlock name={company.name} />
      </div>
      <section className="w-full flex flex-row my-28">
        <div className="w-1/2">
          <h1 className="text-2xl mb-20">Детали</h1>
        </div>
        <div className="w-1/2">
          <ul className="text-2xl">
            <li className="flex justify-between border-b-2 py-6">
              <p>Год</p>
              <span>{company.year}</span>
            </li>
            <li className="flex justify-between border-b-2 py-6">
              <p>Клиент</p>
              <span>{company.name}</span>
            </li>
            <li className="flex justify-between border-b-2 py-6">
              <p>Услуги</p>
              <span>{company.services}</span>
            </li>
            <li className="flex justify-between border-b-2 py-6">
              <p>Сайт</p>
              <span>{company.status}</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full h-[900px] relative">
        <Image
          src={company.images[0].src}
          alt=""
          fill
          sizes="1000px"
          className="object-cover rounded-md"
        />
      </section>
      <section className="w-full flex flex-row py-6 space-x-4">
        <div className="w-1/2 h-[1000px] relative">
          <Image
            src={company.images[1].src}
            alt=""
            fill
            sizes="1000px"
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-1/2 flex flex-row bg-gray-100">
          <div className="w-1/3">
            <div className="w-full h-full grid grid-rows-2 gap-10">
              <div className="w-full h-full relative hover:shadow-2xl">
                <Image
                  src={company.images[2].src}
                  alt=""
                  fill
                  sizes="500px"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="w-full h-full relative hover:shadow-2xl">
                <Image
                  src={company.images[3].src}
                  alt=""
                  fill
                  sizes="500px"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="w-2/3 ml-10">
            <div className="w-full h-full grid grid-rows-3 gap-10">
              <div className="w-full h-full relative hover:shadow-2xl">
                <Image
                  src={company.images[4].src}
                  alt=""
                  fill
                  sizes="500px"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="w-full h-full relative hover:shadow-2xl">
                <Image
                  src={company.images[5].src}
                  alt=""
                  fill
                  sizes="500px"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="w-full h-full relative hover:shadow-2xl">
                <Image
                  src={company.images[6].src}
                  alt=""
                  fill
                  sizes="500px"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col my-20 px-10">
        <div className="flex flex-row ">
          <div className="flex flex-col w-1/2">
            <h1 className="text-5xl font-bold">
              Хотите развивать свой бизнес создайте красочный сайт?
            </h1>
            <p className="text-xl py-5">
              Заинтересованы в создании нового веб-сайта, брендингового проекта
              или даже просто возникли вопросы пишите в чат?
            </p>
          </div>
          <div className="flex w-1/2 justify-end">
            <p className="text-2xl">Пишите обсудим</p>
          </div>
        </div>
        <div className="flex w-full py-10">
          <button className="flex pl-6 pr-4 py-4 bg-black/80 text-white rounded-md cursor-pointer">
            <div className="flex hover:mr-5 transition-all duration-500 ease-in-out">
              <p className="">Запрос</p>
              <ArrowRight
                size={24}
                color="#FFFFFF"
                className="mx-2 hover:ml-5"
              />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
