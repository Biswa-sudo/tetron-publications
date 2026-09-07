"use client";
import React, { useState } from 'react';

const RegisterPage = () => {
  // Form state
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation feedback visibility
  const [nameError, setNameError] = useState(false);
  const [uniError, setUniError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);

  // Password toggle
  const [showPassword, setShowPassword] = useState(false);

  // Validation helpers
  const validateName = (val) => val.trim().length >= 2;
  const validateUni = (val) => val.trim().length >= 2;
  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const validatePassword = (val) => val.length >= 8;

  // Handle field blur – show error if invalid and not empty
  const handleBlur = (field, validator, setError) => {
    const value = field === 'name' ? name : field === 'uni' ? university : field === 'email' ? email : password;
    if (value.trim() === '') {
      setError(false);
      return;
    }
    setError(!validator(value));
  };

  // Handle input change – clear error if valid, or show if invalid
  const handleChange = (field, value, validator, setError) => {
    const setter = field === 'name' ? setName : field === 'uni' ? setUniversity : field === 'email' ? setEmail : setPassword;
    setter(value);
    if (value.trim() === '') {
      setError(false);
    } else {
      setError(!validator(value));
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isUniValid = validateUni(university);
    const isEmailValid = validateEmail(email);
    const isPwValid = validatePassword(password);

    setNameError(name.trim() !== '' && !isNameValid);
    setUniError(university.trim() !== '' && !isUniValid);
    setEmailError(email.trim() !== '' && !isEmailValid);
    setPwError(password.trim() !== '' && !isPwValid);

    if (isNameValid && isUniValid && isEmailValid && isPwValid) {
      alert('Registration successful! (demo)');
      console.log({ name, university, email, password });
      // Optionally reset form
      // setName(''); setUniversity(''); setEmail(''); setPassword('');
    }
  };

  return (
    <>
      <style>{`
        /* ---- Reset & Base (scoped) ---- */
        .register-component * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .register-component {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 1.5rem;
        }
        .register-component .register-card {
          max-width: 480px;
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
        .register-component .register-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 40px 80px -24px rgba(0, 20, 40, 0.3),
            0 8px 28px -8px rgba(0, 20, 40, 0.1);
        }
        .register-component .register-header {
          text-align: center;
          margin-bottom: 2.2rem;
        }
        .register-component .register-header .icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border-radius: 20px;
          color: #fff;
          font-size: 28px;
          margin-bottom: 1rem;
          box-shadow: 0 12px 24px -8px rgba(74, 124, 247, 0.3);
          transition: transform 0.3s ease;
        }
        .register-component .register-header .icon-wrap:hover {
          transform: scale(1.04) rotate(-2deg);
        }
        .register-component .register-header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .register-component .register-header p {
          color: #5e6f8d;
          font-size: 0.95rem;
          margin-top: 0.3rem;
          font-weight: 400;
        }
        .register-component .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .register-component .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .register-component .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .register-component .input-group label i {
          color: #4a7cf7;
          font-size: 0.9rem;
          width: 1.1rem;
          text-align: center;
        }
        .register-component .input-group .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .register-component .input-group .input-wrapper input {
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
        .register-component .input-group .input-wrapper input::placeholder {
          color: #9aabbf;
          font-weight: 400;
          font-size: 0.9rem;
        }
        .register-component .input-group .input-wrapper input:focus {
          border-color: #4a7cf7;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(74, 124, 247, 0.12), inset 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        .register-component .input-group .input-wrapper input:not(:placeholder-shown) {
          background: #ffffff;
        }
        .register-component .input-group .input-wrapper .input-icon {
          position: absolute;
          left: 1rem;
          color: #7c8ca8;
          font-size: 1rem;
          pointer-events: none;
          transition: color 0.25s ease;
        }
        .register-component .input-group .input-wrapper input:focus ~ .input-icon,
        .register-component .input-group .input-wrapper input:not(:placeholder-shown) ~ .input-icon {
          color: #4a7cf7;
        }
        .register-component .input-group .input-wrapper .toggle-pw {
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
        .register-component .input-group .input-wrapper .toggle-pw:hover {
          color: #4a7cf7;
        }
        .register-component .input-group .input-wrapper .toggle-pw:focus-visible {
          outline: 2px solid #4a7cf7;
          outline-offset: 2px;
          border-radius: 6px;
        }
        .register-component .form-feedback {
          display: none;
          margin-top: 0.2rem;
          font-size: 0.82rem;
          font-weight: 500;
          align-items: center;
          gap: 0.4rem;
          color: #e74c3c;
        }
        .register-component .form-feedback.show {
          display: flex;
        }
        .register-component .form-feedback.success {
          color: #2ecc71;
        }
        .register-component .register-btn {
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
        .register-component .register-btn i {
          font-size: 1.05rem;
          transition: transform 0.25s ease;
        }
        .register-component .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px -8px rgba(74, 124, 247, 0.5);
          background: linear-gradient(135deg, #3b6de7, #5f4fd6);
        }
        .register-component .register-btn:active {
          transform: translateY(0px);
          box-shadow: 0 6px 16px -4px rgba(74, 124, 247, 0.4);
        }
        .register-component .register-btn:hover i {
          transform: translateX(4px);
        }
        .register-component .register-footer {
          text-align: center;
          margin-top: 1.8rem;
          font-size: 0.9rem;
          color: #5e6f8d;
        }
        .register-component .register-footer a {
          color: #4a7cf7;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1.5px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .register-component .register-footer a:hover {
          border-bottom-color: #4a7cf7;
          color: #3b6de7;
        }
        @media (max-width: 540px) {
          .register-component .register-card {
            padding: 1.8rem 1.5rem 2.2rem;
            border-radius: 1.8rem;
          }
          .register-component .register-header h1 {
            font-size: 1.5rem;
          }
          .register-component .register-header .icon-wrap {
            width: 54px;
            height: 54px;
            font-size: 24px;
            border-radius: 16px;
          }
          .register-component .input-group .input-wrapper input {
            padding: 0.8rem 1rem 0.8rem 2.6rem;
            font-size: 0.9rem;
            border-radius: 1rem;
          }
          .register-component .register-btn {
            padding: 0.85rem 1.2rem;
            font-size: 0.95rem;
            border-radius: 1.2rem;
          }
        }
        @media (max-width: 400px) {
          .register-component .register-card {
            padding: 1.4rem 1.2rem 1.8rem;
          }
          .register-component .register-header .icon-wrap {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .register-component .register-card {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .register-component .input-group {
          animation: fadeSlideUp 0.5s ease forwards;
          opacity: 0;
        }
        .register-component .input-group:nth-child(1) { animation-delay: 0.05s; }
        .register-component .input-group:nth-child(2) { animation-delay: 0.12s; }
        .register-component .input-group:nth-child(3) { animation-delay: 0.19s; }
        .register-component .input-group:nth-child(4) { animation-delay: 0.26s; }
        .register-component .register-btn {
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.33s;
          opacity: 0;
        }
        .register-component .register-footer {
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.40s;
          opacity: 0;
        }
      `}</style>

      <div className="register-component">
        <div className="register-card" role="main" aria-labelledby="register-heading">
          <div className="register-header">
            <div className="icon-wrap" aria-hidden="true">
              <i className="fas fa-user-plus"></i>
            </div>
            <h1 id="register-heading">Create Account</h1>
            <p>Join our academic community</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="input-group">
              <label htmlFor="fullName">
                <i className="fas fa-user" aria-hidden="true"></i> Full Name
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="fullName"
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => handleChange('name', e.target.value, validateName, setNameError)}
                  onBlur={() => handleBlur('name', validateName, setNameError)}
                  required
                  autoComplete="name"
                />
                <i className="fas fa-user input-icon" aria-hidden="true"></i>
              </div>
              <div className={`form-feedback ${nameError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Please enter your full name</span>
              </div>
            </div>

            {/* University */}
            <div className="input-group">
              <label htmlFor="university">
                <i className="fas fa-university" aria-hidden="true"></i> University Name
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="university"
                  placeholder="e.g. Stanford University"
                  value={university}
                  onChange={(e) => handleChange('uni', e.target.value, validateUni, setUniError)}
                  onBlur={() => handleBlur('uni', validateUni, setUniError)}
                  required
                  autoComplete="organization"
                />
                <i className="fas fa-university input-icon" aria-hidden="true"></i>
              </div>
              <div className={`form-feedback ${uniError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Please enter your university</span>
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">
                <i className="fas fa-envelope" aria-hidden="true"></i> Email Address
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => handleChange('email', e.target.value, validateEmail, setEmailError)}
                  onBlur={() => handleBlur('email', validateEmail, setEmailError)}
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
              <label htmlFor="password">
                <i className="fas fa-lock" aria-hidden="true"></i> Password
              </label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={(e) => handleChange('pw', e.target.value, validatePassword, setPwError)}
                  onBlur={() => handleBlur('pw', validatePassword, setPwError)}
                  required
                  minLength="8"
                  autoComplete="new-password"
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
              <div className={`form-feedback ${pwError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Password must be at least 8 characters</span>
              </div>
            </div>

            <button type="submit" className="register-btn">
              <span>Sign Up</span>
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>

          <div className="register-footer">
            Already have an account? <a href="#">Log in</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;