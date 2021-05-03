import styled from "styled-components";

export const Text = styled.p`
    font-size: 16px;
    line-height: 21px;
    
    @media screen and (max-width: 320px){
      font-size: 15px;
    }
    @media screen and (min-width: 640px){
    line-height: 28px;
      font-size: 22px;
    }
    @media screen and (min-width: 1100px){
          font-size: 26px;
          line-height: 30px;
    }

`

export const  Title = styled(Text)`
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.743vh;
`

export const AnswerText = styled.p`
    font-size: 14px;
    line-height: 20px;
    @media screen and (max-width: 320px){
      font-size: 14px;
    }
    @media screen and (min-width: 640px){
    line-height: 28px;
      font-size: 22px;
    }
`
