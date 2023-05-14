import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

const loginbard = ({ setAuth, setLoggedIn }) => {
  const [phone, setPhone] = useState();

  const [otpModal, setOTPModal] = useState(false);

  const [error, setError] = useState(null);

  const axios = new Axios();

  useEffect(() => {
    axios
      .post("/api/users", {
        phone,
        password,
      })
      .then((res) => {
        if (res.data.success) {
          setLoggedIn(true);
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [phone, password]);

  let loginDiv = !otpModal ? (
    <div className={loginCss.outerDiv}>
      <div className={loginCss.modal}>
        <div className={loginCss.header}>
          <span className={loginCss.ttl}>Login</span>
          <span className={loginCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
            <img className={loginCss.closeBtnImg} src={closeBtn} alt="close button" />
          </span>
        </div>
        <div className={loginCss.lgBox}>
          <input
            className={loginCss.phoneInp}
            type="tel"
            placeholder='Username'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className={loginCss.phoneInp}
            type="tel"
            placeholder='Password'
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className={phone?.length === 10 ? [loginCss.btn, loginCss.Sbtn].join(" ") : loginCss.btn}
            onClick={() => phone?.length === 10 ? setOTPModal(true) : ""}
          >
            Login
          </button>
        </div>
        <hr className={loginCss.break} />
        <div className={loginCss.newToZomato}>New to Thirtyml? <div className={loginCss.createAcc} onClick={() => setAuth({ closed: false, login: false, signup: true })}>Create Account</div></div>
      </div>
    </div>
  ) : (
    <EnterOTP setModal={setOTPModal} setLoggedIn={setLoggedIn} setAuth={setAuth} />
  );

  return createPortal(loginDiv, document.getElementById('modal'));
};

export default loginbard;
