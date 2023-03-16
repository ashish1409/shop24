import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, Text, TextInput, View, StyleSheet } from 'react-native';
import styles from './styles';
const apps = [
  {
    id: 1,
    name: 'Mobile & Accessories',
    logo: 'https://k.nooncdn.com/cms/pages/20211110/104ed66fdd4ad303c29be355be6b734d/en_dk_uae-tech-01.png', 
  },
  {
    id: 2,
    name: 'Home & Kitchin',
    logo: 'https://k.nooncdn.com/cms/pages/20190404/6377d905b0cbc2a70ce1512cea5f8686/home-cookware.jpg', 
  },
  {
    id: 3,
    name: 'Grocery',
    logo: 'https://k.nooncdn.com/cms/pages/20211011/691ced2f8a3b10d430dc0b7840de1468/en_mb-nav-08.jpg', 
  },
  {
    id: 4,
    name: 'Beauty & Personal Care',
    logo: 'https://k.nooncdn.com/cms/pages/20200408/d5eee41efc1ad1ff221d855e40e34abb/en_masks-serums.png', 
  },
  {
    id: 5,
    name: 'Fragrance',
    logo: 'https://k.nooncdn.com/cms/pages/20190404/6377d905b0cbc2a70ce1512cea5f8686/fragrance-bestsellers.jpg', 
  },
  {
    id: 6,
    name: 'Mans Fashion',
    logo: 'https://k.nooncdn.com/cms/pages/20220301/42ea8fa2b7b5b4c6e200f19955f291f8/en_dk_uae-nav-Just-For-You-01.png', 
  },
  {
    id: 7,
    name: 'Kids Fashion',
    logo: 'https://k.nooncdn.com/cms/pages/20220301/42ea8fa2b7b5b4c6e200f19955f291f8/en_dk_uae-nav-Just-For-You-03.png', 
  },
  {
    id: 8,
    name: 'Women Fashion',
    logo: 'https://k.nooncdn.com/cms/pages/20220301/42ea8fa2b7b5b4c6e200f19955f291f8/en_dk_uae-nav-Just-For-You-02.png', 
  },
  {
    id: 9,
    name: 'Tvs & Appliances',
    logo: 'https://k.nooncdn.com/cms/pages/20220630/68c7eed6a4625d743bb5191e848c188f/tvaccessories-oled-02.png', 
  },
  {
    id: 10,
    name: 'Baby',
    logo: 'https://k.nooncdn.com/cms/pages/20230201/2d7120091569594b75c5392c7d89968f/en_mb_uae-02.png', 
  },
  {
    id: 11,
    name: 'Toys',
    logo: 'https://k.nooncdn.com/cms/pages/20230201/18f4f2610f38c14920ccae9a72156deb/en_mb_uae-02.png', 
  },
  {
    id: 12,
    name: 'Laptops',
    logo: 'https://k.nooncdn.com/cms/pages/20211110/104ed66fdd4ad303c29be355be6b734d/en_dk_uae-tech-06.png', 
  },
  {
    id: 13,
    name: 'Electonics',
    logo: 'https://k.nooncdn.com/cms/pages/20210519/fc6cac77dfd00eb77598bf54139ab6ec/Xbox-Consoles.png', 
  },
  
  {
    id: 15,
    name: 'Sports',
    logo: 'https://k.nooncdn.com/cms/pages/20201028/d9a8d8bc8592ece7b61b58fad57de2c0/CardioTraining.png', 
  },
  {
    id: 16,
    name: 'Bags & Watch',
    logo: 'https://k.nooncdn.com/cms/pages/20190627/337d574d4e5582d43e190bd75bb0e6b9/sf.png', 
  },
 
  {
    id: 18,
    name: 'Office',
    logo: 'https://k.nooncdn.com/cms/pages/20190404/6377d905b0cbc2a70ce1512cea5f8686/books-desk-accessories.jpg', 
  },
  {
    id: 19,
    name: 'Pet Supplies',
    logo: 'https://k.nooncdn.com/cms/pages/20220303/761e6753933750c490fd136dbc654912/en_mb-nav-11.png', 
  },
  {
    id: 20,
    name: 'Automotive',
    logo: 'https://k.nooncdn.com/cms/pages/20200122/6ee0bba261e32e20fbba58aee5d21ec5/car_cover.png', 
  }
];

export default ProductCategories = () => {
  const data = apps
  const [searchText, setSearchText] = useState('');
  const filteredData = data.filter(item => item.name.includes(searchText)); 

  return (
    <View style={styles.background}>
      <Image
          style={styles.imageBaner}
          source={{ uri: 'https://f.nooncdn.com/mpcms/EN0001/assets/3acfd81a-50e4-46b4-8161-d937720fe77d.gif' }}
        />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchText(text)}
          placeholder="Search apps.."
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredData}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.logo }}
              style={styles.logo}
            />
            <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

