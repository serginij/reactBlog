import React, { Component } from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import './Blog.css';
import Cards from '../Cards/Cards';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div className='Blog'>
                <header className='Header'>
                    <h2><Link style={{ all: 'unset' }} to='/posts'>Posts</Link></h2>
                    <h2><Link style={{ all: 'unset' }} to='/new-post'>New Post</Link></h2>
                </header>
                <Switch>
                    <Route exact path='/posts' component={Cards} />
                    <Route path='/new-post' render={() => <NewPost addPost={this.props.addPost} />}/>
                    <Route path={'/posts/:id'} render={() => this.props.post} />
                    <Redirect exact from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: (data) => dispatch(actionCreators.addPost(data))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));