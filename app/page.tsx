"use client"; // must be client component

import ProductList from "@/components/product/ProductList";

export default function StorefrontPage() {
    return (
        <div className="max-w-6xl mx-auto py-6">
            <h1 className="text-3xl font-bold mb-6">Storefront</h1>
            <ProductList />
        </div>
    );
}
