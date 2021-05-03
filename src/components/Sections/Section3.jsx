import React from "react";
import styled from 'styled-components';
import SectionWrapper from "../SectionWrapper";
import {getSectionById} from "../../utils/getSectionById";
import {Section3Img} from "../../shared/svg/Section3Img";

const Img = styled.div`
    position: relative;
    overflow: visible;
    
    & svg {
      position: absolute;
      height: 30.06527vh;
      bottom:0;
      width: inherit;
      left: 3vw;
      @media screen and (max-height: 580px){
          height: 24.4213vh;
      }
        @media screen and (min-width: 1100px){ 
        top: 0;
        left:0;
        height: 40.3333vh;
      }
    }
    
    @media screen and (min-width: 1100px){ 
        position: absolute;
        top: 20vh;
        right: 40vw;
    }
`
const Section3 = () => {

    return <SectionWrapper section={getSectionById('4')}>
        <Img>
            <Section3Img />
        </Img>
    </SectionWrapper>
}

export default Section3;