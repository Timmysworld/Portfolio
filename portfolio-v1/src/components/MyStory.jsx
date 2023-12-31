import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';
import { Box } from '@mui/system';
import Contact from './Contact';

import Timothy from '../assets/images/Me.png';


const MyStory = () => {
    return (
        <Box className="myStoryContainer"
        sx={{display: "flex", mb:5}}>
        <div className='myStoryBox'>

        <Card elevation={0}
            sx={{ maxWidth: 645, 
            backgroundColor: "transparent",p:4 }}>

            <CardMedia
                component="img"
                title="Timothy"
                height="340"
                width="440"
                image={Timothy}
                alt ="Picture of Timothy"
                />
        <CardActions sx={{justifyContent:'center'}}>
            <Button size="small" color="primary"><a href="https://www.linkedin.com/in/timothy-singleton/">
            LinkedIn</a></Button> |
            <Button size="small" color="primary"><a href="mailto:txsingleton89@gmail.com">
            Gmail</a></Button>
        </CardActions>

    </Card>

        <div className="myStory">
            <h3 className="myStory-heading">Hey! Its me Timmy</h3>
            <p className="myStory-info">Hey there! Buckle up for the ride because my passion story is a wild one! While most folks stumble upon their callings in unique ways, mine? Well, it all started with good ol&#39; <span className='hobbies'>curiosity</span>. You know how they say, &quot;Curiosity kills the cat&quot;? Well, in my case, it didn&#39;t kill; it woke her up and set her on fire!
            Yep, I&#39;m a proud veteran, a fearless firefighter, and now, hold onto your hats, a Full Stack Software Developer. I bring a mix of clear, clean-cut, and downright fun designs to all my projects. It&#39;s not just about coding for me; it&#39;s about infusing that zest into every line of code.
            And when I&#39;m not cooking up digital magic, you&#39;ll find me soaking up quality time with my awesome <span className='hobbies'>family</span>, diving headfirst into new <span className='hobbies'>learning</span> adventures, and, of course, keeping those muscles pumped with some serious <span className='hobbies'>workouts</span>. Life&#39;s a grand adventure, and I&#39;m here to make every moment count! 🚀💻🔥</p>
        </div> 

        <Contact/>
    </div>
    </Box>
    )
}

export default MyStory