import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Card, Input, Button, CardSection, Spinner} from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(password){
        this.props.passwordChanged(password);
    }

    onButtonPress(){
        this.props.loginUser({ email: this.props.email, password: this.props.password})
    }

    renderButton(){
        if(this.props.loading) {
            return (
                <Spinner size="small"/>
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }

    renderError(){
        if(this.props.error !== '') {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styling.errorText}>{this.props.error}</Text>
                </View>
            )
        }
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="john@johndoe.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Passowod"
                        placeholder="xxxxxxx"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styling = {
    errorText:{
        fontSize:20,
        alignSelf:'center',
        textAlign:'center',
        color:'red'
    }
};

const mapStateToProps = (state) => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
