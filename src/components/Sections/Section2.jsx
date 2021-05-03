import React, {useContext} from "react";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper";
import {getSectionById} from "../../utils/getSectionById";
import {Section2ImgMale} from "../../shared/svg/Section2ImgMale";
import {ProgressContext} from "../../context/ProgressContext";
import {SexType} from "../ScreenWrapper";
import {Section2ImgFemale} from "../../shared/svg/Section2ImgFemale";

const Img = styled.div`
    position: relative;
    overflow: visible;
    
    & svg {
      position: absolute;
      height: 33.8315vh;
      bottom:0;
      width: inherit;
      left: 5vw;
      @media screen and (max-height: 580px){
          height: 28.4213vh;
      }
      @media screen and (min-width: 1100px){ 
        top: 0;
        left:0;
        height: 46.3333vh;
      }
    }
    
     @media screen and (min-width: 1100px){ 
        position: absolute;
        top: 25vh;
        right: 34vw;
    }
`
const Section2 = () => {
    const {sex} = useContext(ProgressContext);

    return <SectionWrapper section={getSectionById('3')}>
        <Img>
            {sex === SexType.Female ? <Section2ImgFemale />
            : <Section2ImgMale />
            }
        </Img>
    </SectionWrapper>
}

export default Section2;