import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {StyleSheet, Text} from 'react-native';
import Launch from './screens/auth/Launch';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import TabNavigation from './navigation/TabNavigation';
import { SafeAreaView, StatusBar } from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (user) {
    return (
      <>
        <TabNavigation />
      </>
    );
  }

  return (
    <SafeAreaView style={{flex:1}}>
     
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Launch" component={Launch} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  link: {
    color: '#ff0000',
    fontWeight: '500',
    fontSize: 13,
    margin: 8,
    marginHorizontal: 16,
  },
});

export default React.memo(Routes);
