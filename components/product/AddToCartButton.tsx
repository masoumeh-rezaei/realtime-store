"use client";

import React from "react";
import Button from "@/components/ui/Button";

interface AddToCartButtonProps {
    isOutOfStock: boolean;
    onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ isOutOfStock, onClick }) => {
    return (
        <Button
            onClick={onClick}
            disabled={isOutOfStock}
            className={`w-full py-2 rounded-xl font-semibold text-white transition-colors duration-200 ${
                isOutOfStock
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90"
            }`}
        >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
    );
};

export default AddToCartButton;
