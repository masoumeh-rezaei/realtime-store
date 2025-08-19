"use client";

import { useRouter } from "next/navigation";
import { Settings, Home } from "lucide-react";
import React from "react";

const HeaderSection: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500 text-white rounded-2xl shadow-lg">
                    <Settings size={28} />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Admin Panel
                </h1>
            </div>
            <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
                <Home size={20} />
                Go to Store
            </button>
        </div>
    );
};

export default HeaderSection;
