import 'react-native-url-polyfill/auto';
import { registerRootComponent } from 'expo';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return <AppNavigator />;
}

// This registers the root component for Expo
export default registerRootComponent(App);