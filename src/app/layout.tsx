import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.SITE_URL || "";
  return {
    verification: {
      google: "PX3AaYdPERNQmPRcYW_HVKsrOttzqJ4-egp3qIDyp3Y",
    },
    title: "Разработка сайтов",
    description:
      "Разрабатываем сайты, приложения, визитки, телеграм-боты для развития вашего бизнеса",
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
      title: "Разработка сайтов под ключ",
      description:
        "Создание сайтов и digital-решений: от лендингов до интернет-магазинов.",
      images: [`${baseUrl}/img/preview.png`],
    },
    icons: {
      icon: "/img/icon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <NavBar />
        <div className="relative mt-30 z-20 mb-96 bg-white">
          <div className="mx-2 md:mx-10">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
