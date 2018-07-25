import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actionCreators from '../../store/actions';
import './Post.css';

class Post extends Component {
    state = {
        post: {},
        edit: false
    }

    componentDidMount() {
        let post = this.props.posts[this.props.index];
        post.tag = post.tags.join(' ');
        post.date = post.date.slice(3, 21);
        console.log('[Post.js]-> post -- ', post);
        this.setState({ post: post });
    }

    editPostHandler = () => {
        this.setState({ edit: true });
    }

    onChangeHandler = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.id]: e.target.value
            }
        })
    }

    onCancelChanges = () => {
        this.setState({ edit: false });
    }

    onSaveChanges = () => {
        let tags = this.state.post.tag.split(' ');
        let post = this.state.post;
        post.tags = tags;
        this.props.editPost(post.key, post);
        this.setState({ edit: false });
        this.props.history.push('/posts');
    }

    render() {
        let tags = <ul>
            { this.props.tags.length && this.props.tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
            ))}
        </ul>
        
        let post =
            <div className='Post'>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                { tags } 
                <div className='Author'>
                    <img src={this.props.img} alt='Avatar' />
                    <b>{this.props.name}</b>
                    <b>{this.props.time}</b>
                </div>
                <article className='Buttons'>
                    <button className='Delete' onClick={this.props.deletePost}>Delete Post</button>
                    <button className='Edit' onClick={this.editPostHandler}>Edit Post</button>
                </article>    
            </div>

        if (this.state.edit) {
            post =
                <form className='Form'>
                    <h2>Edit Post</h2>
                    <label htmlFor='title'>Title</label>
                    <input
                        required 
                        type='text'
                        id='title'
                        onChange={this.onChangeHandler}
                        value={this.state.post.title} />
                    <label htmlFor='text'>Text</label>
                    <textarea
                        required
                        type='text'
                        id='text'
                        onChange={this.onChangeHandler}
                        value={this.state.post.text} />
                    <article className='Tags'>    
                        <label htmlFor='tags'>Tags<br/>
                            <input 
                                required
                                type='text'
                                id='tag'
                                onChange={this.onChangeHandler}
                                value={this.state.post.tag} />
                        </label>
                        <br/>
                        <label htmlFor='name'>Name<br/>
                            <input 
                                required
                                type='text'
                                id='name'
                                onChange={this.onChangeHandler}
                                value={this.state.post.name} />
                        </label>
                    </article>
                    <article className='Buttons'>
                        <button className='Delete' onClick={this.onCancelChanges}>Cancel</button>
                        <button className='Edit' onClick={this.onSaveChanges}>Save</button>
                    </article>
                </form>
        }
        
        return (
            <section>
                { post }
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editPost: (id, data) => dispatch(actionCreators.editPost(id, data))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));