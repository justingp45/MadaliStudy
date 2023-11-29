import React, { useState } from 'react';
import { Alert, StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

function PlacesQuizScreen ({ navigation }) { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, updateScore] = useState(0);
  const [count, updateCount] = useState(1);
  const [questionCount, updateQuestionCount] = useState(0);
  const [word1, updateWord1] = useState("You got Bahay correct!");
  const [word2, updateWord2] = useState("You got Banyo correct!");
  const [word3, updateWord3] = useState("You got Paliparan correct!");
  const [word4, updateWord4] = useState("You got Paradahan correct!");

  const alertReturn = () => {
    Alert.alert(
      // title
      'Return to Topics',
      // text
      'Do you want to return to the Topics screen? You will lose your results.',
      [
        {
          text: 'Yes',
          onPress: () => navigation.navigate('Topics')
        },
        {
          text: 'No',
          onPress: () => console.log('No') ,style: 'cancel'
        },
      ],
      {cancelable: false},
    );
  };

  const questions = [
    {
      question: 'What is Parking lot in Tagalog?',
      options: ['Paradahan', 'Bahay', 'Banyo', 'Paliparan'],
      correctAnswer: 'Paradahan',
      vocabWord: 'Paradahan',
    },
    {
      question: 'What does Bahay mean?',
      options: ['Restroom', 'Airport', 'Home', 'Parking lot'],
      correctAnswer: 'Home',
      vocabWord: 'Bahay',
    },
    {
      question: 'What is Restroom in Tagalog?',
      options: ['Paradahan', 'Bahay', 'Banyo', 'Paliparan'],
      correctAnswer: 'Banyo',
      vocabWord: 'Banyo',
    },
    {
      question: 'What does Paliparan mean?',
      options: ['Home', 'Airport', 'Parking lot', 'Restroom'],
      correctAnswer: 'Airport',
      vocabWord: 'Paliparan',
    },
    {
      question: 'Quiz finished!',
      options: ['See results'],
      correctAnswer: 'See results',
      vocabWord: 'n/a',
    },
  ];

  const checkAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    updateCount(count + 1);
    updateQuestionCount(questions.length - 1);
    if (isCorrect) {
      updateScore(score + 1);
    }
    if (!isCorrect) {
        if (count == 1){
          updateWord4("You need to study Paradahan!");
        }
        if (count == 2){
          updateWord1("You need to study Bahay!");
        }
        if (count == 3){
          updateWord2("You need to study Banyo!");
        }
        if (count == 4){
          updateWord3("You need to study Paliparan!");
        }
    }
    nextQuestion = currentQuestion + 1;
  };

  const checkNav = () => {
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    if (count == questions.length) {
      navigation.navigate('Results', { questionCount, score, word1, word2, word3, word4 })
    }
  };

  return (
    <SafeAreaView style={styles.regular}>
      <Text style={styles.title}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity 
        style={styles.button} 
        key={index} 
        title={option} 
        onPress={() => {checkAnswer(option); checkNav(); }} >
        <Text style={styles.textButton}>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity 
        style={styles.returnButton}
        onPress={() => alertReturn()} >
        <Text style={styles.textButton}>Return to Topics</Text>
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
  returnButton: {
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#0BB3FC",
    padding: 12
  },
  textButton: {
    fontFamily: 'Futura',
    color: "white"
  }
});

export default PlacesQuizScreen;