import React, {useState , useEffect} from 'react';
import {View, Button, StyleSheet, ActivityIndicator,Image,TouchableOpacity, Text} from 'react-native';
import Profile from '../screens/profile';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#d9b4b4" />
      ) : (
        
        <Text style={styles.content}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image
              source={{ uri: data.picture.large }}
              style={styles.image}
            />
          </TouchableOpacity>
          {'\n'}
          {data.name.first} {data.name.last}
          {'\n'}
          {'\n'}
          <TouchableOpacity style={styles.button} onPress={fetchRandomData}>
            <Text style={styles.text}> Random User </Text>
          </TouchableOpacity>
        </Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5e4b8',
  },
  content: {
    fontFamily: 'courier',
    color: 'black',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 250,
    opacity: 2,
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#b8cbf5',
    padding: 10,
    borderRadius: 20,
  },
});