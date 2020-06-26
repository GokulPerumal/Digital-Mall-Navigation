import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  const[name,setname]=useState=["Gokul"]
  const[age,setage]=useState=["19"]
};
  return (
    <View style={styles.container} >
      <Text>name:{name},age:{age}</Text>
      </View>
    
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight:800,
    backgroundColor: "orange",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
