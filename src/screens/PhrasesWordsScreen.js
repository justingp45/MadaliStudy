import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';

function PhrasesWordScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.regular}>
        <Text style={styles.title}>List of Words:</Text>
        <Text style={styles.title}>Kamusta ka? = How are you?</Text>
        <Text style={styles.title}>Salamat = Thank you</Text>
        <Text style={styles.title}>oo = yes</Text>
        <Text style={styles.title}>hindi = no</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PhrasesQuiz')} >
        <Text style={styles.text}>Start 4?s Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PhrasesLongQuiz')} >
        <Text style={styles.text}>Start 8?s Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Topics')} >
        <Text style={styles.text}>Go back to Topics</Text>
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

export default PhrasesWordScreen;