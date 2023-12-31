import Typography from '@mui/material/Typography';
import Quotes from './Quotes';

const Main = () => {
    return (
        <div className='main-wrapper'>

            <div className="welcome-section">
                
                <Typography variant="h6" sx={{fontWeight:200, color: '#4FA3A5'}}>
                Welcome To
                </Typography>
                <Typography 
                variant="h1" 
                sx={{fontWeight: 900, fontFamily: "poppins", color: '#f1cf63'
                }}>
                TIMMYS WORLD
                </Typography>
            <hr/>
            <Typography 
            variant='h4'
            sx={{fontWeight: 400, color:'#4FA3A5'}}>
            FULL STACK SOFTWARE DEVELOPER
            </Typography>
            </div>
            <div className="quote-of-the-day">
                <Quotes/>
                {/* <Typography
                variant='h6'
                sx={{fontWeight:300, fontFamily:"Montserrat"}}
                >
                "It is more blessed to give love than to receive, as God always gives love".
                
                </Typography> */}
            </div>
        </div>

    )
}

export default Main