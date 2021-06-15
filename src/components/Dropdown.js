import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({items, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();      // this hook allows you to return whatever dom element you attach it to 

    useEffect(()=>{
        document.addEventListener('click', (event)=>{
            // event.target identifies which elemtent was clicked. 
            // this logic determines that if the element is a child of the ref element, 
            // we return early, avoiding passing a false bolean to setOpen, causing the dropdown to not work as expected
            if (ref.current.contains(event.target)) {   
                return;
            }
            setOpen(false);
        });
    }, []);

    const renderedItems = items.map((attribute)=>{

        if(attribute.title == selected.title){
            return null;
        }

        return(
            <div 
              key={attribute.title} 
              onClick={()=>onSelectedChange(attribute)}
              className='item'>
                {attribute.title}
            </div>
        )
    });

    return(
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>Select A Title</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.title}</div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}>
                        {renderedItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;