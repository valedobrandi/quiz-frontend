import { IAction } from "../interfaces/IAction";
import { IQuestion } from "../interfaces/IQuestions";
import Timer from "./Timer";

type ProgressPropsType = {
  index: number;
  questions: IQuestion[];
  points: number;
  totalPoints: number;
  dispatch: React.Dispatch<IAction>;
  seconds: number;
};

export default function Progress({
  index,
  points,
  dispatch,
  seconds,
}: ProgressPropsType) {
  return (
    <header>
      <div className="flex item-center gap-12 m-6">
        <div className="badge badge-ghost inline-flex md:text-xl p-6">
          <img
            className="h-10 mr-4"
            src="question-and-answer.svg"
            alt="statistics picture"
          />
          <p className="md:text-2xl">
            <strong>{index + 1}</strong>
          </p>
        </div>
        <div className="badge badge-ghost inline-flex md:text-xl p-6">
          <img
            className="h-7 mr-4"
            src="profits-statistics-svgrepo-com.svg"
            alt="statistics picture"
          />
          <p className="md:text-2xl">
          <strong>{points}</strong> 
          </p>
        </div>
        <div
          className="badge badge-ghost 
       inline-flex md:text-xl p-6"
        >
          <Timer dispatch={dispatch} seconds={seconds} />
        </div>
      </div>
      <progress
        className="progress progress-primary
         bg-white md:h-5 h-3 w-full] mb-8 mt-4"
        value={index + 1}
        max={20}
      ></progress>
    </header>
  );
}
