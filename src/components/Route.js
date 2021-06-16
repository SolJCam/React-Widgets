import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(()=>{
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return() => {
            window.removeEventListener('popstate', onLocationChange);   // when we no longer want to show route we need to remove event
        }

    }, []);

    return(currentPath === path ? children : null);
}

export default Route;