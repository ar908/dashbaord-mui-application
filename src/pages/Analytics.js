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
import { PieChart } from '../chart/PieChart';
import { GeoChart } from '../chart/GeoChart';
import CountUp from 'react-countup';

export default function Analytics() {

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
                        <Grid item xs={3}>
                            <Stack direction="column" spacing={2}>
                                <Card className="gradient" sx={{ minWidth: "49%", height: "150px", bgcolor: "greenyellow" }}>

                                    <CardContent className='content'>
                                        <div className='iconstyle'> Visitor</div>
                                        <Typography gutterBottom variant="h5" color="white" component="div">
                                            <CountUp delay={0.2} end={22000} duration={0.3} />
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Since Last Week
                                        </Typography>
                                    </CardContent>

                                </Card>
                                <Card className="gradientlight" sx={{ minWidth: "49%", height: "150px" }} >

                                    <CardContent className='content'>
                                        <div className='iconstyle'>Visitor</div>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            <CountUp delay={0.2} end={32000} duration={0.3} />
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Since Last Week
                                        </Typography>
                                    </CardContent>

                                </Card>


                            </Stack>
                        </Grid>
                        <Grid item xs={3}>
                            <Stack direction="column" spacing={2}>
                                {/* <Card className="gradient" sx={{ minWidth: "49%", height: "150px" }}>

                                    <CardContent className='content'>
                                        <div className='iconstyle'> Visitor</div>
                                        <Typography gutterBottom variant="h5" color="white" component="div">
                                            $2000.00
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Since Last Week
                                        </Typography>
                                    </CardContent>

                                </Card> */}
                                <Card className="gradientlight" sx={{ minWidth: "49%", height: "150px", bgcolor: "#af125a" }} >

                                    <CardContent className='content'>
                                        <div className='iconstyle'>Visitor</div>
                                        <Typography gutterBottom variant="h5" component="div" color="white">
                                            <CountUp delay={0.2} end={23000} duration={0.6} />
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Since Last Week
                                        </Typography>
                                    </CardContent>

                                </Card>
                                <Card className="gradient" sx={{ minWidth: "49%", height: "150px" }}>

                                    <CardContent className='content'>
                                        <div className='iconstyle'> Visitor</div>
                                        <Typography gutterBottom variant="h5" color="white" component="div">
                                            <CountUp delay={0.2} end={43000} duration={0.6} />
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            Since Last Week
                                        </Typography>
                                    </CardContent>

                                </Card>


                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={2} >
                                <Card sx={{ minWidth: 340, marginRight: "20px" }} >

                                    <CardContent sx={{ height: "45vh" }}>
                                        <BarChart />
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

                                    <GeoChart />
                                </CardContent>

                            </Card>

                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh", marginRight: '30px' }}>

                                <CardContent>
                                    {/* <Typography fontWeight={'bold'} p={2}> Products List</Typography> */}
                                    <PieChart />

                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>

                </Box>
            </div>

        </>
    )
}


