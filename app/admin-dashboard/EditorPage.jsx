"use client";
import React, { useState } from 'react';

const EditorPage = () => {
  // ---------- Dummy data ----------
  const initialEditors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Editor-in-Chief',
      scale: 'Senior',
      affiliation: 'MIT',
      email: 'sarah.chen@mit.edu',
      country: 'USA',
      institution: 'Massachusetts Institute of Technology',
      journal: 'Nature Communications',
    },
    {
      id: 2,
      name: 'Prof. James Wilson',
      role: 'Editor',
      scale: 'Associate',
      affiliation: 'Stanford University',
      email: 'jwilson@stanford.edu',
      country: 'USA',
      institution: 'Stanford University',
      journal: 'IEEE Transactions',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      role: 'Editor',
      scale: 'Senior',
      affiliation: 'Oxford University',
      email: 'emily.r@oxford.ac.uk',
      country: 'UK',
      institution: 'University of Oxford',
      journal: 'Scientific Reports',
    },
    {
      id: 4,
      name: 'Prof. Michael Kim',
      role: 'Chief Editor',
      scale: 'Lead',
      affiliation: 'National University of Singapore',
      email: 'm.kim@nus.edu.sg',
      country: 'Singapore',
      institution: 'National University of Singapore',
      journal: 'Journal of Advanced Research',
    },
  ];

  // Dummy journal options (matching the submit article page)
  const journalOptions = [
    'Journal of Advanced Research',
    'International Journal of Science',
    'Nature Communications',
    'Scientific Reports',
    'IEEE Transactions',
    'PLOS ONE',
  ];

  // ---------- State ----------
  const [editors, setEditors] = useState(initialEditors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // null = add mode, number = edit mode

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    scale: '',
    affiliation: '',
    email: '',
    country: '',
    institution: '',
    journal: '',
  });
  const [formErrors, setFormErrors] = useState({});

  // ---------- Handlers ----------
  const openAddModal = () => {
    console.log('Opening add modal'); // Debug
    setEditingIndex(null);
    setFormData({
      name: '',
      role: '',
      scale: '',
      affiliation: '',
      email: '',
      country: '',
      institution: '',
      journal: '',
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    console.log('Opening edit modal for index:', index);
    setEditingIndex(index);
    setFormData({ ...editors[index] });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    setFormData({
      name: '',
      role: '',
      scale: '',
      affiliation: '',
      email: '',
      country: '',
      institution: '',
      journal: '',
    });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.role) errors.role = 'Please select a role.';
    if (!formData.scale.trim()) errors.scale = 'Scale is required.';
    if (!formData.affiliation.trim()) errors.affiliation = 'Affiliation is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email.';
    if (!formData.country.trim()) errors.country = 'Country is required.';
    if (!formData.institution.trim()) errors.institution = 'Institution is required.';
    if (!formData.journal.trim()) errors.journal = 'Please select a journal.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newEditor = {
      id: editingIndex === null ? Date.now() : editors[editingIndex].id,
      ...formData,
    };

    if (editingIndex === null) {
      setEditors([...editors, newEditor]);
    } else {
      const updatedEditors = [...editors];
      updatedEditors[editingIndex] = newEditor;
      setEditors(updatedEditors);
    }
    closeModal();
  };
  // debug render log
  console.log('EditorPage render', { isModalOpen });

  try {
    return (
      <>
        <style>{`
        /* ---- Scoped styles for EditorPage ---- */
        .editor-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .editor-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 2rem 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .editor-page .container {
          max-width: 1050px;
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
        .editor-page .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .editor-page .header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .editor-page .header h1 i {
          color: #4a7cf7;
        }
        .editor-page .add-btn {
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
        .editor-page .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
        }
        .editor-page .add-btn i {
          font-size: 1rem;
        }

        /* ---- Editor List ---- */
        .editor-page .editor-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .editor-page .editor-item {
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
        .editor-page .editor-item:hover {
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .editor-page .editor-item .info {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .editor-page .editor-item .info .name {
          font-weight: 600;
          color: #0b1a33;
          font-size: 1rem;
        }
        .editor-page .editor-item .info .role-badge {
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
        .editor-page .editor-item .info .role-badge i {
          font-size: 0.7rem;
        }
        .editor-page .editor-item .info .journal-badge {
          background: rgba(243, 156, 18, 0.08);
          color: #d68910;
          padding: 0.2rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .editor-page .editor-item .info .journal-badge i {
          font-size: 0.7rem;
        }
        .editor-page .editor-item .info .email {
          font-size: 0.85rem;
          color: #5e6f8d;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .editor-page .editor-item .info .email i {
          color: #7c8ca8;
          font-size: 0.8rem;
        }
        .editor-page .editor-item .info .affiliation {
          font-size: 0.85rem;
          color: #5e6f8d;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .editor-page .editor-item .info .affiliation i {
          color: #7c8ca8;
          font-size: 0.8rem;
        }
        .editor-page .editor-item .actions {
          display: flex;
          gap: 0.5rem;
        }
        .editor-page .editor-item .actions .edit-btn {
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
        .editor-page .editor-item .actions .edit-btn:hover {
          background: rgba(74, 124, 247, 0.08);
          color: #3b6de7;
        }
        .editor-page .editor-item .actions .edit-btn i {
          font-size: 0.8rem;
        }
        .editor-page .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #7c8ca8;
        }
        .editor-page .empty-state i {
          font-size: 3rem;
          color: #d1d9e6;
          margin-bottom: 1rem;
          display: block;
        }
        .editor-page .empty-state p {
          font-size: 1rem;
        }

        /* ---- Modal Overlay ---- */
        .editor-page .modal-overlay {
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
        .editor-page .modal-overlay .modal {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 2rem;
          padding: 2rem 2.2rem;
          max-width: 520px;
          width: 100%;
          box-shadow: 0 40px 80px -24px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.8);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 90vh;
          overflow-y: auto;
        }
        .editor-page .modal-overlay .modal .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .editor-page .modal-overlay .modal .modal-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0b1a33;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .editor-page .modal-overlay .modal .modal-header h2 i {
          color: #4a7cf7;
        }
        .editor-page .modal-overlay .modal .modal-header .close-btn {
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
        .editor-page .modal-overlay .modal .modal-header .close-btn:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #e74c3c;
        }
        .editor-page .modal-overlay .modal .form-group {
          margin-bottom: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .editor-page .modal-overlay .modal .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
        }
        .editor-page .modal-overlay .modal .form-group label i {
          margin-right: 0.3rem;
          color: #4a7cf7;
        }
        .editor-page .modal-overlay .modal .form-group input,
        .editor-page .modal-overlay .modal .form-group select {
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
        .editor-page .modal-overlay .modal .form-group input:focus,
        .editor-page .modal-overlay .modal .form-group select:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 0 3px rgba(74, 124, 247, 0.08);
          background: #fff;
        }
        .editor-page .modal-overlay .modal .form-group input.error,
        .editor-page .modal-overlay .modal .form-group select.error {
          border-color: #e74c3c;
        }
        .editor-page .modal-overlay .modal .form-group .error-text {
          font-size: 0.8rem;
          color: #e74c3c;
          margin-top: 0.2rem;
        }
        .editor-page .modal-overlay .modal .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .editor-page .modal-overlay .modal .submit-btn {
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
        .editor-page .modal-overlay .modal .submit-btn:hover {
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
          .editor-page .container {
            padding: 1.5rem;
          }
          .editor-page .header {
            flex-direction: column;
            align-items: stretch;
          }
          .editor-page .header .add-btn {
            justify-content: center;
          }
          .editor-page .editor-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .editor-page .editor-item .info {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
          }
          .editor-page .editor-item .actions {
            width: 100%;
            justify-content: flex-end;
          }
          .editor-page .modal-overlay .modal {
            padding: 1.5rem;
          }
          .editor-page .modal-overlay .modal .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        @media (max-width: 400px) {
          .editor-page .container {
            padding: 1rem;
          }
          .editor-page .editor-item .info .journal-badge {
            max-width: 120px;
          }
        }
      `}</style>

      <div className="editor-page">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1>
              <i className="fas fa-user-edit" aria-hidden="true"></i> Editorial Board
            </h1>
            <button className="add-btn" onClick={openAddModal}>
              <i className="fas fa-plus" aria-hidden="true"></i> Add Editor
            </button>
          </div>

          {/* Editor List */}
          <div className="editor-list">
            {editors.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-users" aria-hidden="true"></i>
                <p>No editors yet. Click "Add Editor" to create one.</p>
              </div>
            ) : (
              editors.map((editor, index) => (
                <div className="editor-item" key={editor.id}>
                  <div className="info">
                    <span className="name">{editor.name}</span>
                    <span className="role-badge">
                      <i className="fas fa-user-tie" aria-hidden="true"></i>
                      {editor.role}
                    </span>
                    <span className="journal-badge">
                      <i className="fas fa-newspaper" aria-hidden="true"></i>
                      {editor.journal}
                    </span>
                    <span className="email">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                      {editor.email}
                    </span>
                    <span className="affiliation">
                      <i className="fas fa-building" aria-hidden="true"></i>
                      {editor.affiliation}
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
                  <i className="fas fa-user-plus" aria-hidden="true"></i>
                  {editingIndex === null ? 'Add New Editor' : 'Edit Editor'}
                </h2>
                <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="editorName">
                    <i className="fas fa-user" aria-hidden="true"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="editorName"
                    name="name"
                    placeholder="e.g. Dr. John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <div className="error-text">{formErrors.name}</div>}
                </div>

                {/* Role (dropdown) */}
                <div className="form-group">
                  <label htmlFor="role">
                    <i className="fas fa-user-tag" aria-hidden="true"></i> Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={formErrors.role ? 'error' : ''}
                  >
                    <option value="">— Select Role —</option>
                    <option value="Editor">Editor</option>
                    <option value="Chief Editor">Chief Editor</option>
                    <option value="Editor-in-Chief">Editor-in-Chief</option>
                    <option value="Associate Editor">Associate Editor</option>
                  </select>
                  {formErrors.role && <div className="error-text">{formErrors.role}</div>}
                </div>

                {/* Scale */}
                <div className="form-group">
                  <label htmlFor="scale">
                    <i className="fas fa-ruler" aria-hidden="true"></i> Scale
                  </label>
                  <input
                    type="text"
                    id="scale"
                    name="scale"
                    placeholder="e.g. Senior, Lead, Junior"
                    value={formData.scale}
                    onChange={handleInputChange}
                    className={formErrors.scale ? 'error' : ''}
                  />
                  {formErrors.scale && <div className="error-text">{formErrors.scale}</div>}
                </div>

                {/* Affiliation */}
                <div className="form-group">
                  <label htmlFor="affiliation">
                    <i className="fas fa-briefcase" aria-hidden="true"></i> Affiliation
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    placeholder="e.g. Harvard University"
                    value={formData.affiliation}
                    onChange={handleInputChange}
                    className={formErrors.affiliation ? 'error' : ''}
                  />
                  {formErrors.affiliation && <div className="error-text">{formErrors.affiliation}</div>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope" aria-hidden="true"></i> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="editor@university.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <div className="error-text">{formErrors.email}</div>}
                </div>

                {/* Journal - new field */}
                <div className="form-group">
                  <label htmlFor="journal">
                    <i className="fas fa-newspaper" aria-hidden="true"></i> Journal
                  </label>
                  <select
                    id="journal"
                    name="journal"
                    value={formData.journal}
                    onChange={handleInputChange}
                    className={formErrors.journal ? 'error' : ''}
                  >
                    <option value="">— Select Journal —</option>
                    {journalOptions.map((j) => (
                      <option key={j} value={j}>{j}</option>
                    ))}
                  </select>
                  {formErrors.journal && <div className="error-text">{formErrors.journal}</div>}
                </div>

                {/* Country & Institution in a row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">
                      <i className="fas fa-globe" aria-hidden="true"></i> Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="e.g. USA"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={formErrors.country ? 'error' : ''}
                    />
                    {formErrors.country && <div className="error-text">{formErrors.country}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="institution">
                      <i className="fas fa-university" aria-hidden="true"></i> Institution
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      placeholder="e.g. MIT"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className={formErrors.institution ? 'error' : ''}
                    />
                    {formErrors.institution && <div className="error-text">{formErrors.institution}</div>}
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-save" aria-hidden="true"></i>
                  {editingIndex === null ? 'Add Editor' : 'Update Editor'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      </>
    );
  } catch (err) {
    console.error('EditorPage render error', err);
    return (
      <div style={{ padding: '2rem', color: 'white', background: '#b00020' }}>
        <h3>EditorPage render error</h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{String(err && err.message)}</pre>
      </div>
    );
  }
};

export default EditorPage;