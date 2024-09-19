import { IQuestion } from "../interfaces/IQuestions";

type ProgressPropsType = {
  index: number;
  questions: IQuestion[];
  points: number;
  totalPoints: number;
}


export default function Progress({ index, questions, points, totalPoints }: ProgressPropsType) {

  return (
    <header className="progress">
      <progress max={questions.length} value={index + 1} />
      <p>Question <strong>{index + 1}</strong> / {questions.length}</p>
      <p>{points} / {totalPoints}</p>
    </header>
  );
}
