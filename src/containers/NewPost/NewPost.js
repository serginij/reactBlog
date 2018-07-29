import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        data: {
            title: '',
            text: '',
            tag: '',
            name: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id]: e.target.value
            }
        });
    }

    addPostHandler = (e) => {
        e.preventDefault();
        let id = Math.random().toString(36).substr(2, 9).toString();
        let tags = this.state.data.tag.split(' ');
        let date = new Date().toString().slice(3,21);
        let dataToServer = {
            picture: "http://placehold.it/32x32",
            id: id,
            text: this.state.data.text,
            title: this.state.data.title,
            date: date,
            name: this.state.data.name,
            tags: tags
        }

        this.props.addPost(dataToServer);

        this.props.history.push('/posts');
    }

    render() {
        const { data: { title, text, tag, name } } = this.state;

        return(
                <form className='NewPost'>
                    <h2>New Post</h2>
                    <label htmlFor='title'>Title</label>
                    <input
                        required 
                        type='text'
                        placeholder='Enter title'
                        id='title'
                        onChange={this.onChangeHandler}
                        value={title} />
                    <label htmlFor='text'>Text</label>
                    <textarea
                        required
                        type='text'
                        placeholder='Enter text'
                        id='text'
                        onChange={this.onChangeHandler}
                        value={text} />
                    <article className='Tags'>    
                        <label htmlFor='tags'>Tags<br/>
                            <input 
                                required
                                type='text'
                                placeholder='tags'
                                id='tag'
                                onChange={this.onChangeHandler}
                                value={tag} />
                        </label>
                        <br/>
                        <label htmlFor='name'>Name<br/>
                            <input 
                                required
                                type='text'
                                placeholder='Your Name'
                                id='name'
                                onChange={this.onChangeHandler}
                                value={name} />
                        </label>
                    </article>
                    <button type='submit' onClick={this.addPostHandler}>Add post</button>  
                </form>
        );
    }
}

export default withRouter(NewPost);