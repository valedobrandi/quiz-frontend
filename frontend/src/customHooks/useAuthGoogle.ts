import { useGoogleLogin } from "@react-oauth/google";
import { endPoints } from "../endPoints";


const useAuthGoogle = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);

      fetch(`${endPoints.QUIZ_BACKEND}/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tokenResponse)
      })
    },
    onError: () => console.log('Error'),
    flow: 'auth-code',
  });

  return googleLogin;
};

export default useAuthGoogle;