import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question15 = () => {
    return <QuestionWrapper question={getQuestionById('15')} />
}

export default Question15;