"use client";

import { ButtonProps } from "@/types/ui";
import clsx from "clsx";

export default function Button({
                                   children,
                                   variant = "primary",
                                   isLoading,
                                   className,
                                   ...props
                               }: ButtonProps) {
    return (
        <button
            className={clsx(
                "px-4 py-2 rounded-lg font-medium transition",
                {
                    "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
                    "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
                    "bg-red-600 text-white hover:bg-red-700": variant === "danger",
                },
                className
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
}
