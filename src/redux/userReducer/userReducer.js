import { auth } from "../../services/firebase";
import { loginError, loginStart, loginSuccess, logoutError, logoutStart, logoutSuccess, registerError, registerStart, registerSuccess } from "../actions";
import { ERROR_LOGIN, ERROR_REGISTER, LOADING_LOGIN, LOADING_REGISTER, LOGOUT_ERROR, LOGOUT_LOADING, LOGOUT_SUCCESS, SUCCESS_LOGIN, SUCCESS_REGISTER } from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    currentUser: null,
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGOUT_LOADING:
        case LOADING_LOGIN:
        case LOADING_REGISTER:
            return {
                ...state,
                loading: true
            }
        case LOGOUT_ERROR:
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SUCCESS_LOGIN:
        case SUCCESS_REGISTER:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: state.currentUser = null
            } 
        default:
            return state
    }
};

//thunks
export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                });
                dispatch(registerSuccess(user));
            })
            .catch((e) => dispatch(registerError(e.toString())))
    }
};

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user));
            })
            .catch((e) => dispatch(loginError(e.toString())))
    }
};

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart());
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e.toString())))
    }
};