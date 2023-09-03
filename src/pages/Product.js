import { Box, Typography } from '@mui/material'
import React from 'react'
import AddProducts from '../product/AddProducts'
import ProductList from '../product/ProductList'


function Product() {
    return (
        <>
            <Box height={70} />
            <Box sx={{ marginLeft: '260px' }}>

                {/* <Typography fontWeight={'bold'} fontSize={"20px"} >Product List</Typography> */}
                {/* <AddProducts /> */}
                <ProductList />

            </Box>
        </>
    )
}

export default Product
