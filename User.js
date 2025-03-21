import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Dashboard = () => {
  const insights = [
    { id: '1', title: 'Scan new', subtitle: 'Scanned 483', icon: 'scan-outline', color: '#D7D6FC' },
    { id: '2', title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: 'alert-circle-outline', color: '#FEE4C4' },
    { id: '3', title: 'Success', subtitle: 'Checkouts 8', icon: 'checkmark-circle-outline', color: '#D4F7E8' },
    { id: '4', title: 'Directory', subtitle: 'History 26', icon: 'calendar-outline', color: '#C7E6FE' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Xin Chao</Text>
          <Text style={styles.name}>Minh Dat</Text>
        </View>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.color }]}>
            <Icon name={item.icon} size={32} color="#444" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Notifications"
          component={Dashboard}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="notifications-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Scanner"
          component={Dashboard}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="scan-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="History"
          component={Dashboard}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="time-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Cart"
          component={Dashboard}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="cart-outline" size={size} color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 },
  greeting: { fontSize: 20, fontWeight: 'bold' },
  name: { fontSize: 16, color: '#555' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  card: { flex: 1, margin: 10, padding: 20, borderRadius: 10, alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  cardSubtitle: { fontSize: 14, color: '#555' },
});
