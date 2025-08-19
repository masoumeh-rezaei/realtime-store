import { useAppDispatch } from "@/hooks/ redux";
import { deleteProduct } from "@/redux/slices/productSlice";

/**
 * Custom hook to handle ProductTable actions
 * Provides logic for deleting a product
 */
export const useProductTable = () => {
    const dispatch = useAppDispatch();

    /**
     * Delete a product by dispatching deleteProduct action
     * the ID of the product to delete
     */
    const handleDelete = (id: string) => {
        dispatch(deleteProduct(id));
    };

    return { handleDelete };
};
