import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers :{
        addToCart:(state,action)=>{
          //console.log(action)Bu action içierisnde payload ve type bulunur payload işlem yapılan ürünle ilgili gönderidiğimiz parametreyi tutar.type ise cart/addToCart yani çalışan fonksiyonu tutar.
        const product = state.cartItems.find((item) => item.id === action.payload);
        console.log(action)
        if(product){   
            product.quantity +=1 
        }else {
            // Eğer ürün bulunmazsa, yeni bir ürün ekleyerek başlatmalısınız.
            const newItem = {
                id: action.payload,
                quantity: 1,
                // Diğer ürün özellikleri varsa burada ekleyebilirsiniz.
            };
            state.cartItems.push(newItem);
        }
        },
        removeFromCart :(state,action)=>{
            const product = state.cartItems.find((item) => item.id === action.payload);
            if (!product) {
                // Ürün sepette bulunmuyorsa, işlem yapmadan çık
                console.log("Ürün sepette bulunamadı.");
                return;
            }
            if (product.quantity === 0) {
                product.quantity = 0;
            } else {
                product.quantity -= 1;
            }
        },
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;