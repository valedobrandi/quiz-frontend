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
      case "refillQuestion":
        return {
          ...state,
          questions: state.questions.concat(action.payload),
        };
    case "fail":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "start", seconds: 60 * 4 };
    case "finished":
      return { ...state, status: "finish" };
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
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        points: state.points + answerPoints,
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
