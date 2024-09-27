import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="text-sm md:text-xl p-4 flex flex-wrap items-center justify-startfont-bold uppercase tracking-wide mb-4 ">
      <div className="flex items-center justify-center md:m-0 mb-3">
        <img className="w-12 h-12 b" src="icons8-quiz-100(1).png" alt="" />
        <p className="ml-4">Challenge Your self and Rise to the Top!</p>
      </div>
      <Button title="enter / register" setClick={() => navigate("/singIn")} />
    </header>
  );
};

export default Header;
