import { IInitialState } from "../interfaces/IInitialState";

export const initialState: IInitialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  seconds: 15,
  show_hide: false,
};