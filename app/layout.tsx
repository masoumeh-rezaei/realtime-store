// app/layout.tsx
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Management System",
    description: "Next.js Product Management System - Admin Panel and Storefront",
    keywords: ["Next.js", "Redux Toolkit", "Product Management", "Real-time"],
    authors: [{ name: "masoomeh" }],
    robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
