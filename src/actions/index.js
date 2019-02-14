import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, SPINNER_LOADING} from './types';
import firebase from '@firebase/app';
import '@firebase/auth';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

const loginUserSuccess = (dispatch, user) => {
    return dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
};

const loginUserFail = (dispatch, error) => {
    return dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.message
    })
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: SPINNER_LOADING,
            payload: true
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        loginUserSuccess(dispatch, user)
                    })
                    .catch(error => {
                        loginUserFail(dispatch, error);
                    });
            });
    }
};

