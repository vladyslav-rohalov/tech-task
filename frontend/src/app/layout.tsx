import "./globals.css";
import { myTheme } from "./utils/theme";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import ReduxProvider from "./redux/provider";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";


const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={lato.className}>
        <ThemeProvider theme={myTheme}>
          <ReduxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
