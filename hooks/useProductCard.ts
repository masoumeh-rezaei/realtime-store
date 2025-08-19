import { Product } from "@/types/product";
import { useAppDispatch } from "@/hooks/ redux";
import { addToCart } from "@/redux/slices/cartSlice";

//Custom hook to handle product card logic

export const useProductCard = (product: Product) => {
    const dispatch = useAppDispatch();

    // Check if the product stock is zero
    const isOutOfStock = product.stock === 0;

    //Dispatch addToCart action with quantity = 1

    const handleAddToCart = () => {
        if (!isOutOfStock) {
            dispatch(addToCart({ ...product, quantity: 1 }));
        }
    };

    return {
        isOutOfStock,
        handleAddToCart,
    };
};
