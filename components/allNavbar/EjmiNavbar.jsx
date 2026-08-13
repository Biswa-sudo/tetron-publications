"use client";
import Link from "next/link";

export default function EjmiNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">

        {/* <a className="navbar-brand fw-bold" href="/">
          Tetron Publications
        </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="ejmiNav">
          {/* 
            🔁 CHANGE: ms-auto → me-auto 
            This pushes the nav items to the left.
          */}
          <ul className="navbar-nav me-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/journals/ejmi/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/journals/ejmi/editorial-board">
                Editorial Board
              </Link>
            </li>

            {/* ===== Articles EJMI Dropdown ===== */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                data-bs-toggle="dropdown"
              >
                Articles
              </a>

              <ul className="dropdown-menu">
                {/* <li>
                  <Link
                    className="dropdown-item"
                    href="/journals/ejmi/articles-ejmi/archives"
                  >
                    Archives
                  </Link>
                </li> */}

                <li>
                  <Link
                    className="dropdown-item"
                    href="/journals/ejmi/articles-ejmi/articles"
                  >
                    Articles
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/journals/ejmi/articles-ejmi/volumes-and-issues"
                  >
                    Volumes and Issues
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/journals/ejmi/open-access-fee">
                Open Access Fee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/journals/ejmi/for-authors">
                For Authors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/journals/ejmi/publisher">
                Publisher
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
