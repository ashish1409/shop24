import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image, Pressable, Alert, BackHandler} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Header = ({title}) => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go Logout?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const handleBack = () => {
    if (title === 'Home') {
      Alert.alert('Hold on!', 'Are you sure you want to go Logout?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => logout()},
      ]);
      return true;
    } else {
      navigation.goBack();
    }
  };
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleBack}>
        <Image style={styles.icon} source={require('../../assets/back.png')} />
      </Pressable>
      {/* <Text style={styles.title}>{title}</Text> */}
      <Image 
          style={styles.logo}
          source={require('../../assets/noon-logo-dark.png')}
        />
      <Pressable onPress={logout}>
        <Image
          style={styles.icon}
          source={require('../../assets/logout.png')}
        />
      </Pressable>
    </View>
  );
};

export default React.memo(Header);
