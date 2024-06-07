// ./redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import sushiReducer from './sushiSlice';
import cartReducer from './cartSlice';
import additionalsReducer from './additionalsSlice';
import drinksReducer from './drinksSlice';

const store = configureStore({
  reducer: {
    sushi: sushiReducer,
    cart: cartReducer,
    additionals: additionalsReducer,
    drinks: drinksReducer,
  },
});

export default store;
