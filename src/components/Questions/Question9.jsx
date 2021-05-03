import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question9 = () => {
    return <QuestionWrapper question={getQuestionById('9')} />
}

export default Question9;