"use client";

import React, { useState } from "react";
import { useProductTable } from "@/hooks/useProductTable";
import { ProductTableProps } from "@/types/table";
import ProductRow from "./TableRow";
import Pagination from "./Pagination";

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit }) => {
    const { handleDelete } = useProductTable();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className="overflow-x-auto rounded-2xl border bg-white border-blue-200">
            <table className="min-w-full text-sm md:text-base divide-y divide-blue-200">
                <thead className="bg-blue-100/50">
                <tr>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold text-blue-800">Name</th>
                    <th className="px-4 md:px-6 py-3 text-center font-semibold text-blue-800">Price</th>
                    <th className="px-4 md:px-6 py-3 text-center font-semibold text-blue-800">Stock</th>
                    <th className="px-4 md:px-6 py-3 text-center font-semibold text-blue-800">Actions</th>
                </tr>
                </thead>
                <tbody>
                {currentProducts.length > 0 ? (
                    currentProducts.map((p) => (
                        <ProductRow key={p.id} product={p} onEdit={onEdit} onDelete={handleDelete} />
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="text-center py-8 text-blue-800 italic">
                            No products found
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {products.length > itemsPerPage && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                />
            )}
        </div>
    );
};

export default ProductTable;
