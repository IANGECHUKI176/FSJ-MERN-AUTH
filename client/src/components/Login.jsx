import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      return navigate("/");
    }
  }, [window.history]);
  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className='login-screen'>
      <form className='login-screen__form' onSubmit={loginHandler}>
        <h3 className='login-screen__title'>Login</h3>
        {error && <span className='error-message'>{error}</span>}

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            required
            placeholder='Email'
            value={email}
            tabIndex={1}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>
            Password:
            <Link to='/forgotPassword' className='login-screen__forgotpassword' tabIndex={4}>
              Forgot Password?
            </Link>
          </label>
          <input
            type='password'
            id='password'
            required
            placeholder='password'
            value={password}
            tabIndex={2}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-primary' tabIndex={3}>
          Login
        </button>
        <span className='login-screen__subtext '>
          Dont have an account<Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
