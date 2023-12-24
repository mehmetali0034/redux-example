import { Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
export default function NavBarr() {
  const { cartItems } = useSelector((store) => store.cart);
  const {favoriteItems} =useSelector((store)=>store.fav);
  console.log(favoriteItems)
  const getTotalProduct = (cartItems) => {
    let toplam = 0;
    cartItems.forEach((item) => {
      toplam += item.quantity;
    });
    return toplam;
  };
  const TotalProduct = getTotalProduct(cartItems);
console.log(cartItems)
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClickCart = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Box>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Redux Toolkit İle Satış Uygulaması
            </Typography>
          </Box>
          <Box>
            <Badge badgeContent={TotalProduct} showZero color="primary">
              <IconButton 
              onClick={handleClickCart}>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
            <Box>
              <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}>
                        <Typography sx={{textAlign:"center"}} borderBottom={2}>
                          Sepetim({TotalProduct})
                        </Typography>
                      {cartItems.map((item)=>(
                        <MenuItem key={item.id}>
                        Ürün {item.id} ({item.quantity})
                        </MenuItem>
                      ))}
                         <Typography borderTop={2} sx={{textAlign:"center"}} borderBottom={2}>
                          Favorilerim({favoriteItems.length})
                        </Typography>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
