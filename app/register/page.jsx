"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();

  // Check if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        // Not logged in, stay on register page
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validate name
    if (name.length < 2) {
      setError("Name must be at least 2 characters");
      setLoading(false);
      return;
    }

    // Validate email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Validate password
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Validate terms
    if (!acceptTerms) {
      setError("Please accept the Terms of Service and Privacy Policy");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setSuccess("Registration successful! Redirecting to login...");
      setError("");
      
      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAcceptTerms(false);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          {/* Header */}
          <div className="register-header">
            <Link href="/" className="register-logo">
              <img src="/tetron.png" alt="Tetron Publications" />
            </Link>
            <h2>Create Account</h2>
            <p className="text-muted">Join Tetron Publications today</p>
          </div>

          {/* Alerts */}
          {error && (
            <div className="alert alert-danger">
              <span className="alert-icon">⚠️</span>
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <span className="alert-icon">✅</span>
              {success}
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Create a password (min. 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex="-1"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  disabled={loading}
                />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="text-link">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-link">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="register-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <span className="arrow">→</span>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="register-footer">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="login-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .register-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
          padding: 1.5rem;
        }

        .register-container {
          width: 100%;
          max-width: 440px;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .register-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.3s ease;
        }

        .register-card:hover {
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
        }

        /* ===== HEADER ===== */
        .register-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .register-logo {
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .register-logo img {
          height: 60px;
          width: auto;
        }

        .register-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.5rem;
        }

        .register-header .text-muted {
          color: #718096;
          font-size: 0.95rem;
          margin: 0;
        }

        /* ===== ALERTS ===== */
        .alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
        }

        .alert-danger {
          background: #fed7d7;
          color: #9b2c2c;
          border: 1px solid #feb2b2;
        }

        .alert-success {
          background: #c6f6d5;
          color: #276749;
          border: 1px solid #9ae6b4;
        }

        .alert-icon {
          font-size: 1.1rem;
        }

        /* ===== FORM ===== */
        .register-form {
          margin-top: 0.5rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-control {
          width: 100%;
          padding: 0.7rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: white;
          color: #1a202c;
        }

        .form-control:focus {
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
          outline: none;
        }

        .form-control:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-control::placeholder {
          color: #a0aec0;
        }

        /* Password toggle */
        .password-wrapper {
          position: relative;
        }

        .password-wrapper .form-control {
          padding-right: 3.5rem;
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.25rem;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }

        .password-toggle:hover {
          opacity: 1;
        }

        /* ===== FORM OPTIONS ===== */
        .form-options {
          margin: 1.25rem 0 1.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #4a5568;
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          width: 16px;
          height: 16px;
          margin-top: 0.15rem;
          cursor: pointer;
          accent-color: #3182ce;
          flex-shrink: 0;
        }

        .checkbox-label input[type="checkbox"]:disabled {
          cursor: not-allowed;
        }

        .checkbox-label span {
          user-select: none;
          line-height: 1.4;
        }

        .text-link {
          color: #3182ce;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .text-link:hover {
          color: #2c5282;
          text-decoration: underline;
        }

        /* ===== BUTTONS ===== */
        .register-btn {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          background: #3182ce;
          border: none;
          border-radius: 8px;
          color: white;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .register-btn:hover:not(:disabled) {
          background: #2c5282;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(49, 130, 206, 0.3);
        }

        .register-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .register-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .register-btn .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .register-btn:hover:not(:disabled) .arrow {
          transform: translateX(4px);
        }

        .spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* ===== FOOTER ===== */
        .register-footer {
          margin-top: 2rem;
          text-align: center;
        }

        .register-footer p {
          font-size: 0.95rem;
          color: #4a5568;
          margin: 0;
        }

        .login-link {
          color: #3182ce;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .login-link:hover {
          color: #2c5282;
          text-decoration: underline;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 480px) {
          .register-card {
            padding: 1.5rem;
          }

          .register-header h2 {
            font-size: 1.5rem;
          }

          .register-logo img {
            height: 50px;
          }

          .checkbox-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}