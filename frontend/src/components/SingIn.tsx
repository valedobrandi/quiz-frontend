import GoogleSignInButton from "./GoogleSignInButton";
import useAuthForm from "../customHooks/useAuthForm";
import { useNavigate } from "react-router-dom";
import Header from "./Header";



export default function SignIn() {
  const navigate = useNavigate();
  
  const {
    username,
    password,
    warning,
    showPassword,
    handleFormChange,
    toggleShowPassword,
    register,
    logIn,
    user,
  } = useAuthForm();

  

  return (
    <>
    <Header user={user} />
      <form
        onSubmit={register}
        className="flex flex-col max-w-[400px] justify-center 
        item-center m-auto gap-3 p-10"
      >
        <input
          autoComplete="true"
          type="text"
          className="
          input input-bordered input-info 
          bg-slate-100 rounded p-2 text-sm input-sm
          placeholder: text-black placeholder: font-bold"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleFormChange}
        />
        <div className="relative flex items-center shrink-0">
          <input
            autoComplete="true"
            type={showPassword ? "text" : "password"}
            className="
            input input-bordered input-info bg-slate-100 
            rounded p-2 text-sm input-sm w-full
            placeholder: text-black placeholder: font-bold"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleFormChange}
          />
          <button type="button" onClick={toggleShowPassword}>
            <img
              src={showPassword ? "eye-open.png" : "eye-close.png"}
              alt="show password"
              className="h-5 w-5 absolute right-3 top-1.5"
            />
          </button>
        </div>
        <p
          className="
            text-red-500 
            font-semibold 
            text-sm 
            text-center 
            md:text-left 
            md:ml-5 
            md:text-base"
        >
          {warning && warning}
        </p>
        <button
          className="
            btn 
            btn-primary 
            btn-sm 
            bg-[#641ae6] 
            font-black 
            text-[#f1f3f5] 
            uppercase"
            onClick={logIn}
        >
          enter
        </button>
        <button
          className="
            font-md 
            btn 
            btn-primary 
            btn-sm 
            bg-[#641ae6] 
            font-black uppercase"
          type="submit"
          name="button"
          value="submit"
        >
          register
        </button>
        <GoogleSignInButton />
      </form>
      <button
        className="btn btn-active btn-xs h-fit m-4 bg-[#641ae6] text-[#f1f3f5] uppercase"
        onClick={() => navigate(-1)}
      >
        <img
          src="icons8-arrow-48.png"
          alt="back"
          className="h-8 w-8 transform rotate-180"
        />
        back
      </button>
    </>
  );
}

