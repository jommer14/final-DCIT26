import React ,{useState, useEffect} from 'react';
import {View, StyleSheet,Text, ScrollView,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/home';



const Profile = ({ route }) => {
  
  const data = route.params;

  return (
     <View style={styles.container}>
      <Text style={styles.content}>
        <Image source={{ uri: data.picture.medium }} style={styles.image} />
        <Text style={styles.text}>
          {'\n'}
          {data.name.first} {data.name.last}
          {'\n'}
          {'\n'}
        </Text></Text>

        <Text style={styles.info}>
          <Text style={styles.textTitle}>
            <AntDesign name="profile" size={24} color="Black" />
            About{'\n'}
          </Text>
          Gender: {data.gender}
          {'\n'}
          Age: {data.dob.age}
          {'\n'}
          Birthday: {data.dob.date}
          {'\n'}
          Address: {data.location.city}, {data.location.state}{'\n'}
          {'\n'}
          <Text style={styles.textTitle}>
            <AntDesign name="phone" size={24} color="Black" />
            Contact{'\n'}
          </Text>
          Email: {data.email}
          {'\n'}
          Phone: {data.phone}
          {'\n'}
          Cell: {data.cell}
          {'\n'}
          Username: {data.login.username}
          {'\n'}
          <Text style={styles.textTitle}>
            <AntDesign name="exclamationcircleo" size={24} color="Black" />
            Others{'\n'}
          </Text>
          Date Registered: {data.registered.date}
          {'\n'}
        </Text>
      }
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'justify',
    justifyContent: 'justify',
    backgroundColor: '#f5e4b8',
  },
  content: {
    fontFamily: 'courier',
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20,
  },
  image: {
    height: 200,
    width: 250,
    opacity: 2,
    textAlign: 'center',
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'courier',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  info: {
    fontFamily: 'courier',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: '5%',
  },
  textTitle: {
    fontFamily: 'courier',
    color: 'black',
    fontSize: 30,
    
  },
});