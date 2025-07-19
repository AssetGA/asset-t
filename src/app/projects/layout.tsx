import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.SITE_URL || "";

  return {
    title: "Дизайн сайта",
    description: "Разработка сайтов, креативные решения для вашего бизнеса",
    openGraph: {
      title: "Разработка сайтов под ключ",
      description:
        "Профессиональная разработка сайтов и IT-решений для бизнеса. Адаптивный дизайн, SEO, поддержка.",
      url: baseUrl,
      siteName: "WebDev Studio",
      images: [
        {
          url: `${baseUrl}/img/preview.png`,
          width: 1200,
          height: 630,
          alt: "Превью сайта",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Разработка сайтов, приложенийб ботов",
      description:
        "Создание сайтов и digital-решений: лендингов, интернет-магазинов, ботов, искуственного интелекта, приложений, игр.",
      images: [`${baseUrl}/img/preview.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
