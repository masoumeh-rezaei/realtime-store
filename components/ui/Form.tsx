"use client";

import React, { FormHTMLAttributes } from "react";
import { FormProps } from "@/types/ui";

export default function Form({
                                 children,
                                 onSubmit,
                                 className = "",
                                 ...props
                             }: FormProps & FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
            }}
            className={`w-full max-w-lg mx-auto p-6 md:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg space-y-6 ${className}`}
            {...props}
        >
            {children}
        </form>
    );
}
