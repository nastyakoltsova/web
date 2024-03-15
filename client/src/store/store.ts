import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Products} from "../components/Catalog/Catalog.tsx";

interface CartItem {
    product: Products;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Products>) {
            const existingItem = state.items.find(item => item.product.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ product: action.payload, quantity: 1 });
            }
        },
        // Другие действия, например, удаление из корзины и т.д.
    },
});

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: { items: any; }; }) => state.cart.items;

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
