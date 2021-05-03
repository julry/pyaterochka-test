import React, {useEffect, useState} from "react";
import {screens} from "../screens.config";
import { ProgressProvider } from '../context/ProgressContext';


export const SexType = {
    Male: 'male',
    Female: 'female'
}


export function ScreenWrapper() {

    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [screenDelta, setScreenDelta] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [sex, setSex] = useState(SexType.Male);
    const [points, setPoints] = useState(0);



    // const setPrev = () => {
    //     const canSet = currentScreenIndex > 0;
    //     if (canSet) {
    //         setCurrentScreenIndex(currentScreenIndex - 1);
    //         setScreenDelta(screenDelta - 1);
    //     }
    // };

    const setNext = () => {
        const canSet = currentScreenIndex < screens.length - 1;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex + 1);
            setScreenDelta(screenDelta === 0 ? screenDelta : screenDelta + 1);
        }
    };

    const setAnswer = (questionId, answerId) => {
        setAnswers(answers => ({ ...answers, [questionId]: answerId }));
    };


    const { component, preloadImages, ...screen } = screens[currentScreenIndex] || {};
    const Component = component || (() => null);


    const progressProviderValue = {
        screen,
        answers,
        screenDelta,
        sex,
        points,
        setSex,
        setAnswer,
        setNext,
        setPoints,
    };


    return (
        <div>
            <ProgressProvider value={progressProviderValue}>
                <Component />
            </ProgressProvider>
        </div>
    );
}
