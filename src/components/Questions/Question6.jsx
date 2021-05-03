import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question6 = () => {
    return <QuestionWrapper question={getQuestionById('6')} />
}

export default Question6;