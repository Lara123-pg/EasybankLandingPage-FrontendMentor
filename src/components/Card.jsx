import React from 'react';

export function Card(props) {
    return(
        <div className={props.classC}>
            <img src={props.image} alt={props.description} />

            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}