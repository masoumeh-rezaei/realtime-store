"use client";

import React from "react";
import ProductTable from "@/components/product/Table/ProductTable";
import { Product } from "@/types/product";

interface TableSectionProps {
    products: Product[];
    onEdit: (p: Product) => void;
}

const TableSection: React.FC<TableSectionProps> = ({ products, onEdit }) => (
    <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
        <ProductTable products={products} onEdit={onEdit} />
    </div>
);

export default TableSection;
