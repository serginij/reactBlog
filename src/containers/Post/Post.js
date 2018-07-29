import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actionCreators from '../../store/actions';
import './Post.css';
import EditPost from '../../components/EditPost/EditPost';

class Post extends Component {
    state = {
        post: {},
        edit: false
    }

    componentDidMount() {
        let post = this.props.posts[this.props.index];
        post.tag = post.tags.join(' ');
        post.date = post.date;
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
        const { title, text, img, name, time, deletePost } = this.props;

        let post =
            <div className='Post'>
                <h3>{title}</h3>
                <p>{text}</p>
                { tags } 
                <div className='Author'>
                    <img src={img} alt='Avatar' />
                    <b>{name}</b>
                    <b>{time}</b>
                </div>
                <article className='Buttons'>
                    <button className='Delete' onClick={deletePost}>Delete Post</button>
                    <button className='Edit' onClick={this.editPostHandler}>Edit Post</button>
                </article>    
            </div>

        if (this.state.edit) {
            post = <EditPost
                        values={this.state.post}
                        onChange={this.onChangeHandler}
                        cancelHandler={this.onCancelChanges}
                        editHandler={this.onSaveChanges} />
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