import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question8 = () => {
    return <QuestionWrapper question={getQuestionById('8')} />
}

export default Question8;