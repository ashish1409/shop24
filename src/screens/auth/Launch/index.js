import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import styles from './styles';

const Launch = ({navigation}) => {
  return (
<SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Image
            style={styles.image}
            source={require('../../../assets/Launch.jpeg')}
          />

          <View style={styles.footer} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            The best place to buy and sell things in the{' '}
            <Text style={styles.title2}>India</Text>
          </Text>
          <Text style={styles.subtitle}>
            Shop24/12 is now a digital ecosystem of products and services.
          </Text>

          <Button
            onPress={() => navigation.navigate('Signin')}
            type={'lemonYellow'}>
            Log in
          </Button>
          <Button onPress={() => navigation.navigate('Signup')} type={'white'}>
            Get started
          </Button>
        </View>
      </View>
      </SafeAreaView>
  );
};

export default React.memo(Launch);
