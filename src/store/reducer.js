import React from 'react';
import * as actionTypes from './actions';

const initialState = {
    posts: [],
    post: <h4>wait</h4>,
    reloadPosts: true
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                response: action.response,
                reloadPosts: true
            }
        case actionTypes.ADD_POST_ERROR:
            return {
                ...state,
                error: action.error
            }
            
        case actionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                response: action.response,
                reloadPosts: true
            }
        case actionTypes.DELETE_POST_FAIL:
            return {
                ...state,
                error: action.error
            }        
        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                reloadPosts: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                error: action.error
            }    
        case actionTypes.SELECT_POST:
            return {
                ...state,
                post: action.post,
                reloadPosts: false
            }        
    }

    return state;
};

export default reducer;