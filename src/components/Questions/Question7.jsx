import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question7 = () => {
    return <QuestionWrapper question={getQuestionById('7')} />
}

export default Question7;