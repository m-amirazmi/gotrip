import type { Metadata } from "next";
import "@fontsource-variable/jost";
import "@/styles/base.css";
import Header from "@/components/header/header";
import homepageData from "@/data/homepage.json";

export const metadata: Metadata = {
  title: "GoTrip",
  description: "This is gotrip mega app to cover all tourist things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header services={homepageData.services} />
        {children}
      </body>
    </html>
  );
}
