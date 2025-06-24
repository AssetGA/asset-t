import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full z-0">
      <div className="flex flex-row bg-[#333] text-white">
        <div className="flex flex-col lg:flex-row my-30 mb-40 px-5 lg:px-10 w-full">
          <div className="lg:w-1/2 text-2xl">
            <h1>Местоположение</h1>
            <ul>
              <li>г. Астана</li>
              <li> работаем круглосуточно бывает долго отвечаем</li>
              <li>email: 417051@mail.ru</li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex lg:items-end justify-center">
            <ul className="grid grid-cols-3 gap-5 pt-10">
              <li>instagram</li>
              <li>telegram</li>
              <li>youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
