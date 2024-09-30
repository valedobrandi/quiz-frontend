import { useEffect } from "react";
import { IAction } from "../interfaces/IAction";
type TimerPropsType = {
  dispatch: React.Dispatch<IAction>;
  seconds: number;
};
export default function Timer({ dispatch, seconds }: TimerPropsType) {
  useEffect(() => {
    if (seconds === 0) {
      dispatch({ type: "timeOut", payload: null });
    }
    const id = setInterval(() => {
      dispatch({ type: "tick", payload: null });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch, seconds]);

  return (
    <div className="btn btn-lg h-full flex p-4 flex-col 
    justify-center items-center ml-4">
      <p className="font-Coiny text-sm text-white">Timer:</p>
      <p className="countdown font-mono text-4xl text-red-800">
        {seconds}
      </p>
    </div>
  );
}
