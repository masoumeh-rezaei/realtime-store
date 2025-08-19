

import ProductList from "@/components/product/ProductList";
import Link from "next/link";

export default function StorefrontPage() {
    return (
        <div className="bg-blue-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
                {/* Page header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                        Storefront
                    </h1>
                    {/* Link to Admin Page */}
                    <Link
                        href="/admin"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition-colors duration-200"
                    >
                        Go to Admin Panel
                    </Link>
                </div>

                {/* Product grid */}
                <ProductList />
            </div>
        </div>
    );
}
