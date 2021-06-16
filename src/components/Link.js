import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = e => {
        e.preventDefault();
    }

    return(
        <a onClick={onClick} href={href} className={className}>{children}</a>
    );
};

export default Link;