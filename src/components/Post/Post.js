import React from 'react';

import './Post.css';

const post = (props) => {
        let tags = <ul>
            { props.tags.length && props.tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
            ))}
        </ul>
    return (
        <div className='Post'>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            { tags } 
            <div className='Author'>
                <img src={props.img} alt='Avatar' />
                <b>{props.name}</b>
                <b>{props.time}</b>
            </div>
            <button onClick={props.deletePost}>Delete Post</button>
        </div>
    );
};

export default post;