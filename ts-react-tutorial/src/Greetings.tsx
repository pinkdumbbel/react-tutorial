import React from 'react';

/* type GreetingsProps = {
    name: string;
    mark: string;
}; */

interface GreetingsProps {
    name: string;
    mark: string;
    onClick: (name: string) => void;
}

function Greetings({name, mark, onClick}: GreetingsProps){
    const handleClick = () => onClick(name);
    
    console.log(handleClick);

    return (
        <div>
            Hello, {name} {mark}
            <div>
                <button onClick={handleClick}>ClickMe</button>
            </div>
        </div>
    )    
}


Greetings.defaultProps = {
    mark: '!'
}

export default Greetings