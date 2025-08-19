import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

// State shape for products
interface ProductState {
    products: Product[];
}

// Initial state (empty list)
const initialState: ProductState = {
    products: [],
};

// Redux slice for product CRUD
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // Add a new product
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        // Update existing product by id
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        // Delete product by id
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((p) => p.id !== action.payload);
        },
    },
});

// Export actions and reducer
export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
