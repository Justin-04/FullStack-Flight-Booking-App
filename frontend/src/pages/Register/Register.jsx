import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }

    try {
      const result = await axios.post('http://192.168.1.73:8080/user/register', {
        username,
        password,
        email
      });

      if (result.status === 201) {
        setRegisterError('');
        navigate("/signin");
      } else {
        setRegisterError("Error registering user");
      }
    } catch (error) {
      if (error.response) {
        setRegisterError(error.response.data.message || "Error registering user");
      } else {
        setRegisterError("Error registering user");
      }
      console.log(error);
    }
  };

  return (
    <div className='background-register'>
      <div className="register-container">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
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
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required
              />
            </label>
          </div>

          <button type="submit" className="register-btn">
            REGISTER
          </button>
        </form>

        {registerError && <div className="register-error">{registerError}</div>}
      </div>
    </div>
  );
};

export default Register;
