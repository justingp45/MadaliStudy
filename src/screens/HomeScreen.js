import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.regular}>
      <Text>Welcome to Madali Study!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Topics')} >
        <Text style={styles.text}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Options')} >
        <Text style={styles.text}>Options</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('About')} >
        <Text style={styles.text}>About Me</Text>
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

export default HomeScreen;