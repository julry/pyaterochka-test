import React, {useContext, useState} from "react";
import styled from 'styled-components';
import {Logo} from "../shared/svg/Logo";
import {IntroImg} from "../shared/svg/IntroImg";
import {FemaleIcon} from "../shared/svg/FemaleIcon";
import {MaleIcon} from "../shared/svg/MaleIcon";
import {Text} from "../shared/Text";
import {NextButton} from "../shared/NextButton";
import {ProgressContext} from "../context/ProgressContext";
import {SexType} from "./ScreenWrapper";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";



const Header = styled.div`
    background: #00923A;
    padding: 0.9556vh 7.4666vw;
    width: 100vw;
    @media screen and (min-width: 640px){
            padding: 3.125vh 4.4271vw;
    }
`
const StyledLogo = styled(Logo)`
    height: 5.29555vh;
`

const Wrapper = styled.div`
    padding: 2.093596vh 8.8vw 5px;
    white-space: pre-wrap;
    @media screen and (min-width: 1100px){
            padding: 6.8888vh 6.9444vw;
    }
`

const Description = styled(Text)`
    max-width: 420px;
    @media screen and (min-width: 1100px){
        max-width: 610px;
    }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const TitleWrapper = styled(FlexContainer)`
    margin-bottom: 1.600985vh;
    
    & svg{
        width: 100%;
        height: 20vh;
        max-height: 180px;
        
        @media screen and (min-width: 640px){
             height: 26.1718vh;
            max-height: 270px;
        }
        
        @media screen and (min-width: 1100px){
           position: absolute;
           top: 21.2222vh;
           right: 6.9444vw;
           width: 31.3888vw;
            height: 54.8888vh;
            max-height: 400px;
        }
    }
    @media screen and (min-width: 640px){
         margin-bottom: 3.600985vh;
    }
    
`

const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
   @media screen and (min-width: 640px){
               font-size: 40px;
    }
    @media screen and (min-width: 1100px){
         font-size: 50px;
    }
`

const ButtonsContainer = styled(FlexContainer)`
    margin-top: 3.2vh;
    
    @media screen and (max-width: 1100px) and (min-height: 670px){
        position: fixed;
        width: calc(100% - 17.6vw);
        bottom: 45px;
    }
    
   
`

const SexButton = styled(FlexContainer)`
  cursor: pointer;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: white;
  justify-content: center;
  margin-right: 4vw;
  @media screen and (min-width: 640px){
     width: 130px;
    height: 130px;
  }
`

const Female = styled(FemaleIcon)`
    width: 46px;
    margin-bottom: -1px;
    @media screen and (min-width: 640px){
     width: 86px;
    }
        
`

const Male = styled(MaleIcon)`
    margin-bottom: -1px;
    width: 50px;
    @media screen and (min-width: 640px){
     width: 90px;
    }
`

const NextBtn = styled(NextButton)`
    margin-left: auto;
`

const ChooseText = styled.p`
    font-size: 22px;
    margin-top: 5px;
    
    @media screen and (min-width: 640px){
        margin-top: 10px;
      font-size: 30px;
    }
`
const Intro = () => {
    const [sex, setCurrentSex] = useState(null);
    const {setSex, setNext} = useContext(ProgressContext);

    const onStart = () => {
        setSex(sex);
        reachMetrikaGoal('start');
        setNext();
    }
    return <div>
        <Header>
         <StyledLogo />
        </Header>
        <Wrapper>
            <TitleWrapper>
                <Title>Привет!</Title>
                <IntroImg />
            </TitleWrapper>
            <Description>
                {"Вижу, что ты любишь вызовы, раз хочешь попробовать себя в роли наставника в крупной российской компании «Пятёрочка».\n\nДумаешь, что стать стажером и тем более наставником в «Пятёрочке» просто?\n\nЧто ж, попробуй пройти тест до конца!\nПроверь себя и получи призы:)"}
            </Description>
            <ButtonsContainer>
                <div>
                    <FlexContainer>
                        <SexButton
                            style={sex===SexType.Female ? {boxShadow: '0px 0px 0px 3px rgba(0,146,58,1)'} : {}}
                            onClick={()=>setCurrentSex(SexType.Female)}
                        >
                            <Female/>
                        </SexButton>
                        <SexButton
                            style={sex===SexType.Male ? {boxShadow: '0px 0px 0px 3px rgba(0,146,58,1)'} : {}}
                            onClick={()=>setCurrentSex(SexType.Male)}
                        >
                            <Male/>
                        </SexButton>
                    </FlexContainer>
                    <ChooseText> Выбери пол</ChooseText>
                </div>
                {sex&&<NextBtn onClick={onStart}/>}
            </ButtonsContainer>
        </Wrapper>

    </div>
}

export default Intro;