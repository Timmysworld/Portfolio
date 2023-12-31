import React from 'react'
import { Container } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



const Footer = () => {
    
    return (
                <Container className="footer"
                maxWidth="xxl"
                sx={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems: "center",
                }}>
                <div>
                <p>&copy; - Designed and Developed by Timothy Singleton</p>
                </div>

                <div>
                <p>Built with<span> React</span> and styled with <span>Material UI</span> </p>
                
                <div className="icons">
                <a href="https://github.com/Timmysworld"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/timothy-singleton/"><LinkedInIcon/></a>
                <a href="mailto:txsingleton89@gmail.com?subject=I would like to hire you!"><EmailIcon/></a>
                </div>
                </div>
                </Container>
    )
}

export default Footer