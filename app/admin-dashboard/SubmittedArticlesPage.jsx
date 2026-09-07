"use client";
import React, { useState } from 'react';

const SubmittedArticlesPage = () => {
  // ---------- Dummy data with journal field ----------
  const initialArticles = [
    {
      id: 1,
      userName: 'Dr. Sarah Chen',
      articleTitle: 'Quantum Computing Advances in Drug Discovery',
      journal: 'Nature Communications',
      submittedDate: '2026-01-18',
      fileName: 'quantum_drug_discovery.pdf',
    },
    {
      id: 2,
      userName: 'Prof. James Wilson',
      articleTitle: 'Neural Network Optimization for Real-time Applications',
      journal: 'IEEE Transactions',
      submittedDate: '2026-01-16',
      fileName: 'neural_net_optimization.pdf',
    },
    {
      id: 3,
      userName: 'Dr. Emily Rodriguez',
      articleTitle: 'Climate Change Modeling with Machine Learning',
      journal: 'Scientific Reports',
      submittedDate: '2026-01-14',
      fileName: 'climate_modeling_ml.pdf',
    },
    {
      id: 4,
      userName: 'Prof. Michael Kim',
      articleTitle: 'Renewable Energy Systems for Smart Cities',
      journal: 'Journal of Advanced Research',
      submittedDate: '2026-01-11',
      fileName: 'renewable_energy_smart_cities.pdf',
    },
    {
      id: 5,
      userName: 'Dr. Lisa Thompson',
      articleTitle: 'AI in Healthcare: Opportunities and Challenges',
      journal: 'PLOS ONE',
      submittedDate: '2026-01-09',
      fileName: 'ai_healthcare.pdf',
    },
    {
      id: 6,
      userName: 'Dr. Raj Patel',
      articleTitle: 'Blockchain for Secure Academic Credentials',
      journal: 'International Journal of Science',
      submittedDate: '2026-01-06',
      fileName: 'blockchain_academic.pdf',
    },
    {
      id: 7,
      userName: 'Prof. Maria Garcia',
      articleTitle: 'Sustainable Agriculture using IoT Sensors',
      journal: 'Scientific Reports',
      submittedDate: '2025-12-30',
      fileName: 'sustainable_agri_iot.pdf',
    },
  ];

  // ---------- State ----------
  const [articles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');

  // ---------- Filter logic (includes journal) ----------
  const filteredArticles = articles.filter((article) =>
    article.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.articleTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------- Format date ----------
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // ---------- Download handler ----------
  const handleDownload = (fileName, articleTitle) => {
    // In a real app, this would trigger a file download from a server.
    alert(`Downloading "${articleTitle}" (${fileName})`);
  };

  return (
    <>
      <style>{`
        /* ---- Scoped styles for SubmittedArticlesPage ---- */
        .submitted-articles-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .submitted-articles-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 2rem 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .submitted-articles-page .container {
          max-width: 1100px; /* slightly wider to accommodate extra column */
          width: 100%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 2rem;
          padding: 2rem 2.2rem;
          box-shadow:
            0 30px 60px -20px rgba(0, 20, 40, 0.25),
            0 8px 24px -8px rgba(0, 20, 40, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .submitted-articles-page .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .submitted-articles-page .header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .submitted-articles-page .header h1 i {
          color: #4a7cf7;
        }
        .submitted-articles-page .header .stats {
          font-size: 0.9rem;
          color: #5e6f8d;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.4rem 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .submitted-articles-page .filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .submitted-articles-page .filters input {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-family: inherit;
          border: 1.5px solid rgba(0, 0, 0, 0.06);
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.7);
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          color: #0b1a33;
          flex: 1;
          min-width: 200px;
        }
        .submitted-articles-page .filters input:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 0 3px rgba(74, 124, 247, 0.08);
          background: #fff;
        }
        .submitted-articles-page .filters input::placeholder {
          color: #9aabbf;
        }
        .submitted-articles-page .table-container {
          overflow-x: auto;
          margin-top: 0.5rem;
        }
        .submitted-articles-page table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .submitted-articles-page table thead {
          background: rgba(74, 124, 247, 0.04);
        }
        .submitted-articles-page table th {
          text-align: left;
          padding: 0.8rem 1rem;
          font-weight: 600;
          color: #1d2b44;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .submitted-articles-page table td {
          padding: 0.8rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
          color: #1d2b44;
          vertical-align: middle;
        }
        .submitted-articles-page table tbody tr:hover {
          background: rgba(74, 124, 247, 0.02);
        }
        /* Journal badge */
        .submitted-articles-page .journal-badge {
          display: inline-block;
          background: rgba(74, 124, 247, 0.08);
          color: #4a7cf7;
          padding: 0.2rem 0.7rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .submitted-articles-page .download-btn {
          background: none;
          border: none;
          color: #4a7cf7;
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0.3rem 0.6rem;
          border-radius: 0.5rem;
          transition: background 0.2s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: inherit;
          font-weight: 500;
        }
        .submitted-articles-page .download-btn:hover {
          background: rgba(74, 124, 247, 0.08);
          color: #3b6de7;
        }
        .submitted-articles-page .download-btn i {
          font-size: 1rem;
        }
        .submitted-articles-page .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #7c8ca8;
        }
        .submitted-articles-page .empty-state i {
          font-size: 3rem;
          color: #d1d9e6;
          margin-bottom: 1rem;
          display: block;
        }
        .submitted-articles-page .empty-state p {
          font-size: 1rem;
        }

        /* ---- Responsive ---- */
        @media (max-width: 720px) {
          .submitted-articles-page .container {
            padding: 1.5rem;
          }
          .submitted-articles-page .header {
            flex-direction: column;
            align-items: flex-start;
          }
          .submitted-articles-page .filters {
            flex-direction: column;
            align-items: stretch;
          }
          .submitted-articles-page .filters input {
            min-width: auto;
          }
          .submitted-articles-page table {
            font-size: 0.8rem;
          }
          .submitted-articles-page table th,
          .submitted-articles-page table td {
            padding: 0.5rem 0.6rem;
          }
          .submitted-articles-page .download-btn {
            font-size: 0.9rem;
          }
        }
        @media (max-width: 480px) {
          .submitted-articles-page .container {
            padding: 1rem;
          }
          .submitted-articles-page table th,
          .submitted-articles-page table td {
            padding: 0.4rem 0.5rem;
            font-size: 0.75rem;
          }
          .submitted-articles-page .download-btn {
            font-size: 0.8rem;
            padding: 0.2rem 0.4rem;
          }
          .submitted-articles-page .journal-badge {
            font-size: 0.7rem;
            padding: 0.1rem 0.5rem;
          }
        }
      `}</style>

      <div className="submitted-articles-page">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1>
              <i className="fas fa-file-alt" aria-hidden="true"></i> Submitted Articles
            </h1>
            <div className="stats">
              <i className="fas fa-file-pdf" aria-hidden="true"></i> {filteredArticles.length} articles
            </div>
          </div>

          {/* Search */}
          <div className="filters">
            <input
              type="text"
              placeholder="Search by user name, article title, or journal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Article Table */}
          <div className="table-container">
            {filteredArticles.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-file-slash" aria-hidden="true"></i>
                <p>No articles match your search.</p>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Submitted Date</th>
                    <th>User Name</th>
                    <th>Article Title</th>
                    <th>Journal</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArticles.map((article) => (
                    <tr key={article.id}>
                      <td>{formatDate(article.submittedDate)}</td>
                      <td>{article.userName}</td>
                      <td>{article.articleTitle}</td>
                      <td>
                        <span className="journal-badge">{article.journal}</span>
                      </td>
                      <td>
                        <button
                          className="download-btn"
                          onClick={() => handleDownload(article.fileName, article.articleTitle)}
                          aria-label={`Download ${article.articleTitle}`}
                        >
                          <i className="fas fa-download" aria-hidden="true"></i>
                          <span className="download-text">Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmittedArticlesPage;