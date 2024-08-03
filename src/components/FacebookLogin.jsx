// src/components/FacebookLogin.jsx

import React from 'react';
import { toast } from 'react-toastify';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase';

const FacebookLogin = () => {
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      // No need to specify scopes if you are not using custom permissions
      await signInWithPopup(auth, provider);
      toast.success("Login successful with Facebook");
      // Redirect or update UI after successful login if needed
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      onClick={handleFacebookLogin}
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
    >
      Facebook
    </button>
  );
};

export default FacebookLogin;
