import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons';

import Home from "../screens/home";
import Profile from "../screens/profile";

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
 return(
  <Stack.Navigator>
   <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <AntDesign
              onPress={() => navigation.toggleDrawer()}
              name="menu-fold"
              size={24}
              color="black"
            />
          ),
          title: 'Home',
          headerStyle: {
            backgroundColor: '#d9b4b4',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'courier',
            fontSize: 30,
            fontWeight: 'bold'
          },
        }}
      />
            
   <Stack.Screen name="Profile" component={Profile}/>
  </Stack.Navigator>
  
                );
                };

                export default HomeStack;