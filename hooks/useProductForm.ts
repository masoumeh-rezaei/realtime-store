"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types/product";
import { productSchema, ProductFormInput, ProductFormOutput } from "@/lib/validations/productSchema";
import { useAppDispatch } from "./ redux";
import { addProduct, updateProduct } from "@/redux/slices/productSlice";

interface UseProductFormProps {
    editingProduct?: Product | null;
    onFinish: () => void;
}

export const useProductForm = ({ editingProduct, onFinish }: UseProductFormProps) => {
    const dispatch = useAppDispatch();

    // Setup form with Zod validation
    const form = useForm<ProductFormInput, never, ProductFormOutput>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            price: "",
            stock: "",
            description: "",
        },
    });

    const { reset, handleSubmit } = form;

    // If editingProduct exists prefill form with its values
    useEffect(() => {
        if (editingProduct) {
            reset({
                ...editingProduct,
                price: editingProduct.price?.toString() ?? "",
                stock: editingProduct.stock?.toString() ?? "",
                description: editingProduct.description ?? "",
            });
        }
    }, [editingProduct, reset]);

    // Handle form submit (create or update product)
    const onSubmit = handleSubmit((data) => {
        if (editingProduct) {
            // Update existing product
            dispatch(updateProduct({ ...editingProduct, ...data }));
        } else {
            // Add new product with generated id
            dispatch(addProduct({ ...data, id: Date.now().toString() }));
        }

        // Reset form after submit
        reset({
            name: "",
            price: "",
            stock: "",
            description: "",
        });

        // Callback after finishing submit
        onFinish();
    });

    return { form, onSubmit };
};
