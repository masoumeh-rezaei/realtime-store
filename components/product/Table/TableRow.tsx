"use client";

import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { formatNumber } from "@/lib/utils/formatNumber";
import { ProductRowProps } from "@/types/table";

const ProductRow: React.FC<ProductRowProps> = ({ product, onEdit, onDelete }) => {
    return (
        <tr className="hover:bg-blue-50 transition-colors duration-150">
            <td className="px-4 md:px-6 py-3 text-blue-900 font-medium">{product.name}</td>
            <td className="px-4 md:px-6 py-3 text-center text-blue-800">{formatCurrency(product.price)}</td>
            <td className="px-4 md:px-6 py-3 text-center text-blue-800">{formatNumber(product.stock)}</td>
            <td className="px-4 md:px-6 py-3 flex justify-center gap-2">
                <Button
                    type="button"
                    onClick={() => onEdit(product)}
                    className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
                >
                    <Pencil size={16} />
                    <span className="hidden sm:inline">Edit</span>
                </Button>

                <Button
                    type="button"
                    onClick={() => onDelete(product.id)}
                    className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded transition"
                >
                    <Trash2 size={16} />
                    <span className="hidden sm:inline">Delete</span>
                </Button>
            </td>
        </tr>
    );
};

export default ProductRow;
