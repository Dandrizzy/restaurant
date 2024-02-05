import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../Slices/orderSlice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
