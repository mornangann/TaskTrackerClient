import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/providers/UserProvider";
import { Toaster } from "react-hot-toast";
import MiniSideBar from "./Components/MiniSidebar/MiniSideBar";
import Header from "./Components/Header/Header";
import MainContentLayout from "@/providers/MainContentLayout";
import SidebarProvider from "@/providers/SidebarProvider";
import MainLayout from "@/providers/MainLayout";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Tasktracker",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Toaster position="top-center" />
          <UserProvider>
            <div className="h-full flex overflow-hidden">
              <MiniSideBar />
              <div className="flex flex-1 flex-col">
                <Header />
                <MainContentLayout>
                  <MainLayout>{children}</MainLayout>
                  <SidebarProvider />
                </MainContentLayout>
              </div>
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
