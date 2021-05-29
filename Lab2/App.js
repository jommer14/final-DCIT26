import React, {useState} from 'react';
import{
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native';

export default function App() {
 const[enterText,setEnterText] = useState('');
 const [userInput, setUserInput] = useState([]);
 
 const goalInputHandler = (enteredText) => {
  setEnterText(enteredText);
 };
 const addGoalHandler = () => {
   setUserInput(currentInput => [...currentInput, enterText]);
  setEnterText('');
  };
  return (
   <ScrollView>
    <View style={styles.mon}>
     <View style={styles.container}>
      <TextInput 
     placeholder="Enter user Input" style={styles.holder} 
     onChangeText={goalInputHandler}
     value={enterText}
     />
      <Button title="ADD" onPress={addGoalHandler} />
     </View>
     <View>
        {userInput.map((input) => (
           <View style={styles.listItem}>
           <Text key={input}>{input}</Text>
           </View>
        ))}
       </View>
    </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
 mon: {
  padding: 50
 },
 container: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center'
 },
 holder: {
  width: '80%',
  borderColor: 'black', 
  borderWidth: 1
 },
 listItem: {
  backgroundColor: 'gray', 
  padding: 10,
  marginTop: 5,
  borderColor: 'black',
  borderWidth: 1
 }
});
