"use client";
import React, { useState } from 'react';

const VolumePage = () => {
  // ---------- Dummy data ----------
  const initialVolumes = [
    {
      id: 1,
      name: 'Volume 1: Foundations',
      fromDate: '2024-01', // YYYY-MM format
      toDate: '2024-06',
    },
    {
      id: 2,
      name: 'Volume 2: Advances in AI',
      fromDate: '2024-07',
      toDate: '2024-12',
    },
    {
      id: 3,
      name: 'Volume 3: Sustainable Systems',
      fromDate: '2025-01',
      toDate: '2025-06',
    },
    {
      id: 4,
      name: 'Volume 4: Quantum Horizons',
      fromDate: '2025-07',
      toDate: '2025-12',
    },
  ];

  // ---------- State ----------
  const [volumes, setVolumes] = useState(initialVolumes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // null = add mode, number = edit mode

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    fromDate: '',
    toDate: '',
  });
  const [formErrors, setFormErrors] = useState({});

  // ---------- Handlers ----------
  const openAddModal = () => {
    setEditingIndex(null);
    setFormData({ name: '', fromDate: '', toDate: '' });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setFormData({
      name: volumes[index].name,
      fromDate: volumes[index].fromDate,
      toDate: volumes[index].toDate,
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', fromDate: '', toDate: '' });
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
    if (!formData.name.trim()) errors.name = 'Volume name is required.';
    if (!formData.fromDate) errors.fromDate = 'From date is required.';
    if (!formData.toDate) errors.toDate = 'To date is required.';
    if (formData.fromDate && formData.toDate && formData.fromDate > formData.toDate) {
      errors.toDate = 'To date must be after from date.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingIndex === null) {
      // Add new volume
      const newVolume = {
        id: Date.now(), // simple unique id
        name: formData.name.trim(),
        fromDate: formData.fromDate,
        toDate: formData.toDate,
      };
      setVolumes([...volumes, newVolume]);
    } else {
      // Edit existing volume
      const updatedVolumes = [...volumes];
      updatedVolumes[editingIndex] = {
        ...updatedVolumes[editingIndex],
        name: formData.name.trim(),
        fromDate: formData.fromDate,
        toDate: formData.toDate,
      };
      setVolumes(updatedVolumes);
    }
    closeModal();
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
        /* ---- Scoped styles for VolumePage ---- */
        .volume-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .volume-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(145deg, #f6f9fc 0%, #e9f0f7 100%);
          padding: 2rem 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .volume-page .container {
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
        .volume-page .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .volume-page .header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .volume-page .header h1 i {
          color: #4a7cf7;
        }
        .volume-page .add-btn {
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
        .volume-page .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
        }
        .volume-page .add-btn i {
          font-size: 1rem;
        }

        /* ---- Volume List ---- */
        .volume-page .volume-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .volume-page .volume-item {
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
        .volume-page .volume-item:hover {
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .volume-page .volume-item .info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .volume-page .volume-item .info .name {
          font-weight: 600;
          color: #0b1a33;
          font-size: 1rem;
        }
        .volume-page .volume-item .info .date-range {
          font-size: 0.85rem;
          color: #5e6f8d;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .volume-page .volume-item .info .date-range i {
          color: #7c8ca8;
          font-size: 0.8rem;
        }
        .volume-page .volume-item .actions {
          display: flex;
          gap: 0.5rem;
        }
        .volume-page .volume-item .actions .edit-btn {
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
        .volume-page .volume-item .actions .edit-btn:hover {
          background: rgba(74, 124, 247, 0.08);
          color: #3b6de7;
        }
        .volume-page .volume-item .actions .edit-btn i {
          font-size: 0.8rem;
        }
        .volume-page .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #7c8ca8;
        }
        .volume-page .empty-state i {
          font-size: 3rem;
          color: #d1d9e6;
          margin-bottom: 1rem;
          display: block;
        }
        .volume-page .empty-state p {
          font-size: 1rem;
        }

        /* ---- Modal Overlay ---- */
        .volume-page .modal-overlay {
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
        .volume-page .modal-overlay .modal {
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
        .volume-page .modal-overlay .modal .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .volume-page .modal-overlay .modal .modal-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0b1a33;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .volume-page .modal-overlay .modal .modal-header h2 i {
          color: #4a7cf7;
        }
        .volume-page .modal-overlay .modal .modal-header .close-btn {
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
        .volume-page .modal-overlay .modal .modal-header .close-btn:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #e74c3c;
        }
        .volume-page .modal-overlay .modal .form-group {
          margin-bottom: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .volume-page .modal-overlay .modal .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
        }
        .volume-page .modal-overlay .modal .form-group label i {
          margin-right: 0.3rem;
          color: #4a7cf7;
        }
        .volume-page .modal-overlay .modal .form-group input {
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
        }
        .volume-page .modal-overlay .modal .form-group input:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 0 3px rgba(74, 124, 247, 0.08);
          background: #fff;
        }
        .volume-page .modal-overlay .modal .form-group input.error {
          border-color: #e74c3c;
        }
        .volume-page .modal-overlay .modal .form-group .error-text {
          font-size: 0.8rem;
          color: #e74c3c;
          margin-top: 0.2rem;
        }
        .volume-page .modal-overlay .modal .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .volume-page .modal-overlay .modal .submit-btn {
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
        .volume-page .modal-overlay .modal .submit-btn:hover {
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
          .volume-page .container {
            padding: 1.5rem;
          }
          .volume-page .header {
            flex-direction: column;
            align-items: stretch;
          }
          .volume-page .header .add-btn {
            justify-content: center;
          }
          .volume-page .volume-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .volume-page .volume-item .info {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
          }
          .volume-page .volume-item .actions {
            width: 100%;
            justify-content: flex-end;
          }
          .volume-page .modal-overlay .modal {
            padding: 1.5rem;
          }
          .volume-page .modal-overlay .modal .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        @media (max-width: 400px) {
          .volume-page .container {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="volume-page">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1>
              <i className="fas fa-book-open" aria-hidden="true"></i> Volumes
            </h1>
            <button className="add-btn" onClick={openAddModal}>
              <i className="fas fa-plus" aria-hidden="true"></i> Add New Volume
            </button>
          </div>

          {/* Volume List */}
          <div className="volume-list">
            {volumes.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-book" aria-hidden="true"></i>
                <p>No volumes yet. Click "Add New Volume" to create one.</p>
              </div>
            ) : (
              volumes.map((volume, index) => (
                <div className="volume-item" key={volume.id}>
                  <div className="info">
                    <span className="name">{volume.name}</span>
                    <span className="date-range">
                      <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                      {formatDateDisplay(volume.fromDate)} – {formatDateDisplay(volume.toDate)}
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
                  <i className="fas fa-book" aria-hidden="true"></i>
                  {editingIndex === null ? 'Add New Volume' : 'Edit Volume'}
                </h2>
                <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Volume Name */}
                <div className="form-group">
                  <label htmlFor="volumeName">
                    <i className="fas fa-tag" aria-hidden="true"></i> Volume Name
                  </label>
                  <input
                    type="text"
                    id="volumeName"
                    name="name"
                    placeholder="e.g. Volume 5: Innovations"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <div className="error-text">{formErrors.name}</div>}
                </div>

                {/* From & To Date */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fromDate">
                      <i className="fas fa-calendar-plus" aria-hidden="true"></i> From (Month/Year)
                    </label>
                    <input
                      type="month"
                      id="fromDate"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleInputChange}
                      className={formErrors.fromDate ? 'error' : ''}
                    />
                    {formErrors.fromDate && <div className="error-text">{formErrors.fromDate}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="toDate">
                      <i className="fas fa-calendar-check" aria-hidden="true"></i> To (Month/Year)
                    </label>
                    <input
                      type="month"
                      id="toDate"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleInputChange}
                      className={formErrors.toDate ? 'error' : ''}
                    />
                    {formErrors.toDate && <div className="error-text">{formErrors.toDate}</div>}
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-save" aria-hidden="true"></i>
                  {editingIndex === null ? 'Create Volume' : 'Update Volume'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VolumePage;