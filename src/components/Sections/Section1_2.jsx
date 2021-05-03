import React from "react";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper";
import {getSectionById} from "../../utils/getSectionById";
import {Section1Img2} from "../../shared/svg/Section1Img2";


const Img = styled.div`
    position: relative;
    overflow: visible;
    
    & svg {
      position: absolute;
      height: 35.0543vh;
      bottom: 5.2vh;
      left: 6.8vw;
      width: inherit;
      
      @media screen and (max-height: 580px){
          height: 30.4213vh;
      }
        @media screen and (min-width: 1100px){ 
        top: 0;
        left:0;
        height: 43.3333vh;
      }
    }
    
    @media screen and (min-width: 1100px){ 
        position: absolute;
        top: 25vh;
        right: 39vw;
    }
`

const Section1_2 = () => {
    return <SectionWrapper section={getSectionById('2')}>
        <Img>
            <Section1Img2 />
        </Img>
    </SectionWrapper>
}

export default Section1_2