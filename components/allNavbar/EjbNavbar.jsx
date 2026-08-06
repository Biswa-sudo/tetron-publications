"use client";
import Link from "next/link";

export default function EjbNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ejbNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="ejbNav">
          {/* 
            🔁 CHANGE: ms-auto → me-auto 
            This pushes the nav items to the left.
          */}
          <ul className="navbar-nav me-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejb/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejb/editorial-board">
                Editorial Board
              </Link>
            </li>

            {/* Articles EJB Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold text-dark"
                href="#"
                data-bs-toggle="dropdown"
              >
                Articles
              </a>

              <ul className="dropdown-menu">
                {/* <li>
                  <Link className="dropdown-item" href="/journals/ejb/articles-ejb/archives">
                    Archives
                  </Link>
                </li> */}

                <li>
                  <Link className="dropdown-item" href="/journals/ejb/articles-ejb/articles">
                    Articles
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="/journals/ejb/articles-ejb/volumes-and-issues">
                    Volumes and Issues
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejb/open-access-fee">
                Open Access Fee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejb/for-authors">
                For Authors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" href="/journals/ejb/publisher">
                Publisher
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}