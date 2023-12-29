import React from "react";
import { ProductList as data } from "../data/ProductListData";
import { Box, Button, IconButton } from "@mui/material";
import { productList } from "../data/ProductListData";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteAll } from "../store/cartSlice"; 
import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";
export default function ProductList() {
  const dispatch = useDispatch()
  return (
    <Box>
      <Box>
        {productList.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              features={item.features}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </Box>
      <Box  textAlign="right">
        <Button sx={{marginRight:5}}  onClick={()=>dispatch(deleteAll())} variant="outlined"  startIcon={<DeleteIcon />} >
          Tüm Sepeti Temizle
        </Button>
      </Box>
    </Box>
  );
}
