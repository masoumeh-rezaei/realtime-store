"use client";

import React from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | FieldError; // error can be string or FieldError
}

const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => {
    // Extract error message if FieldError
    const errorMessage =
        typeof error === "string" ? error : error?.message;

    return (
        <div className="flex flex-col">
            {/* Input label */}
            <label className="text-gray-700 font-medium mb-1">{label}</label>

            {/* Input element with conditional error style */}
            <input
                {...props}
                className={`border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errorMessage ? "border-red-500" : "border-gray-300"
                }`}
            />

            {/* Show error message */}
            {errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
        </div>
    );
};

export default InputField;
