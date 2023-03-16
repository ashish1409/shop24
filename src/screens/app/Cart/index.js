import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet, Pressable } from 'react-native'
import colors from '../../../constants/colors';
import Header from '../../../components/Header';
import styles from './styles';
const items = [
  { id: 1, name: 'Outdoor', price: '$300', quantity: 1, image: 'https://f.nooncdn.com/mpcms/EN0001/assets/beb47591-c201-44f8-9a6f-8737ce23899e.png' },
  { id: 2, name: 'Bean bage', price: '$120', quantity: 1, image: 'https://f.nooncdn.com/mpcms/EN0001/assets/5071dfed-3310-498d-a952-2a73ff70277d.png' },
  { id: 3, name: 'Sun glasses', price: '$80', quantity: 1, image: 'https://f.nooncdn.com/mpcms/EN0001/assets/67946183-6f76-4e48-b6ef-52918050e052.png' },
]

const Cart = () => {
  const [cartItems, setCartItems] = useState(items)

  const removeItem = item => {
    setCartItems(cartItems.filter(i => i !== item))
  }

  const increaseQuantity = item => {
    const newCartItems = cartItems.map(i => {
      if (i === item) {
        return { ...i, quantity: i.quantity + 1 }
      }
      return i
    })
    setCartItems(newCartItems)
  }

  const decreaseQuantity = item => {
    const newCartItems = cartItems.map(i => {
      if (i === item && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 }
      }
      return i
    })
    setCartItems(newCartItems)
  }

  return (
    <View style={styles.container}>
       <Header title="Categories" />
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Button color={colors.darkBlue} title="-" onPress={() => decreaseQuantity(item)} />
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Button color={colors.darkBlue}  title="+" onPress={() => increaseQuantity(item)} />
          </View>
          <View style={styles.removeButton}>
            <Button  color={colors.darkBlue}  title="Remove" onPress={() => removeItem(item)} />
          </View>
        </View>
      ))}
      <View  style={styles.ButtonCustom}>
        <Pressable>
           <Text style={styles.ButtonCustomText}>Checkout</Text>
        </Pressable>
      </View>
    
    </View>
  )
}



export default Cart
