import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/types/cart";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existing = state.items.find((i) => i.id === action.payload.id);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },

    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
