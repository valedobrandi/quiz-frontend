import Options from "../components/Options";
import Button from "../components/Button";
import Progress from "../components/Progress";
import reducer from "../reducer/index";
import { initialState } from "../reducer/store";
import isRender from "../utils/isRender";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import QuestionHeader from "../components/QuestionHeader";

function Quiz() {
  const [
    { status, questions, index, answer, points, highScore, seconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const get = async () => {
      try {
        const questions = await fetch("http://localhost:3001/quiz");
        const data = await questions.json();

        dispatch({ type: "success", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "fail", payload: null });
      }
    };
    get();
  }, []);

  const isFinish = index + 1 === questions.length;

  return (
    <>
      <div className="mt-24">
        {isRender(status, "loading") && <Loader />}
        {isRender(status, "error") && <Error />}
        {isRender(status, "ready") && (
          <QuestionHeader questionsLength={questions.length}>
            <Button
              style="btn btn-active btn-lg md:text-lg"
              setClick={() => dispatch({ type: "start", payload: null })}
              title={"Start Quiz"}
            />
          </QuestionHeader>
        )}
        {isRender(status, "finish") && (
          <QuestionHeader questionsLength={questions.length}>
            <Button
              style="btn btn-active btn-lg md:text-lg"
              title={"Restart Quiz"}
              setClick={() => dispatch({ type: "restartQuiz", payload: null })}
            />
          </QuestionHeader>
        )}
        {isRender(status, "start") && (
          <div className="m-6">
            <div className="mx-auto">
              <Progress
                index={index}
                points={points}
                questions={questions}
                totalPoints={highScore}
              />
              <div>
                <h4
                  className="terminal-box text-lg p-4 md:text-2xl w-full 
               justify-start h-full text-xl mb-4 text-center"
                >
                  {questions[index].question}
                </h4>
              </div>
              <div className="options">
                <Options
                  dispatch={dispatch}
                  answerOptions={questions[index].answers}
                  correctAnswer={Number(questions[index].correct_answer)}
                  answer={answer}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Timer dispatch={dispatch} seconds={seconds} />
              <Button
                style="btn btn-active btn-lg md:text-lg"
                isDisable={answer === null || isFinish}
                title={"Next"}
                setClick={() => {
                  dispatch({
                    type: "nextQuestion",
                    payload: questions[index].correct_answers,
                  });
                }}
              />
              {isFinish && (
                <Link to={"/finish"}>
                  <Button
                    style="btn btn-active btn-lg md:text-lg"
                    isDisable={answer === null}
                    title={"Finish"}
                    setClick={() => {
                      dispatch({
                        type: "finished",
                        payload: questions[index].correct_answers,
                      });
                    }}
                  />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
