import React from 'react';

import './Card.css';

const card = ({ title, text, img, author, onClick }) => (
        <div className='Card' onClick={onClick}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className='Author'>
                <img src={img} alt='Avatar' />
                <b>{author}</b>
            </div>
        </div>
);

export default card;