
import Intro from "./components/Intro";
import Section1 from "./components/Sections/Section1";
import Section1_2 from "./components/Sections/Section1_2";
import Question1 from "./components/Questions/Question1";
import Section2 from "./components/Sections/Section2";
import Question2 from "./components/Questions/Question2";
import Question3 from "./components/Questions/Question3";
import Question4 from "./components/Questions/Question4";
import Question5 from "./components/Questions/Question5";
import Question6 from "./components/Questions/Question6";
import Question7 from "./components/Questions/Question7";
import Question8 from "./components/Questions/Question8";
import Question9 from "./components/Questions/Question9";
import Question10 from "./components/Questions/Question10";
import Question11 from "./components/Questions/Question11";
import Question12 from "./components/Questions/Question12";
import Question13 from "./components/Questions/Question13";
import Question14 from "./components/Questions/Question14";
import Question15 from "./components/Questions/Question15";
import Question16 from "./components/Questions/Question16";
import Question17 from "./components/Questions/Question17";
import Section3 from "./components/Sections/Section3";
import Final from "./components/Final";
// import Question1 from "./components/Questions/Question1";
// import Question2 from "./components/Questions/Question2";
// import Question3 from "./components/Questions/Question3";
// import Question4 from "./components/Questions/Question4";
// import Question5 from "./components/Questions/Question5";
// import Question6 from "./components/Questions/Question6";
// import Question7 from "./components/Questions/Question7";
// import Question8 from "./components/Questions/Question8";
// import Final from "./components/Final";

export const ScreenType = {
  Intro: 'intro',
  Section: 'section',
  Question: 'question',
  Final: 'final',
};


export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
  },
  {
    name: 'section-1-1',
    component: Section1,
    type: ScreenType.Section,
  },
  {
    name: 'section-1-2',
    component: Section1_2,
    type: ScreenType.Section,
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
  },
  {
    name: 'section-2',
    component: Section2,
    type: ScreenType.Section,
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
  },
  {
    name: 'section-3',
    component: Section3,
    type: ScreenType.Section,
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
  },
  {
    name: 'question-8',
    component: Question8,
    type: ScreenType.Question,
  },
  {
    name: 'question-9',
    component: Question9,
    type: ScreenType.Question,
  },
  {
    name: 'question-10',
    component: Question10,
    type: ScreenType.Question,
  },

  {
    name: 'question-11',
    component: Question11,
    type: ScreenType.Question,
  },

  {
    name: 'question-12',
    component: Question12,
    type: ScreenType.Question,
  },

  {
    name: 'question-13',
    component: Question13,
    type: ScreenType.Question,
  },
  {
    name: 'question-14',
    component: Question14,
    type: ScreenType.Question,
  },

  {
    name: 'question-15',
    component: Question15,
    type: ScreenType.Question,
  },

  {
    name: 'question-16',
    component: Question16,
    type: ScreenType.Question,
  },

  {
    name: 'question-17',
    component: Question17,
    type: ScreenType.Question,
  },

  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];