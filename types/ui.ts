// src/types/ui.ts
import React, { ButtonHTMLAttributes, InputHTMLAttributes, FormHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    isLoading?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
