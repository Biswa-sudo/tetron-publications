"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
        // Not logged in, stay on login page
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validate email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      setSuccess("Login successful! Redirecting...");
      
      // Redirect to home page after short delay
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setEmail("demo@tetron.com");
    setPassword("demo123");
    // Auto-submit after setting demo credentials
    setTimeout(() => {
      handleSubmit(new Event("submit"));
    }, 100);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <Link href="/" className="login-logo">
              <img src="/tetron.png" alt="Tetron Publications" />
            </Link>
            <h2>Welcome Back</h2>
            <p className="text-muted">Sign in to your account to continue</p>
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

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="current-password"
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

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span className="arrow">→</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="demo-btn"
              onClick={handleDemoLogin}
              disabled={loading}
            >
              Try Demo Account
            </button>
          </form>

          {/* Footer */}
          <div className="login-footer">
            <p>
              Don't have an account?{" "}
              <Link href="/register" className="register-link">
                Create an account
              </Link>
            </p>
            <p className="terms">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-link">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-link">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
          padding: 1.5rem;
        }

        .login-container {
          width: 100%;
          max-width: 420px;
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

        .login-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.3s ease;
        }

        .login-card:hover {
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
        }

        /* ===== HEADER ===== */
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo {
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .login-logo img {
          height: 60px;
          width: auto;
        }

        .login-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.5rem;
        }

        .login-header .text-muted {
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
        .login-form {
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 1.25rem 0 1.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #4a5568;
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: #3182ce;
        }

        .checkbox-label input[type="checkbox"]:disabled {
          cursor: not-allowed;
        }

        .checkbox-label span {
          user-select: none;
        }

        .forgot-link {
          font-size: 0.9rem;
          color: #3182ce;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .forgot-link:hover {
          color: #2c5282;
          text-decoration: underline;
        }

        /* ===== BUTTONS ===== */
        .login-btn {
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

        .login-btn:hover:not(:disabled) {
          background: #2c5282;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(49, 130, 206, 0.3);
        }

        .login-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-btn .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .login-btn:hover:not(:disabled) .arrow {
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

        .demo-btn {
          width: 100%;
          margin-top: 0.75rem;
          padding: 0.7rem;
          font-size: 0.95rem;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          background: white;
          color: #4a5568;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .demo-btn:hover:not(:disabled) {
          background: #f7fafc;
          border-color: #cbd5e0;
        }

        .demo-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ===== FOOTER ===== */
        .login-footer {
          margin-top: 2rem;
          text-align: center;
        }

        .login-footer p {
          font-size: 0.9rem;
          color: #4a5568;
          margin: 0.5rem 0;
        }

        .register-link {
          color: #3182ce;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .register-link:hover {
          color: #2c5282;
          text-decoration: underline;
        }

        .terms {
          font-size: 0.8rem !important;
          color: #718096 !important;
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 480px) {
          .login-card {
            padding: 1.5rem;
          }

          .login-header h2 {
            font-size: 1.5rem;
          }

          .form-options {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .login-logo img {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}