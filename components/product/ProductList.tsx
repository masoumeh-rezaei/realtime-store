"use client";

import ProductCard from "./ProductCard";
import { useProductList } from "@/hooks/useProductList";

const ProductList = () => {
    const { products } = useProductList();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
