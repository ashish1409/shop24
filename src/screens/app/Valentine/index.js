import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import Header from '../../../components/Header';
import Carousel from '../Home/components/carousel';
import styles from './styles';
export default Valentine = () => {
  const data = [
    {
      id: 1,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/24c751b1-f9f3-4f37-984d-32728e84cf11.png',
    },
    {
      id: 1,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/9fcd938d-0811-430e-ab1c-14091b15670a.png',
    },
    {
      id: 2,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/2f344084-6361-4ffa-aae1-c659e4feb1c1.png',
    },
    {
      id: 3,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/272d8afe-8a01-490e-842a-2f0b34d496be.png',
    },
    {
      id: 4,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/3b229a39-3e9a-45fb-ba75-21657c560ac1.png',
    },
    {
      id: 5,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/71def2e3-af9a-432f-b327-adba6ef5fb84.png',
    },
    {
      id: 6,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/7b1e328e-7938-4aeb-b7d9-6293c177f81d.png',
    },
    {
      id: 8,
      image: 'https://f.nooncdn.com/mpcms/EN0001/assets/9fa1c4e3-9605-48f7-8c3f-457a7268f085.png',
    },
   
  ]

  const [users, setUsers] = useState(data)

  const clickEventListener = () => {
   // Alert.alert('Option selected')
  }

  return (
    <View style={styles.container}>
       <Header title="Categories" />
       <Carousel />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={users}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <>
            <View
              style={styles.card}>
              <View style={styles.cardHeader}>
                <Image
                  style={styles.icon}
                  source={{ uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png' }}
                />
              </View>
              <Image style={styles.userImage} source={{ uri: item.image }} />
            </View>
            </>
          )
        }}
      />
    </View>
  )
}


