import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckoutScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="chevron-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Checkout 🏦</Text>
      <Text style={styles.amount}>918$</Text>

      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={[styles.paymentButton, selectedPayment === 'credit' && styles.selectedPayment]}
          onPress={() => setSelectedPayment('credit')}
        >
          <Icon name="card-outline" size={20} color="#fff" />
          <Text style={styles.paymentText}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentButton, selectedPayment === 'apple' && styles.applePayment]}
          onPress={() => setSelectedPayment('apple')}
        >
          <Icon name="logo-apple" size={20} color="#000" />
          <Text style={[styles.paymentText, { color: '#000' }]}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Card number</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="7997 7997 7997 7997" keyboardType="numeric" />
        <Image source={{ uri: 'https://via.placeholder.com/24' }} style={styles.cardIcon} />
      </View>

      <Text style={styles.label}>Cardholder name</Text>
      <TextInput style={styles.input} placeholder="Christie Doe" />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput style={styles.input} placeholder="09 / 2021" keyboardType="numeric" />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput style={styles.input} placeholder="915" keyboardType="numeric" secureTextEntry />
        </View>
      </View>
      
      <Text style={styles.infoText}>We will send you an order details to your email after the successful payment</Text>

      <TouchableOpacity style={styles.payButton}>
        <Icon name="lock-closed-outline" size={20} color="#fff" />
        <Text style={styles.payButtonText}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  backButton: { position: 'absolute', top: 10, left: 10, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  amount: { fontSize: 24, fontWeight: 'bold', color: '#28a745' },
  taxText: { fontSize: 14, color: '#999', marginBottom: 20 },
  paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  paymentButton: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 10, backgroundColor: '#4CAF50', flex: 1, justifyContent: 'center', marginRight: 10 },
  selectedPayment: { backgroundColor: '#28a745' },
  applePayment: { backgroundColor: '#E5E5E5' },
  paymentText: { color: '#fff', marginLeft: 10, fontWeight: 'bold' },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', padding: 10, borderRadius: 10 },
  input: { flex: 1, padding: 10, fontSize: 16, backgroundColor: '#F8F8F8', borderRadius: 10, marginTop: 5 },
  cardIcon: { width: 24, height: 24, marginLeft: 10 },
  row: { flexDirection: 'row', marginTop: 10 },
  infoText: { fontSize: 12, color: '#999', marginTop: 10, textAlign: 'center' },
  payButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#28a745', padding: 15, borderRadius: 10, marginTop: 20 },
  payButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10 }
});
