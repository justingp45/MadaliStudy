import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Game')}
      />
      <Button
        title="Options"
        onPress={() => navigation.navigate('Options')}
      />
    </View>
  );
}

function OptionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Options</Text>
      <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function NumbersWordsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List of Words:</Text>
      <Text>isa = one</Text>
      <Text>dalawa = two</Text>
      <Text>tatlo = three</Text>
      <Text>apat = four</Text>
      <Button title="Go back to Topics" onPress={() => navigation.navigate('Game')} />
    </View>
  ); 
}

function GameScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Choose a Topic:</Text>
      <Button title="Numbers 1-4" onPress={() => navigation.navigate('Numbers1_4')} />
      <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  ); 
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Numbers1_4" component={NumbersWordsScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;