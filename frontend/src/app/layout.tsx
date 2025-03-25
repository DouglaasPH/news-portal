import React from "react";
import DefaultNavBar from "./nav-bar";
import GlobalFooter from "./footer";

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
                <main>{children}</main>
                <GlobalFooter/>
            </body>
        </html>
    )
}