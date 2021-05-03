import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question4 = () => {
    return <QuestionWrapper question={getQuestionById('4')} />
}

export default Question4;