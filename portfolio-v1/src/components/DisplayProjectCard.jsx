import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';
import projectMockup from '../assets/images/projectMockup.png'

function DisplayProjectCard() {
    return (
    <Card elevation={0}
            sx={{ maxWidth: 645, 
            backgroundColor: "transparent", p:4 }}>
            
            <CardMedia
                component="img"
                className='mockup'
                title= "Attendance Tracker"
                height= "320"
                width= "440"
                image={projectMockup}
                alt= "Attendance Tracker"
                
            /> 
        <CardActions 
            sx={{mt:-3, justifyContent:'center'}}
            >
            <Button size="small" color="primary">
            <a href='#'>View</a>
            </Button> |
            <Button size="small" color="primary">
            <a href="https://github.com/Timmysworld/AttendanceApplication">Github</a> 
            </Button>
        </CardActions>

    </Card>
    );
}
export default DisplayProjectCard
