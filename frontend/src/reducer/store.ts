import { IInitialState } from "../interfaces/IInitialState";

export const initialState: IInitialState = {
  questions: [],
  categories: {},
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  seconds: 0,
  username: null,
};


