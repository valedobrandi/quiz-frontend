import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
      <header className="text-sm md:text-xl p-4 flex items-center font-bold uppercase tracking-wide mb-4">
        <img className="w-12 h-12 b" src="icons8-quiz-100(1).png" alt="" />
        <p className="ml-4">Challenge Your self and Rise to the Top!</p>
        <Button
          title="enter / register"
          setClick={() => navigate('/singIn')}
        />
      </header>
  );
};

export default Header;
