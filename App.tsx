// src/App.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

export default App;
