import { useState, useEffect } from 'react'
import axios from 'axios';
// import {useParams} from 'react-router-dom';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);
    // const {id} = useParams();

const getRandomQuote  = (quotes) => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/quote/all`)
            .then(res => {
                console.log(res.data);
                setQuotes(res.data);
                setQuote(getRandomQuote(res.data));
            })
            .catch(err=>console.log(err));
        }, []);

    return (
        <>
        <div className='quotes'>
            {
                <>
                    <p>{quote?.quote}</p>
                    <i className='q-author'> -{quote?.author}</i>
                </>

                // quotes.map((quote, index)=>{
                //     return <p key={index}>
                //         <span>"</span>
                //         {quotes[0].quote}
                //         <span>"</span>
                //         <i> -{quote.author}</i>
                //     </p>
                    
                // });
            };
        </div>
        
        </>
    )
}

export default Quotes