import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from './firebase';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function SignInwithGoogle() {
  const navigate = useNavigate();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user) {
        // Store user information in Firestore
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        });
        toast.success('User logged in successfully', {
          position: 'top-center',
        });
        // Redirect to home page
        navigate('/');
      }
    } catch (error) {
      toast.error(`Error logging in with Google: ${error.message}`, {
        position: 'top-center',
      });
    }
  };

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
        onClick={googleLogin}
      >
        {/* Google icon */}
        {/* Uncomment and adjust the path as needed */}
        {/* <img src={require("../google.png")} width={"60%"} alt="Google logo" /> */}
        <span>Google</span>
      </div>
    </div>
  );
}

export default SignInwithGoogle;
