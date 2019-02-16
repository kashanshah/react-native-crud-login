import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from "./common";
import {employeeUpdate, employeeCreate} from '../actions';

class EmployeeCreate extends Component {

    componentDidMount(){
        this.props.employeeUpdate({prop: 'shift', value: 'Monday'});
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift});
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size="large"/>
            )
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="John Doe"
                        value={this.props.name}
                        onChangeText={(text) => this.props.employeeUpdate({prop: 'name', value: text})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="03xxxxxxxxx"
                        value={this.props.phone}
                        onChangeText={(text) => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>
                <CardSection>
                    <View style={styling.containerStyle}>
                        <Text style={styling.labelStyle}>Shift</Text>
                        <Picker
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                            style={styling.inputStyle}
                        >
                            <Picker.Item label="Monday" value="Monday"/>
                            <Picker.Item label="Tuesday" value="Tuesday"/>
                            <Picker.Item label="Wednesday" value="Wednesday"/>
                            <Picker.Item label="Thursday" value="Thursday"/>
                            <Picker.Item label="Friday" value="Friday"/>
                            <Picker.Item label="Saturday" value="Saturday"/>
                            <Picker.Item label="Sunday" value="Sunday"/>
                        </Picker>
                    </View>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
}

const styling = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

const mapStateToProps = (state) => {
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift,
        error: state.employeeForm.error,
        loading: state.employeeForm.emp_loading
    }
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
