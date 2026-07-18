'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setLoading(true);

    try {
      // 🔁 Replace this fetch with your actual login API endpoint
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed.');
      }

      // Save token (or session) - adjust according to your auth method
      localStorage.setItem('adminToken', data.token); // or use cookies/session

      // Redirect to the admin dashboard (or add-journal page)
      router.push('/admin/add-journal');
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section
        className="py-3 text-white"
        style={{ background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)' }}
      >
        <div className="container">
          <h2 className="mb-0">Login</h2>
        </div>
      </section>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                {message.text && (
                  <div
                    className={`alert ${
                      message.type === 'success' ? 'alert-success' : 'alert-danger'
                    }`}
                    role="alert"
                  >
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                    disabled={loading}
                    style={{
                      background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)',
                      border: 'none',
                    }}
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </form>

                <p className="mt-3 text-center">
                  Don't have an account? <Link href="/admin/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}