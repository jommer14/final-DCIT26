import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import { Button } from 'react-native';
import About from '../screens/about';

const Stack = createStackNavigator();
const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerRight: () => (
            <AntDesign
              onPress={() => navigation.goBack()}
              name="exclamationcircleo"
              size={40}
              color="black"
            />
          ),
          title: 'About',
          headerStyle: {
            backgroundColor: '#d9b4b4',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'courier',
            fontSize: 24,
            fontWeight: 'bold'
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
