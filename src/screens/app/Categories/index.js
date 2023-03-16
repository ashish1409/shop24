import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import ProductCategories from './components/ProductCategories';
import styles from './styles';

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Categories" />
      <ProductCategories />
    </SafeAreaView>
  );
};

export default React.memo(Categories);
