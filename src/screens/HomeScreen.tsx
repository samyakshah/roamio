// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'; // Import DrawerNavigationProp

type HomeScreenNavigationProp = DrawerNavigationProp<any>; // Type the navigation prop

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Use the typed navigation prop

  // Example data for the feed
  const feedData = [
    { id: '1', title: 'Paris Vacation', description: 'A week of sightseeing in Paris!' },
    { id: '2', title: 'Bali Beach Resort', description: 'Stay at a beautiful resort in Bali.' },
  ];

  const handleMenuPress = () => {
    // Open Drawer
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Roamio!</Text>
      
      {/* Hamburger Button */}
      <Button title="Menu" onPress={handleMenuPress} />

      {/* Feed list */}
      <FlatList
        data={feedData}
        renderItem={({ item }) => (
          <View style={styles.feedItem}>
            <Text style={styles.feedTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Button title="View Capsule" onPress={() => console.log('View Capsule')} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f4f8' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  feedItem: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  feedTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default HomeScreen;
