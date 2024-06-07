// ./redux/sushiSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sushiData: [
    {
      title: 'Nigiri',
      items: [
        { id: 1, name: 'Tuna', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/maguro-tuna-nigiri-sushi-1200x638.jpg', ingredients: 'Tuna', price: 10.99 },
        { id: 2, name: 'Salmon', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/salmon-sushi-1200x768.jpg', ingredients: 'Salmon', price: 9.99 },
        { id: 3, name: 'Hamachi / Buri (Yellowtail)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2022/12/25085848_m-1200x900.jpg', ingredients: 'Yellowtail', price: 11.99 },
        { id: 4, name: 'Aji (Horse Mackerel)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/aji-horse-mackeral-sushi-1200x799.jpg', ingredients: 'Horse Mackerel', price: 9.49 },
        { id: 5, name: 'Tai (Red Snapper)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/tai-red-snapper-sushi-1200x900.jpg', ingredients: 'Red Snapper', price: 10.49 },
        { id: 6, name: 'Ika (Squid)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2022/12/3893389_m-1200x800.jpg', ingredients: 'Squid', price: 8.99 },
        { id: 7, name: 'Anago (Conger Eel)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/anago-sushi-eel-1200x900.jpg', ingredients: 'Conger Eel', price: 12.99 },
        { id: 8, name: 'Ebi (Shrimp)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/shrimp-sushi-1200x850.jpg', ingredients: 'Shrimp', price: 9.99 },
        { id: 9, name: 'Tamago (Rolled Omelet)', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2023/07/tamagoyaki-sushi-1200x795.jpg', ingredients: 'Rolled Omelet', price: 7.99 },
        { id: 10, name: 'Tako (Octopus)', image: 'https://sumosushibento.com/documents/menugallery/thumb/1506313029368.jpg', ingredients: 'Octopus', price: 9.99 },
      ],
    },
    {
      title: 'Makizushi - Rolled Sushi',
      items: [
        { id: 11, name: 'Makizushi', image: 'https://otaokitchen.com.au/files/thumb/750/500//uploads//sushi.jpg', ingredients: 'Rice, Nori, Fish', price: 12.99 },
        { id: 12, name: 'Hosomaki', image: 'https://www.tokyo-city.ru/images/interesno/classic/hosomaki1_1.jpg', ingredients: 'Rice, Nori, Vegetables', price: 8.99 },
        { id: 13, name: 'Chumaki', image: 'https://www.allaboutsushiguide.com/images/chumaki-250.jpg', ingredients: 'Rice, Nori, Fish', price: 10.99 },
        { id: 14, name: 'Futomaki', image: 'https://mito.ca/wp-content/uploads/2021/06/FUTOMAKI-VEGETARIEN-1.png', ingredients: 'Rice, Nori, Vegetables', price: 11.99 },
        { id: 15, name: 'Uramaki', image: 'https://sushibi.co.nz/cdn/shop/products/Uramakisalmonavocado_cec92624-cbea-4dd2-8c8c-ee76d9f50fa2_567x.jpg?v=1590318651', ingredients: 'Rice, Nori, Fish', price: 13.99 },
        { id: 16, name: 'Temaki', image: 'https://www.tokyo-city.ru/images/interesno/temaki.jpg', ingredients: 'Rice, Nori, Fish', price: 12.49 },
      ],
    },
    {
      title: 'Chirashizushi - "Scattered" Sushi',
      items: [
        { id: 17, name: 'Edomae – Tokyo Style Chirashi', image: 'https://oyakata.com.pl/wp-content/uploads/2022/08/Chirashi-zushi-czyli-miaska-pelna-ryb-i-ryzu.jpg', ingredients: 'Rice, Fish', price: 15.99 },
        { id: 18, name: 'Bara Chirashi Sushi', image: 'https://cdn.shopify.com/s/files/1/0261/9123/3121/files/Bara_Chirashi_2_480x480.jpg?v=1625079308', ingredients: 'Rice, Vegetables, Fish', price: 14.99 },
        { id: 19, name: 'Gomoku Chirashi – Osaka Style', image: 'https://www.justonecookbook.com/wp-content/uploads/2020/02/Chirashi-Sushi-7722-I-1.jpg', ingredients: 'Rice, Vegetables, Fish', price: 16.99 },
      ],
    },
    {
      title: 'Inarizushi',
      items: [
        { id: 20, name: 'Sesame Seeds', image: 'https://www.justonecookbook.com/wp-content/uploads/2021/12/Inari-Sushi-5294-I-1.jpg', ingredients: 'Rice, Tofu, Sesame Seeds', price: 7.99 },
        { id: 21, name: 'Pickled Cherry Blossoms', image: 'https://img-global.cpcdn.com/recipes/6361573481250816/680x482cq70/inari-sushi-for-cherry-blossom-viewing-recipe-main-photo.jpg', ingredients: 'Rice, Tofu, Pickled Cherry Blossoms', price: 8.49 },
        { id: 22, name: 'Sakura Ebi', image: 'https://gurunavi.com/en/japanfoodie/article/a_guide_to_inarizushi_japans_sweet_sushi_tofu_pockets/img/06_inari.jpg', ingredients: 'Rice, Tofu, Sakura Ebi', price: 9.49 },
        { id: 23, name: 'Tsukudani Kombu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVj9wWsGCMX-y6YeAkgTMOXJ5NsGCPJMvxA&s', price: 7.49 },
        { id: 24, name: 'Shichimi Togarashi', image: 'https://gurunavi.com/en/japanfoodie/article/a_guide_to_inarizushi_japans_sweet_sushi_tofu_pockets/img/09_inari.jpg', ingredients: 'Rice, Tofu, Shichimi Togarashi', price: 8.99 },
        { id: 25, name: 'Kinshi Tamago', image: 'https://gurunavi.com/en/japanfoodie/article/a_guide_to_inarizushi_japans_sweet_sushi_tofu_pockets/img/10_inari.jpg', ingredients: 'Rice, Tofu, Kinshi Tamago', price: 8.49 },
        { id: 26, name: 'Gomoku Inarizushi', image: 'https://airkitchen.me/picture/experience/3056/1.png', ingredients: 'Rice, Tofu, Mixed Vegetables', price: 9.99 },
        { id: 27, name: 'Seaweed Salad', image: 'https://gurunavi.com/en/japanfoodie/article/a_guide_to_inarizushi_japans_sweet_sushi_tofu_pockets/img/12_inari.jpg', ingredients: 'Rice, Tofu, Seaweed Salad', price: 7.99 },
      ],
    },
    {
      title: 'Temarizushi - "Hand Ball" Sushi',
      items: [
        { id: 28, name: 'Halloween', image: 'https://www.chopstickchronicles.com/wp-content/uploads/2015/10/Halloween-Temari-Sushi-11.webp', ingredients: 'Rice, Fish, Seaweed', price: 9.99 },
        { id: 29, name: 'Christmas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarLFlEe2i8g55GYfoyptJaXNjEImvwJ-gq3qFS6PYOg&s', ingredients: 'Rice, Fish, Vegetables', price: 10.49 },
      ],
    },
    {
      title: 'Gunkan Maki - "Battleship" Sushi',
      items: [
        { id: 30, name: 'Uni gunkan maki', image: 'https://www.sushi-pedia.com/static/504b433072ac1fd4b4a14581e76fc3d4/uni-gunkan-maki.jpg', ingredients: 'Rice, Sea Urchin, Nori', price: 14.99 },
        { id: 31, name: 'Ikura Sushi', image: 'https://www.sushi-pedia.com/static/59cc5443d7eaaf02d61bff50a2597469/ikura-salmon-roe-sushi-opener.jpg', ingredients: 'Rice, Salmon Roe, Nori', price: 13.99 },
        { id: 32, name: 'Tobiko gunkan maki', image: 'https://www.tasteatlas.com/images/dishes/6f8fc9ebf3af40bb8c0cb9770741391a.jpg', ingredients: 'Rice, Flying Fish Roe, Nori', price: 12.99 },
        { id: 33, name: 'Negitoro gunkan maki', image: 'https://www.tasteatlas.com/images/dishes/5ab2be96d7114af0b62d09bedc8e3a71.jpg', ingredients: 'Rice, Minced Tuna, Nori', price: 11.99 },
        { id: 34, name: 'Wakame gunkan maki', image: 'https://fushisushi.com/wp-content/uploads/Wakame-Gunkan.webp', ingredients: 'Rice, Seaweed, Nori', price: 10.99 },
      ],
    },
    {
      title: 'Narezushi - Fermented Sushi',
      items: [
        { id: 35, name: 'Plate of Narezushi', image: 'https://i.pinimg.com/736x/55/cc/f7/55ccf79d09658601b7d9ce32bf3fc644.jpg', ingredients: 'Rice, Fish, Nori', price: 17.99 },
      ],
    },
    {
      title: 'Oshizushi - Pressed Sushi',
      items: [
        { id: 36, name: 'Iwakuni Zushi (Yamaguchi Prefecture)', image: 'https://images.ctfassets.net/cynoqtn1y5gl/0004/38e36583a3ad279479977a87e1c59aad/Yamaguchi?fit=fill&w=1200&h=800', ingredients: 'Rice, Fish, Vegetables', price: 14.99 },
        { id: 37, name: 'Battera (Osaka Prefecture)', image: 'https://www.japanesefoodguide.com/wp-content/uploads/2022/12/osaka-food-battera-1024x683.jpg.webp', ingredients: 'Rice, Mackerel, Nori', price: 13.99 },
        { id: 38, name: 'Omura Sushi (Nagasaki Prefecture)', image: 'https://www.maff.go.jp/e/policies/market/k_ryouri/assets/uploads/2022/08/nagasaki_5_1.jpg', ingredients: 'Rice, Fish, Vegetables', price: 15.99 },
        { id: 39, name: 'Gozaemon Sushi (Tottori Prefecture)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xewwEY5-3UnraIqiFc5ej9i_Z25cf48NNQ&s', ingredients: 'Rice, Fish, Vegetables', price: 16.99 },
        { id: 40, name: 'Masu Sushi (Toyama Prefecture)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0arUSGQbCQhcb-P1AnbLYivSQYWEyIlMGhQ&s', ingredients: 'Rice, Trout, Nori', price: 14.49 },
        { id: 41, name: 'Kakuzushi (Hiroshima Prefecture)', image: 'https://www.maff.go.jp/e/policies/market/k_ryouri/assets/uploads/2023/12/hiroshima_16_1.jpg', ingredients: 'Rice, Fish, Vegetables', price: 15.49 },
      ],
    },
    {
      title: 'Sasazushi - Bamboo Leaf Sushi',
      items: [
        { id: 42, name: 'Sasa sushi: sushi in bamboo leaf', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1RvNMIo6urtqPHKZn_CB-mC1V4c5A5CF5A&s', ingredients: 'Rice, Fish, Bamboo Leaf', price: 13.99 },
        { id: 43, name: 'Kakininoha sushi: sushi in persimmon leaf', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxH8JW3Ny2RJ7RrBitaIns6J2b2j7yto_SA&s', ingredients: 'Rice, Fish, Persimmon Leaf', price: 14.99 },
      ],
    },
  ],
};

const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: {},
});

export const selectSushi = (state) => state.sushi.sushiData;

export default sushiSlice.reducer;