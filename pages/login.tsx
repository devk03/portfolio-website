import React from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful sign-in here (e.g., redirect to a dashboard page)
    } catch (error) {
      // Handle errors here, such as displaying an error message
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
