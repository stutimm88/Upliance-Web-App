// src/components/GoogleSignIn.tsx
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn: React.FC = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return <GoogleLogin clientId="YOUR_GOOGLE_CLIENT_ID" buttonText="Login with Google" onSuccess={responseGoogle} onFailure={responseGoogle} />;
};

export default GoogleSignIn;
