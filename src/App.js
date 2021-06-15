import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Translate from './components/Translate';

// const items = [
//     { 
//         title: "What is React?",
//         content: "React is a front end Javascript framework"
//     },
//     {
//         title: "Why use React?",
//         content: "React is a favorite JS library of engineers"
//     },
//     {
//         title: "How do you use React?",
//         content: "You use React by creating components"
//     }
// ]

export default () => {

    return <h1>{ <Translate /> }</h1>;
    // return <h1>{ <Search/> }</h1>;
    // return <h1>{ <Accordion items={ items }/> }</h1>;
};