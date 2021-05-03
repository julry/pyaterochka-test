import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question13 = () => {
    return <QuestionWrapper question={getQuestionById('13')} />
}

export default Question13;