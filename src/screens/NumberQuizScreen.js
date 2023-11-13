import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

function NumberQuizScreen ({ navigation }) { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, updateScore] = useState(0);
  const [count, updateCount] = useState(0);
  const [word1, updateWord1] = useState("You got isa correct!");
  const [word2, updateWord2] = useState("You got tatlo correct!");
  const [word3, updateWord3] = useState("You got apat correct!");
  const [word4, updateWord4] = useState("You got dalawa correct!");

  const questions = [
    {
      question: 'What is one in Tagalog?',
      options: ['isa', 'dalawa', 'apat', 'tatlo'],
      correctAnswer: 'isa',
      vocabWord: 'isa',
    },
    {
      question: 'What does tatlo mean?',
      options: ['one', 'two', 'three', 'four'],
      correctAnswer: 'three',
      vocabWord: 'tatlo',
    },
    {
      question: 'What is four in Tagalog?',
      options: ['dalawa', 'apat', 'isa', 'tatlo'],
      correctAnswer: 'apat',
      vocabWord: 'apat',
    },
    {
      question: 'What does dalawa mean?',
      options: ['one', 'two', 'three', 'four'],
      correctAnswer: 'two',
      vocabWord: 'dalawa',
    },
  ];

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    updateCount(count + 1);
    if (isCorrect) {
      updateScore(score + 1);
    }
    if (!isCorrect) {
        if (count == 0){
          updateWord1("You need to study isa!");
        }
        if (count == 1){
          updateWord2("You need to study tatlo!");
        }
        if (count == 2){
          updateWord3("You need to study apat!");
        }
        if (count == 3){
          updateWord4("You need to study dalawa!");
        }
    }
    nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    if (count == questions.length) {
      navigation.navigate('Results', { score, word1, word2, word3, word4 })
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
    </View>
  );
};

export default NumberQuizScreen;