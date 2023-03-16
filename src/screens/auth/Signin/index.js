import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert, SafeAreaView, Text,TextInput,Image, ImageBackground} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import styles from './styles';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.email) {
      Alert.alert('Please enter Email Id');
      return;
    }
    if (!values.password ) {
      Alert.alert('Please enter Passwords ');
      return;
    }
  auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(() => {
      console.log('User signed in!');
    })
    .catch(error => {
      console.log(error.code)
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
        Alert.alert("User record not found");
      }
    });
    
   
  
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.customInput}
        onChangeText={val => onChange(val, 'email')}
      />
      <TextInput
        placeholder="Password"
        style={styles.customInput}
        secureTextEntry
        onChangeText={val => onChange(val, 'password')}
      />

      <Button onPress={onSubmit}  type="lemonYellow">Login</Button>

      <Text style={styles.footerText}>
        Not Registered?
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.footerLink}>
          {' '}
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signin);