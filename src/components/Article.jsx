import React from 'react';

export function Article(props) {
    return(
        <article className={props.classP}>
            <img src={props.imageP} alt={props.descriptionP} />

            <div className='texts'>
                <p className='author'>By {props.name}</p>
                <h3>{props.title}</h3>
                <p className='textP'>{props.text}</p>
            </div>
        </article>
    );
}