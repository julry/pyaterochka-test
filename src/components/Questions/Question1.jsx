import React from "react";
import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";

const Question1 = () => {
    return <QuestionWrapper question={getQuestionById('1')} />
}

export default Question1;