import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question12 = () => {
    return <QuestionWrapper question={getQuestionById('12')} />
}

export default Question12;