import { Box } from '@mui/material'
import React from 'react'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <Box sx={{marginTop:10}}>
      <ProductList/>
    </Box>
  )
}
