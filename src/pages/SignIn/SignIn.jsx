import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); 
  const [token,setToken]=useState('');
  const[role,setRole]=useState('');  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setLoginError('Please enter both username and password.');
    } else {
      setLoginError(''); 
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div className='background-signin'>
      <div className="signin-container">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update state
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state
                required
              />
            </label>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>

          <button type="button" className="signup-btn">
            SIGN UP
          </button>
        </form>

        {loginError && <div className="login-error">{loginError}</div>}
      </div>
    </div>
  );
};

export default SignIn;
