// ({ASK FOR THE TITLE SET TITLE, SUBTITLE SETTITLE, LIST SETLIST})

// {{H1 : PROJECT/BLOG TITLE }}
// SIDEBAR ( TABLE OF CONTENTS) {COMPONENT}
//MAIN SECTION DIV {{GET ONE DESCRIPTION}}</DIV>
// import React, { useState } from 'react'
// import Sidebar from './../Sidebar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

import styles from '../layouts/layout.module.css';


// working on creating a dynamic layout for each of my projects. 
// the idea is to have one design that each project can use. 
//Need to create the layout idea before trying  to render data to it from the database.
//DONT FORGET MOBILE DESIGN 


const IndividualLayout = ({title, subTitle, whole}) => {
    const drawerWidth = 240;
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
            variant="permanent"
            sx={{
                height:90,
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                zIndex:-1
            }}
            >
                <Toolbar />
                <Typography
                    variant='h6'
                    fontFamily={'Courier New'}
                    p={1}>
                    Table of Contents:
                </Typography>

            </Drawer>
            
            <main className={styles.wrapper}>
                <header> 
                    <Toolbar/>
                    <p>Project: </p>
                    <h1 className={styles.title}>Project Title</h1>
                </header>            
                <section>
                    {/* will need to map through the database to gather information */}
                    <Typography subTitle
                    variant='h5'
                    p={1}>
                        Introduction
                    </Typography>
                    <Typography paragraph
                    p={2}
                    width={1000}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa nisi accusamus illum provident nulla perferendis sint assumenda odit magnam placeat sunt, ratione accusantium optio aliquam soluta eligendi beatae animi?
                    </Typography>
                </section>
                {/* want a section for ratings hopefully maybe utilizing github depending on circumstances  */}
            </main>
        </Box>
            
        </>

    )
}

export default IndividualLayout