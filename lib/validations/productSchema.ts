import { z } from "zod";

// Validation schema with transform (string → number)
export const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),

    price: z
        .string()
        .min(1, "You must enter the price") // must not be empty
        .transform((val) => Number(val)) // convert to number
        .refine((val) => !isNaN(val) && val >= 0, {
            message: "Price must be a positive integer",
        }),

    stock: z
        .string()
        .min(1, "You must enter the stock") // must not be empty
        .transform((val) => Number(val)) // convert to number
        .refine((val) => !isNaN(val) && val >= 0, {
            message: "Stock must be a positive integer",
        }),

    description: z.string().optional(),
});

// Type after validation (numbers already transformed)
export type ProductFormOutput = z.infer<typeof productSchema>;

// Type for form input before transform (all strings)
export type ProductFormInput = {
    name: string;
    price: string;
    stock: string;
    description?: string;
};
