"use client";

import React from "react";
import ProductForm from "@/components/product/Form/ProductForm";
import { Product } from "@/types/product";

interface FormSectionProps {
    editingProduct: Product | null;
    setEditingProduct: (p: Product | null) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ editingProduct, setEditingProduct }) => (
    <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <ProductForm
            editingProduct={editingProduct}
            onFinish={() => setEditingProduct(null)}
        />
    </div>
);

export default FormSection;
