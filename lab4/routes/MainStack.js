import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: 'white',
          width: 250,
        }}
        drawerContentOptions={{
          activeTintColor: 'gray',
          labelStyle: {
            fontFamily: 'courier',
            fontWeight: 'bold',
            fontSize: 20,
          },
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'Home',
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            title: 'About',
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="exclamationcircleo" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
