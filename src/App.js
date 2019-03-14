
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB-TNfzkOAJ9SDgOYsStH53DTKKrSxhiDU',
      authDomain: 'authentication-1f32d.firebaseapp.com',
      databaseURL: 'https://authentication-1f32d.firebaseio.com',
      projectId: 'authentication-1f32d',
      storageBucket: 'authentication-1f32d.appspot.com',
      messagingSenderId: '495556427390',
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
