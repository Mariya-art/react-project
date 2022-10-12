import { GET_USERS_ERROR, GET_USERS_LOADING } from "./actionTypes";

export const loadingUsers = () => ({
    type: GET_USERS_LOADING
});

export const errorUsers = (e) => ({
    type: GET_USERS_ERROR,
    payload: e,
});