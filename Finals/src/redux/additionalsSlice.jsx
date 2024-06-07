// ./redux/additionalsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  additionalsData: [
    { id: 101, name: 'Additional Bamboo Sticks', image: 'https://donsamurai.ru/d/palochki-1.png', price: 0.5 },
    { id: 102, name: 'Additional Soy Sauce', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKM19xXCViz9_qR5xDsAzRNFRXQ4O3VY9NVQ&s', price: 0.5 },
    { id: 103, name: 'Additional Wasabi', image: 'https://roll-club.kh.ua/wp-content/uploads/2023/02/wasabi212.jpg', price: 0.5 },
    { id: 104, name: 'Additional Ginger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruFn768omXNet69SqWrTpWyOHx93TUa5hpg&s', price: 0.5 },
    { id: 105, name: 'Additional Cups', image: 'https://mobipack.ru/upload/iblock/9f7/9f76947afe1335c986d24a820ef7b594.jpg', price: 1.0 },
  ],
};

const additionalsSlice = createSlice({
  name: 'additionals',
  initialState,
  reducers: {},
});

export const selectAdditionals = (state) => state.additionals.additionalsData;

export default additionalsSlice.reducer;
