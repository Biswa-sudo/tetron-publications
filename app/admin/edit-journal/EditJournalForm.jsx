'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EditJournalForm({ id }) {
  const router = useRouter();

  // ---------- UI states ----------
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [categories, setCategories] = useState([]);

  // ---------- Form states (all fields) ----------
  const [pageTitle, setPageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [citationTitle, setCitationTitle] = useState('');
  const [citationAuthor, setCitationAuthor] = useState('');
  const [citationPubDate, setCitationPubDate] = useState('');
  const [journalTitle, setJournalTitle] = useState('');
  const [volume, setVolume] = useState('');
  const [issue, setIssue] = useState('');
  const [firstPage, setFirstPage] = useState('');
  const [lastPage, setLastPage] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [abstractUrl, setAbstractUrl] = useState('');
  const [language, setLanguage] = useState('');
  const [metaJournalName, setMetaJournalName] = useState('');
  const [metaVolume, setMetaVolume] = useState('');
  const [metaIssue, setMetaIssue] = useState('');
  const [metaFirstPage, setMetaFirstPage] = useState('');
  const [metaLastPage, setMetaLastPage] = useState('');
  const [metaPdfUrl, setMetaPdfUrl] = useState('');

  // ---------- Fetch data ----------
  useEffect(() => {
    if (!id) {
      setError('No journal ID provided');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const catRes = await fetch('/api/categories');
        if (catRes.ok) {
          const catData = await catRes.json();
          setCategories(catData);
        }

        // Fetch journal data
        const journalRes = await fetch(`/api/journals/${id}`);
        if (!journalRes.ok) throw new Error('Failed to fetch journal');
        const data = await journalRes.json();

        // Populate form fields
        setPageTitle(data.title || '');
        setDescription(data.excerpt || '');
        setSelectedCategories(data.categories || []);
        setCitationTitle(data.citation_title || '');
        setCitationAuthor(data.citation_author || '');
        setCitationPubDate(data.citation_publication_date || '');
        setJournalTitle(data.journal_title || '');
        setVolume(data.volume || '');
        setIssue(data.issue || '');
        setFirstPage(data.first_page || '');
        setLastPage(data.last_page || '');
        setPdfUrl(data.pdf_url || '');
        setAbstractUrl(data.abstract_url || '');
        setLanguage(data.language || '');
        setMetaJournalName(data.meta_journal_name || '');
        setMetaVolume(data.meta_volume || '');
        setMetaIssue(data.meta_issue || '');
        setMetaFirstPage(data.meta_first_page || '');
        setMetaLastPage(data.meta_last_page || '');
        setMetaPdfUrl(data.meta_pdf_url || '');

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // ---------- Category handlers ----------
  const handleCategoryChange = (termTaxonomyId) => {
    setSelectedCategories(prev => {
      if (prev.includes(termTaxonomyId)) {
        return prev.filter(id => id !== termTaxonomyId);
      } else {
        return [...prev, termTaxonomyId];
      }
    });
  };

  const handleParentCategoryChange = (parentId, childIds) => {
    const allIds = [parentId, ...childIds];
    const allSelected = allIds.every(id => selectedCategories.includes(id));
    
    if (allSelected) {
      setSelectedCategories(prev => prev.filter(id => !allIds.includes(id)));
    } else {
      setSelectedCategories(prev => {
        const newSelection = [...prev];
        allIds.forEach(id => {
          if (!newSelection.includes(id)) {
            newSelection.push(id);
          }
        });
        return newSelection;
      });
    }
  };

  // ---------- Submit handler ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!pageTitle.trim()) {
      setMessage({ type: 'error', text: 'Please enter a page title.' });
      return;
    }

    setSaving(true);

    try {
      const token = localStorage.getItem('adminToken');

      const postData = {
        title: pageTitle,
        excerpt: description,
        categories: selectedCategories,
        citation_title: citationTitle,
        citation_author: citationAuthor,
        citation_publication_date: citationPubDate,
        journal_title: journalTitle,
        volume: volume,
        issue: issue,
        first_page: firstPage,
        last_page: lastPage,
        pdf_url: pdfUrl,
        abstract_url: abstractUrl,
        language: language,
        meta_journal_name: metaJournalName,
        meta_volume: metaVolume,
        meta_issue: metaIssue,
        meta_first_page: metaFirstPage,
        meta_last_page: metaLastPage,
        meta_pdf_url: metaPdfUrl,
      };

      const response = await fetch(`/api/journals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update journal.');
      }

      setMessage({ type: 'success', text: `Journal "${pageTitle}" updated successfully!` });
      
      setTimeout(() => {
        router.push('/admin/journals');
      }, 2000);

    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  // ---------- Render nested categories ----------
  const renderCategories = (categoryList, depth = 0) => {
    return categoryList.map((cat) => (
      <div key={cat.term_id} className="category-group mb-2" style={{ marginLeft: depth * 20 }}>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`cat-${cat.term_id}`}
            checked={selectedCategories.includes(cat.term_taxonomy_id)}
            onChange={() => {
              if (cat.children && cat.children.length > 0) {
                const allChildIds = [];
                const collectIds = (items) => {
                  items.forEach(item => {
                    allChildIds.push(item.term_taxonomy_id);
                    if (item.children && item.children.length > 0) {
                      collectIds(item.children);
                    }
                  });
                };
                collectIds(cat.children);
                handleParentCategoryChange(cat.term_taxonomy_id, allChildIds);
              } else {
                handleCategoryChange(cat.term_taxonomy_id);
              }
            }}
          />
          <label className={`form-check-label ${depth === 0 ? 'fw-bold' : ''}`} htmlFor={`cat-${cat.term_id}`}>
            {cat.name}
          </label>
          {cat.children && cat.children.length > 0 && (
            <span className="badge bg-secondary ms-2">{cat.children.length}</span>
          )}
        </div>
        
        {cat.children && cat.children.length > 0 && (
          <div className="ms-3 mt-1" style={{ borderLeft: '2px solid #dee2e6', paddingLeft: '15px' }}>
            {renderCategories(cat.children, depth + 1)}
          </div>
        )}
      </div>
    ));
  };

  // ---------- Loading & error states ----------
  if (loading) {
    return (
      <>
        <Header />
        <div className="container my-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Loading journal...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="container my-5">
          <div className="alert alert-danger">{error}</div>
          <a href="/admin/journals" className="btn btn-primary">Back to Journals</a>
        </div>
        <Footer />
      </>
    );
  }

  // ---------- Render the form ----------
  return (
    <>
      <Header />
      <section
        className="py-3 text-white"
        style={{ background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)' }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Edit Journal</h2>
          <div>
            <a href="/admin/journals" className="btn btn-outline-light btn-sm me-2">
              ← Back
            </a>
            <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
              Logout
            </button>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
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
                  {/* TOP SECTION */}
                  <div className="bg-light p-4 rounded-3 mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#2b1c6b' }}>
                      📄 Page Information
                    </h5>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="pageTitle" className="form-label fw-semibold">
                          Page Title *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pageTitle"
                          value={pageTitle}
                          onChange={(e) => setPageTitle(e.target.value)}
                          required
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="description" className="form-label fw-semibold">
                          Description (Excerpt)
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="3"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label className="form-label fw-semibold">Categories</label>
                        <div style={{ maxHeight: '300px', overflowY: 'auto', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
                          {renderCategories(categories)}
                          <div className="mt-2">
                            <small className="text-muted">
                              Selected: <span className="fw-bold">{selectedCategories.length}</span> categories
                            </small>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary ms-2"
                              onClick={() => setSelectedCategories([])}
                            >
                              Clear All
                            </button>
                          </div>
                        </div>
                        <div className="form-text">Select all categories that apply to this journal</div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 1: Google Scholar Citation Tags */}
                  <div className="bg-light p-4 rounded-3 mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#2b1c6b' }}>
                      📚 Google Scholar Citation Tags
                    </h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="citationTitle" className="form-label fw-semibold">
                          Citation Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="citationTitle"
                          value={citationTitle}
                          onChange={(e) => setCitationTitle(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="citationAuthor" className="form-label fw-semibold">
                          Citation Author(s)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="citationAuthor"
                          value={citationAuthor}
                          onChange={(e) => setCitationAuthor(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="citationPubDate" className="form-label fw-semibold">
                          Citation Publication Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="citationPubDate"
                          value={citationPubDate}
                          onChange={(e) => setCitationPubDate(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="journalTitle" className="form-label fw-semibold">
                          Journal Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="journalTitle"
                          value={journalTitle}
                          onChange={(e) => setJournalTitle(e.target.value)}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="volume" className="form-label fw-semibold">
                          Volume
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="volume"
                          value={volume}
                          onChange={(e) => setVolume(e.target.value)}
                          placeholder="e.g. 12"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="issue" className="form-label fw-semibold">
                          Issue
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="issue"
                          value={issue}
                          onChange={(e) => setIssue(e.target.value)}
                          placeholder="e.g. 3"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="firstPage" className="form-label fw-semibold">
                          First Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstPage"
                          value={firstPage}
                          onChange={(e) => setFirstPage(e.target.value)}
                          placeholder="e.g. 45"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastPage" className="form-label fw-semibold">
                          Last Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastPage"
                          value={lastPage}
                          onChange={(e) => setLastPage(e.target.value)}
                          placeholder="e.g. 67"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="pdfUrl" className="form-label fw-semibold">
                          PDF URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="pdfUrl"
                          value={pdfUrl}
                          onChange={(e) => setPdfUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="abstractUrl" className="form-label fw-semibold">
                          Abstract URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="abstractUrl"
                          value={abstractUrl}
                          onChange={(e) => setAbstractUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="language" className="form-label fw-semibold">
                          Language
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="language"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          placeholder="e.g. English"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Google Scholar Metadata */}
                  <div className="bg-light p-4 rounded-3 mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#2b1c6b' }}>
                      🔍 Google Scholar Metadata
                    </h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaJournalName" className="form-label fw-semibold">
                          Journal Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaJournalName"
                          value={metaJournalName}
                          onChange={(e) => setMetaJournalName(e.target.value)}
                          placeholder="Journal name (metadata)"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaVolume" className="form-label fw-semibold">
                          Volume
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaVolume"
                          value={metaVolume}
                          onChange={(e) => setMetaVolume(e.target.value)}
                          placeholder="e.g. 12"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaIssue" className="form-label fw-semibold">
                          Issue
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaIssue"
                          value={metaIssue}
                          onChange={(e) => setMetaIssue(e.target.value)}
                          placeholder="e.g. 3"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaFirstPage" className="form-label fw-semibold">
                          First Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaFirstPage"
                          value={metaFirstPage}
                          onChange={(e) => setMetaFirstPage(e.target.value)}
                          placeholder="e.g. 45"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaLastPage" className="form-label fw-semibold">
                          Last Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaLastPage"
                          value={metaLastPage}
                          onChange={(e) => setMetaLastPage(e.target.value)}
                          placeholder="e.g. 67"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaPdfUrl" className="form-label fw-semibold">
                          PDF URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="metaPdfUrl"
                          value={metaPdfUrl}
                          onChange={(e) => setMetaPdfUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                    disabled={saving}
                    style={{
                      background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)',
                      border: 'none',
                    }}
                  >
                    {saving ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status" />
                    ) : null}
                    {saving ? 'Saving...' : 'Update Journal'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}