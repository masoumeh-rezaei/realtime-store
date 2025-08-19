"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types/product";
import {productSchema, ProductFormInput} from '@/lib/validations/productSchema'
import { useAppDispatch } from "./ redux";
import { addProduct, updateProduct } from "@/redux/slices/productSlice";

interface UseProductFormProps {
    editingProduct?: Product | null;
    onFinish: () => void;
}

export const useProductForm = ({ editingProduct, onFinish }: UseProductFormProps) => {
    const dispatch = useAppDispatch();

    const form = useForm<ProductFormInput>({
        resolver: zodResolver(productSchema) as never,
        defaultValues: {
            name: "",
            price: undefined,
            stock: undefined,
            description: "",
        },
    });

    const { reset, handleSubmit } = form;

    // Prefill form if editing
    useEffect(() => {
        if (editingProduct) {
            reset(editingProduct);
        }
    }, [editingProduct, reset]);

    const onSubmit = handleSubmit((data) => {
        // تبدیل type-safe برای اطمینان از number بودن فیلدها
        const formData: ProductFormInput = {
            name: data.name,
            price: Number(data.price ?? 0),
            stock: Number(data.stock ?? 0),
            description: data.description,
        };

        if (editingProduct) {
            dispatch(updateProduct({ ...editingProduct, ...formData }));
        } else {
            dispatch(addProduct({ ...formData, id: Date.now().toString() }));
        }

        reset();
        onFinish();
    });

    return { form, onSubmit };
};
