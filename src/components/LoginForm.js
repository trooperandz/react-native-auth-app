import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({ text });
  }

  render() {
    const { text } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={text}
            onChangeText={this.onChangeText}
          />
        </CardSection>
        <CardSection/>
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