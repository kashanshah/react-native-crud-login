import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.loading}</Text>
                <Text>Two</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.employeeForm.emp_loading.toString()
    }
};

export default connect(mapStateToProps)(EmployeeList);
