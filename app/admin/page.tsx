"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/hooks/ redux";
import { Product } from "@/types/product";

import HeaderSection from "@/components/admin/HeaderSection";
import WelcomeCard from "@/components/admin/WelcomeCard";
import FormSection from "@/components/admin/FormSection";
import TableSection from "@/components/admin/TableSection";

export default function AdminPage() {
    const products = useAppSelector((state) => state.product.products);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-8">
                <HeaderSection />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FormSection editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
                    <WelcomeCard />
                </div>

                <TableSection products={products} onEdit={(p) => setEditingProduct(p)} />
            </div>
        </div>
    );
}
