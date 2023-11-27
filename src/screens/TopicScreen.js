import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';

function TopicScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.regular}>
        <Text style={styles.title}>Choose a Topic:</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Numbers1_4')} >
        <Text style={styles.text}>Numbers 1-4</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')} >
        <Text style={styles.text}>Go back to Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    ); 
  };

  const styles = StyleSheet.create({
    regular: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22
    },
    button: {
      marginTop: 10,
      alignItems: "center",
      backgroundColor: "#0BB3FC",
      padding: 12
    },
    text: {
      color: "white"
    }
  });
  
export default TopicScreen;