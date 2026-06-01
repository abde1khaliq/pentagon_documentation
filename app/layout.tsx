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
  title: "Pentagon Web Framework",
  description: "A modern, blazing‑fast high‑performance Python web framework built for developers who want to ship APIs and applications without boilerplate.",
  keywords: ["python", "web framework", "api", "high performance", "pentagon", "backend"],
  authors: [{ name: "@abdelkhaliq" }],
  openGraph: {
    title: "Pentagon Framework",
    description: "Build APIs and web applications effortlessly with a clean, intuitive structure.",
    url: "https://pentagon.dev",
    siteName: "Pentagon Documentation",
    locale: "en_US",
    type: "website",
  },
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
