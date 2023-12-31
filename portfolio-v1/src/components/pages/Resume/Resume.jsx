import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

const Resume = () => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column'}}
            mt={10}>
            <Container className="about-header">
            <p className="the">The</p>
            <h2 className="dod-rl">Many Jobs <span className="dod-of">as a</span> DEVELOPER</h2> 
            <h2> COMING SOON !</h2>
            </Container>
    </Box>
    
    </>
  )
}

export default Resume