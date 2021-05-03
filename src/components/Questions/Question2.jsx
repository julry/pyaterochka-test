import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question2 = () => {
    return <QuestionWrapper question={getQuestionById('2')} />
}

export default Question2;