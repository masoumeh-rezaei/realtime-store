"use client";

import React from "react";
import { Product } from "@/types/product";
import Button from "@/components/ui/Button";
import { useProductCard } from "@/hooks/useProductCard";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { formatNumber } from "@/lib/utils/formatNumber";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { isOutOfStock, handleAddToCart } = useProductCard(product);

    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="font-bold text-lg text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-1">Price: {formatCurrency(product.price)}</p>
                <p className="text-gray-600 mt-1">Stock: {formatNumber(product.stock)}</p>
            </div>
            <Button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`w-full ${isOutOfStock ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </div>
    );
};

export default ProductCard;
