import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question10 = () => {
    return <QuestionWrapper question={getQuestionById('10')} />
}

export default Question10;