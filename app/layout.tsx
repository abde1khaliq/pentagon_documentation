import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { Flex } from "@chakra-ui/react";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pentagon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body className={`${syne.variable} font-syne`}>
        <Provider>
          <Flex minH="100vh" bg="var(--bg-void)" position="relative">
          <SideBar />
          {children}
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
