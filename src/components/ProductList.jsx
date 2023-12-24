import React from 'react'
import {ProductList as data} from "../data/ProductListData"
import { Box } from '@mui/material'
import {productList} from '../data/ProductListData'

import ProductItem from './ProductItem'
export default function ProductList() {
  return (
    <Box>
        {productList.map((item) =>{
            return <ProductItem key={item.id}id={item.id} name={item.name} features ={item.features} image={item.image} price={item.price}/>
        })}
    </Box>
  )
}
