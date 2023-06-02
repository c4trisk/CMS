import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import productSlice from "./features/product/productSlice";
import ordersSlice from "./features/orders/ordersSlice";
import orderSlice from "./features/order/orderSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    orders: ordersSlice,
    order: orderSlice,
    auth: authSlice
  }
})