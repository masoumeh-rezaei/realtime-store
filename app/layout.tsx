"use client"; // make sure provider is client component

import "./globals.css";

import ReduxProvider from "@/providers/ReduxProvider";



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        {/* ReduxProvider wraps the entire app */}
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
