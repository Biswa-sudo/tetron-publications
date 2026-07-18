"use client";

import Link from "next/link";

export default function HeroSlider() {
  return (
    <section>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          {/* ===== SLIDE 1: EJCMR ===== */}
          <div
            className="carousel-item active"
            style={{
              height: "420px",
              backgroundImage: "url('/ejcmr.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex h-100 align-items-center justify-content-center text-white">
              <div className="bg-dark bg-opacity-50 p-4 rounded text-center d-flex flex-column align-items-center">
                
                {/* Home Page Logo Link (Increased Size) */}
                <Link href="/">
                  <img 
                    src="/your-logo.png" 
                    alt="" 
                    style={{ width: "180px", height: "auto", marginBottom: "15px" }} 
                  />
                </Link>

                {/* Journal Title */}
                <h1 className="h3 h-md-2">
                  European Journal of Clinical and <br />
                  Medical Research (EJCMR)
                </h1>

                {/* Specific Page Link */}
                <Link href="/journals/ejcmr/european-journal-of-clinical-and-medical-research" className="btn btn-outline-light mt-3">
                  View Journal
                </Link>
                
              </div>
            </div>
          </div>

          {/* ===== SLIDE 2: EJB ===== */}
          <div
            className="carousel-item"
            style={{
              height: "420px",
              backgroundImage: "url('/ejb.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex h-100 align-items-center justify-content-center text-white">
              <div className="bg-dark bg-opacity-50 p-4 rounded text-center d-flex flex-column align-items-center">
                
                <Link href="/">
                  <img 
                    src="/your-logo.png" 
                    alt="" 
                    style={{ width: "180px", height: "auto", marginBottom: "15px" }} 
                  />
                </Link>

                <h1 className="h3 h-md-2">
                  European Journal of <br />
                  Biosciences (EJB)
                </h1>

                <Link href="/journals/ejb/european-journal-of-biosciences" className="btn btn-outline-light mt-3">
                  View Journal
                </Link>

              </div>
            </div>
          </div>

          {/* ===== SLIDE 3: EJETI ===== */}
          <div
            className="carousel-item"
            style={{
              height: "420px",
              backgroundImage: "url('/ejeti.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex h-100 align-items-center justify-content-center text-white">
              <div className="bg-dark bg-opacity-50 p-4 rounded text-center d-flex flex-column align-items-center">
                
                <Link href="/">
                  <img 
                    src="/your-logo.png" 
                    alt="" 
                    style={{ width: "180px", height: "auto", marginBottom: "15px" }} 
                  />
                </Link>

                <h1 className="h3 h-md-2">
                  European Journal of Engineering <br />
                  & Technology Insights (EJETI)
                </h1>

                <Link href="/journals/ejeti/european-journal-of-engineering-and-technology" className="btn btn-outline-light mt-3">
                  View Journal
                </Link>

              </div>
            </div>
          </div>

          {/* ===== SLIDE 4: EJMI ===== */}
          <div
            className="carousel-item"
            style={{
              height: "420px",
              backgroundImage: "url('/ejmi.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex h-100 align-items-center justify-content-center text-white">
              <div className="bg-dark bg-opacity-50 p-4 rounded text-center d-flex flex-column align-items-center">
                
                <Link href="/">
                  <img 
                    src="/your-logo.png" 
                    alt="" 
                    style={{ width: "180px", height: "auto", marginBottom: "15px" }} 
                  />
                </Link>

                <h1 className="h3 h-md-2">
                  European Journal of <br />
                  Multidisciplinary Insights (EJMI)
                </h1>

                <Link href="/journals/ejmi/european-journal-of-multidisciplinary-insights" className="btn btn-outline-light mt-3">
                  View Journal
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTROLS ===== */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}