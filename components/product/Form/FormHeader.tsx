"use client";

import React from "react";

interface FormCardHeaderProps {
    title: string;
    subtitle?: string;
}

const FormCardHeader: React.FC<FormCardHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
    );
};

export default FormCardHeader;
