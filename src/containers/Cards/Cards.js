// .slice(3,21)
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import './Cards.css';
import Card from '../../components/Card/Card';
import Post from '../Post/Post';

let post = <h4>wait</h4>;

class Cards extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    componentDidUpdate() {
        if( this.props.reload ) {
            this.props.getPosts();
        }
    }

    showPostHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
        let selected = this.props.posts[id];
            post = <Post 
                    index={id}
                    title={selected.title}
                    text={selected.text}
                    tags={selected.tags}
                    name={selected.name}
                    img={selected.picture}
                    time={selected.date}
                    deletePost={() => {
                        this.props.history.replace('/posts');
                        this.props.deletePost(selected.key);
                    }} />
        this.props.selectPost(post);            
    }

    render() {
        
        let posts = this.props.posts.map(post => {
            return (
                    <Card 
                        title={post.title}
                        text={post.text}
                        img={post.picture}
                        author={post.name}
                        key={post.id}
                        onClick={() => this.showPostHandler(this.props.posts.indexOf(post))} />
            );
        })

        return(
                <div className='Cards'>
                    { posts }
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        reload: state.reloadPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(actionCreators.fetchPosts()),
        selectPost: (post) => dispatch(actionCreators.selectPost(post)),
        deletePost: (id) => dispatch(actionCreators.deletePost(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cards));