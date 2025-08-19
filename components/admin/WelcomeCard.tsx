"use client";

import Image from "next/image";
import React from "react";

const WelcomeCard: React.FC = () => (
    <div className="hidden lg:flex flex-col justify-center items-center rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-700 text-center">
            Welcome, Admin!
        </h3>
        <p className="text-gray-600 text-center mt-2">
            Manage your products easily and efficiently.
        </p>
        <Image
            width={2000}
            height={200}
            src="/Images/admin1.webp"
            alt="Admin Welcome"
            className="w-full h-auto rounded-xl mt-4"
        />
    </div>
);

export default WelcomeCard;
