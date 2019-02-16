import React from 'react';
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from '../components/LoginForm';
import EmployeeList from "../components/EmployeeList";
import EmployeeCreate from "../components/EmployeeCreate";

export const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} initial title="Please Login" />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate() }}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={ EmployeeCreate }
                        title="Create Employee"
                        rightTitle="Save"
                        onRight={() => {console.log('Save Employee!!!')}}
                    />
                </Scene>
            </Scene>
        </Router>
    )
};

export default RouterComponent;
