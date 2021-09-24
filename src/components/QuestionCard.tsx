import React from 'react';
import DOMPurify from 'dompurify';
import { AnswerObject } from '../App';

//styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

function cleanData(userInput: string) {
    return DOMPurify.sanitize(userInput);
  }

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;    
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    <>
        <Wrapper>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            {/* <p>{cleanData(question)}</p> */}
            {/* {DOMPurify.sanitize('<p dangerouslySetInnerHTML={{__html: question }} />')} */}
            <p dangerouslySetInnerHTML={{__html: cleanData(question) }} />
            {/* <p>{question}</p> */}
            {/* <p>{cleanData({dangerouslySetInnerHTML={__html: question }})}</p> */}
            {/* <p dangerouslySetInnerHTML={__html: question }>szdfv</p> */}

            {/* <p dangerouslySetInnerHTML={{__html: cleanData(question) }} /> */}
            
            <div>
                {answers.map(answer => (
                    <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            {/* {DOMPurify.sanitize('<span dangerouslySetInnerHTML={{ __html: answer }} />')} */}
                            <span dangerouslySetInnerHTML={{ __html: cleanData(answer) }} />
                            {/* {cleanData(answer)} */}
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    </>
);

export default QuestionCard;