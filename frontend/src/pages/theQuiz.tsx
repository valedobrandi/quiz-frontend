import React, { useEffect, useReducer } from "react";
import Options from "../components/Options.jsx";
import Button from "../components/Button.jsx";
import Progress from "../components/Progress.jsx";
import Finished from "../components/Finished.jsx";
import reducer from "../reducer/index.js";
import { initialState } from "../reducer/store";
import correctAnswerIndex from '../utils/correctAnswerIndex.js';
import isRender from "../utils/isRender.js";
import Loader from "../components/Loader.js";
import Error from "../components/Error.js";



const TOKEN = import.meta.env.VITE_TOKEN



const TheQuiz: React.FC = () => {
  const [{ status, questions, index, answer, points, highScore, seconds }, dispatch] =
    useReducer(reducer, initialState);
  console.log(questions);

  useEffect(() => {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=${TOKEN}&difficulty=hard`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "success", payload: data }))
      .catch(() => dispatch({ type: "fail", payload: null }));
  }, []);
  let correctAnswer = 0
  if (isRender(status, "ready")) correctAnswer = correctAnswerIndex(questions[index].correct_answers)
  const isFinish = index !== questions.length;

  return (
    <div className="max-w-[64rem] m-auto">
      <header className="p-4 flex items-center font-bold uppercase tracking-wide mb-4">
        <img className="w-12 h-12 b" src="icons8-quiz-100(1).png" alt="" />
        <p className="ml-4">Challenge Your self and Rise to the Top!</p>
      </header>
      <main className="space-y-24 md:space-y-48 px-4">
        <section className="flex flex-col md:flex-row gap-24 md:pt-24">
          <div className="space-y-6 md:space-y-10">
            <h1 className="text-5xl text-[#a6adba]">
            Test Your Knowledge and Compete for the Crown
            </h1>
            <p className="text-base-content/90 md/text-lg font-extralight text-[#a6adba]">
            Discover how far you can go in a year! Track your progress and climb the ranks.            </p>
            <a className="btn btn-active gap-2 bg-[#641ae6] text-[#f1f3f5] uppercase" href="">
              Let`s Go
              <img src="icons8-arrow-48.png" alt="" />
            </a>
          </div>
          <div className="w-full md:w-[30rem]">
            <div className="grid grid-cols-1 gap-16">
              <div className="relative p-4 flex flex-col items-center justify-center css-ranking-container-background-color rounded-2xl">
                <div className="absolute -top-16 -left-4 pl-4">
                  <div className="flex flex-row items-start justify-center space-x-2">
                    <div className="flex flex-row items-start justify-center space-x-2">
                      <p className="text-sm"> Current Ranking...</p>
                      <img
                        className="w-12 h-12 rotate80"
                        src="arrow-direction-right-pointer-next-svgrepo-com.svg"
                        alt="arrow picture" />
                    </div>
                  </div>
                </div>
                <h3 className="flex items-center font-bold mb-2 text-lg">
                  <img
                    className="w-8 h-8 mr-2"
                    src="ranking-crown-svgrepo-com.svg"
                    alt="crown picture" />
                  <span className="text-white">Your Ranking</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="p-3">
                    <span className="coiny-regular text-6xl text-[#191d24]">1</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="relative p-4 flex flex-col justify-center items-center css-points-container-background-color rounded-2xl mt-20">
              <div className="absolute -top-16 right-10 pl-4">
                <div className="flex flex-row items-start justify-center space-x-2">
                  <div className="flex flex-row items-start justify-center space-x-2">
                    <img
                      className="w-12 h-12 rotate160"
                      src="arrow-direction-right-pointer-next-svgrepo-com.svg"
                      alt="arrow picture" />
                    <p className="text-sm"> Your Points</p>
                  </div>
                </div>
              </div>
              <h3 className="flex items-center font-bold mb-2 text-lg">
                <img
                  className="w-8 h-8 mr-2"
                  src="profits-statistics-svgrepo-com.svg"
                  alt="statistics picture" />
                <span className="text-white">Points</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="coiny-regular text-6xl text-[#191d24]">2</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div>
        {isRender(status, "loading") && <Loader />}
        {isRender(status, "error") && <Error />}
        {isRender(status, "ready") && (
          <div className="w-7xl flex flex-col justify-center items-center">
            <h3 className="font-Nunito">{questions.length} Questions to test your knowledge!</h3>
            <Button
              setClick={() => dispatch({ type: "start", payload: null })}
              title={"Let's start"}
            />
          </div>
        )}
        {isRender(status, "finish") && (
          <Finished
            points={points}
            totalPoints={questions.length * 5}
            highScore={highScore}
          />
        )}
        {isRender(status, "start") && (
          <div>
            <div>
              <Progress
                index={index}
                questions={questions}
                points={points}
                totalPoints={questions.length * 5}
              />
              <h4>{questions[index].question} </h4>
              <div className="options">
                <Options
                  dispatch={dispatch}
                  answerOptions={questions[index].answers}
                  answerIndex={correctAnswer}
                  answer={answer}
                />
              </div>
            </div>
            <div className="flex justify-between">
              {/* <Timer dispatch={dispatch} seconds={seconds} /> */}
              <Button
                isDisable={answer === null}
                title={isFinish ? "Next" : "Finish"}
                setClick={() =>
                  dispatch({ type: isFinish ? "nextQuestion" : "finished", payload: correctAnswer })
                }
              />
            </div>
          </div>
        )}
        {isRender(status, "finish") && (
          <Button
            title={'Restart quiz'}
            setClick={() =>
              dispatch({ type: "restartQuiz", payload: null })
            }
          />
        )}
      </div>
    </div>
  );
}

export default TheQuiz
