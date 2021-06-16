import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Convert = ({language, text}) => {
    useEffect(()=>{
        Axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        });
    }, [language, text]);

    return(
        <div />
    );
};

export default Convert;