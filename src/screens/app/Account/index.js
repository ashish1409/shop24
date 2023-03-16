import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Image, TextInput } from 'react-native'
import Header from '../../../components/Header';
import styles from './styles';

const Account = ({navigation}) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Support',
      phone: 'FAQs, Contact Support',
      image: require('../../../assets/Support.png'),
    },
    {
      id: 2,
      name: 'Report an Issue',
      phone: 'Tell us what’s wrong!',
      image: require('../../../assets/report.png'),
    },
    {
      id: 3,
      name: 'Information',
      phone: '333-333-3333',
      image: require('../../../assets/info.png'),
    },
    {
      id: 4,
      name: 'About App',
      phone: 'App version information',
      image: require('../../../assets/about.png'),
    },
    {
      id: 5,
      name: 'Logout',
      phone: 'Refer to ending a session',
      image: require('../../../assets/logout1.png'),
    }
  ])
  const [searchText, setSearchText] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  const handleSearch = text => {
    setSearchText(text)
    const filtered = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredContacts(filtered)
  }
  return (
    <SafeAreaView style={styles.container}>
       <Header title="Account" />
       <View style={styles.container}>
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.phoneText}>{item.phone}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
    </SafeAreaView>
  );
};

export default React.memo(Account);








