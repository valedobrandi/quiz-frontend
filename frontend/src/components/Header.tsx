import { useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";


const Header: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie
    console.log(token);
    
  })


  return (
    <header className=" p-4 flex flex-wrap items-center justify-start font-bold uppercase tracking-wide mb-4 ">
      <div className="flex items-center justify-center md:m-0 mb-3">
        <img className="w-12 h-12 b" src="icons8-quiz-100(1).png" alt="" />
        <p className="ml-4 text-sm text-center md:text-lg md:text-right tracking-wide">
          Challenge Your self and Rise to the Top!
        </p>
      </div>
      <Button
        style="mt-2 md:mt-0"
        title="enter / register"
        setClick={() => navigate("/singIn")}
      />
    </header>
  );
};

export default Header;
