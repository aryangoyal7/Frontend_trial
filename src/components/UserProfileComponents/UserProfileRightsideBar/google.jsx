import React from 'react';
import GoogleLogin from 'react-google-login';

function Login() {
  const handleGoogleLogin = (response) => {
    // Handle the Google login response here
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={handleGoogleLogin}
      onFailure={handleGoogleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default Login;
