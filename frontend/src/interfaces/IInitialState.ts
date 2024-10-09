import { IQuestion } from "./IQuestions";

export interface IInitialState {
  questions: IQuestion[] | [];
  status: string;
  index: number;
  answer: null | number;
  points: number;
  highScore: number;
  seconds: number;
  username: null | string;
}