import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = () => {
  const [cart, setCart] = useState([
    { id: '1', name: 'Puma Pink', brand: "Shoes", price: 200, quantity: 2, image: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Sport shirt', brand: "T-shirt", price: 120, quantity: 2, image: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Sport pants', brand: "Pants", price: 139, quantity: 2, image: 'https://via.placeholder.com/50' },
  ]);

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="chevron-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Shopping</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>₹ {totalAmount.toLocaleString()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
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
          component={CartScreen}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Notifications"
          component={CartScreen}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="notifications-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Scanner"
          component={CartScreen}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="scan-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="History"
          component={CartScreen}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="time-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="cart-outline" size={size} color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 40 },
  backButton: { position: 'absolute', top: 10, left: 10, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  cartItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', padding: 10, borderRadius: 10, marginBottom: 10 },
  itemImage: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
  itemDetails: { flex: 1 },
  brand: { fontSize: 12, color: '#888' },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#E57C23', fontWeight: 'bold' },
  quantityControl: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: { fontSize: 20, fontWeight: 'bold', paddingHorizontal: 10 },
  quantityText: { fontSize: 16, marginHorizontal: 10 },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalAmount: { fontSize: 18, fontWeight: 'bold', color: '#E57C23' },
  checkoutButton: { backgroundColor: '#E57C23', padding: 15, borderRadius: 10, alignItems: 'center' },
  checkoutText: { fontSize: 16, fontWeight: 'bold', color: '#fff' }
});
