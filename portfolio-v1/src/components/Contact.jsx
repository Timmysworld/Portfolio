import React from 'react'
import Box from '@mui/material/Box';

const Contact = () => {
    return (
        <Box className='contact-wrapper'
        sx={{justifyContent:'center'}}>
            <div className='contact-text'>
                <div className="contact-heading">
                    <h2>
                    <span className='split'>
                    <span className='line'>LETS</span>
                    </span> 
                    <span className='split'>
                    <span className='line'>CONNECT</span>
                    </span>
                    </h2>
                </div>
                <div className="contact-info">
                <p>I am <span>SUPER</span> Interested in: </p>
                <a href="mailto:txsingleton89@gmail.com?subject=I need a developer" className='btn' role='button'>Web Developing</a>
                <a href="mailto:txsingleton89@gmail.com?subject=I need a UX/UI Designer" className='btn' role='button'>UX/UI Design</a>
                <a href="mailto:txsingleton89@gmail.com?subject=I need a developer" className='btn' role='button'>Software Developing</a>
                <a href="mailto:txsingleton89@gmail.com?subject=Can you help me with my business idea" className='btn' role='button'>Start Ups</a>
            </div>
            </div>
        </Box>
    )
}

export default Contact