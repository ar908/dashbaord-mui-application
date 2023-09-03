
import React from 'react'
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Typography from "@mui/material/Typography";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const About = () => {
    return (
        <>
            <Box height={90} />
            <Box sx={{ display: 'flex', marginLeft: '250px' }}>

                <Stack direction="row" spacing={2}>
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            height: "300px",

                            boxShadow: 3,
                        }}
                    >
                        <nav aria-label="main mailbox folders">
                            <List>
                                <Typography textAlign={"center"} fontSize={"30px"}>
                                    Personal
                                </Typography>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Uttar Pradesh" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PhoneAndroidIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="9876543216" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="dashbord@gmail.com" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </List>
                        </nav>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "500vh",
                            // minHeight: "400px",
                            // bgcolor: "lightgray",
                            // border: "1px solid black",
                            boxShadow: 3,
                        }}
                    >
                        <nav aria-label="main mailbox folders">
                            <List>
                                <Typography fontSize={"30px"} pl={5}>
                                    About
                                </Typography>
                                <Divider />
                                <ListItem>
                                    <Typography>
                                        A project dashboard serves as a centralized
                                        hub of information, providing a visual
                                        representation of key project metrics,
                                        progress, and status. It is an essential
                                        tool for project managers, stakeholders, and
                                        team members to quickly assess the health of
                                        a project and make informed decisions.
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Typography fontWeight={"bold"}>
                                        Details
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Name" />
                                        <ListItemText primary="Pitter Lucces" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Address" />
                                        <ListItemText primary="Washington" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Father Name" />
                                        <ListItemText primary="jayinee cread" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Zipcode" />
                                        <ListItemText primary="012345" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default About
