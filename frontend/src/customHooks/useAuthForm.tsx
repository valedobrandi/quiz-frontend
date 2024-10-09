import { useState } from "react";
import validatePassword from "../utils/validPassword";
import validateUsername from "../utils/validUsername";
import { useNavigate } from "react-router-dom";

const useAuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const checkUsernameRule = validateUsername(username);
    const checkPasswordRule = validatePassword(password);
    setWarning(checkUsernameRule ? checkUsernameRule : checkPasswordRule);
    if (checkPasswordRule) return;
    setWarning("");
    setUsername('');
    setPassword('');
  };

  const handleFormHttp = async (URL: string) => {

    const response = await fetch(`${URL}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    setUser(data);
    navigate('/quiz');
  };

  const register = async (event: React.FormEvent) => {
    handleFormSubmit(event);
    await handleFormHttp(`${import.meta.env.VITE_BACKEND_URL}/auth/register`);
  };

  const logIn = async (event: React.FormEvent) => {
    handleFormSubmit(event);
    await handleFormHttp(`${import.meta.env.VITE_BACKEND_URL}/auth/access`);
  };

  return {
    username,
    password,
    warning,
    showPassword,
    handleFormChange,
    toggleShowPassword,
    register,
    logIn,
    user,
  };
};
export default useAuthForm;
