import React from 'react';
import styled from "styled-components";

const HeaderWrapper = styled.div`
    background: #00923A;
    padding: 0.86537vh 6.6666vw;        
    width: 100vw;
    @media screen and (min-width: 640px){
            padding: 2.246vh 3.25521vw;
    }
`

const PointsWrapper = styled.div`
    width: 40px;
    height: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.08em;
    color: #000;
    background: white;
    border-radius: 50%;
    
    @media screen and (min-width: 640px){
        width: 70px;
        height: 70px;
        font-size: 28px;
    }
`
export const HeaderContainer = (props) => {
    const {points} = props;
    return <HeaderWrapper>
        <PointsWrapper> <p>{points}</p> </PointsWrapper>
    </HeaderWrapper>
}