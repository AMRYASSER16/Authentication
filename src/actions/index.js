import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
    try {
        // signup api
        const response = await axios.post('/signup', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (e) {
        // error
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        // signin api
        const response = await axios.post('/signin', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (e) {
        // error
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
};