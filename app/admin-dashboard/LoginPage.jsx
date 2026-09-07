"use client";
import React, { useState } from 'react';

const LoginPage = () => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Validators
  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const validatePassword = (val) => val.length >= 6; // min 6 chars for login

  // Handlers
  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (val.trim() === '') {
      setEmailError(false);
    } else {
      setEmailError(!validateEmail(val));
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError(false);
      return;
    }
    setEmailError(!validateEmail(email));
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (val.trim() === '') {
      setPasswordError(false);
    } else {
      setPasswordError(!validatePassword(val));
    }
  };

  const handlePasswordBlur = () => {
    if (password.trim() === '') {
      setPasswordError(false);
      return;
    }
    setPasswordError(!validatePassword(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setEmailError(email.trim() !== '' && !isEmailValid);
    setPasswordError(password.trim() !== '' && !isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      alert('Login successful! (demo)');
      console.log({ email, password });
      // Redirect or perform authentication logic
    }
  };

  return (
    <>
      <style>{`
        /* ---- Scoped styles for LoginPage ---- */
        .login-component * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .login-component {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 1.5rem;
        }
        .login-component .login-card {
          max-width: 420px;
          width: 100%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 2.5rem;
          padding: 2.5rem 2.2rem 2.8rem;
          box-shadow:
            0 30px 60px -20px rgba(0, 20, 40, 0.25),
            0 8px 24px -8px rgba(0, 20, 40, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .login-component .login-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 40px 80px -24px rgba(0, 20, 40, 0.3),
            0 8px 28px -8px rgba(0, 20, 40, 0.1);
        }
        .login-component .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .login-component .login-header .logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border-radius: 24px;
          color: #fff;
          font-size: 32px;
          margin-bottom: 1rem;
          box-shadow: 0 12px 24px -8px rgba(74, 124, 247, 0.3);
          transition: transform 0.3s ease;
        }
        .login-component .login-header .logo:hover {
          transform: scale(1.06) rotate(-2deg);
        }
        .login-component .login-header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .login-component .login-header p {
          color: #5e6f8d;
          font-size: 0.95rem;
          margin-top: 0.3rem;
          font-weight: 400;
        }
        .login-component .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .login-component .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .login-component .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .login-component .input-group label i {
          color: #4a7cf7;
          font-size: 0.9rem;
          width: 1.1rem;
          text-align: center;
        }
        .login-component .input-group .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .login-component .input-group .input-wrapper input {
          width: 100%;
          padding: 0.9rem 1rem 0.9rem 2.8rem;
          font-size: 0.95rem;
          font-family: inherit;
          font-weight: 500;
          color: #0b1a33;
          background: rgba(255, 255, 255, 0.7);
          border: 1.5px solid rgba(0, 0, 0, 0.06);
          border-radius: 1.2rem;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        .login-component .input-group .input-wrapper input::placeholder {
          color: #9aabbf;
          font-weight: 400;
          font-size: 0.9rem;
        }
        .login-component .input-group .input-wrapper input:focus {
          border-color: #4a7cf7;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(74, 124, 247, 0.12), inset 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        .login-component .input-group .input-wrapper input:not(:placeholder-shown) {
          background: #ffffff;
        }
        .login-component .input-group .input-wrapper .input-icon {
          position: absolute;
          left: 1rem;
          color: #7c8ca8;
          font-size: 1rem;
          pointer-events: none;
          transition: color 0.25s ease;
        }
        .login-component .input-group .input-wrapper input:focus ~ .input-icon,
        .login-component .input-group .input-wrapper input:not(:placeholder-shown) ~ .input-icon {
          color: #4a7cf7;
        }
        .login-component .input-group .input-wrapper .toggle-pw {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: #9aabbf;
          font-size: 1rem;
          cursor: pointer;
          padding: 0.2rem;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-component .input-group .input-wrapper .toggle-pw:hover {
          color: #4a7cf7;
        }
        .login-component .input-group .input-wrapper .toggle-pw:focus-visible {
          outline: 2px solid #4a7cf7;
          outline-offset: 2px;
          border-radius: 6px;
        }
        .login-component .form-feedback {
          display: none;
          margin-top: 0.2rem;
          font-size: 0.82rem;
          font-weight: 500;
          align-items: center;
          gap: 0.4rem;
          color: #e74c3c;
        }
        .login-component .form-feedback.show {
          display: flex;
        }
        .login-component .form-feedback.success {
          color: #2ecc71;
        }
        .login-component .login-btn {
          margin-top: 0.6rem;
          padding: 0.95rem 1.5rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border: none;
          border-radius: 1.5rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease;
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          letter-spacing: 0.01em;
        }
        .login-component .login-btn i {
          font-size: 1.05rem;
          transition: transform 0.25s ease;
        }
        .login-component .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px -8px rgba(74, 124, 247, 0.5);
          background: linear-gradient(135deg, #3b6de7, #5f4fd6);
        }
        .login-component .login-btn:active {
          transform: translateY(0px);
          box-shadow: 0 6px 16px -4px rgba(74, 124, 247, 0.4);
        }
        .login-component .login-btn:hover i {
          transform: translateX(4px);
        }
        .login-component .login-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #5e6f8d;
        }
        .login-component .login-footer a {
          color: #4a7cf7;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1.5px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .login-component .login-footer a:hover {
          border-bottom-color: #4a7cf7;
          color: #3b6de7;
        }
        .login-component .login-footer .forgot-link {
          color: #7c8ca8;
          font-weight: 500;
        }
        .login-component .login-footer .forgot-link:hover {
          color: #4a7cf7;
          border-bottom-color: #4a7cf7;
        }
        @media (max-width: 540px) {
          .login-component .login-card {
            padding: 1.8rem 1.5rem 2.2rem;
            border-radius: 1.8rem;
          }
          .login-component .login-header h1 {
            font-size: 1.5rem;
          }
          .login-component .login-header .logo {
            width: 60px;
            height: 60px;
            font-size: 26px;
            border-radius: 20px;
          }
          .login-component .input-group .input-wrapper input {
            padding: 0.8rem 1rem 0.8rem 2.6rem;
            font-size: 0.9rem;
            border-radius: 1rem;
          }
          .login-component .login-btn {
            padding: 0.85rem 1.2rem;
            font-size: 0.95rem;
            border-radius: 1.2rem;
          }
          .login-component .login-footer {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
        }
        @media (max-width: 400px) {
          .login-component .login-card {
            padding: 1.4rem 1.2rem 1.8rem;
          }
          .login-component .login-header .logo {
            width: 52px;
            height: 52px;
            font-size: 22px;
          }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .login-component .login-card {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .login-component .input-group {
          animation: fadeSlideUp 0.5s ease forwards;
          opacity: 0;
        }
        .login-component .input-group:nth-child(1) { animation-delay: 0.05s; }
        .login-component .input-group:nth-child(2) { animation-delay: 0.12s; }
        .login-component .login-btn {
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.19s;
          opacity: 0;
        }
        .login-component .login-footer {
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.26s;
          opacity: 0;
        }
      `}</style>

      <div className="login-component">
        <div className="login-card" role="main" aria-labelledby="login-heading">
          <div className="login-header">
            <div className="logo" aria-hidden="true">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h1 id="login-heading">Welcome Back</h1>
            <p>Sign in to your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="input-group">
              <label htmlFor="loginEmail">
                <i className="fas fa-envelope" aria-hidden="true"></i> Email
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                  autoComplete="email"
                />
                <i className="fas fa-envelope input-icon" aria-hidden="true"></i>
              </div>
              <div className={`form-feedback ${emailError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Please enter a valid email</span>
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="loginPassword">
                <i className="fas fa-lock" aria-hidden="true"></i> Password
              </label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="loginPassword"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  required
                  autoComplete="current-password"
                />
                <i className="fas fa-lock input-icon" aria-hidden="true"></i>
                <button
                  type="button"
                  className="toggle-pw"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  tabIndex="0"
                >
                  <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'} aria-hidden="true"></i>
                </button>
              </div>
              <div className={`form-feedback ${passwordError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Password must be at least 6 characters</span>
              </div>
            </div>

            <button type="submit" className="login-btn">
              <span>Log In</span>
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>

          <div className="login-footer">
            <a href="#" className="forgot-link">Forgot password?</a>
            <a href="#">Don't have an account? Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;