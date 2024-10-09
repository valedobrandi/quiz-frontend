import { useEffect, useReducer } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import reducer from "../reducer";
import { initialState } from "../reducer/store";


type HeaderProps = {
  onUser: string;
}

function Header() {
  const navigate = useNavigate();
  const [state] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("EFFECT", state.user);
  }, [state]);




  const render = (isRender: boolean | string | null) => isRender 

  return (
    <header
      className="
    p-4 
    flex 
    flex-wrap 
    items-center 
    justify-start 
    font-bold 
    uppercase 
    tracking-wide mb-4"
    >
      <div
        className="
      flex 
      items-center 
      justify-center 
      md:m-0"
      >
        <img
          className="
        w-12 
        h-12"
          src="icons8-quiz-100(1).png"
          alt="quiz icon"
        />
        <p
          className="
        ml-4 
        text-sm 
        text-center 
        tracking-wide
        md:text-lg 
        md:text-right 
        "
        >
          Challenge Your self and Rise to the Top!
        </p>
      </div>
      {render(!state.user) && (
        <Button 
        title="enter / register" 
        setClick={() => navigate("/singIn")} 
        />
      )}
      {render(state.user) && (
        <p 
        className="
        text-white 
        text-center
        ml-6"
        >Welcome, {status}</p>
      )}
      
    </header>
  );
}

export default Header;
