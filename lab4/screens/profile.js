import React from 'react';
import {View, 
Button, 
StyleSheet, 
ScrollView,
Text, 
Image} from 'react-native';

const Profile = ({navigation}) => {
 return (
  <ScrollView>
      <View style={styles.container}>
      <Text style={styles.Header}>CREATORS</Text>
      <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT199kCgmRqpBqqNmZu28TGYkZLdqn1Fo3AtA&usqp=CAU'}} />
        <Text style={styles.text}>GABO {'\n'}
</Text>
        <Text style={styles.cont}>
        Name:Gabriel Valix Vicedo {'\n'}
          Age: 21 {'\n'}
Birthday: November 7 , 1999 {'\n'}
Course/Section: BSCS 3-4 {'\n'}
Motto:  Don't Stress Yourself To Much. Rest!!!   
        </Text>
        <Image style={styles.image} source={require('../assets/Met.jpg')} />
        <Text style={styles.text}>MITYUGAS{'\n'}
</Text>
        <Text style={styles.cont}>
        Name:Metthew Octoman {'\n'}
          Age: 21 {'\n'}
Birthday: November 7 , 1999 {'\n'}
Course/Section: BSCS 3-4 {'\n'}
Motto: Time is Au 
        </Text>
        <Image style={styles.image} source={require('../assets/Jm.jpg')} />
        <Text style={styles.text}>JM {'\n'}
</Text>
        <Text style={styles.cont}>
        Name:Jommer Ramos {'\n'}
          Age: 21 {'\n'}
Birthday: March 14 , 2000 {'\n'}
Course/Section: BSCS 3-4 {'\n'}
Motto: Mindset Is Power  
        </Text>
    <View style={styles.container}>
    <Text>
     {'\n'}
    </Text>
       <Button title="Go Back Home" onPress={() => navigation.goBack()}/>
          </View>
         </View>
         </ScrollView>
          );
          };

          export default Profile;

          const styles=StyleSheet.create({
           container: {
             flex: 1 ,
               alignItems:'center',
                 justifyContent: 'center'
                  },
                  image: {
    height: 200,
    width: 200,
    opacity: 2,
    alignContent: 'center',
    padding: 20,
    marginVertical: 20,
    borderRadius: 100,
  },
  text: {
    fontFamily: 'courier',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cont: {
    fontFamily: 'courier',
    color: 'black',
    textAlign: 'justify',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 22,
  },
  Header: {
    fontSize: 65,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'courier',
    fontWeight: 'bold'
  },
});