import { Box } from '@mui/material'
import React from 'react'
import Lists from '../settings/List'

const Settings = () => {
    return (
        <>
            <Box height={80} />

            <Box component="main" bgcolor={'gray'} sx={{ display: 'flex', marginLeft: '250px', flaxGrow: 1, p: 3 }}>
                {/* <h1> Settings</h1> */}
                <Lists />
            </Box>
        </>
    )
}

export default Settings
