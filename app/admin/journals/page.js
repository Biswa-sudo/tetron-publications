'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JournalsListPage() {
  const router = useRouter();
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  // ---------- Authentication check ----------
  // useEffect(() => {
  //   const token = localStorage.getItem('adminToken');
  //   if (!token) {
  //     router.push('/admin/login');
  //   }
  // }, [router]);

  // ---------- Fetch journals ----------
  const fetchJournals = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/journals');
      if (!res.ok) throw new Error('Failed to fetch journals');
      const data = await res.json();
      setJournals(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  // ---------- Delete journal ----------
  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/journals/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete');

      setMessage({ type: 'success', text: `Journal "${title}" deleted successfully` });
      fetchJournals(); // Refresh list
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  // ---------- Render ----------
  return (
    <>
      <Header />
      <section
        className="py-3 text-white"
        style={{ background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)' }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Manage Journals</h2>
          <div>
            <Link href="/admin/add-journal" className="btn btn-outline-light btn-sm me-2">
              + Add New
            </Link>
            <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
              Logout
            </button>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
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

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading journals...</p>
              </div>
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : journals.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted fs-5">No journals found.</p>
                <Link href="/admin/add-journal" className="btn btn-primary">
                  Create Your First Journal
                </Link>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Categories</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {journals.map((journal) => (
                      <tr key={journal.id}>
                        <td>{journal.id}</td>
                        <td>
                          <Link href={`/admin/edit-journal?id=${journal.id}`} className="text-decoration-none fw-bold">
                            {journal.title}
                          </Link>
                        </td>
                        <td>
                          <span className={`badge ${journal.status === 'publish' ? 'bg-success' : 'bg-warning'}`}>
                            {journal.status}
                          </span>
                        </td>
                        <td>{new Date(journal.date).toLocaleDateString()}</td>
                        <td>
                          {journal.categories && journal.categories.length > 0 ? (
                            <span className="badge bg-secondary me-1">
                              {journal.categories.length} category{journal.categories.length > 1 ? 's' : ''}
                            </span>
                          ) : (
                            <span className="text-muted">None</span>
                          )}
                        </td>
                        <td>
                          <div className="btn-group btn-group-sm" role="group">
                            <Link
                              href={`/admin/edit-journal?id=${journal.id}`}
                              className="btn btn-outline-primary"
                            >
                              <i className="bi bi-pencil"></i> Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(journal.id, journal.title)}
                              className="btn btn-outline-danger"
                            >
                              <i className="bi bi-trash"></i> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}