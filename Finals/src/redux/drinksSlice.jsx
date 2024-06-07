// ./redux/drinksSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drinksData: [
    {
      title: 'Soft Drinks',
      items: [
        { id: 201, name: 'Coca-Cola', image: 'https://www.encopadebalon.com/3493-large_default/coca-cola-pack-24-cans-33-cl.jpg', price: 1.99 },
        { id: 202, name: 'Coca-Cola Zero', image: 'https://coca-colafemsa.com/wp-content/uploads/2020/02/2-30.png', price: 1.99 },
        { id: 203, name: 'Fanta', image: 'https://www.coca-cola.com/content/dam/onexp/gb/en/brands/fanta/Product-Information-fanta-orange.jpg', price: 1.99 },
        { id: 204, name: 'Sprite', image: 'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xostrjaw/b3762633-fdde-4789-b682-3b8c34d74440.jpg', price: 1.99 },
        { id: 205, name: 'Pepsi Max', image: 'https://content.etilize.com/Original/1029886356.jpg', price: 1.99 },
        { id: 206, name: 'Pepsi Light', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8N8U-Z--Dz5o8mgkF24SZ4Q4m_5c2A6y8wQ&s', price: 1.99 },
        { id: 207, name: 'Pepsi', image: 'https://bazarstore.az/cdn/shop/products/30009451.jpg?v=1693743327', price: 1.99 },
        { id: 208, name: '7UP', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDitrhLsm4kxUZSRH2C_3BwoJQNWsSaz_uuA&s', price: 1.99 },
        { id: 209, name: 'Mirinda', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNYY-NtJXYKpmhlrvGHzRWShMLJOuLRc_kA&s', price: 1.99 },
      ],
    },
    {
      title: 'Juices',
      items: [
        { id: 210, name: 'Apple Juice', image: 'https://4.imimg.com/data4/HG/JC/MY-20344102/apple-drink-500x500.jpg', price: 2.49 },
        { id: 211, name: 'Orange Juice', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Orangejuice.jpg', price: 2.49 },
        { id: 212, name: 'Lemonade', image: 'https://4.imimg.com/data4/HR/VP/MY-30165244/lemon-juice.jpg', price: 2.49 },
        { id: 213, name: 'Pineapple Juice', image: 'https://cdn2.foodviva.com/static-content/food-images/pineapple-recipes/pineapple-juice-recipe/pineapple-juice-recipe.jpg', price: 2.49 },
        { id: 214, name: 'Banana Juice', image: 'https://i.pinimg.com/564x/f8/19/e6/f819e6cb78a280952d6ac28a255fa86d.jpg', price: 2.49 },
        { id: 215, name: 'Watermelon Juice', image: 'https://cdn2.foodviva.com/static-content/food-images/juice-recipes/watermelon-juice-recipe/watermelon-juice-recipe.jpg', price: 2.49 },
      ],
    },
    {
      title: 'Japan Traditional Drinks',
      items: [
        { id: 216, name: 'Green Tea', image: 'https://static.toiimg.com/photo/78092190.cms', price: 1.99 },
        { id: 217, name: 'Royal Milk Tea', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqs_1tp2fsiiOEg9RFCqcCnhHXk0e2CZ3o9A&s', price: 2.49 },
        { id: 218, name: 'Bubble Tea', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Bubble-Tea-81ba83b.png', price: 3.49 },
        { id: 219, name: 'Aloe Drink', image: 'https://bazarstore.az/cdn/shop/products/d6bce34fad094c5c81fbf5ee4b8ca281_b3eb79e7-d85b-4d2d-bf4f-8cdb8f41cc46.jpg?v=1693315462', price: 2.99 },
      ],
    },
    {
      title: 'Alcoholic Beverages',
      items: [
        { id: 220, name: 'Asahi Beer', image: 'https://sunrisemart.com/cdn/shop/products/15_4f9ed71a-cffb-4933-8d95-970b1f6013a4.png?v=1637798566', price: 4.99 },
        { id: 221, name: 'Sake', image: 'https://www.justonecookbook.com/wp-content/uploads/2019/09/Sake-II.jpg', price: 5.99 },
        { id: 222, name: 'Whisky', image: 'https://cdn.shoplightspeed.com/shops/620662/files/24306530/800x1024x1/suntory-suntory-toki-japanese-whisky-750-ml.jpg', price: 6.99 },
        { id: 223, name: 'Plum Wine', image: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/6662/12027/Kikkoman-Plum-Wine-1.5L__02198.1498598210.jpg?c=2', price: 5.99 },
        { id: 224, name: 'Wine', image: 'https://cdn11.bigcommerce.com/s-u9ww3di/images/stencil/1280x1280/products/7361/10313/DSC_0532__06912.1506453755.JPG?c=2', price: 7.99 },
      ],
    },
  ],
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
});

export const selectDrinks = (state) => state.drinks.drinksData;

export default drinksSlice.reducer;
