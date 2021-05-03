import React from "react";
import styled from 'styled-components';
import SectionWrapper from "../SectionWrapper";
import {getSectionById} from "../../utils/getSectionById";
import {Section1Img1} from "../../shared/svg/Section1Img1";

const Img = styled.div`
    position: relative;
    overflow: visible;
    
    & svg {
      position: absolute;
      height: 44.7010vh;
      bottom:0;
      width: inherit;
      
      @media screen and (max-height: 580px){
          height: 35.4213vh;
      }
      @media screen and (min-width: 640px){
          left: 8.5vw;
      }
      @media screen and (min-width: 1100px){ 
        top: 0;
        left:0;
        height: 52.3333vh;
      }
    }
    
    
    @media screen and (min-width: 1100px){ 
        position: absolute;
        top: 25vh;
        right: 39vw;
    }
`
const Section1 = () => {
    return <SectionWrapper section={getSectionById('1')}>
        <Img>
            <Section1Img1 />
        </Img>
    </SectionWrapper>
}

export default Section1;