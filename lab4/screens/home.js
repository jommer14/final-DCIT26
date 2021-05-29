import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
 return (
   <View style={styles.container}>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>
         </View>
          );
          };

          export default Home;

          const styles=StyleSheet.create({
           container: {
             flex: 1 ,
               alignItems:'center',
                 justifyContent: 'center'
                  }
                  });