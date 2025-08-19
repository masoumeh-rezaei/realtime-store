"use client";

import ProductCard from "./ProductCard";
import { useProductList } from "@/hooks/useProductList";
import Link from "next/link";

const ProductList = () => {
    const { products } = useProductList();

    if (products.length === 0) {
        return (
            <div className="text-center text-gray-600 mt-10">
                No products available.{" "}
                <Link href="/admin" className="text-blue-500 underline">
                    Go to Admin Panel
                </Link>{" "}
                to add some.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
