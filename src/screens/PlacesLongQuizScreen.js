import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

function PlacesLongQuizScreen ({ navigation }) { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, updateScore] = useState(0);
  const [count, updateCount] = useState(0);
  const [questionCount, updateQuestionCount] = useState(0);
  const [word1, updateWord1] = useState("You got Bahay correct!");
  const [word2, updateWord2] = useState("You got Banyo correct!");
  const [word3, updateWord3] = useState("You got Paliparan correct!");
  const [word4, updateWord4] = useState("You got Paradahan correct!");

  const questions = [
    {
      question: 'What does Paradahan mean?',
      options: ['Parking lot', 'Home', 'Airport', 'Bathroom'],
      correctAnswer: 'Parking lot',
      vocabWord: 'Paradahan',
    },
    {
      question: 'What is Bathroom in Tagalog?',
      options: ['Paliparan', 'Paradahan', 'Banyo', 'Bahay'],
      correctAnswer: 'Banyo',
      vocabWord: 'Banyo',
    },
    {
      question: 'What is Parking lot in Tagalog?',
      options: ['Banyo', 'Paradahan', 'Paliparan', 'Bahay'],
      correctAnswer: 'Paradahan',
      vocabWord: 'Paradahan',
    },
    {
      question: 'What does Paliparan mean?',
      options: ['Bathroom', 'Parking lot', 'Airport', 'Home'],
      correctAnswer: 'Airport',
      vocabWord: 'Paliparan',
    },
    {
      question: 'What is Airport in Tagalog?',
      options: ['Paliparan', 'Banyo', 'Paradahan', 'Bahay'],
      correctAnswer: 'Paliparan',
      vocabWord: 'Paliparan',
    },
    {
      question: 'What is Home in Tagalog?',
      options: ['Bahay', 'Banyo', 'Paliparan', 'Paradahan'],
      correctAnswer: 'Bahay',
      vocabWord: 'Bahay',
    },
    {
      question: 'What does Banyo mean?',
      options: ['Paradahan', 'Paliparan', 'Home', 'Bathroom'],
      correctAnswer: 'Bathroom',
      vocabWord: 'Banyo',
    },
    {
      question: 'What does Bahay mean?',
      options: ['Parking lot', 'Home', 'Bathroom', 'Airport'],
      correctAnswer: 'Home',
      vocabWord: 'Bahay',
    },
  ];

  const checkAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    updateCount(count + 1);
    updateQuestionCount(questions.length);
    if (isCorrect) {
      updateScore(score + 1);
    }
    if (!isCorrect) {
        if (count == 0){
          updateWord4("You need to study Paradahan!");
        }
        if (count == 1){
          updateWord2("You need to study Banyo!");
        }
        if (count == 2){
          updateWord4("You need to study Paradahan!");
        }
        if (count == 3){
          updateWord3("You need to study Paliparan!");
        }
        if (count == 4){
          updateWord3("You need to study Paliparan!");
        }
        if (count == 5){
          updateWord1("You need to study Bahay!");
        }
        if (count == 6){
          updateWord2("You need to study Banyo!");
        }
        if (count == 7){
          updateWord1("You need to study Bahay!");
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

export default PlacesLongQuizScreen;