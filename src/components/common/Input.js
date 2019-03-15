/**
 * Wrapper for the text input
 */

import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
  },
  labelStyle: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 18,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
};

export { Input };
