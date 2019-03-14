import React from 'React';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { headerText } = props;
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    paddingTop: 30,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export { Header };
