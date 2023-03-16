import React from 'react';
import {SafeAreaView, ScrollView, Pressable, Image, Alert} from 'react-native';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import styles from './styles';
import Carousel from './components/carousel';
import ProductList from './components/productList';
ProductList
const Home = ({navigation}) => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
         <Carousel />
         <ProductList />
    </SafeAreaView>
  );
};

export default React.memo(Home);
