import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = e => {
        // if user holds down commnad key (mac) or crtl key (windows) and clicks a nav link, 
        // this opens a new browser tab of the selected link
        if ( e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        // changes url to path provided as 3rd argument without refreshing page and making additional requests
        window.history.pushState({}, '', href);

        // purpose of the following code is to help detect url change
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
        <a onClick={onClick} href={href} className={className}>{children}</a>
    );
};

export default Link;