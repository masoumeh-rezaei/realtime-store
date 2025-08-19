"use client";

import React from "react";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { formatNumber } from "@/lib/utils/formatNumber";

interface ProductInfoProps {
    product: Product;
    isOutOfStock: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, isOutOfStock }) => {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-blue-600 font-bold mt-1">{formatCurrency(product.price)}</p>
            <p className={`mt-2 font-medium ${isOutOfStock ? "text-red-500" : "text-green-600"}`}>
                Stock: {formatNumber(product.stock)}
            </p>
        </div>
    );
};

export default ProductInfo;
