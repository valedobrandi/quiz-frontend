import { useEffect, useState } from "react";
import Timer from "./Timer";

type ProgressPropsType = {
  index: number;
  points: number;
  dispatch: React.Dispatch<any>;
  seconds: number;
  categories: any;
  totalPoints: number;
  username: string | null;
};

interface LevelProgress {
  backgroundColor: {[key: number]: string};
  borderColor: {[key: number]: string};
}

export default function Progress({
  index,
  points,
  dispatch,
  seconds,
  categories,
  totalPoints,
  username,
}: ProgressPropsType) {
  const [bonus, setBonus] = useState(0);
  const [answerSequence, setAnswerSequence] = useState(0);

  useEffect(() => {
    const points = { "prev": totalPoints + 1, "curr": totalPoints}

    if (points.prev === points.curr) return setAnswerSequence(answerSequence + 1);
    if (answerSequence === 5) return setBonus(1);
    if (answerSequence === 5) return setAnswerSequence(0);
    if (points.prev !== points.curr) return setAnswerSequence(0);

  }, [totalPoints]);

  useEffect(() => {

    if (answerSequence === 5) {
      setBonus(1)
      dispatch({ type: "BONUS", payload: bonus });
    } 

  },[bonus])

  const progressStyle: LevelProgress = {
    backgroundColor: {
    1: '',
    2: 'progress-info',
    3: 'progress-success',
    4: 'progress-warning',
    5: 'progress-secondary'},
    borderColor: { 
    1: '200 border-2',
    2: '300 border-4',
    3: '400 border-8',
    4: '500 border-8',
    }
  };

  return (
    <section>
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
          <Timer
            username={username || ""}
            totalPoints={totalPoints}
            dispatch={dispatch}
            seconds={seconds}
            categories={categories}
          />
        </div>
      </div>
      <progress
        className={`progress 
          progress-${progressStyle.backgroundColor[answerSequence]}
          border-yellow-${progressStyle.borderColor[answerSequence]}
          md:h-5 h-3 w-full] mb-8`}
        value={answerSequence}
        max={5}
      ></progress>
    </section>
  );
}
