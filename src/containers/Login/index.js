import React, { useState } from "react";
import { useFormik } from "formik";

import "./styles.css";

const Login = (props) => {
  useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  return (
    <>
      <div className="container">
        <form id="signup">
          <div className="header">
            <h3>Sign In</h3>
          </div>

          <div className="sep"></div>

          <div className="inputs">
            <input
              type="email"
              onChange={(text) => setEmail(text.target.value)}
              placeholder="e-mail"
            />

            {emailError && <p className="error">Please Enter valid Email</p>}
            <input
              type="password"
              onChange={(text) => setPassword(text.target.value)}
              placeholder="Password"
            />

            {passwordError && (
              <p className="error">Please Enter atleast 8 characters</p>
            )}

            <button
              className="submit"
              onClick={() => {
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!email || !email.match(emailRegex)) {
                  setEmailError(true);
                  setTimeout(() => {
                    setEmailError(false);
                  }, 3500);
                }
                if (!password || !password.length >= 8) {
                  setPasswordError(true);
                  setTimeout(() => {
                    setPasswordError(false);
                  }, 3500);
                }
                if (
                  email &&
                  email.match(emailRegex) &&
                  password &&
                  password.length <= 8
                ) {
                  props.history.replace("/features");
                }
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
