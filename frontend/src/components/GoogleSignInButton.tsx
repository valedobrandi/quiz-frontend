import React from 'react';
import Google_SVG from "../assets/google-svgrepo-com.svg"
import useAuthGoogle from '../customHooks/useAuthGoogle';


const GoogleSignInButton: React.FC = () => {
  const authGoogle = useAuthGoogle()

  return (
    <button
      className="inline-flex h-10 items-center justify-center gap-2 rounded border border-slate-300
       bg-white p-2 text-sm font-medium text-black outline-none"
      onClick={() => authGoogle()}>
      <img className='w-8' src={Google_SVG} alt="company logo" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;