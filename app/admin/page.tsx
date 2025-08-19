"use client"; // must be client component

import { useAppSelector } from "@/hooks/ redux";
import { useState } from "react";
import ProductForm from "@/components/product/ProductForm";
import ProductTable from "@/components/product/ProductTable";
import { Product } from "@/types/product";

export default function AdminPage() {
    const products = useAppSelector((state) => state.product.products);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    return (
        <div className="max-w-4xl mx-auto py-6">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

            {/* Form for Add/Edit */}
            <ProductForm
                editingProduct={editingProduct}
                onFinish={() => setEditingProduct(null)}
            />

            {/* Product Table */}
            <ProductTable products={products} onEdit={(p) => setEditingProduct(p)} />
        </div>
    );
}
