import axios from 'axios';

export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_ERROR = 'ADD_POST_ERROR';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';
export const SELECT_POST = 'SELECT_POST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';

export const addPost = (data) => {
    return dispatch => {
        axios.post('https://registration-26002.firebaseio.com/test.json', data)
            .then(response => {
                console.log(response.data);
                dispatch(addPostSuccess(response.data));
            })
            .catch(error => {
                dispatch(addPostError(error));
            });
    }
};

export const addPostSuccess = (data) => {
    return {
        type: ADD_POST_SUCCESS,
        response: data
    }
};

export const addPostError = (error) => {
    return {
        type: ADD_POST_ERROR,
        error: error
    }
};

export const deletePost = (id) => {
    return dispatch => {
        axios.delete('https://registration-26002.firebaseio.com/test/' + id + '.json')
            .then(res => {
                dispatch(deletePostSuccess(res.data));
            })
            .catch(err => {
                dispatch(deletePostError(err))
            });
    }
};

export const deletePostSuccess = (data) => {
    return {
        type: DELETE_POST_SUCCESS,
        response: data
    }
};

export const deletePostError = (error) => {
    return {
        type: DELETE_POST_FAIL,
        error: error
    }
};

export const selectPost = (post) => {
    return {
        type: SELECT_POST,
        post: post
    }
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts: posts
    }
};

export const fetchPostsFail = (error) => {
    return {
        type: FETCH_ORDERS_FAIL,
        error: error
    }
};

export const fetchPosts = () => {
    return dispatch => {
        axios.get('https://registration-26002.firebaseio.com/test.json')
            .then(response => {
                let posts = Object.values(response.data);
                Object.keys(response.data).map((id, index) => {
                    return posts[index].key = id
                });
                dispatch(fetchPostsSuccess(posts));
            })
            .catch(error => {
                dispatch(fetchPostsFail(error));
            });
    }
};