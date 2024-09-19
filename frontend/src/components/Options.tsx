import { IAnswer } from "../interfaces/IQuestions";

type OptionsPropsType = {
  answerOptions: IAnswer;
  dispatch: any;
  answerIndex: number;
  answer: number | null;
}


export default function Options({ answerOptions, dispatch, answerIndex, answer }: OptionsPropsType) {
  return Object.values(answerOptions).filter((answerOption: string | null) => answerOption !== null)
    .map((answerOption, index) => {
      const styleChosenAnswer = answer === index ? "answer" : "";
      const styleOption = answerIndex === index ? "correct" : "wrong";
      const isDisabled = answer !== null;
      return (
        <div key={answerOption} >
          <button
            className={`btn btn-option ${styleChosenAnswer} ${isDisabled && styleOption}`}
            onClick={() => dispatch({ type: "answer", payload: index })}
            disabled={isDisabled}
          >
            {answerOption && answerOption}
          </button>
        </div>
      );

    })
}
