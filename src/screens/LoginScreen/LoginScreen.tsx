import React from 'react';
import { View } from 'react-native';
import LoginInput from '../../components/Login/LoginInput';

function LoginScreen(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <LoginInput />
    </View>
  );
}

export default LoginScreen;
