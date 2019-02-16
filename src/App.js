import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from  'redux-thunk';
import Reducers from './reducers';
import Router from './routers/Router';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAIMqiVEyUCMJYWbCPFhF5NpYLGvL7i_IY",
            authDomain: "manager-f3134.firebaseapp.com",
            databaseURL: "https://manager-f3134.firebaseio.com",
            projectId: "manager-f3134",
            storageBucket: "manager-f3134.appspot.com",
            messagingSenderId: "1090989083119"
        };
        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    };
}

export default App;
