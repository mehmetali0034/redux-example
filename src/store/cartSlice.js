import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState, //Artık state benim initial state'imdir.Yani state. dediğim zaman otomatik olarak initialState içerisindekilere ulaşacağım.
    reducers :{
        addToCart:(state,action)=>{ 
          //console.log(action)Bu action içierisnde payload ve type bulunur payload işlem yapılan ürünle ilgili gönderidiğimiz parametreyi tutar.type ise cart/addToCart yani çalışan fonksiyonu tutar.
        const product = state.cartItems.find((item) => item.id === action.payload.id);//Payload gönderdiğimiz dataya karşılık gelir.
        console.log(action.payload)
        if(product){   
            product.quantity +=1 
        }else {
            // Eğer ürün bulunmazsa, yeni bir ürün ekleyerek başlatmalısınız.
            const newItem = {
                id: action.payload.id,
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
        deleteAll :(state) => {
            state.cartItems = [];
        }
    }
})
export const {addToCart,removeFromCart , deleteAll} = cartSlice.actions;
export default cartSlice.reducer;