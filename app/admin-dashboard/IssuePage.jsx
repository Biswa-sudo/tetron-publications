"use client";
import React, { useState } from 'react';

const IssuePage = () => {
  // ---------- Dummy Volumes (for the volume dropdown) ----------
  const volumes = [
    { id: 1, name: 'Volume 1: Foundations' },
    { id: 2, name: 'Volume 2: Advances in AI' },
    { id: 3, name: 'Volume 3: Sustainable Systems' },
    { id: 4, name: 'Volume 4: Quantum Horizons' },
  ];

  // ---------- Dummy Issues ----------
  const initialIssues = [
    {
      id: 101,
      name: 'Issue 1: Inaugural Edition',
      volumeId: 1,
      date: '2024-03',
    },
    {
      id: 102,
      name: 'Issue 2: Spring Collection',
      volumeId: 1,
      date: '2024-06',
    },
    {
      id: 201,
      name: 'Issue 1: AI Revolution',
      volumeId: 2,
      date: '2024-09',
    },
    {
      id: 301,
      name: 'Issue 1: Green Energy',
      volumeId: 3,
      date: '2025-03',
    },
    {
      id: 401,
      name: 'Issue 1: Quantum Leap',
      volumeId: 4,
      date: '2025-09',
    },
  ];

  // ---------- State ----------
  const [issues, setIssues] = useState(initialIssues);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // null = add mode, number = edit mode

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    volumeId: '',
    date: '',
  });
  const [formErrors, setFormErrors] = useState({});

  // ---------- Handlers ----------
  const openAddModal = () => {
    setEditingIndex(null);
    setFormData({ name: '', volumeId: '', date: '' });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setFormData({
      name: issues[index].name,
      volumeId: issues[index].volumeId.toString(),
      date: issues[index].date,
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', volumeId: '', date: '' });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field if any
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Issue name is required.';
    if (!formData.volumeId) errors.volumeId = 'Please select a volume.';
    if (!formData.date) errors.date = 'Issue date is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newIssue = {
      id: Date.now(),
      name: formData.name.trim(),
      volumeId: parseInt(formData.volumeId, 10),
      date: formData.date,
    };

    if (editingIndex === null) {
      // Add new issue
      setIssues([...issues, newIssue]);
    } else {
      // Edit existing issue
      const updatedIssues = [...issues];
      updatedIssues[editingIndex] = newIssue;
      setIssues(updatedIssues);
    }
    closeModal();
  };

  const getVolumeName = (volumeId) => {
    const volume = volumes.find((v) => v.id === volumeId);
    return volume ? volume.name : 'Unknown Volume';
  };

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };

  return (
    <>
      <style>{`
        /* ---- Scoped styles for IssuePage ---- */
        .issue-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .issue-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 2rem 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .issue-page .container {
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
        .issue-page .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .issue-page .header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .issue-page .header h1 i {
          color: #4a7cf7;
        }
        .issue-page .add-btn {
          padding: 0.7rem 1.5rem;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border: none;
          border-radius: 1.2rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 16px -4px rgba(74, 124, 247, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .issue-page .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
        }
        .issue-page .add-btn i {
          font-size: 1rem;
        }

        /* ---- Issue List ---- */
        .issue-page .issue-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .issue-page .issue-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          padding: 1rem 1.5rem;
          border-radius: 1.2rem;
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: background 0.2s ease, box-shadow 0.2s ease;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .issue-page .issue-item:hover {
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .issue-page .issue-item .info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .issue-page .issue-item .info .name {
          font-weight: 600;
          color: #0b1a33;
          font-size: 1rem;
        }
        .issue-page .issue-item .info .volume-badge {
          background: rgba(74, 124, 247, 0.08);
          color: #4a7cf7;
          padding: 0.2rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
        .issue-page .issue-item .info .volume-badge i {
          font-size: 0.7rem;
        }
        .issue-page .issue-item .info .date {
          font-size: 0.85rem;
          color: #5e6f8d;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .issue-page .issue-item .info .date i {
          color: #7c8ca8;
          font-size: 0.8rem;
        }
        .issue-page .issue-item .actions {
          display: flex;
          gap: 0.5rem;
        }
        .issue-page .issue-item .actions .edit-btn {
          background: none;
          border: none;
          color: #4a7cf7;
          font-size: 0.9rem;
          padding: 0.3rem 0.8rem;
          border-radius: 0.6rem;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s ease, color 0.2s ease;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
        .issue-page .issue-item .actions .edit-btn:hover {
          background: rgba(74, 124, 247, 0.08);
          color: #3b6de7;
        }
        .issue-page .issue-item .actions .edit-btn i {
          font-size: 0.8rem;
        }
        .issue-page .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #7c8ca8;
        }
        .issue-page .empty-state i {
          font-size: 3rem;
          color: #d1d9e6;
          margin-bottom: 1rem;
          display: block;
        }
        .issue-page .empty-state p {
          font-size: 1rem;
        }

        /* ---- Modal Overlay ---- */
        .issue-page .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.25s ease;
          padding: 1rem;
        }
        .issue-page .modal-overlay .modal {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 2rem;
          padding: 2rem 2.2rem;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 40px 80px -24px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.8);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .issue-page .modal-overlay .modal .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .issue-page .modal-overlay .modal .modal-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0b1a33;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .issue-page .modal-overlay .modal .modal-header h2 i {
          color: #4a7cf7;
        }
        .issue-page .modal-overlay .modal .modal-header .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #9aabbf;
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.2s ease, color 0.2s ease;
          line-height: 1;
        }
        .issue-page .modal-overlay .modal .modal-header .close-btn:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #e74c3c;
        }
        .issue-page .modal-overlay .modal .form-group {
          margin-bottom: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .issue-page .modal-overlay .modal .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
        }
        .issue-page .modal-overlay .modal .form-group label i {
          margin-right: 0.3rem;
          color: #4a7cf7;
        }
        .issue-page .modal-overlay .modal .form-group input,
        .issue-page .modal-overlay .modal .form-group select {
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
        .issue-page .modal-overlay .modal .form-group input:focus,
        .issue-page .modal-overlay .modal .form-group select:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 0 3px rgba(74, 124, 247, 0.08);
          background: #fff;
        }
        .issue-page .modal-overlay .modal .form-group input.error,
        .issue-page .modal-overlay .modal .form-group select.error {
          border-color: #e74c3c;
        }
        .issue-page .modal-overlay .modal .form-group .error-text {
          font-size: 0.8rem;
          color: #e74c3c;
          margin-top: 0.2rem;
        }
        .issue-page .modal-overlay .modal .submit-btn {
          width: 100%;
          padding: 0.8rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border: none;
          border-radius: 1.2rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 16px -4px rgba(74, 124, 247, 0.3);
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .issue-page .modal-overlay .modal .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
        }

        /* ---- Animations ---- */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---- Responsive ---- */
        @media (max-width: 640px) {
          .issue-page .container {
            padding: 1.5rem;
          }
          .issue-page .header {
            flex-direction: column;
            align-items: stretch;
          }
          .issue-page .header .add-btn {
            justify-content: center;
          }
          .issue-page .issue-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .issue-page .issue-item .info {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
          }
          .issue-page .issue-item .actions {
            width: 100%;
            justify-content: flex-end;
          }
          .issue-page .modal-overlay .modal {
            padding: 1.5rem;
          }
        }
        @media (max-width: 400px) {
          .issue-page .container {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="issue-page">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1>
              <i className="fas fa-calendar-alt" aria-hidden="true"></i> Issues
            </h1>
            <button className="add-btn" onClick={openAddModal}>
              <i className="fas fa-plus" aria-hidden="true"></i> Add New Issue
            </button>
          </div>

          {/* Issue List */}
          <div className="issue-list">
            {issues.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-calendar-day" aria-hidden="true"></i>
                <p>No issues yet. Click "Add New Issue" to create one.</p>
              </div>
            ) : (
              issues.map((issue, index) => (
                <div className="issue-item" key={issue.id}>
                  <div className="info">
                    <span className="name">{issue.name}</span>
                    <span className="volume-badge">
                      <i className="fas fa-book" aria-hidden="true"></i>
                      {getVolumeName(issue.volumeId)}
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" aria-hidden="true"></i>
                      {formatDateDisplay(issue.date)}
                    </span>
                  </div>
                  <div className="actions">
                    <button className="edit-btn" onClick={() => openEditModal(index)}>
                      <i className="fas fa-edit" aria-hidden="true"></i> Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}>
            <div className="modal" role="dialog" aria-modal="true">
              <div className="modal-header">
                <h2>
                  <i className="fas fa-calendar-plus" aria-hidden="true"></i>
                  {editingIndex === null ? 'Add New Issue' : 'Edit Issue'}
                </h2>
                <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Issue Name */}
                <div className="form-group">
                  <label htmlFor="issueName">
                    <i className="fas fa-tag" aria-hidden="true"></i> Issue Name
                  </label>
                  <input
                    type="text"
                    id="issueName"
                    name="name"
                    placeholder="e.g. Issue 3: Winter Edition"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <div className="error-text">{formErrors.name}</div>}
                </div>

                {/* Volume Selection */}
                <div className="form-group">
                  <label htmlFor="volumeSelect">
                    <i className="fas fa-book" aria-hidden="true"></i> Parent Volume
                  </label>
                  <select
                    id="volumeSelect"
                    name="volumeId"
                    value={formData.volumeId}
                    onChange={handleInputChange}
                    className={formErrors.volumeId ? 'error' : ''}
                  >
                    <option value="">— Select a Volume —</option>
                    {volumes.map((vol) => (
                      <option key={vol.id} value={vol.id}>
                        {vol.name}
                      </option>
                    ))}
                  </select>
                  {formErrors.volumeId && <div className="error-text">{formErrors.volumeId}</div>}
                </div>

                {/* Issue Date */}
                <div className="form-group">
                  <label htmlFor="issueDate">
                    <i className="fas fa-calendar" aria-hidden="true"></i> Issue Date (Month/Year)
                  </label>
                  <input
                    type="month"
                    id="issueDate"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={formErrors.date ? 'error' : ''}
                  />
                  {formErrors.date && <div className="error-text">{formErrors.date}</div>}
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-save" aria-hidden="true"></i>
                  {editingIndex === null ? 'Create Issue' : 'Update Issue'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IssuePage;