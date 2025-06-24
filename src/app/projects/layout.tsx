import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Креативные сайты",
  description: "Разработка сайтов, креативные решения для вашего бизнеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
