import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text} from 'react-native';
import Home from '../screens/app/Home';
import Categories from '../screens/app/Categories';
import Valentine from '../screens/app/Valentine';
import Account from '../screens/app/Account';
import Cart from '../screens/app/Cart';
// import { categories } from '../constants/categories';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/HomeActive.png')
                : require('../assets/HomeInactive.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Categories"
      component={Categories}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/categoriesActive.png')
                : require('../assets/categoriesInactive.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Valentine"
      component={Valentine}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/GiftActive.png')
                : require('../assets/GiftInactive.png')
            }
          />
        ),
      }}
    />
     <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/AccountActive.png')
                : require('../assets/AccountInactive.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../assets/BagActive.png')
                : require('../assets/BagInactive.png')
            }
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    link: {
        color: "#ff0000",
        fontWeight: '500',
        fontSize: 13,
        margin: 8,
        marginHorizontal: 16,
      },
  });
  

export default React.memo(TabNavigation);