import { useAppSelector } from "@/hooks/ redux";

/**
 * Custom hook to fetch the list of products from Redux store
 * Ensures real-time updates since we always read from the store
 */
export const useProductList = () => {
    const products = useAppSelector((state) => state.product.products);
    return { products };
};
