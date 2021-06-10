import React, {useState, useEffect} from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    //  first arguement is always a callback function, second either nothing OR an array
    useEffect(()=>{
        console.log('adfaf');
    });

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
        </div>
    );
};

export default Search;