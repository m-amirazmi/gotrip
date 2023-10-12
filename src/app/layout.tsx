import type { Metadata } from "next";
import "@fontsource-variable/jost";
import "@/styles/base.css";
import Header from "@/components/header/header";
import content from "@/content/global.content.json";

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
        <Header services={content.header.services} />
        {children}
      </body>
    </html>
  );
}
