import React, {useContext} from "react";
import styled from 'styled-components';
import {getResult} from "../utils/getResult";
import {ProgressContext} from "../context/ProgressContext";
import {HeaderContainer} from "./Header";
import {Text, Title} from "../shared/Text";

const RootWrapper = styled.div`
        display: grid;
        grid-template-rows: auto minmax(430px, 65.4139vh) auto;
        white-space: pre-wrap;
        
        @media screen and (max-height: 550px){
           grid-template-rows: auto minmax(480px, 65.4139vh) auto;
        }
`
const Wrapper = styled.div`
    padding: 2.569893vh 7.2463vw 0;
    & p{
       @media screen and (min-width: 640px){
            max-width: 550px;
        }
        @media screen and (min-width: 1100px){
            max-width: 808px;
        }
    }
  
`
const TextWrapper = styled.div`
  grid-row: 2/3;
  padding-right: 1.432vw;
`
const ResultSlider = styled.div`
    width: 217px;
    height: 11px;
    position: relative;
    background: #FF0000;
    border-radius: 14px;
    margin: 17px 0;
    
    @media screen and (min-width: 640px){
        margin: 40px 0;
        width: 300px;
    }
    @media screen and (min-width: 1100px){
        height: 15px;
        margin: 60px 0;
        width: 418px;
    }
`
const ResultMark = styled.div`
    position: absolute;
    width: 29px;
    top: -8px;
    height: 27px;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 50%;
    ${({ styles }) => styles};
    
    @media screen and (min-width: 640px){
        height: 38px;
        width: 41px;
        top: -14px;
    }
    
    @media screen and (min-width: 1100px){
        height: 52px;
        width: 57px;
        top: -19px;
    }
`

const LinkBtn = styled.a`
    grid-row: 3/4;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: white;
    background: #00923A;
    border-radius: 14px;
    width: calc(100% - 14.4926vw);
    padding: 21px;
    margin: 0 0 15px 7.2463vw;
    font-weight: 700;
    font-size: 16px;
    @media screen and (max-width: 320px){
        font-size: 12px;
        line-height: 18px;
    }
    
    @media screen and (min-width: 640px){
        font-size: 24px;
        padding: 22px 0;
        max-width: 457px;
    }
    
    @media screen and (min-width: 1100px){
        font-size: 28px;
        padding: 26px 0;
        max-width: 570px;
    }
    
`
const Final = () => {
    const {points} = useContext(ProgressContext);

    const result = getResult(points);

    return <RootWrapper>
        <HeaderContainer points={points}/>
        <Wrapper>
            <TextWrapper>
                <Title>
                    {result.title}
                </Title>
                <ResultSlider>
                    <ResultMark styles={result.style} />
                </ResultSlider>
                <Text>
                    {result.text}
                </Text>
            </TextWrapper>

        </Wrapper>
        <LinkBtn href={'https://5perspective.ru/'}>
            УЗНАТЬ БОЛЬШЕ О СТАЖИРОВКЕ
        </LinkBtn>
    </RootWrapper>
}


export default Final;