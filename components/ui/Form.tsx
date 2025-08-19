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
            className={`space-y-4 ${className}`}
            {...props}
        >
            {children}
        </form>
    );
}
