import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onChangeEmail(email) {
    this.setState({ email });
  }

  onChangePassword(password) {
    this.setState({ password });
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      isLoading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  renderButton() {
    const { isLoading } = this.state;

    if (isLoading) return <Spinner size='small' />

    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );
  }

  onLoginSuccess() {
    this.setState({
      isLoading: false,
      email: '',
      password: '',
      error: '',
    });
  }

  onLoginFail() {
    this.setState({
      isLoading: false,
      error: 'Authentication Failed',
    });
  }

  render() {
    const { email, password, error } = this.state;
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={email}
            placeholder='user@gmail.com'
            onChangeText={this.onChangeEmail}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            value={password}
            placeholder='password'
            secureTextEntry
            onChangeText={this.onChangePassword}
          />
        </CardSection>
        <Text style={errorTextStyle}>
          {error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'red',
  },
};

export default LoginForm;