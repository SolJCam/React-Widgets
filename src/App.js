import React, {useState} from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    { 
        title: "What is React?",
        content: "React is a front end Javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library of engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]

export default () => {
    const [selected, setSelected ] = useState(items[0]);

    return(
        <div> 
            <Dropdown 
              items={items}
              selected={selected}
              onSelectedChange={setSelected}
            /> 
        </div>
    )
    // return <h1>{ <Search/> }</h1>;
    // return <h1>{ <Accordion items={ items }/> }</h1>;
};