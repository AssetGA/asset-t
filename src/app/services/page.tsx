import BanerWindow from "../components/BanerWindow";
import CreateSite from "../components/CreateSite";
import HoveredComponent from "../components/HoveredComponent";
import ServicesComponent from "../components/ServicesComponent";

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
      <ServicesComponent />
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
