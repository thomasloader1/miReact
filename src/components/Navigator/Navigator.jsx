import React from 'react';


const Navigator = props =>{
    return(
        <div>
    <nav>
        <ul>
            <p>{props.task}</p>
            <li>{props.priority}</li>
            <li>{props.priority}</li>
            <li>{props.priority}</li>
        </ul>
    </nav>

    </div>
    )
};

export default Navigator;