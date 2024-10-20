import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
    title: "CapsCode - Projects",
    description: "Generated by CapsCode Company",
    icons: {
        icon: {
            url: "/assets/withoutWards.png",
            type: "image/png",
        },
        shortcut: {
            url: "/assets/withoutWards.png",
            type: "image/png",
        },
    },
    openGraph: {
        title: "CapsCode - Projects",
        description: "Generated by CapsCode Company",
        url: "https://capscode.com",
        siteName: "CapsCode",
        locale: "en_US",
        type: "website",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={` antialiased font-clash`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
