import { errorUsers, loadingUsers } from "../actions"
import { GET_USERS, GET_USERS_LOADING, GET_USERS_ERROR } from "../actionTypes"

const initialState = {
    users: [],
    loading: false,
    error: '',
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USERS_ERROR:
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
export const getUsers = () => {
    return async (dispatch) => {
        dispatch(loadingUsers());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({
                type: GET_USERS,
                payload: data
            });
        } catch (e) {
            dispatch(errorUsers(e.toString()));
        }
    }
}