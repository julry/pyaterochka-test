import React from 'react';
import styled from 'styled-components';
import {NextArrow} from "./svg/NextArrow";

const Button = styled.div`
    width: 67px;
    height: 67px;
    cursor: pointer;
    position:relative;
    z-index:10;
    margin-left: auto;
    @media screen and (min-width: 640px){
         width: 112px;
        height: 112px;
    }
`
export const NextButton = (props) => {
    return <Button {...props}>
        <NextArrow />
    </Button>
}