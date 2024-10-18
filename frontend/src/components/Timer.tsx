import { useEffect } from "react";
import { IAction } from "../interfaces/IAction";
import { useNavigate } from "react-router-dom";
import { ICategoryPoints } from "../interfaces/IInitialState";

type TimerPropsType = {
  dispatch: React.Dispatch<IAction>;
  seconds: number;
  categories: ICategoryPoints;
  points: number;
  username: string;
};
export default function Timer({
  dispatch,
  seconds,
  categories,
  points,
  username,
}: TimerPropsType) {
  const navigate = useNavigate();

  useEffect(() => {
    const httpPostScore = async () => {
      const response = await fetch("http://localhost:3001/ranking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, score: points }),
      });
      if (response.ok) {
        console.log("score registered with successfully");
      }
    };

    const handleFinish = async () => {
      if (seconds === 0) {
        await httpPostScore();
        dispatch({ type: "finished", payload: null });
        navigate("/finish", { state: { categories, points } });
      }
    };

    handleFinish();
    const id = setInterval(() => {
      dispatch({ type: "tick", payload: null });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, seconds]);

  return (
    <div className="text-center flex items-center">
      <img className="h-7 mr-4" src="timer.svg" alt="statistics picture" />
      <p className="countdown font-mono text-3xl text-red-800">{seconds}</p>
    </div>
  );
}
