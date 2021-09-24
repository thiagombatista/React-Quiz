import React, { useState } from 'react';
import { QuestionState, fetchQuizQuestions } from './api';

//Components
import QuestionCard from './components/QuestionCard';

//Types
import { Difficulty } from './api';

//Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia  = () => {    

    const loadQuestions = async () => {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );

      setQuestions(newQuestions);

    };

    loadQuestions();

    setLoading(true);
    setGameOver(false);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  };

  // console.log('questions', questions);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //users answer
      const answer = e.currentTarget.value;
      //check answer against the correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //save answer in the array for user answers
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    //move on to the next question if is not the last
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
          <h1>REACT QUIZ</h1>

          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
            Start
            </button>
            )
            : null
          }

          {!gameOver ? <p className="score">Score: {score}</p> : null}

          {loading && <p>Loading Questions ...</p>}
          
          {!loading && !gameOver && questions.length !== 0 ? (<QuestionCard questionNr={number + 1 } totalQuestions={TOTAL_QUESTIONS} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}/>) : null}
          {/* {!loading && !gameOver && (<QuestionCard questionNr={number + 1 } totalQuestions={TOTAL_QUESTIONS} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}/>)} */}
          {/* <QuestionCard questionNr={number + 1 } totalQuestions={TOTAL_QUESTIONS} question="{questions[number].question}" answers={["{questions[number].answers}", "sadf"]} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}/> */}
          {/* <p>{!gameOver ? questions[0].answers : null}</p> */}
          {/* {questions.length !== 0 ? console.log('questions', questions) : null} */}
          {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}> Next Question </button>
          ) : null}
      </Wrapper>
    </>
  );
}

export default App;
