import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Button, View, Text, TouchableOpacity } from 'react-native';
import flag from '../../assets/images/flag.png'

// image from https://www.stockio.com/free-clipart/flag-of-the-philippines

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.regular}>
      <Text style={styles.title}>Welcome to Madali Study!</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/flag.png')}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Topics')} >
        <Text style={styles.textButton}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('About')} >
        <Text style={styles.textButton}>About Me</Text>
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
    fontSize: 22
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
  },
  image: {
    marginTop: 12,
    marginBottom: 10,
    width: 150,
    height: 90,
  }
});

export default HomeScreen;