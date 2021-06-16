import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();      // this hook allows you to return whatever dom element you attach it to 

    useEffect(()=>{
        document.addEventListener('click', (event)=>{
            // event.target identifies which elemtent was clicked. 
            // this logic determines that if the element is a child of the ref element, 
            // we return early, avoiding passing a false bolean to setOpen, causing the dropdown to not work as expected
            // for toggle dropdown code refer to lecture 186 
            if (ref.current.contains(event.target)) {   
                return;
            }
            setOpen(false);
        });
    }, []);

    const renderedOptions = options.map((color)=>{

        if(color.label === selected.label){
            return null;
        }

        return(
            <div 
              key={color.label} 
              onClick={()=>onSelectedChange(color)}
              className='item'>
                {color.label}
            </div>
        )
    });

    return(
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;