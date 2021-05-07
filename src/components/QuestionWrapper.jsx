import React, {useContext} from 'react';
import styled from "styled-components";
import {AnswerText, Text, Title} from "../shared/Text";
import {ProgressContext} from "../context/ProgressContext";
import {HeaderContainer} from "./Header";
import {NextButton} from "../shared/NextButton";
import {getAnswerById} from "../utils/getAnswerById";
import {questions} from "../questions.config";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";


const RootWrapper = styled.div`
        display: grid;
        grid-template-rows: auto minmax(510px, 72.1184vh) auto;
        @media screen and (max-height: 550px){
           grid-template-rows: auto fit-content(65vh) auto;
        }
        @media screen and (min-width: 1100px){
           grid-template-rows: auto 70vh auto;
        }
`

const Wrapper = styled.div`
    padding: 2.8913vh 3.6231vw;
    white-space: pre-wrap;
    grid-row: 2/3;
    @media screen and (min-width: 640px){
          white-space: normal;
          max-width: 640px;
    }
    @media screen and (min-width: 1100px){
      padding: 8.4444vh 6.5972vw;
      max-width: 1127px;
    }
`
const Question = styled(Title)`
    max-width: 800px;
`

const AnswerWrapper = styled.div`
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 14px;
    cursor: pointer;
    padding: 1.478495vh 4vw 1.478495vh 6.280193vw;
    margin-top: 1.6129vh;
    @media screen and (min-width: 1100px){
      padding: 22px 70px 22px 24px;
      margin-top: 2vh;
    }
`
const ActiveAnswerWrapper = styled(AnswerWrapper)`
   border-color: #ffffff;
   background: #ffffff;
   color: #000;
`

const ButtonWrapper = styled.div`
    display: flex;
    padding:  0 3.6231vw 5px;
    grid-row: 3/4;
`

const QuestionWrapper = (props) => {
    const {question} = props;
    const {sex, setNext, points, setPoints, setAnswer, answers} = useContext(ProgressContext);

    const onAnswerChoose = (id) => {
        setAnswer(question.id,id);
        setTimeout(()=>{
            if (getAnswerById(question.id,id).isCorrect) setPoints(prev=> prev + 1);
            setNext();
           if(+question.id === questions.length){
                reachMetrikaGoal('finish');
           }
        }, 1000)
    }

    const onSkip = () => {
        if(+question.id === questions.length){
            reachMetrikaGoal('finish');
        }
        setNext();
    }

    return <RootWrapper>
        <HeaderContainer points={points}/>
        <Wrapper>
            <Question>{question.question}</Question>
            {question.text ? <Text>{question.text[sex]}</Text> : <br/>}
            <div>
                {question.answers.map(answer=>answers[question.id] === answer.id ?
                    <ActiveAnswerWrapper key={answer.id+question.id}>
                        <AnswerText>
                            {answer.text[sex]}
                        </AnswerText>
                    </ActiveAnswerWrapper>
                    : <AnswerWrapper  key={answer.id} onClick={()=>onAnswerChoose(answer.id)}>
                        <AnswerText>
                            {answer.text[sex]}
                        </AnswerText>
                </AnswerWrapper>)}
            </div>
        </Wrapper>

        <ButtonWrapper>
            <NextButton onClick={onSkip}/>
        </ButtonWrapper>
    </RootWrapper>
}

export default QuestionWrapper;