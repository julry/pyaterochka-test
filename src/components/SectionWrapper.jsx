import React, {useContext} from 'react';
import styled from "styled-components";
import {Text, Title} from "../shared/Text";
import {ProgressContext} from "../context/ProgressContext";
import {HeaderContainer} from "./Header";
import {NextButton} from "../shared/NextButton";


const RootWrapper = styled.div`
        display: grid;
        grid-template-rows: auto minmax(510px, 72.1184vh) auto;
        @media screen and (max-height: 550px){
           grid-template-rows: auto minmax(300px, 65.4139vh) auto;
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
        padding: 6.6641vh 9.7656vw;
    }
    
     @media screen and (min-width: 1100px){ 
       padding: 21.6666vh 9.7656vw;
       max-width: 62.5vw;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    padding:  0 3.6231vw 5px;
    grid-row: 3/4;
     @media screen and (min-width: 640px){
        padding: 0 6.25vw 15px;
        width: 100vw;
    }
    @media screen and (min-width: 1100px){
        padding-bottom: 0;
    }
`

const SectionWrapper = (props) => {
    const {section} = props;
    const {sex, setNext, points} = useContext(ProgressContext);

    return <RootWrapper>
        <HeaderContainer points={points}/>
        <Wrapper>
            <Title>{section.title}</Title>
            <Text>{section.text[sex]}</Text>
        </Wrapper>
        <ButtonWrapper>
            {props.children}
            <NextButton onClick={setNext}/>
        </ButtonWrapper>
    </RootWrapper>
}

export default SectionWrapper;