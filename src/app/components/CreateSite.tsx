import { ArrowRight } from "@deemlol/next-icons";
import Link from "next/link";
import React from "react";

export default function CreateSite() {
  return (
    <section className="flex flex-col my-20 px-2 lg:px-10">
      <div className="flex flex-row ">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Хотите развивать свой бизнес создайте красочный сайт?
          </h1>
          <p className="text-xl py-5">
            Заинтересованы в создании нового веб-сайта, брендингового проекта
            или даже просто возникли вопросы пишите в чат?
          </p>
        </div>
        <div className="flex lg:w-1/2 justify-end">
          <p className="text-2xl">Пишите обсудим</p>
        </div>
      </div>
      <div className="flex w-full py-10">
        <Link href={"/contact"}>
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
        </Link>
      </div>
    </section>
  );
}
