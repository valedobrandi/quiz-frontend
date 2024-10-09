import { IAction } from "../interfaces/IAction";
import { IInitialState } from "../interfaces/IInitialState";

export default function reducer(
  state: IInitialState,
  action: IAction
): IInitialState {
  switch (action.type) {
    case "access":  
      return { ...state, user: action.payload };     
    case "success":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "fail":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "start" };
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
        seconds: 15,
      };
    }
    case "restartQuiz":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "start",
        seconds: 15,
      };
    case "timeOut":
      return { ...state, answer: null, status: "finish" };
    case "tick":
      return { ...state, seconds: state.seconds - 1 };
    default:
      return state;
  }
}
