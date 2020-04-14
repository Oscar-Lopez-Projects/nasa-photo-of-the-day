import React from 'react';

const NasaCard= (props)=> {
    
    return(
        <div>
            <img className="nasa-image" alt="nasa" src={props.url}/>
            <h1>{props.title} </h1>
            <h5>{props.explanation}</h5>
            <p>{props.date} </p>
        </div>
    )
}

export default NasaCard;