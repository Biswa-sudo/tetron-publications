"use client";

import Link from "next/link";

export default function Header({ hideNav = false }) {
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
              {/* 
                🔁 CHANGE: ms-auto → me-auto 
                This pushes the nav items to the left.
              */}
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
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}