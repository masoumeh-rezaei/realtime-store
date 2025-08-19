"use client";

import React from "react";
import { useProductForm } from "@/hooks/useProductForm";
import { Product } from "@/types/product";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ProductFormProps {
    editingProduct?: Product | null;
    onFinish: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ editingProduct, onFinish }) => {
    const { form, onSubmit } = useProductForm({ editingProduct, onFinish });
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <form
            onSubmit={onSubmit}
            className="w-full max-w-lg mx-auto p-6 md:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg space-y-6"
        >
            <h2 className="text-2xl font-bold text-gray-800 text-center">
                {editingProduct ? "Update Product" : "Add New Product"}
            </h2>

            <div>
                <Input
                    {...register("name")}
                    label="Product Name"
                    placeholder="Enter product name"
                    error={errors.name?.message}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                    {...register("price", { valueAsNumber: true })}
                    type="number"
                    label="Price"
                    placeholder="e.g. 120"
                    error={errors.price?.message}
                />
                <Input
                    {...register("stock", { valueAsNumber: true })}
                    type="number"
                    label="Stock"
                    placeholder="e.g. 50"
                    error={errors.stock?.message}
                />
            </div>

            <div>
                <Input
                    {...register("description")}
                    label="Description"
                    placeholder="Write a short description..."
                    error={errors.description?.message}
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white font-semibold py-2.5 rounded-xl shadow-md transition-all duration-200"
            >
                {editingProduct ? "Update Product" : "Add Product"}
            </Button>
        </form>
    );
};

export default ProductForm;
