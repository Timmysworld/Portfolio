import { useState } from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system'
import MainLayout from '../../layouts/MainLayout'
import Contact from '../../Contact';

const Projects = () => {

    const [title, setTitle] = useState("Coming Soon!!")
    const [subTitle, setSubtitle] = useState("Lorem ipsss yyyyyyyy")
    const [summary, setSummary] = useState("Lorem daskhjfgsdijgdklsgfjioejasdklnvirjgsdjfgdsgjiopr..")

    return (
        <>
        <Box
        mt={10}
        sx={{Height: 100}}>
        <Container className="project-header">
            <p className="the">The</p>
            <h2 className="dod-rl wfd">Learning <span className="dod-of">As a</span> DEVELOPER</h2> 
        </Container>
        <MainLayout title={title}/>
        </Box>
        <Contact/>
        
        </>
    )
}

export default Projects

//things to think about: how to show different design on card from mainlayout, my thought process is to add more state but locally just change elements in the card but HOW? 