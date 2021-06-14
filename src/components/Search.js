import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    // useEffect runs after every initial render
    //  first arguement is always a callback function
    // second argument is either an empty array, no argument (runs again after every RE-RENDER) OR an array containing data (runs if data has changed since last reder).
    useEffect(()=>{
        const apiRequest = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });

            // console.log(data.query.search);
            setResults(data.query.search);
        }; 

        // using setTimeout to delay api call after user keystroke
        const timeoutId = setTimeout(() => {
            if(term){
                apiRequest();
            };
        }, 1000)

        // using clearTimeout to cancel previous setTimeout after every subsequent user keystroke which re-envokes useEffect and thus setTimeout again
        return ()=>{
            clearTimeout(timeoutId);
        };
        
    }, [term]);

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`} >Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>       {/* as the name suggessts, this is a dangerous attribute due to XSS attacks. ONLY USE WITH TRUSTED SITES. Used to render only the inner html of api data */}
                </div>
            </div>
                
        )
    })

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Here</label>
                    <input 
                    value={ term }
                    onChange={ e => setTerm(e.target.value )}
                    className='input' 
                    />
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
};

export default Search;