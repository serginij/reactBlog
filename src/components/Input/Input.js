import React from 'react';

import './Input.css';

const input = ({ inputType, id, onChange, value, title, onClick, btnType, type }) => {
    switch (type) {
        case 'textarea':
            return (
                <label className='Input' htmlFor={id}>
                    {title}
                    <textarea
                        required
                        id={id}
                        type={inputType}
                        onChange={onChange}
                        value={value} />
                </label>
            );
        case 'button':
            return (
                <button className={btnType} onClick={onClick}>{title}</button>
            );    
        default:
            return (
                <label className='Input' htmlFor={id}>
                    {title} <br />
                    <input 
                        required
                        id={id}
                        type={inputType}
                        onChange={onChange}
                        value={value} />
                </label>
            )
    }
};

export default input;