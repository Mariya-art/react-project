import { GET_POSTS, GET_POSTS_LOADING, GET_POSTS_ERROR } from "../actionTypes"

const initialState = {
    posts: [],
    loading: false,
    error: '',
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: 
            return state
    }
}
//thunks
export const getData = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTS_LOADING
        });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({
                type: GET_POSTS,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: GET_POSTS_ERROR,
                payload: err.toString()
            });
        }
    }
}