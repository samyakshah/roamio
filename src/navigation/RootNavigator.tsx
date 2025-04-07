// src/navigation/RootNavigator.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();  // Cleanup listener on unmount
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
};

export default RootNavigator;
