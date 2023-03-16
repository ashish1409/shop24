import React from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import styles from './styles';
const productData = [
  {
    id: 1,
    name:  `Kid's`,
    image: 'https://k.nooncdn.com/cms/pages/20220301/42ea8fa2b7b5b4c6e200f19955f291f8/en_dk_uae-nav-Just-For-You-03.png',
  },
  {
    id: 2,
    name: `Women's`,
    image: 'https://k.nooncdn.com/cms/pages/20220301/42ea8fa2b7b5b4c6e200f19955f291f8/en_dk_uae-nav-Just-For-You-02.png',
  },
  {
    id: 3,
    name: `Man's`,
    image: 'https://k.nooncdn.com/cms/pages/20220301/42ea8fa2b7b5b4c6e200f19955f291f8/en_dk_uae-nav-Just-For-You-01.png',
  },
  {
    id: 4,
    name: 'Mobiles',
    image: 'https://k.nooncdn.com/cms/pages/20211110/104ed66fdd4ad303c29be355be6b734d/en_dk_uae-tech-01.png',
  },
  {
    id: 5,
    name: 'Skin Care',
    image: 'https://k.nooncdn.com/cms/pages/20210221/adc5287fbbe25dec08ae04c35f1e0897/en_skincare.png',
  },
  {
    id: 6,
    name: 'Fragrance',
    image: 'https://k.nooncdn.com/cms/pages/20190404/6377d905b0cbc2a70ce1512cea5f8686/fragrance-bestsellers.jpg',
  },
  {
    id: 7,
    name: 'Laptop',
    image: 'https://k.nooncdn.com/cms/pages/20211110/104ed66fdd4ad303c29be355be6b734d/en_dk_uae-tech-06.png',
  },
  {
    id: 8,
    name: 'Game',
    image: 'https://k.nooncdn.com/cms/pages/20230126/a597aa9e417d136decba8a2a3f0e8fcb/en_uae-mb-nav-game cards.png',
  },
  {
    id: 9,
    name: 'Grocery',
    image: 'https://k.nooncdn.com/cms/pages/20190404/6377d905b0cbc2a70ce1512cea5f8686/grocery-soft-drinks.jpg',
  },
]

const ProdLists = () => {
  return (
    <View style={styles.prodList}>
      <Text style={styles.prodListText}>Products List</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productData.map(prodItem => (
          <View style={styles.prodContainer} key={prodItem.id}>
            <Image style={styles.prodImage} source={{ uri: prodItem.image }} />
            <Text style={styles.prodName}>{prodItem.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const ProductList = () => {
  const data = [
    {
      id: '1',
      image: 'https://k.nooncdn.com/cms/pages/20230206/5da4aed9c9795ff205fca3d0b9c5abd1/en_uae_mb-nav-01-smallapp.png',
      title: 'Air Fryers',
      subtitle: 'kitchin'
    },
    {
      id: '2',
      image: 'https://k.nooncdn.com/cms/pages/20230206/5da4aed9c9795ff205fca3d0b9c5abd1/en_uae_mb-nav-02-smallapp.png',
      title: 'Coffee Makers',
      subtitle: 'Natural '
    },
    {
      id: '3',
      image: 'https://k.nooncdn.com/cms/pages/20230206/5da4aed9c9795ff205fca3d0b9c5abd1/en_uae_mb-nav-01-largeapp.png',
      title: 'Washing Machines',
      subtitle: 'Wash!'
    },
    {
      id: '4',
      image: 'https://k.nooncdn.com/cms/pages/20190404/6377d905b0cbc2a70ce1512cea5f8686/home-aed-150-199.jpg',
      title: 'AED 150 - 199',
      subtitle: 'Beautiful'
    },
    {
      id: '5',
      image: 'https://k.nooncdn.com/cms/pages/20220630/68c7eed6a4625d743bb5191e848c188f/tvaccessories-oled-02.png',
      title: 'OLED',
      subtitle: 'Crazy Concert!'
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <ProdLists />
      <FlatList
      data={data}
      
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
    </View>
  )
}



export default ProductList
