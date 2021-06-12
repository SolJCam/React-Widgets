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
        
        if(term){
            apiRequest();
        };
        
    }, [term]);

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button'>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {result.snippet}
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