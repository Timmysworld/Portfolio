//CREATE A STATE FOR AN EMPTY OBJECT 
//AXIOS CALL FOR GET ONE OF WHATEVER SETSTATE (RES)
//MAINLAYOUT TITLE= {OBJ.NAME} DESC={OBJ.DESCRIPTION}/> 
import React from 'react'

const Blog = () => {
    const formattedDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');
    
    const metaData = {
        title: `Blog-${post.title}`,
        canonical: `https://sergiobarria.com/blog/${post.slug}`,
        description: post.summary,
        openGraph: {
        url: `https://timothysingleton.com/blog/${post.slug}`,
        type: 'article',
        images:[{
            // url:,
            width:800,
            height:800,
            // alt:,
        }],
        },
    }
    return (
        <div>
            <section>
                    {/* HEADER */}
                    <div><h1> {{TITLE}}</h1>
                    </div>

                    <div>
                    <h2>{{subtitle}}</h2>
                    <p>{{written by: Timothy}}</p>
                    <p>{{date}}</p>
                    </div>

                </section>
                <section>
                    {/* MAIN CONTENT  */}
                    <div className="contentBox">{{MAIN CONTENT }}
                    </div>
                </section>
        </div>
    )
}

export default Blog