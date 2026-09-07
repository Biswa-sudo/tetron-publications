"use client";
import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="dashboard-welcome">
      <h2>Welcome back, Admin</h2>
      <p>Here's an overview of your journal's activity.</p>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4a7cf7, #6c5ce7)' }}>
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>1,284</h3>
            <span>Registered Users</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #f39c12, #e67e22)' }}>
            <i className="fas fa-file-alt"></i>
          </div>
          <div className="stat-info">
            <h3>47</h3>
            <span>Submitted Articles</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #2ecc71, #27ae60)' }}>
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-info">
            <h3>12</h3>
            <span>Volumes Published</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #e74c3c, #c0392b)' }}>
            <i className="fas fa-user-edit"></i>
          </div>
          <div className="stat-info">
            <h3>8</h3>
            <span>Editors</span>
          </div>
        </div>
      </div>
    </div>
  );
}
