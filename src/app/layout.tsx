import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import {SITE_NAME} from "@/constants/site.constants";
import {ReactNode} from "react";
import '@fontsource-variable/cormorant';
import {AnimatePresence} from "framer-motion";

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
            <Header/>
            {children}
            <ScrollToTop/>
            <Footer/>
        </body>
        </html>
    );
}
