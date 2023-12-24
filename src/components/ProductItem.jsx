import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { removeFromCart } from "../store/cartSlice";
import { addToFav } from "../store/favSlice";

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const { id, name, price, image, features } = props;
  const imageStyle = {
    width: "300px", // İstediğiniz genişliği belirleyin
    height: "300px", // İstediğiniz yüksekliği belirleyin
    objectFit: "cover", // Resmin kutuya tamamen sığmasını sağlar, ancak oranları korur
    borderRadius: "8px", // İstediğiniz kenar yuvarlaklığını belirleyin
  };
  const [favState, setFavState] = useState(false);
  // const handleclik = () => {
  //   setfavstate((before) => !before);
    
  // };
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      sx={{ alignItems: "center" }}
    >
      <Box>
        <img style={imageStyle} src={image} alt={name}></img>
      </Box>
      <Box>
        <Typography variant="h6">Name : {name}</Typography>
        <Typography variant="h6">Price : {price}</Typography>
        <Typography variant="h6">Features :{features}</Typography>
        <Box mt={2}>
          <Button variant="contained" onClick={()=>{dispatch(addToCart(id, name, price, image, features))}}>Sepete Ekle</Button>
          <Button
            sx={{ backgroundColor: "red", marginLeft: 2 }}
            variant="contained"
            onClick={()=>{dispatch(removeFromCart(id))}}
          >
            Sepetten Çıkar
          </Button>
          <IconButton  onClick={() => {
              dispatch(addToFav(id));
              setFavState(true);
            }} sx={{ color: "red" }}>
            {favState ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
