import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question11 = () => {
    return <QuestionWrapper question={getQuestionById('11')} />
}

export default Question11;