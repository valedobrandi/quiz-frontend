import { useGoogleLogin } from "@react-oauth/google";


const useAuthGoogle = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);

      fetch('http://localhost:3001/login', {
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