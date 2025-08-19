"use client";

import ProductCard from "./ProductCard";
import { useProductList } from "@/hooks/useProductList";

const ProductList = () => {
    const { products } = useProductList();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
