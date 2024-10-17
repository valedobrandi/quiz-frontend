import { IQuestion } from "./IQuestions";

export interface ICategoryPoints {
  [key: string]: number;
}

export interface IInitialState {
  questions: IQuestion[] | [];
  categories: ICategoryPoints;
  status: string;
  index: number;
  answer: null | number;
  points: number;
  highScore: number;
  seconds: number;
  username: null | string;
}