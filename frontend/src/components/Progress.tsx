import { IQuestion } from "../interfaces/IQuestions";

type ProgressPropsType = {
  index: number;
  questions: IQuestion[];
  points: number;
  totalPoints: number;
};

export default function Progress({
  index,
  questions,
  points,
}: ProgressPropsType) {
  return (
    <header>
      <div className="flex item-center gap-12 m-6">
        <p className="badge badge-ghost md:text-xl p-6">
          Question
          <span className="ml-6">
            <strong>{index + 1}</strong>
          </span>
          <span className="mx-1">/</span>
          {questions.length}
        </p>
        <div className="badge badge-ghost 
       inline-flex md:text-xl p-6">
          <img
            className="h-6 mr-4 "
            src="profits-statistics-svgrepo-com.svg"
            alt="statistics picture"
          />
          <p className="md:text-2xl">
            {points}
          </p>
        </div>
      </div>
      <progress
        className="progress progress-primary
         bg-white md:h-5 h-3 w-full] mb-8 mt-4"
        value={index}
        max={20}
      ></progress>
    </header>
  );
}
