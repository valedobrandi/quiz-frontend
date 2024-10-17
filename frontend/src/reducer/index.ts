import { IAction } from "../interfaces/IAction";
import { IInitialState } from "../interfaces/IInitialState";

export default function reducer(
  state: IInitialState,
  action: IAction
): IInitialState {
  switch (action.type) {
    case "setNickname":  
      return { ...state, username: action.payload };     
    case "success":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
      case "refreshQuestion":     
        return {
          ...state,
          questions: state.questions.concat(action.payload),
        };
    case "fail":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "start", seconds: 10 * 2 };
    case "finished":

      return { 
        ...state,  
        questions: [],
        status: "loading",
        index: 0,
        answer: null,
        points: 0,
        highScore: 0,
        seconds: 0,
      };
    case "answer": {
      const { points, highScore } = state;
      return {
        ...state,
        answer: Number(action.payload),
        highScore: points > highScore ? points : highScore,
      };
    }
    case "nextQuestion": {
      const { answer } = state;
      let answerPoints = 0;
      if (action.payload === answer) answerPoints = 1;
      const categoryName = state.questions[state.index].category;

      const getCategoryAndPoint = { 
        ...state.categories,
        [categoryName]: (state.categories[categoryName] || 0 ) + answerPoints
      };

      return {
        ...state,
        categories: {...state.categories,  ...getCategoryAndPoint},
        index: state.index + 1,
        answer: null,
        points: state.points + answerPoints,
        highScore: answerPoints + state.highScore,
      };
    }
    case "restartQuiz":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "start",
        seconds: 60 * 4,
      };
    case "tick":
      return { ...state, seconds: state.seconds - 1 };
    default:
      return state;
  }
}
