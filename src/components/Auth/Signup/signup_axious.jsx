import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();

      axios.post(`/api/v1/users`, {
        username,
        password,
      })
        .then((res) => {
          if (res.status === 201) {
            setAuth({
              username,
              password,
              loggedIn: true,
            });
          } else {
            alert('Invalid username or password');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    document.getElementById('signup-form').addEventListener('submit', handleSubmit);
  }, []);

  return (
    <div className={signupCss.outerDiv}>
      <div className={signupCss.modal}>
        <div className={signupCss.header}>
          <span className={signupCss.ttl}>Signup</span>
          <span className={signupCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
            <img className={signupCss.closeBtnImg} src={closeBtn} alt="close button" />
          </span>
        </div>
        <div className={signupCss.lgBox}>
          <input className={signupCss.inpBox} type="text" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className={signupCss.inpBox} type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className={signupCss.inpBox} type="number" placeholder='phone number' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className={signupCss.inpBox} type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <button className={signupCss.btn}>Create Account</button>
        </div>
        
        
        <hr className={signupCss.break} />
        <div className={signupCss.newToZomato}>Already have an account? <div className={signupCss.createAcc} onClick={() => setAuth({ closed: false, login: true, signup: false })} >Log in</div></div>
      </div>
    </div>
  );
};

export default Signup;
