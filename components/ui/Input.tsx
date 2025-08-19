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
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                className={clsx(
                    "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200",
                    error ? "border-red-500" : "border-gray-300",
                    className
                )}
                {...props}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
