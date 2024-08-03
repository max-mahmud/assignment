import React from 'react';
import { toast } from 'react-toastify';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase';
import facebook from '../assets/fb.png';

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
      className=""
    >
      <img className='w-[146px] md:w-[205px] md:h-[54px] h-[45px] ' src={facebook}  alt="fb logo" />
    </button>
  );
};

export default FacebookLogin;
