import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question16 = () => {
    return <QuestionWrapper question={getQuestionById('16')} />
}

export default Question16;