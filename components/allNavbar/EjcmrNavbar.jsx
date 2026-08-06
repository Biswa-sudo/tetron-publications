"use client";
import Link from "next/link";

export default function EjcmrNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ejcmrNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="ejcmrNav">
          {/* 
            🔁 CHANGE: ms-auto → me-auto 
            This pushes the nav items to the left.
          */}
          <ul className="navbar-nav me-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejcmr/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejcmr/editorial-board">
                Editorial Board
              </Link>
            </li>

            {/* ===== Articles EJCMR Dropdown ===== */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold text-dark"
                href="#"
                data-bs-toggle="dropdown"
              >
                Articles EJCMR
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/journals/ejcmr/articles-ejcmr/archives">
                    Archives
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="/journals/ejcmr/articles-ejcmr/article-in-press">
                    Article in Press
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="/journals/ejcmr/articles-ejcmr/current">
                    Current
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejcmr/open-access-fee">
                Open Access Fee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejcmr/for-authors">
                For Authors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejcmr/publisher">
                Publisher
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
