import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question17 = () => {
    return <QuestionWrapper question={getQuestionById('17')} />
}

export default Question17;