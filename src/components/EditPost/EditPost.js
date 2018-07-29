import React from 'react';

import Input from '../Input/Input';
import './EditPost.css';

const editPost = (props) => {
    const { values, onChange, cancelHandler, editHandler } = props;

    return (
        <form className='Form'>
                    <h2>Edit Post</h2>
                    <Input
                        type='input'
                        inputType='text'
                        id='title'
                        onChange={onChange}
                        value={values.title}
                        title='Title' />
                    <Input
                        type='textarea'
                        inputType='text'
                        id='text'
                        onChange={onChange}
                        value={values.text}
                        title='Text' />    
                    <article className='Tags'>  
                        <Input 
                            type='input'
                            inputType='text'
                            id='tag'
                            onChange={onChange}
                            value={values.tag}
                            title='Tags' />
                        <br/>
                        <Input 
                            type='input'
                            inputType='text'
                            id='name'
                            onChange={onChange}
                            value={values.name}
                            title='Name' />
                    </article>
                    <article className='Buttons'>
                        <Input
                            type='button'
                            onClick={cancelHandler}
                            title='Cancel'
                            btnType='Delete' />
                        <Input
                            type='button'
                            onClick={editHandler}
                            title='Save'
                            btnType='Edit' />
                    </article>
                </form>
    );
};

export default editPost;