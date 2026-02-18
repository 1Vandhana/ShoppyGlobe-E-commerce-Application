/// Import configureStore from Redux TollKit //
// Each reducer manages its own part of applications state //
// Configures Redux store

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});
