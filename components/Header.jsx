"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header({ hideNav = false }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        setUser(null);
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header>
      {/* ===== TOP INFO BAR (always visible) ===== */}
      <div className="bg-info bg-opacity-10 border-bottom">
        <div className="container py-3">
          <div className="row align-items-center justify-content-between text-center text-md-start gap-3 gap-md-0">
            
            {/* LOGO */}
            <div className="col-12 col-md-auto text-md-start">
              <Link href="/" className="d-inline-block text-decoration-none">
                <img
                  src="/tetron.png"
                  alt="Tetron Publications"
                  style={{ height: "80px", width: "auto", objectFit: "contain" }}
                />
              </Link>
            </div>

            {/* WELCOME TEXT */}
            <div className="col-12 col-md-8 col-lg-7 text-md-end">
              <h4 className="mb-2 fw-bold text-primary fs-3">
                Welcome to Tetron Publications
              </h4>
              <p className="mb-0 text-dark fs-5">
                Tetron Publications, focused on publishing scholarly works, is driven by the
                mission to{" "}
                <strong className="d-block d-md-inline mt-1 mt-md-0 text-dark">
                  Empower Knowledge, Foster Growth, and Shape the Future.
                </strong>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== NAVBAR (hidden when hideNav === true) ===== */}
      {!hideNav && (
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
          <div className="container">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNav">
              {/* Nav links - Left aligned */}
              <ul className="navbar-nav me-auto fw-semibold gap-lg-4 fs-5">

                {/* ABOUT US */}
                <li className="nav-item dropdown">
                  <Link
                    href="/about-publisher"
                    className="nav-link dropdown-toggle text-dark"
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm fs-5">
                    <li>
                      <Link className="dropdown-item py-2" href="/about-publisher">
                        About Publisher
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item py-2" href="/our-principles">
                        Our Principles
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item py-2" href="/our-services">
                        Our Services
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* JOURNALS */}
                <li className="nav-item">
                  <Link href="/journals" className="nav-link text-dark">
                    Journals
                  </Link>
                </li>

                {/* POLICIES */}
                <li className="nav-item dropdown">
                  <Link
                    href="/policies"
                    className="nav-link dropdown-toggle text-dark"
                    data-bs-toggle="dropdown"
                  >
                    Policies
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm fs-5">
                    <li>
                      <Link
                        className="dropdown-item py-2"
                        href="/policies/conflicts-of-interest"
                      >
                        Conflicts of Interest
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2"
                        href="/policies/data-sharing"
                      >
                        Data Sharing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2"
                        href="/policies/general-and-ethical-policies"
                      >
                        General & Ethical Policies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2"
                        href="/policies/publication-integrity-and-content-correction-policy"
                      >
                        Publication Integrity & Correction
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* OPEN ACCESS */}
                <li className="nav-item">
                  <Link href="/open-access-statement" className="nav-link text-dark">
                    Open Access Statement
                  </Link>
                </li>

              </ul>

              {/* ===== LOGIN / USER SECTION (Right side) ===== */}
              <ul className="navbar-nav gap-2">
                {loading ? (
                  // Loading state
                  <li className="nav-item">
                    <span className="nav-link text-muted">
                      <span className="spinner-border spinner-border-sm me-1"></span>
                      Loading...
                    </span>
                  </li>
                ) : user ? (
                  // User is logged in
                  <>
                    <li className="nav-item dropdown">
                      <Link
                        href="#"
                        className="nav-link dropdown-toggle text-dark fw-semibold"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bi bi-person-circle me-1"></i>
                        {user.name}
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                        <li>
                          <Link className="dropdown-item py-2" href="/profile">
                            <i className="bi bi-person me-2"></i>
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item py-2" href="/dashboard">
                            <i className="bi bi-speedometer2 me-2"></i>
                            Dashboard
                          </Link>
                        </li>
                        {user.role === "admin" && (
                          <li>
                            <Link className="dropdown-item py-2" href="/admin">
                              <i className="bi bi-shield-lock me-2"></i>
                              Admin Panel
                            </Link>
                          </li>
                        )}
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <button
                            className="dropdown-item py-2 text-danger"
                            onClick={handleLogout}
                          >
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  // User is not logged in
                  <>
                    <li className="nav-item">
                      <Link href="/login" className="btn btn-outline-primary btn-sm px-3">
                        <i className="bi bi-box-arrow-in-right me-1"></i>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/register" className="btn btn-primary btn-sm px-3">
                        <i className="bi bi-person-plus me-1"></i>
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}