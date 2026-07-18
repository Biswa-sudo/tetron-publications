"use client"; 

import React from "react";
// 1. Import the Next.js Link component for proper client-side navigation
import Link from "next/link"; 

export default function Footer() {
  return (
    <footer 
      className="mt-5 border-top" 
      style={{ backgroundColor: "#e3f2fd" }} 
    >
      <div className="container py-5">
        <div className="row align-items-start">
          
          {/* COLUMN 1: LOGO */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <img 
              src="/tetron.png" 
              alt="Tetron Publications Logo" 
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
          </div>

          {/* COLUMN 2: USEFUL LINKS */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h5 className="fw-bold text-dark mb-3">Useful Links</h5>
            <ul className="list-unstyled lh-lg">
              {/* Added Links here. Text-decoration-none removes the default blue underline */}
              <li>
                <Link href="/" className="fw-semibold text-dark text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/journals" className="fw-semibold text-dark text-decoration-none">
                  Journals
                </Link>
              </li>
              <li>
                <Link href="/about-publisher" className="fw-semibold text-dark text-decoration-none">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: EDITORIAL ADDRESS */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold text-dark mb-3">Editorial Office Address:</h5>
            <p className="fw-semibold text-dark lh-base mb-0">
              Plot Number: 541/3016,<br />
              Madhusudan Nagar, Near Kasam Pallis,<br />
              Dumuduma, Bhubaneswar
            </p>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="position-relative border-top border-light-subtle py-3 text-center text-dark fw-medium small">
        <div className="container">
          Copyright © 2026 tetronpublications.com |
          
          {/* SCROLL TO TOP ARROW BUTTON */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn btn-primary position-absolute end-0 bottom-0 m-3 d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px", borderRadius: "4px" }}
            aria-label="Scroll to top"
          >
            ▲
          </button>
        </div>
      </div>
    </footer>
  );
}