import React, {useState} from 'react';  // useState is the first use of a React Hook thus far in this project

const Accordion = ({items}) => {
    // second value in a desctructured useState hook is allways a setter function regardless of what you name it
    const [ activeIndex, setActiveIndex ] = useState(null); // for rurther explanation of these variable names ref vid 144

    const onTitleClick = index => {
        setActiveIndex(index);
    }; 

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";

        return(
            // read up on what React.Fragment is 
            // but here it's purpose is to prevent an extra border when using a div as parent element
            <React.Fragment key={ item.title }>
                <div className= {`title ${active}`} onClick={()=>onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    { item.title }
                </div>
                <div className={`content ${active}`}>
                    <p>{ item.content }</p>
                </div>
            </React.Fragment>
        )
    })

    return(
        <div className="ui styled accordion">
            { renderedItems }
        </div>
    );
};

export default Accordion;