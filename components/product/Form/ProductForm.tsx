"use client";

import React from "react";
import { useProductForm } from "@/hooks/useProductForm";
import { ProductFormProps } from "@/types/form";
import InputField from "./InputField";
import Button from "@/components/ui/Button";

const ProductForm: React.FC<ProductFormProps> = ({ editingProduct, onFinish }) => {
    const { form, onSubmit } = useProductForm({ editingProduct, onFinish });
    const { register, formState: { errors } } = form;

    return (
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editingProduct ? "Edit Product" : "Add New Product"}
            </h2>

            <form onSubmit={onSubmit} className="space-y-5">
                <InputField
                    {...register("name")}
                    label="Name"
                    placeholder="Product Name"
                    error={errors.name?.message}
                />

                <InputField
                    {...register("price")}
                    type="number"
                    label="Price"
                    placeholder="Price"
                    error={errors.price?.message}
                />

                <InputField
                    {...register("stock")}
                    type="number"
                    label="Stock"
                    placeholder="Stock"
                    error={errors.stock?.message}
                />

                <InputField
                    {...register("description")}
                    label="Description"
                    placeholder="Description"
                    error={errors.description?.message}
                />

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                    {editingProduct ? "Update Product" : "Add Product"}
                </Button>
            </form>
        </div>
    );
};

export default ProductForm;
