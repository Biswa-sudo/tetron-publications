"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'users', label: 'Registered Users', icon: 'fa-users', href: '/admin-dashboard' },
  { id: 'articles', label: 'Submitted Articles', icon: 'fa-file-alt', href: '/admin-dashboard/submitted-articles' },
  { id: 'create-volume', label: 'Create Or Edit Volume', icon: 'fa-book', href: '/admin-dashboard/volumes' },
  { id: 'create-issue', label: 'Create Or Edit Issue', icon: 'fa-calendar-alt', href: '/admin-dashboard/issues' },
  { id: 'add-article', label: 'Add Or Edit Article', icon: 'fa-plus-circle', href: '/admin-dashboard/add-article' },
  { id: 'add-editor', label: 'Add Or Edit Editor', icon: 'fa-user-edit', href: '/admin-dashboard/editors' },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname() || '';

  return (
    <>
      <style>{`
        /* ---- Scoped styles for AdminDashboard (full) ---- */
        .admin-dashboard * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .admin-dashboard {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          background: #f0f4f9;
        }

        /* ---- Sidebar ---- */
        .admin-dashboard .sidebar {
          width: 260px;
          min-height: 100vh;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-right: 1px solid rgba(0, 0, 0, 0.04);
          padding: 2rem 1.2rem;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          box-shadow: 2px 0 20px rgba(0, 0, 0, 0.03);
        }
        .admin-dashboard .sidebar .brand {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding-bottom: 2rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .admin-dashboard .sidebar .brand .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border-radius: 14px;
          color: #fff;
          font-size: 20px;
          flex-shrink: 0;
        }
        .admin-dashboard .sidebar .brand h1 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0b1a33;
          letter-spacing: -0.01em;
        }
        .admin-dashboard .sidebar .brand h1 span {
          color: #4a7cf7;
        }
        .admin-dashboard .sidebar .nav-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9aabbf;
          font-weight: 600;
          padding: 0.5rem 0.8rem;
          margin-bottom: 0.3rem;
        }
        .admin-dashboard .sidebar nav {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
        }
        .admin-dashboard .sidebar nav button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          border-radius: 0.8rem;
          color: #4a5a72;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }
        .admin-dashboard .sidebar nav button i {
          width: 1.3rem;
          font-size: 1rem;
          color: #7c8ca8;
          transition: color 0.2s ease;
        }
        .admin-dashboard .sidebar nav button:hover {
          background: rgba(74, 124, 247, 0.06);
          color: #0b1a33;
        }
        .admin-dashboard .sidebar nav button:hover i {
          color: #4a7cf7;
        }
        .admin-dashboard .sidebar nav button.active {
          background: rgba(74, 124, 247, 0.1);
          color: #4a7cf7;
        }
        .admin-dashboard .sidebar nav button.active i {
          color: #4a7cf7;
        }
        .admin-dashboard .sidebar .sidebar-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .admin-dashboard .sidebar .sidebar-footer .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }
        .admin-dashboard .sidebar .sidebar-footer .user-info {
          flex: 1;
        }
        .admin-dashboard .sidebar .sidebar-footer .user-info .name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0b1a33;
        }
        .admin-dashboard .sidebar .sidebar-footer .user-info .role {
          font-size: 0.75rem;
          color: #7c8ca8;
        }
        .admin-dashboard .sidebar .sidebar-footer .logout-btn {
          background: none;
          border: none;
          color: #9aabbf;
          cursor: pointer;
          font-size: 1.1rem;
          padding: 0.3rem;
          border-radius: 0.5rem;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .admin-dashboard .sidebar .sidebar-footer .logout-btn:hover {
          color: #e74c3c;
          background: rgba(231, 76, 60, 0.08);
        }

        /* ---- Main Content ---- */
        .admin-dashboard .main-content {
          flex: 1;
          padding: 2rem 2.5rem;
          overflow-y: auto;
          min-height: 100vh;
        }
        .admin-dashboard .main-content .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .admin-dashboard .main-content .top-bar .page-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0b1a33;
        }
        .admin-dashboard .main-content .top-bar .page-title span {
          color: #7c8ca8;
          font-weight: 400;
        }
        .admin-dashboard .main-content .top-bar .top-actions {
          display: flex;
          gap: 0.8rem;
        }
        .admin-dashboard .main-content .top-bar .top-actions button {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 0.8rem;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: #1d2b44;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .admin-dashboard .main-content .top-bar .top-actions button:hover {
          background: #fff;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        /* ---- Dashboard Welcome ---- */
        .admin-dashboard .dashboard-welcome h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0b1a33;
          margin-bottom: 0.3rem;
        }
        .admin-dashboard .dashboard-welcome p {
          color: #5e6f8d;
          margin-bottom: 2rem;
        }
        .admin-dashboard .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }
        .admin-dashboard .stat-card {
          background: #fff;
          border-radius: 1.2rem;
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .admin-dashboard .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }
        .admin-dashboard .stat-card .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .admin-dashboard .stat-card .stat-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0b1a33;
          line-height: 1.2;
        }
        .admin-dashboard .stat-card .stat-info span {
          font-size: 0.8rem;
          color: #7c8ca8;
          font-weight: 500;
        }

        .admin-dashboard .quick-actions h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0b1a33;
          margin-bottom: 1rem;
        }
        .admin-dashboard .action-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.8rem;
        }
        .admin-dashboard .action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          padding: 1.2rem 0.5rem;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
          color: #1d2b44;
          font-weight: 500;
          font-size: 0.8rem;
        }
        .admin-dashboard .action-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          border-color: #4a7cf7;
        }
        .admin-dashboard .action-btn i {
          font-size: 1.4rem;
          color: #4a7cf7;
        }
        .admin-dashboard .action-btn:hover i {
          transform: scale(1.1);
        }

        /* ---- Section Content ---- */
        .admin-dashboard .section-content {
          background: #fff;
          border-radius: 1.5rem;
          padding: 1.8rem 2rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.03);
        }
        .admin-dashboard .section-content h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0b1a33;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.3rem;
        }
        .admin-dashboard .section-content h2 i {
          color: #4a7cf7;
        }
        .admin-dashboard .section-content p {
          color: #5e6f8d;
          margin-bottom: 1.5rem;
        }

        /* ---- Table ---- */
        .admin-dashboard .table-container {
          overflow-x: auto;
          margin-top: 0.5rem;
        }
        .admin-dashboard table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .admin-dashboard table thead {
          background: rgba(74, 124, 247, 0.04);
        }
        .admin-dashboard table th {
          text-align: left;
          padding: 0.8rem 1rem;
          font-weight: 600;
          color: #1d2b44;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .admin-dashboard table td {
          padding: 0.8rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
          color: #1d2b44;
        }
        .admin-dashboard table tbody tr:hover {
          background: rgba(74, 124, 247, 0.02);
        }
        .admin-dashboard .badge {
          display: inline-block;
          padding: 0.2rem 0.7rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .admin-dashboard .badge.active {
          background: rgba(46, 204, 113, 0.12);
          color: #27ae60;
        }
        .admin-dashboard .badge.pending {
          background: rgba(243, 156, 18, 0.12);
          color: #d68910;
        }
        .admin-dashboard .badge.inactive {
          background: rgba(231, 76, 60, 0.08);
          color: #c0392b;
        }
        .admin-dashboard .action-link {
          background: none;
          border: none;
          color: #4a7cf7;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.85rem;
          font-family: inherit;
          padding: 0.2rem 0.5rem;
          border-radius: 0.4rem;
          transition: background 0.2s ease;
        }
        .admin-dashboard .action-link:hover {
          background: rgba(74, 124, 247, 0.08);
        }

        /* ---- Forms ---- */
        .admin-dashboard .form-section .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          max-width: 580px;
        }
        .admin-dashboard .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .admin-dashboard .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1d2b44;
        }
        .admin-dashboard .form-group input,
        .admin-dashboard .form-group select,
        .admin-dashboard .form-group textarea {
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          font-family: inherit;
          border: 1.5px solid rgba(0, 0, 0, 0.06);
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.6);
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          color: #0b1a33;
        }
        .admin-dashboard .form-group input:focus,
        .admin-dashboard .form-group select:focus,
        .admin-dashboard .form-group textarea:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 0 3px rgba(74, 124, 247, 0.08);
          background: #fff;
        }
        .admin-dashboard .form-group textarea {
          resize: vertical;
        }
        .admin-dashboard .submit-btn {
          padding: 0.8rem 1.5rem;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
          border: none;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 16px -4px rgba(74, 124, 247, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          align-self: flex-start;
        }
        .admin-dashboard .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(74, 124, 247, 0.4);
        }

        /* ---- Mobile / Responsive ---- */
        @media (max-width: 900px) {
          .admin-dashboard .sidebar {
            width: 220px;
            padding: 1.5rem 1rem;
          }
          .admin-dashboard .main-content {
            padding: 1.5rem;
          }
        }
        @media (max-width: 720px) {
          .admin-dashboard {
            flex-direction: column;
          }
          .admin-dashboard .sidebar {
            width: 100%;
            min-height: auto;
            height: auto;
            position: static;
            padding: 1rem 1.2rem;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.04);
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
          }
          .admin-dashboard .sidebar .brand {
            padding-bottom: 0;
            margin-bottom: 0;
            border-bottom: none;
            flex: 1;
          }
          .admin-dashboard .sidebar .nav-label {
            display: none;
          }
          .admin-dashboard .sidebar nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.2rem;
            flex: 1;
            justify-content: flex-end;
          }
          .admin-dashboard .sidebar nav button {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            width: auto;
            border-radius: 0.6rem;
          }
          .admin-dashboard .sidebar nav button i {
            margin-right: 0.2rem;
          }
          .admin-dashboard .sidebar .sidebar-footer {
            display: none;
          }
          .admin-dashboard .main-content {
            padding: 1.2rem;
          }
          .admin-dashboard .main-content .top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .admin-dashboard .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .admin-dashboard .action-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .admin-dashboard .sidebar nav button span {
            display: none;
          }
          .admin-dashboard .sidebar nav button i {
            font-size: 1.1rem;
            margin: 0;
          }
          .admin-dashboard .stats-grid {
            grid-template-columns: 1fr;
          }
          .admin-dashboard .section-content {
            padding: 1.2rem;
          }
          .admin-dashboard table {
            font-size: 0.8rem;
          }
          .admin-dashboard table th,
          .admin-dashboard table td {
            padding: 0.5rem 0.6rem;
          }
        }
      `}</style>

      <div className="admin-dashboard">
        <aside className="sidebar">
          <div className="brand">
            <div className="logo" aria-hidden="true"><i className="fas fa-graduation-cap"></i></div>
            <h1>Journal<span>Hub</span></h1>
          </div>
          <div className="nav-label">Navigation</div>
          <nav>
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <button className={pathname === item.href || (item.href !== '/admin-dashboard' && pathname.startsWith(item.href)) ? 'active' : ''}>
                  <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="avatar">A</div>
            <div className="user-info">
              <div className="name">Admin User</div>
              <div className="role">Journal Manager</div>
            </div>
            <button className="logout-btn" title="Logout" onClick={() => alert('Logout clicked')}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </aside>

        <main className="main-content">
          <div className="top-bar">
            <div className="page-title">Admin Dashboard <span>/ Manage</span></div>
            <div className="top-actions">
              <button onClick={() => window.location.reload()}><i className="fas fa-sync-alt"></i> Refresh</button>
            </div>
          </div>

          {children}
        </main>
      </div>
    </>
  );
}
