import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, SPINNER_LOADING} from '../actions/types';

const INITIAL_STATE = {
    email: 'kashanshah@hotmail.com',
    password: '1234567',
    user: null,
    error: '',
    loading:false
};

export default AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                INITIAL_STATE,
                user: action.payload,
                loading: false
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                password: '',
                loading: false
            };
        case SPINNER_LOADING:
            return {
                ...state,
                error: '',
                loading: action.payload
            };
        default:
            return state;
    }
}
