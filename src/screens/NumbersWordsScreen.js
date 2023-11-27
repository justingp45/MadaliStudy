import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';

function NumbersWordsScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.regular}>
        <Text style={styles.title}>List of Words:</Text>
        <Text style={styles.title}>isa = one</Text>
        <Text style={styles.title}>dalawa = two</Text>
        <Text style={styles.title}>tatlo = three</Text>
        <Text style={styles.title}>apat = four</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('NumberQuiz')} >
        <Text style={styles.text}>Start Quiz</Text>
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

export default NumbersWordsScreen;