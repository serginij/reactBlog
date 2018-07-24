import React from 'react';

import './Card.css';

const card = (props) => (
    <div className='Card' onClick={props.onClick}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className='Author'>
            <img src={props.img} alt='Avatar' />
            <b>{props.author}</b>
        </div>
    </div>
);

card.defaultProps = {
    title: 'Title',
    text: 'Some interesting text blalbalblalba...',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Aero-stub_img.svg/2000px-Aero-stub_img.svg.png',
    author: 'Mark Sandwitch'
}

export default card;