import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Libly.Space",
    description: "Manage Your Library Effortlessly",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased font-satoshiReg`}
            >
                {children}
            </body>
        </html>
    );
}
