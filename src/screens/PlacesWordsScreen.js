import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';

function PlacesWordsScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.regular}>
        <Text style={styles.title}>List of Words:</Text>
        <Text style={styles.title}>Bahay = Home</Text>
        <Text style={styles.title}>Banyo = Restroom</Text>
        <Text style={styles.title}>Paliparan = Airport</Text>
        <Text style={styles.title}>Paradahan = Parking Lot</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PlacesQuiz')} >
        <Text style={styles.textButton}>Start 4?s Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PlacesLongQuiz')} >
        <Text style={styles.textButton}>Start 8?s Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Topics')} >
        <Text style={styles.textButton}>Go back to Topics</Text>
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
    text: {
      fontFamily: 'Futura',
    },
    title: {
      fontFamily: 'Futura',
      fontWeight: 'bold',
      fontSize: 22,
      textAlign: 'center'
    },
    button: {
      marginTop: 10,
      alignItems: "center",
      backgroundColor: "#0BB3FC",
      padding: 12
    },
    textButton: {
      fontFamily: 'Futura',
      color: "white"
    }
  });

export default PlacesWordsScreen;