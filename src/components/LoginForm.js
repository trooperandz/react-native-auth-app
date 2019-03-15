import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail(email) {
    this.setState({ email });
  }

  onChangePassword(password) {
    this.setState({ password });
  }

  render() {
    const { email, password } = this.state;

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
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;