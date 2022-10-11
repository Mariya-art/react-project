import { GET_POSTS } from "../actionTypes"

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default: 
            return state
    }
}
//thunks
export const getData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({
                type: GET_POSTS,
                payload: data
            });
        } catch (err) {
            console.log(err);
        }
    }
}