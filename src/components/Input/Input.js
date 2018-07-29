import React from 'react';

import './Input.css';

const input = (props) => {
    const { inputType, id, onChange, value, title, onClick, btnType } = props;

    switch (props.type) {
        case 'input':
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
            );
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
            break;
    }
};

export default input;