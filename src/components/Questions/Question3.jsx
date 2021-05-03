import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question3 = () => {
    return <QuestionWrapper question={getQuestionById('3')} />
}

export default Question3;