// code for this page mainly used from professor's App-sound.js
import React from 'react';
import { Alert, StyleSheet, SafeAreaView, Image, Button, View, Text, TouchableOpacity } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Sound from 'react-native-sound';

// Enable playback in silence mode
function NumbersAudioScreen ({ navigation }) { 
    Sound.setCategory('Playback');

    const someAudio1 = require('../../assets/audio/isa.wav')
    const someAudio2 = require('../../assets/audio/dalawa.wav')
    const someAudio3 = require('../../assets/audio/tatlo.wav')
    const someAudio4 = require('../../assets/audio/apat.wav')

    const sound1 = new Sound(someAudio1, error => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    });
    // loaded successfully
    if (sound1) {
    console.log(
        'sound1 duration in seconds: ' +
        sound1.getDuration() +
        'number of channels: ' +
        sound1.getNumberOfChannels(),
    );
    } else {
    console.log('sound1 is null');
    }
    const sound2 = new Sound(someAudio2, error => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        });
        // loaded successfully
        if (sound2) {
        console.log(
            'sound2 duration in seconds: ' +
            sound2.getDuration() +
            'number of channels: ' +
            sound2.getNumberOfChannels(),
        );
        } else {
        console.log('sound2 is null');
    }
    const sound3 = new Sound(someAudio3, error => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        });
        // loaded successfully
        if (sound3) {
        console.log(
            'sound3 duration in seconds: ' +
            sound3.getDuration() +
            'number of channels: ' +
            sound3.getNumberOfChannels(),
        );
        } else {
        console.log('sound3 is null');
    }
    const sound4 = new Sound(someAudio4, error => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        });
        // loaded successfully
        if (sound4) {
        console.log(
            'sound4 duration in seconds: ' +
            sound4.getDuration() +
            'number of channels: ' +
            sound4.getNumberOfChannels(),
        );
        } else {
        console.log('sound4 is null');
    }

    return (
        //<SafeAreaProvider>
        <SafeAreaView style={styles.regular}>
            <Text style={styles.title}>Which word would you like to hear?</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => sound1.play()} >
                <Text style={styles.textButton}>Isa</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => sound2.play()} >
                <Text style={styles.textButton}>Dalawa</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => sound3.play()} >
                <Text style={styles.textButton}>Tatlo</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => sound4.play()} >
                <Text style={styles.textButton}>Apat</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Numbers1_4')} >
                <Text style={styles.textButton}>Go back</Text>
            </TouchableOpacity>
        </SafeAreaView>
       // </SafeAreaProvider>
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

export default NumbersAudioScreen;
