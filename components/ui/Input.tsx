"use client";

import React from "react";
import clsx from "clsx";
import { InputProps } from "@/types/ui";

export default function Input({
                                  label,
                                  error,
                                  className,
                                  ...props
                              }: InputProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label className="text-sm font-semibold text-gray-800 tracking-wide">
                    {label}
                </label>
            )}
            <input
                className={clsx(
                    "w-full rounded-xl border px-4 py-2.5 text-gray-900 bg-white shadow-sm",
                    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
                    "transition-all duration-200 ease-in-out",
                    error ? "border-red-500 focus:ring-red-400" : "border-gray-300",
                    "placeholder:text-gray-400 placeholder:italic",
                    className
                )}
                {...props}
            />
            {error && (
                <span className="text-xs font-medium text-red-500">{error}</span>
            )}
        </div>
    );
}
