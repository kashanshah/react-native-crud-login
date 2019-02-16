import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMP_SPINNER_LOADING} from "./types";
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/database';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    return(dispatch) => {
        dispatch({
            type: EMP_SPINNER_LOADING,
            payload: true
        });
        const {currentUser} = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({
                name,
                phone,
                shift
            })
            .then(() => {
                Actions.pop('employeeList');
                dispatch({
                    type: EMPLOYEE_CREATE,
                    payload: false
                });
            });
    }
};
