"use client";
import React, { useState } from 'react';

const AddArticlePage = () => {
  // ---------- Dummy data ----------
  const volumes = [
    { id: 1, name: 'Volume 1: Foundations (2024)' },
    { id: 2, name: 'Volume 2: Advances in AI (2024)' },
    { id: 3, name: 'Volume 3: Sustainable Systems (2025)' },
    { id: 4, name: 'Volume 4: Quantum Horizons (2025)' },
  ];

  const issues = [
    { id: 101, name: 'Issue 1: Inaugural Edition', volumeId: 1 },
    { id: 102, name: 'Issue 2: Spring Collection', volumeId: 1 },
    { id: 201, name: 'Issue 1: AI Revolution', volumeId: 2 },
    { id: 301, name: 'Issue 1: Green Energy', volumeId: 3 },
    { id: 401, name: 'Issue 1: Quantum Leap', volumeId: 4 },
  ];

  const dummyJournals = [
    'Journal of Advanced Research',
    'International Journal of Science',
    'Nature Communications',
    'Scientific Reports',
  ];

  const articleTypes = ['Research Article', 'Review', 'Case Study', 'Short Communication', 'Editorial', 'Book Review'];

  // ---------- State ----------
  const [formData, setFormData] = useState({
    articleTitle: '',
    publishDate: '',
    volume: '',
    issue: '',
    selectedJournals: [],
    recentPublication: false,
    authorName: '',
    articleType: '',
    pages: '',
    abstract: '',
    references: '',
    funding: '',
    authorsAndAffiliations: '',
    correspondingAuthor: '',
    publishersNote: '',
    rightsAndPermissions: '',
    citeThisArticle: '',
    published: '',
    versionOfRecord: '',
    issueDate: '',
    doi: '',
    shareThisArticle: '',
  });

  const [formErrors, setFormErrors] = useState({});

  // ---------- Handlers ----------
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'selectedJournals') {
      // Handle checkbox group
      const { value: journal } = e.target;
      setFormData((prev) => {
        const current = prev.selectedJournals;
        const newSelection = current.includes(journal)
          ? current.filter((j) => j !== journal)
          : [...current, journal];
        return { ...prev, selectedJournals: newSelection };
      });
      if (formErrors.selectedJournals) {
        setFormErrors((prev) => ({ ...prev, selectedJournals: '' }));
      }
    } else if (type === 'checkbox' && name === 'recentPublication') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error for this field if any
      if (formErrors[name]) {
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.articleTitle.trim()) errors.articleTitle = 'Article title is required.';
    if (!formData.publishDate) errors.publishDate = 'Publish date is required.';
    if (!formData.volume) errors.volume = 'Please select a volume.';
    if (!formData.issue) errors.issue = 'Please select an issue.';
    if (formData.selectedJournals.length === 0) errors.selectedJournals = 'Please select at least one journal.';
    if (!formData.authorName.trim()) errors.authorName = 'Author name is required.';
    if (!formData.articleType) errors.articleType = 'Please select an article type.';
    if (!formData.abstract.trim()) errors.abstract = 'Abstract is required.';
    if (!formData.authorsAndAffiliations.trim()) errors.authorsAndAffiliations = 'Authors and affiliations are required.';
    if (!formData.correspondingAuthor.trim()) errors.correspondingAuthor = 'Corresponding author is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    alert('Article submitted successfully! (demo)');
    console.log('Article Data:', formData);
    // Here you would send data to your backend
  };

  const handleSharableLink = (e) => {
    e.preventDefault();
    alert('Generating sharable link... (demo)');
    // In real app, you'd generate a DOI link or shareable URL
  };

  // Filter issues based on selected volume
  const filteredIssues = issues.filter((issue) => issue.volumeId === parseInt(formData.volume));

  return (
    <>
      <style>{`
        /* ---- Scoped styles for AddArticlePage ---- */
        .add-article-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .add-article-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 2rem 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .add-article-page .container {
          max-width: 900px;
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
        .add-article-page .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .add-article-page .header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .add-article-page .header h1 i {
          color: #4a7cf7;
        }

        /* ---- Form Sections ---- */
        .add-article-page .form-section {
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          padding-bottom: 1.5rem;
        }
        .add-article-page .form-section:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }
        .add-article-page .form-section h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0b1a33;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .add-article-page .form-section h2 i {
          color: #4a7cf7;
        }
        .add-article-page .form-section .section-subtitle {
          font-size: 0.85rem;
          color: #5e6f8d;
          margin-bottom: 1rem;
        }

        .add-article-page .form-group {
          margin-bottom: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .add-article-page .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
        }
        .add-article-page .form-group label i {
          margin-right: 0.3rem;
          color: #4a7cf7;
        }
        .add-article-page .form-group input,
        .add-article-page .form-group select,
        .add-article-page .form-group textarea {
          padding: 0.7rem 1rem;
          font-size: 0.95rem;
          font-family: inherit;
          border: 1.5px solid rgba(0, 0, 0, 0.06);
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.6);
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          color: #0b1a33;
          width: 100%;
          appearance: auto;
        }
        .add-article-page .form-group input:focus,
        .add-article-page .form-group select:focus,
        .add-article-page .form-group textarea:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 0 3px rgba(74, 124, 247, 0.08);
          background: #fff;
        }
        .add-article-page .form-group input.error,
        .add-article-page .form-group select.error,
        .add-article-page .form-group textarea.error {
          border-color: #e74c3c;
        }
        .add-article-page .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }
        .add-article-page .form-group .error-text {
          font-size: 0.8rem;
          color: #e74c3c;
          margin-top: 0.2rem;
        }

        /* ---- Checkbox Group ---- */
        .add-article-page .checkbox-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          padding-top: 0.2rem;
        }
        .add-article-page .checkbox-group label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          font-weight: 400;
          color: #1d2b44;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.4rem 1rem 0.4rem 0.6rem;
          border-radius: 1.2rem;
          border: 1.5px solid rgba(0, 0, 0, 0.04);
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .add-article-page .checkbox-group label:hover {
          background: rgba(74, 124, 247, 0.04);
          border-color: rgba(74, 124, 247, 0.2);
        }
        .add-article-page .checkbox-group label input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: #4a7cf7;
          cursor: pointer;
        }
        .add-article-page .checkbox-group label input[type="checkbox"]:checked + span {
          color: #4a7cf7;
        }

        /* ---- Single Checkbox ---- */
        .add-article-page .single-checkbox {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .add-article-page .single-checkbox input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #4a7cf7;
          cursor: pointer;
        }
        .add-article-page .single-checkbox label {
          font-size: 0.9rem;
          font-weight: 400;
          color: #1d2b44;
          cursor: pointer;
        }

        /* ---- Form Row (two columns) ---- */
        .add-article-page .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
        }

        /* ---- Buttons ---- */
        .add-article-page .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .add-article-page .submit-btn,
        .add-article-page .sharable-btn {
          padding: 0.8rem 1.5rem;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          border-radius: 1.2rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .add-article-page .submit-btn {
          color: #fff;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          box-shadow: 0 4px 16px -4px rgba(74, 124, 247, 0.3);
        }
        .add-article-page .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
        }
        .add-article-page .sharable-btn {
          color: #fff;
          background: linear-gradient(135deg, #2ecc71, #27ae60);
          box-shadow: 0 4px 16px -4px rgba(46, 204, 113, 0.3);
        }
        .add-article-page .sharable-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(46, 204, 113, 0.4);
        }

        /* ---- Responsive ---- */
        @media (max-width: 720px) {
          .add-article-page .container {
            padding: 1.5rem;
          }
          .add-article-page .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .add-article-page .checkbox-group {
            flex-direction: column;
            gap: 0.4rem;
          }
          .add-article-page .form-actions {
            flex-direction: column;
          }
          .add-article-page .form-actions button {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .add-article-page .container {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="add-article-page">
        <div className="container">
          <div className="header">
            <h1>
              <i className="fas fa-plus-circle" aria-hidden="true"></i> Add New Article
            </h1>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* ----- Article Details ----- */}
            <div className="form-section">
              <h2><i className="fas fa-info-circle"></i> Article Details</h2>
              <div className="form-group">
                <label htmlFor="articleTitle"><i className="fas fa-heading"></i> Article Title</label>
                <input
                  type="text"
                  id="articleTitle"
                  name="articleTitle"
                  placeholder="Enter the full article title"
                  value={formData.articleTitle}
                  onChange={handleInputChange}
                  className={formErrors.articleTitle ? 'error' : ''}
                />
                {formErrors.articleTitle && <div className="error-text">{formErrors.articleTitle}</div>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="publishDate"><i className="fas fa-calendar-alt"></i> Publish Date</label>
                  <input
                    type="date"
                    id="publishDate"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleInputChange}
                    className={formErrors.publishDate ? 'error' : ''}
                  />
                  {formErrors.publishDate && <div className="error-text">{formErrors.publishDate}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="articleType"><i className="fas fa-tag"></i> Article Type</label>
                  <select
                    id="articleType"
                    name="articleType"
                    value={formData.articleType}
                    onChange={handleInputChange}
                    className={formErrors.articleType ? 'error' : ''}
                  >
                    <option value="">— Select Type —</option>
                    {articleTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {formErrors.articleType && <div className="error-text">{formErrors.articleType}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="volume"><i className="fas fa-book"></i> Select Volume</label>
                  <select
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleInputChange}
                    className={formErrors.volume ? 'error' : ''}
                  >
                    <option value="">— Select Volume —</option>
                    {volumes.map((vol) => (
                      <option key={vol.id} value={vol.id}>{vol.name}</option>
                    ))}
                  </select>
                  {formErrors.volume && <div className="error-text">{formErrors.volume}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="issue"><i className="fas fa-calendar-day"></i> Select Issue</label>
                  <select
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    className={formErrors.issue ? 'error' : ''}
                    disabled={!formData.volume}
                  >
                    <option value="">— Select Issue —</option>
                    {filteredIssues.map((iss) => (
                      <option key={iss.id} value={iss.id}>{iss.name}</option>
                    ))}
                  </select>
                  {formErrors.issue && <div className="error-text">{formErrors.issue}</div>}
                </div>
              </div>

              <div className="form-group">
                <label><i className="fas fa-newspaper"></i> Journals</label>
                <div className="checkbox-group">
                  {dummyJournals.map((journal) => (
                    <label key={journal}>
                      <input
                        type="checkbox"
                        name="selectedJournals"
                        value={journal}
                        checked={formData.selectedJournals.includes(journal)}
                        onChange={handleInputChange}
                      />
                      <span>{journal}</span>
                    </label>
                  ))}
                </div>
                {formErrors.selectedJournals && <div className="error-text">{formErrors.selectedJournals}</div>}
              </div>

              <div className="form-group single-checkbox">
                <input
                  type="checkbox"
                  id="recentPublication"
                  name="recentPublication"
                  checked={formData.recentPublication}
                  onChange={handleInputChange}
                />
                <label htmlFor="recentPublication">Recent Publication</label>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="authorName"><i className="fas fa-user"></i> Author Name</label>
                  <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    placeholder="e.g. Dr. John Doe"
                    value={formData.authorName}
                    onChange={handleInputChange}
                    className={formErrors.authorName ? 'error' : ''}
                  />
                  {formErrors.authorName && <div className="error-text">{formErrors.authorName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="pages"><i className="fas fa-file-alt"></i> Pages</label>
                  <input
                    type="text"
                    id="pages"
                    name="pages"
                    placeholder="e.g. 1-10"
                    value={formData.pages}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="abstract"><i className="fas fa-align-left"></i> Abstract</label>
                <textarea
                  id="abstract"
                  name="abstract"
                  rows="4"
                  placeholder="Enter the article abstract..."
                  value={formData.abstract}
                  onChange={handleInputChange}
                  className={formErrors.abstract ? 'error' : ''}
                />
                {formErrors.abstract && <div className="error-text">{formErrors.abstract}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="references"><i className="fas fa-book"></i> References</label>
                <textarea
                  id="references"
                  name="references"
                  rows="3"
                  placeholder="Enter references (one per line)..."
                  value={formData.references}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="funding"><i className="fas fa-dollar-sign"></i> Funding</label>
                <textarea
                  id="funding"
                  name="funding"
                  rows="2"
                  placeholder="Enter funding information..."
                  value={formData.funding}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* ----- Author Information ----- */}
            <div className="form-section">
              <h2><i className="fas fa-user-tie"></i> Author Information</h2>
              <div className="form-group">
                <label htmlFor="authorsAndAffiliations"><i className="fas fa-users"></i> Authors and Affiliations</label>
                <textarea
                  id="authorsAndAffiliations"
                  name="authorsAndAffiliations"
                  rows="3"
                  placeholder="List authors with their affiliations..."
                  value={formData.authorsAndAffiliations}
                  onChange={handleInputChange}
                  className={formErrors.authorsAndAffiliations ? 'error' : ''}
                />
                {formErrors.authorsAndAffiliations && <div className="error-text">{formErrors.authorsAndAffiliations}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="correspondingAuthor"><i className="fas fa-envelope"></i> Corresponding Author</label>
                <input
                  type="text"
                  id="correspondingAuthor"
                  name="correspondingAuthor"
                  placeholder="e.g. Dr. Jane Smith, jsmith@university.edu"
                  value={formData.correspondingAuthor}
                  onChange={handleInputChange}
                  className={formErrors.correspondingAuthor ? 'error' : ''}
                />
                {formErrors.correspondingAuthor && <div className="error-text">{formErrors.correspondingAuthor}</div>}
              </div>
            </div>

            {/* ----- Additional Information ----- */}
            <div className="form-section">
              <h2><i className="fas fa-plus-circle"></i> Additional Information</h2>
              <div className="form-group">
                <label htmlFor="publishersNote"><i className="fas fa-edit"></i> Publisher's Note</label>
                <textarea
                  id="publishersNote"
                  name="publishersNote"
                  rows="2"
                  placeholder="Enter publisher's note..."
                  value={formData.publishersNote}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rightsAndPermissions"><i className="fas fa-copyright"></i> Rights and Permissions</label>
                <textarea
                  id="rightsAndPermissions"
                  name="rightsAndPermissions"
                  rows="2"
                  placeholder="Enter rights and permissions information..."
                  value={formData.rightsAndPermissions}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* ----- About This Article ----- */}
            <div className="form-section">
              <h2><i className="fas fa-info-circle"></i> About This Article</h2>
              <div className="form-group">
                <label htmlFor="citeThisArticle"><i className="fas fa-quote-right"></i> Cite This Article</label>
                <input
                  type="text"
                  id="citeThisArticle"
                  name="citeThisArticle"
                  placeholder="e.g. Smith, J. et al. (2026)..."
                  value={formData.citeThisArticle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="published"><i className="fas fa-calendar-check"></i> Published</label>
                  <input
                    type="text"
                    id="published"
                    name="published"
                    placeholder="e.g. 15 January 2026"
                    value={formData.published}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="versionOfRecord"><i className="fas fa-code-branch"></i> Version of Record</label>
                  <input
                    type="text"
                    id="versionOfRecord"
                    name="versionOfRecord"
                    placeholder="e.g. v1"
                    value={formData.versionOfRecord}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="issueDate"><i className="fas fa-calendar-day"></i> Issue Date</label>
                  <input
                    type="date"
                    id="issueDate"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="doi"><i className="fas fa-fingerprint"></i> DOI</label>
                  <input
                    type="text"
                    id="doi"
                    name="doi"
                    placeholder="e.g. 10.1234/abcd.2026.001"
                    value={formData.doi}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* ----- Share This Article ----- */}
            <div className="form-section">
              <h2><i className="fas fa-share-alt"></i> Share This Article</h2>
              <div className="form-group">
                <label htmlFor="shareThisArticle"><i className="fas fa-link"></i> Share This Article</label>
                <textarea
                  id="shareThisArticle"
                  name="shareThisArticle"
                  rows="2"
                  placeholder="Enter sharing information or social media links..."
                  value={formData.shareThisArticle}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* ----- Form Actions ----- */}
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                <i className="fas fa-save" aria-hidden="true"></i> Submit Article
              </button>
              <button type="button" className="sharable-btn" onClick={handleSharableLink}>
                <i className="fas fa-link" aria-hidden="true"></i> Get Sharable Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddArticlePage;