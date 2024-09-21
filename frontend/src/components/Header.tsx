import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 flex items-center font-bold uppercase tracking-wide mb-4">
      <img className="w-12 h-12 b" src="icons8-quiz-100(1).png" alt="" />
      <p className="ml-4">Challenge Your self and Rise to the Top!</p>
    </header>
  );
};

export default Header;