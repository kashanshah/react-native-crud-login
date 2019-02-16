import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, SPINNER_LOADING} from './types';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';

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
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

const loginUserFail = (dispatch, error) => {
    dispatch({
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

