import React from 'react'
// {ASK FOR THE TITLE SET TITLE, SUBTITLE SETTITLE, LIST SETLIST}

import Box from '@mui/material/Box';
import { Container } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';

const MainLayout = ({title, subTitle, summary}) => {

  // const posts = allPost.sort(
  //         (a, b) =>
  //           Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  //       );


    return (
      <Box
        mt={10}
        sx={{Height: 100}}>

        <Container >
            <div className='mainLayout-title'>
            <p>Learning is <span>Fun</span>damental</p>
            </div>
            <section>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                        <Card
                        //NEED ONCLICK FUNCTION TO ROUTE TO SINGLE BLOG/PROJECT PAGE
                        elevation={8}
                        sx={{maxWidth: 450,height:300,backgroundColor:"none"}}>
                          <h1>{title}</h1> 
                          <img alt=''sx={{width:100, height:50}}></img>
                          <p>{summary}</p>
                          <p></p>
                          </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            </section>
        </Container>
        </Box>
  )
}

export default MainLayout
// <H1>{{TITLE }}</H1>
//<H2>{{SUBTITLE}}</H2>
//LIST.MAP 
//DIV FOR EVERY ITEM 

// const formattedDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');

// const posts = allPosts
//     .map((post) =>
//       pick(post, [
//         '_id',
//         'slug',
//         'title',
//         'summary',
//         'publishedAt',
//         'readingTime',
//       ])
//     )
//     .sort(
//       (a, b) =>
//         Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
//     );