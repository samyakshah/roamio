// src/screens/LogoutScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Typing the navigation prop
type LogoutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LogoutScreen = () => {
  const navigation = useNavigation<LogoutScreenNavigationProp>();  // Use the typed navigation prop

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        signOut(auth);
        navigation.navigate('Login'); // Navigate back to Login screen
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to log out?</Text>
      <Button title="Yes, Log Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default LogoutScreen;
