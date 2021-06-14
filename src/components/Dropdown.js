import React, {useState} from 'react';

const Dropdown = ({items, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);

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
        <div className='ui form'>
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