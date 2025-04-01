import React from "react";
import DefaultNavBar from "../components/nav-bar";
import GlobalFooter from "../components/footer";
import '../globals.css';

// Layout padrão, para todas páginas
export default function GlobalLayout({
    children,
}: {
        children: React.ReactNode
    }) {
    return (
        <html lang="pt-br">
            <body>
                <DefaultNavBar/>
                <main className="bg-[#ebebeb]">{children}</main>
                <GlobalFooter/>
            </body>
        </html>
    )
}