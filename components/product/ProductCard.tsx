"use client";

import React from "react";
import { Product } from "@/types/product";
import { useProductCard } from "@/hooks/useProductCard";
import ProductInfo from "./ProductInfo";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { isOutOfStock, handleAddToCart } = useProductCard(product);

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between border border-gray-100">
            <ProductInfo product={product} isOutOfStock={isOutOfStock} />
            <AddToCartButton isOutOfStock={isOutOfStock} onClick={handleAddToCart} />
        </div>
    );
};

export default ProductCard;
