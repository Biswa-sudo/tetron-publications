"use client";
import React, { useState, useRef } from 'react';

const SubmitArticlePage = () => {
  // State
  const [title, setTitle] = useState('');
  const [journal, setJournal] = useState('');
  const [file, setFile] = useState(null);
  const [titleError, setTitleError] = useState(false);
  const [journalError, setJournalError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const fileInputRef = useRef(null);

  // Dummy journal options
  const journalOptions = [
    'Journal of Advanced Research',
    'International Journal of Science',
    'Nature Communications',
    'Scientific Reports',
    'IEEE Transactions',
    'PLOS ONE',
  ];

  // Validators
  const validateTitle = (val) => val.trim().length >= 3;
  const validateJournal = (val) => val.trim() !== '';
  const validateFile = (file) => file !== null && file.type === 'application/zip';

  // Handlers
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (val.trim() === '') {
      setTitleError(false);
    } else {
      setTitleError(!validateTitle(val));
    }
  };

  const handleTitleBlur = () => {
    if (title.trim() === '') {
      setTitleError(false);
      return;
    }
    setTitleError(!validateTitle(title));
  };

  const handleJournalChange = (e) => {
    const val = e.target.value;
    setJournal(val);
    if (val.trim() === '') {
      setJournalError(false);
    } else {
      setJournalError(false);
    }
  };

  const handleJournalBlur = () => {
    if (journal.trim() === '') {
      setJournalError(false);
      return;
    }
    setJournalError(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (!selectedFile) {
      setFileError(false);
    } else {
      setFileError(selectedFile.type !== 'application/zip');
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(droppedFile);
      if (fileInputRef.current) {
        fileInputRef.current.files = dataTransfer.files;
      }
      setFileError(droppedFile.type !== 'application/zip');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTitleValid = validateTitle(title);
    const isJournalValid = validateJournal(journal);
    const isFileValid = validateFile(file);

    setTitleError(title.trim() !== '' && !isTitleValid);
    setJournalError(journal.trim() !== '' && !isJournalValid);
    setFileError(file !== null && !isFileValid);

    if (isTitleValid && isJournalValid && isFileValid) {
      alert('Article submitted successfully! (demo)');
      console.log({ title, journal, file: file.name });
      // Reset form
      // setTitle(''); setJournal(''); setFile(null); if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <style>{`
        /* ---- Styles (scoped to .submit-article-component) ---- */
        .submit-article-component * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .submit-article-component {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 1.5rem;
        }
        .submit-article-component .submit-card {
          max-width: 520px;
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
        .submit-article-component .submit-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 40px 80px -24px rgba(0, 20, 40, 0.3),
            0 8px 28px -8px rgba(0, 20, 40, 0.1);
        }
        .submit-article-component .submit-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .submit-article-component .submit-header .icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #f39c12, #e67e22);
          border-radius: 20px;
          color: #fff;
          font-size: 28px;
          margin-bottom: 1rem;
          box-shadow: 0 12px 24px -8px rgba(243, 156, 18, 0.3);
          transition: transform 0.3s ease;
        }
        .submit-article-component .submit-header .icon-wrap:hover {
          transform: scale(1.04) rotate(-2deg);
        }
        .submit-article-component .submit-header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .submit-article-component .submit-header p {
          color: #5e6f8d;
          font-size: 0.95rem;
          margin-top: 0.3rem;
          font-weight: 400;
        }
        .submit-article-component .submit-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .submit-article-component .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .submit-article-component .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .submit-article-component .input-group label i {
          color: #f39c12;
          font-size: 0.9rem;
          width: 1.1rem;
          text-align: center;
        }
        .submit-article-component .input-group .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .submit-article-component .input-group .input-wrapper input[type="text"],
        .submit-article-component .input-group .input-wrapper select {
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
          appearance: auto;
          cursor: pointer;
        }
        .submit-article-component .input-group .input-wrapper input[type="text"]::placeholder {
          color: #9aabbf;
          font-weight: 400;
          font-size: 0.9rem;
        }
        .submit-article-component .input-group .input-wrapper input[type="text"]:focus,
        .submit-article-component .input-group .input-wrapper select:focus {
          border-color: #f39c12;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(243, 156, 18, 0.12), inset 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        .submit-article-component .input-group .input-wrapper input[type="text"]:not(:placeholder-shown),
        .submit-article-component .input-group .input-wrapper select:not(:placeholder-shown) {
          background: #ffffff;
        }
        .submit-article-component .input-group .input-wrapper .input-icon {
          position: absolute;
          left: 1rem;
          color: #7c8ca8;
          font-size: 1rem;
          pointer-events: none;
          transition: color 0.25s ease;
        }
        .submit-article-component .input-group .input-wrapper input:focus ~ .input-icon,
        .submit-article-component .input-group .input-wrapper input:not(:placeholder-shown) ~ .input-icon,
        .submit-article-component .input-group .input-wrapper select:focus ~ .input-icon,
        .submit-article-component .input-group .input-wrapper select:not(:placeholder-shown) ~ .input-icon {
          color: #f39c12;
        }
        /* File input specific styling */
        .submit-article-component .input-group .input-wrapper input[type="file"] {
          padding-left: 2.8rem;
          cursor: pointer;
        }
        .submit-article-component .input-group .input-wrapper input[type="file"]::file-selector-button {
          display: none;
        }
        .submit-article-component .input-group .file-drop-zone {
          border: 2px dashed rgba(0, 0, 0, 0.08);
          border-radius: 1.2rem;
          padding: 1rem 1rem 1rem 2.8rem;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: border-color 0.25s ease, background 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        .submit-article-component .input-group .file-drop-zone.dragover {
          border-color: #f39c12;
          background: rgba(243, 156, 18, 0.05);
        }
        .submit-article-component .input-group .file-drop-zone .file-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex: 1;
          min-width: 0;
        }
        .submit-article-component .input-group .file-drop-zone .file-info i {
          color: #f39c12;
          font-size: 1.2rem;
        }
        .submit-article-component .input-group .file-drop-zone .file-info span {
          font-size: 0.9rem;
          color: #1d2b44;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .submit-article-component .input-group .file-drop-zone .file-info .placeholder {
          color: #9aabbf;
        }
        .submit-article-component .input-group .file-drop-zone .file-actions {
          display: flex;
          gap: 0.5rem;
        }
        .submit-article-component .input-group .file-drop-zone .file-actions button {
          background: none;
          border: none;
          color: #7c8ca8;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0.2rem 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .submit-article-component .input-group .file-drop-zone .file-actions button:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #e74c3c;
        }
        .submit-article-component .input-group .file-drop-zone .file-actions button.browse-btn {
          color: #f39c12;
          font-weight: 600;
        }
        .submit-article-component .input-group .file-drop-zone .file-actions button.browse-btn:hover {
          background: rgba(243, 156, 18, 0.08);
          color: #d68910;
        }
        .submit-article-component .input-group .note {
          font-size: 0.8rem;
          color: #5e6f8d;
          margin-top: 0.2rem;
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          background: rgba(243, 156, 18, 0.06);
          padding: 0.6rem 0.8rem;
          border-radius: 0.8rem;
          border-left: 3px solid #f39c12;
        }
        .submit-article-component .input-group .note i {
          color: #f39c12;
          margin-top: 0.1rem;
        }
        .submit-article-component .form-feedback {
          display: none;
          margin-top: 0.2rem;
          font-size: 0.82rem;
          font-weight: 500;
          align-items: center;
          gap: 0.4rem;
          color: #e74c3c;
        }
        .submit-article-component .form-feedback.show {
          display: flex;
        }
        .submit-article-component .form-feedback.success {
          color: #2ecc71;
        }
        .submit-article-component .submit-btn {
          margin-top: 0.4rem;
          padding: 0.95rem 1.5rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #f39c12, #e67e22);
          border: none;
          border-radius: 1.5rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease;
          box-shadow: 0 8px 24px -6px rgba(243, 156, 18, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          letter-spacing: 0.01em;
        }
        .submit-article-component .submit-btn i {
          font-size: 1.05rem;
          transition: transform 0.25s ease;
        }
        .submit-article-component .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px -8px rgba(243, 156, 18, 0.5);
          background: linear-gradient(135deg, #e08e0b, #d35400);
        }
        .submit-article-component .submit-btn:active {
          transform: translateY(0px);
          box-shadow: 0 6px 16px -4px rgba(243, 156, 18, 0.4);
        }
        .submit-article-component .submit-btn:hover i {
          transform: translateX(4px);
        }
        .submit-article-component .submit-footer {
          text-align: center;
          margin-top: 1.8rem;
          font-size: 0.9rem;
          color: #5e6f8d;
        }
        .submit-article-component .submit-footer a {
          color: #f39c12;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1.5px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .submit-article-component .submit-footer a:hover {
          border-bottom-color: #f39c12;
          color: #d68910;
        }
        @media (max-width: 540px) {
          .submit-article-component .submit-card {
            padding: 1.8rem 1.5rem 2.2rem;
            border-radius: 1.8rem;
          }
          .submit-article-component .submit-header h1 {
            font-size: 1.5rem;
          }
          .submit-article-component .submit-header .icon-wrap {
            width: 54px;
            height: 54px;
            font-size: 24px;
            border-radius: 16px;
          }
          .submit-article-component .input-group .input-wrapper input[type="text"],
          .submit-article-component .input-group .input-wrapper select,
          .submit-article-component .input-group .file-drop-zone {
            padding: 0.8rem 1rem 0.8rem 2.6rem;
            font-size: 0.9rem;
            border-radius: 1rem;
          }
          .submit-article-component .submit-btn {
            padding: 0.85rem 1.2rem;
            font-size: 0.95rem;
            border-radius: 1.2rem;
          }
        }
        @media (max-width: 400px) {
          .submit-article-component .submit-card {
            padding: 1.4rem 1.2rem 1.8rem;
          }
          .submit-article-component .submit-header .icon-wrap {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .submit-article-component .submit-card {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .submit-article-component .input-group {
          animation: fadeSlideUp 0.5s ease forwards;
          opacity: 0;
        }
        .submit-article-component .input-group:nth-child(1) { animation-delay: 0.05s; }
        .submit-article-component .input-group:nth-child(2) { animation-delay: 0.10s; }
        .submit-article-component .input-group:nth-child(3) { animation-delay: 0.15s; }
        .submit-article-component .submit-btn {
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.22s;
          opacity: 0;
        }
        .submit-article-component .submit-footer {
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.29s;
          opacity: 0;
        }
      `}</style>

      <div className="submit-article-component">
        <div className="submit-card" role="main" aria-labelledby="submit-heading">
          <div className="submit-header">
            <div className="icon-wrap" aria-hidden="true">
              <i className="fas fa-file-upload"></i>
            </div>
            <h1 id="submit-heading">Submit Article</h1>
            <p>Upload your manuscript and supporting files</p>
          </div>

          <form className="submit-form" onSubmit={handleSubmit} noValidate>
            {/* Article Title */}
            <div className="input-group">
              <label htmlFor="articleTitle">
                <i className="fas fa-heading" aria-hidden="true"></i> Article Title
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="articleTitle"
                  placeholder="e.g. A Novel Approach to..."
                  value={title}
                  onChange={handleTitleChange}
                  onBlur={handleTitleBlur}
                  required
                />
                <i className="fas fa-pencil-alt input-icon" aria-hidden="true"></i>
              </div>
              <div className={`form-feedback ${titleError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Title must be at least 3 characters</span>
              </div>
            </div>

            {/* Select Journal */}
            <div className="input-group">
              <label htmlFor="journalSelect">
                <i className="fas fa-newspaper" aria-hidden="true"></i> Select Journal
              </label>
              <div className="input-wrapper">
                <select
                  id="journalSelect"
                  value={journal}
                  onChange={handleJournalChange}
                  onBlur={handleJournalBlur}
                  className={journalError ? 'error' : ''}
                >
                  <option value="">— Please select a journal —</option>
                  {journalOptions.map((j) => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </select>
                <i className="fas fa-book-open input-icon" aria-hidden="true"></i>
              </div>
              <div className={`form-feedback ${journalError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Please select a journal</span>
              </div>
            </div>

            {/* File Upload */}
            <div className="input-group">
              <label htmlFor="fileUpload">
                <i className="fas fa-file-archive" aria-hidden="true"></i> Upload ZIP Archive
              </label>
              <div
                className={`file-drop-zone ${file ? 'has-file' : ''}`}
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <i className="fas fa-cloud-upload-alt input-icon" style={{ position: 'static', color: '#f39c12' }} aria-hidden="true"></i>
                <div className="file-info">
                  {file ? (
                    <>
                      <i className="fas fa-file-archive" aria-hidden="true"></i>
                      <span>{file.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#7c8ca8' }}>
                        ({(file.size / 1024).toFixed(0)} KB)
                      </span>
                    </>
                  ) : (
                    <span className="placeholder">Click or drag a .zip file here</span>
                  )}
                </div>
                <div className="file-actions">
                  {file && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                        setFileError(false);
                      }}
                      aria-label="Remove file"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                  <button
                    type="button"
                    className="browse-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current && fileInputRef.current.click();
                    }}
                  >
                    <i className="fas fa-folder-open"></i> Browse
                  </button>
                </div>
                <input
                  type="file"
                  id="fileUpload"
                  ref={fileInputRef}
                  accept=".zip"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="note">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                <span>
                  Please upload all files, including the manuscript, title page, cover letter,
                  supplementary files, figures, tables, and point-by-point response PDF in a
                  <strong> single ZIP folder</strong>.
                </span>
              </div>
              <div className={`form-feedback ${fileError ? 'show' : ''}`}>
                <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
                <span>Please upload a valid .zip file</span>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Submit Article</span>
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>

          <div className="submit-footer">
            <a href="#">View submission guidelines</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitArticlePage;