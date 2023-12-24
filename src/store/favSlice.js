import { createSlice } from "@reduxjs/toolkit";

const initialState={
    favoriteItems:[],
}

export const favSlice = createSlice({
    name:"fav",
    initialState,
    reducers:{
        addToFav: (state, action) => {
            const { id, name, price, image, features } = action.payload;
      
            // Favoriye eklenen ürünün zaten favorilerde olup olmadığını kontrol et
            const isAlreadyInFavorites = state.favoriteItems.some(
              (item) => item.id === id
            );
      
            if (!isAlreadyInFavorites) {
              // Favoriye eklenen ürün favorilerde yoksa ekleyin
              state.favoriteItems.push({ id, name, price, image, features });
            }
          },
          removeFromFav: (state, action) => {
            const itemIdToRemove = action.payload;
            // Favori listesinden belirtilen ID'ye sahip ürünü kaldırın
            state.favoriteItems = state.favoriteItems.filter(
              (item) => item.id !== itemIdToRemove
            );
          },
        },
})
export const {addToFav,removeFromFav} = favSlice.actions;
export default favSlice.reducer;
