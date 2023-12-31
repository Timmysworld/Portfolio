
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <>
        <Box
        mt={10}
        sx={{}}>
        <Container className="contact-header">
            <p className="the">The</p>
            <h2 className="dod-rl wfd">Way <span className="dod-of">to hire a </span> DEVELOPER</h2> 
        </Container>
        </Box>
        <Box mt={2.2}>
        <ContactForm/>
        </Box>

        </>
        
    )
}

export default Contact