import React from 'react';
import { Link } from 'react-router-dom';

interface SideBoardProps {
    title: string;
    description: string;
    buttonText: string;
  }

const SideBoard: React.FC<SideBoardProps> = ({title, description, buttonText,}) => {
  return (
    <div className="space-y-6 md:space-y-10">
      <h1 className="md:text-5xl text-[#a6adba] coiny-regular mt-8 md:mt-0">
        {title}
      </h1>
      <p className="md:text-xl font-extralight text-[#a6adba]">
        {description}
      </p>
      <Link
        className="btn btn-active gap-2 bg-[#641ae6] text-[#f1f3f5] uppercase"
        to={"/quiz"}
      >
        {buttonText}
        <img src="icons8-arrow-48.png" alt="" />
      </Link>
    </div>
  );
};

export default SideBoard;