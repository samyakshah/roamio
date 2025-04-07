// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/AppNavigator';

// type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

// const SplashScreen = ({ navigation }: Props) => {
//   useEffect(() => {
//     // Navigate to Home after 2 seconds
//     const timeout = setTimeout(() => {
//       navigation.replace('Home');
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Roamio</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000', // branded background
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: 'bold',
//   },
// });

// export default SplashScreen;
