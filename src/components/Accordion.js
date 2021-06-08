import React from 'react';

const Accordion = ({items}) => {
    const renderedItems = items.map((item, index) => {
        return(
            // read up on what React.Fragment is 
            // but here it's purpose is to prevent an extra border when using a div as parent element
            <React.Fragment key={ item.title }>
                <div className="title active" onClick={()=>console.log('Title clicked',index)}>
                    <i className="dropdown icon"></i>
                    { item.title }
                </div>
                <div className="content active">
                    <p>{ item.content }</p>
                </div>
            </React.Fragment>
        )
    })

    return(
        <div className="ui styled accordion">{ renderedItems }</div>
    );
};

export default Accordion;