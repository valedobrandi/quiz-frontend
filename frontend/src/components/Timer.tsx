import { useEffect } from "react"
import { IAction } from "../interfaces/IAction"
type TimerPropsType = {
  dispatch: React.Dispatch<IAction>;
  seconds: number;
}
export default function Timer({ dispatch, seconds }: TimerPropsType) {
  useEffect(() => {
    if (seconds === 0) { dispatch({ type: "timeOut", payload: null }) }
    const id = setInterval(() => { dispatch({ type: 'tick', payload: null }) }, 1000);
    return () => clearInterval(id)
  }, [dispatch, seconds])

  const mins = Math.floor((seconds / 60))
  const secs = (seconds % 60).toFixed(0)
  return (
    <p className="timer">0{mins}:{seconds % 60 < 10 ? "0" : ''}{secs}</p>
  )
}