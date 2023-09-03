import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StoreIcon from '@mui/icons-material/Store';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BasicAccordion from '../components/Accordion';
import Paper from '@mui/material/Paper';
import BarChart from '../chart/BarChart';

function Home() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (

        <>
            <div className='bgcolor'>  <Box height={70} />
                <Box sx={{ marginLeft: '260px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack direction="row" spacing={2}>
                                <Card className="gradient" sx={{ minWidth: "49%", height: "150px", bgcolor: "greenyellow" }}>

                                    <CardContent className='content'>
                                        <div className='iconstyle'> <CreditCardIcon /></div>
                                        <Typography gutterBottom variant="h5" color="white" component="div">
                                            $500.00
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Total Earning
                                        </Typography>
                                    </CardContent>

                                </Card>
                                <Card className="gradientlight" sx={{ minWidth: "49%", height: "150px", bgcolor: "#af125a" }} >

                                    <CardContent className='content'>
                                        <div className='iconstyle'><ShoppingBagOutlinedIcon /></div>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            $600.00
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Total Orders
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2} >
                                <Card sx={{ maxWidth: 345 }} className="gradientlight">

                                    <CardContent>
                                        <Stack spacing={2} direction={'row'}>
                                            <div className='paddingall' >

                                                <div className='iconstyle'> <StorefrontOutlinedIcon /></div>
                                                <div className='spec'>
                                                    <span className='pricetitle' color="white"> $230k</span>

                                                    <span className='pricesubtitle'>TotalIncome</span>
                                                </div>

                                            </div>
                                        </Stack>
                                    </CardContent>

                                </Card>

                                <Card sx={{ maxWidth: 345 }}>

                                    <CardContent>
                                        <Stack spacing={2} direction={'row'}>
                                            <div className='paddingall' >

                                                <div> <StorefrontOutlinedIcon /></div>
                                                <div className='spec'>
                                                    <span className='pricetitle' > $230k</span>

                                                    <span className='pricesubtitle'>TotalIncome</span>
                                                </div>

                                            </div>
                                        </Stack>
                                    </CardContent>

                                </Card>


                            </Stack>
                        </Grid>

                    </Grid>
                    <Box height={40} />
                    <Grid container spacing={2}>

                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>

                                <CardContent>

                                    <BarChart />
                                </CardContent>

                            </Card>

                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh", marginRight: '30px' }}>

                                <CardContent>
                                    <Typography fontWeight={'bold'} p={2}> Products List</Typography>
                                    <BasicAccordion />

                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>

                </Box>
            </div>

        </>
    )
}

export default Home
