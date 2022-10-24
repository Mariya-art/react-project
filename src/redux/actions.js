import * as types from "./actionTypes";

export const loadingUsers = () => ({
    type: types.GET_USERS_LOADING,
});

export const errorUsers = (e) => ({
    type: types.GET_USERS_ERROR,
    payload: e,
});

export const registerStart = () => ({
    type: types.LOADING_REGISTER,
});

export const registerError = (e) => ({
    type: types.ERROR_REGISTER,
    payload: e.toString(),
});

export const registerSuccess = (user) => ({
    type: types.SUCCESS_REGISTER,
    payload: user,
});

export const loginStart = () => ({
    type: types.LOADING_LOGIN,
});

export const loginError = (e) => ({
    type: types.ERROR_LOGIN,
    payload: e.toString(),
});

export const loginSuccess = (user) => ({
    type: types.SUCCESS_LOGIN,
    payload: user,
});

export const logoutStart = () => ({
    type: types.LOGOUT_LOADING,
});

export const logoutError = (e) => ({
    type: types.LOGOUT_ERROR,
    payload: e.toString(),
});

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});