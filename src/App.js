import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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

const options = [
    { 
        label: "A shade of blue",
        val: "Blue"
    },
    {
        label: "The color red",
        val: "Red"
    },
    {
        label: "The color green",
        val: "Green"
    }
]


const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div> 
            <Route path='/'>
                {/* Whenever a component is passed to another compoenent like below, 
                it can be referenced in the parent component via the prop keyword children */}
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                  label='Select A Color'
                  options={options}
                  selected={selected}
                  onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;