import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
    title: "Jatothu Vinesh | Python Developer & AI/ML Engineer",
    description:
        "Portfolio of Jatothu Vinesh — AI/ML undergrad, Python developer, and computer vision enthusiast. Building intelligent systems from data to deployment.",
    keywords: ["Python", "AI/ML", "Machine Learning", "Computer Vision", "Developer", "Portfolio", "Jatothu Vinesh"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${outfit.variable} ${firaCode.variable} font-body bg-background text-foreground antialiased selection:bg-python-yellow selection:text-black`}
            >
                {children}
            </body>
        </html>
    );
}
