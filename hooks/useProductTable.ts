import { useAppDispatch } from "@/hooks/ redux";
import { deleteProduct } from "@/redux/slices/productSlice";

//Custom hook to handle ProductTable actions

export const useProductTable = () => {
    const dispatch = useAppDispatch();

    //Delete a product by dispatching deleteProduct action

    const handleDelete = (id: string) => {
        dispatch(deleteProduct(id));
    };

    return { handleDelete };
};
