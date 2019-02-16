
import {EMPLOYEE_CREATE, EMPLOYEE_UPDATE, EMP_SPINNER_LOADING} from '../actions/types';

const INITIAL_STATE = {
    name: 'asd',
    phone: '',
    shift: '',
    error: '',
    emp_loading: false
};

export default EmployeeFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        case EMPLOYEE_CREATE:
            return {
                INITIAL_STATE,
                emp_loading: false
            };
        case EMP_SPINNER_LOADING:
            return {
                ...state,
                emp_loading: action.payload
            };
        default:
            return {...state};
    }
}
