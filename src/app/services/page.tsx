import BanerWindow from "../components/BanerWindow";
import CreateSite from "../components/CreateSite";
import HoveredComponent from "../components/HoveredComponent";
import ServicesComponent from "../components/ServicesComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка приложений для бизнеса | WebDev Studio",
  description:
    "Разрабатываем мобильные и веб-приложения на заказ. Android, iOS, кроссплатформенные решения — быстро, качественно, с поддержкой.",
  keywords: [
    "разработка приложений",
    "мобильные приложения",
    "веб-приложения",
    "создание приложений",
    "iOS Android разработка",
    "кроссплатформенные приложения",
    "React Native",
    "Flutter",
  ],
  openGraph: {
    title: "Разработка мобильных и веб-приложений",
    description:
      "Создаем мощные и масштабируемые приложения под Android, iOS и Web.",
    url: `${process.env.SITE_URL}/services`,
    siteName: "WebDev Studio",
    images: [
      {
        url: `${process.env.SITE_URL}/img/preview.png`,
        width: 1200,
        height: 630,
        alt: "Разработка приложений",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка мобильных и веб-приложений",
    description:
      "Android, iOS и Web-приложения с кастомной архитектурой и современным UI/UX.",
    images: [`${process.env.SITE_URL}/img/preview.png`],
  },
};

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
