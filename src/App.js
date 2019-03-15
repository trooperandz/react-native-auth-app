
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: null,
    };

    this.onLogOut = this.onLogOut.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB-TNfzkOAJ9SDgOYsStH53DTKKrSxhiDU',
      authDomain: 'authentication-1f32d.firebaseapp.com',
      databaseURL: 'https://authentication-1f32d.firebaseio.com',
      projectId: 'authentication-1f32d',
      storageBucket: 'authentication-1f32d.appspot.com',
      messagingSenderId: '495556427390',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  onLogOut() {
    firebase.auth().signOut();
  }

  renderContent() {
    const { isLoggedIn } = this.state;
    const { buttonViewStyle } = styles;

    switch (isLoggedIn) {
      case true:
        return (
          <View style={buttonViewStyle}>
            <Button onPress={this.onLogOut}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    const { appViewStyle } = styles;

    return (
      <View style={appViewStyle}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  appViewStyle: {
    flex: 1,
  },
  buttonViewStyle: {
    height: 44,
  },
};

export default App;
