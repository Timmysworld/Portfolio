import { Container } from '@mui/system'
import { useState } from 'react'
import Box from '@mui/material/Box';
import MainLayout from '../../layouts/MainLayout'

const Blog = () => {
    const [title, setTitle] = useState("Coming Soon!!")
    const [subTitle, setSubtitle] = useState("")
    const [summary, setSummary] = useState("")

        // axios get one blog -> setTitle(res.data.title) setSubtitle(res.data.summary) 

    return (
        <Box
            mt={10}
            >
            <Container className="blog-header">
                <p className="the">The</p>
                <h2 className="dod-rl wfd">Writings <span className="dod-of">from a</span> DEVELOPER</h2> 
            </Container>
            <MainLayout title={title} subTitle={subTitle} summary={summary}/>
        </Box>
    )
}

export default Blog