"use client";

import Link from "next/link";

export default function HeroSlider() {
  // We use an array to store journal data so the code is cleaner and easier to update.
  const journals = [
    {
      id: "ejcmr",
      title: "European Journal of Clinical and Medical Research",
      shortName: "EJCMR",
      subtitle: "An International Journal of Clinical Studies and Medical Sciences",
      coverImage: "/ejcmr.jpg", // Replace with actual book cover images if you have them
      link: "/journals/ejcmr/european-journal-of-clinical-and-medical-research",
      model: "Hybrid",
    },
    {
      id: "ejb",
      title: "European Journal of Biosciences",
      shortName: "EJB",
      subtitle: "An International Journal of Biological and Life Sciences",
      coverImage: "/ejb.jpg",
      link: "/journals/ejb/european-journal-of-biosciences",
      model: "Open Access",
    },
    {
      id: "ejeti",
      title: "European Journal of Engineering & Technology Insights",
      shortName: "EJETI",
      subtitle: "Advancing Global Engineering and Technology Research",
      coverImage: "/ejeti.jpg",
      link: "/journals/ejeti/european-journal-of-engineering-and-technology",
      model: "Hybrid",
    },
    {
      id: "ejmi",
      title: "European Journal of Multidisciplinary Insights",
      shortName: "EJMI",
      subtitle: "A Global Hub for Cross-Disciplinary Research",
      coverImage: "/ejmi.jpg",
      link: "/journals/ejmi/european-journal-of-multidisciplinary-insights",
      model: "Open Access",
    },
  ];

  return (
    <section>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        style={{
  backgroundImage: "url('/science-bg.svg')",
  backgroundSize: "cover",      // Ensures the SVG scales to fill the entire container
  backgroundPosition: "center", // Keeps the image centered
  backgroundRepeat: "no-repeat",// Prevents the image from tiling
  minHeight: "450px",
}}
      >
        <div className="carousel-inner h-100">
          {journals.map((journal, index) => (
            <div
              key={journal.id}
              className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
            >
              <div className="container py-4 text-white h-100 d-flex flex-column justify-content-center">
                
                {/* Top Bar: Breadcrumbs & Logo */}
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="breadcrumbs" style={{ fontSize: "0.9rem" }}>
                    <Link href="/" className="text-white text-decoration-none fw-bold hover-underline">Home</Link> &gt;{" "}
                    <span className="fw-bold text-decoration-underline">{journal.shortName}</span> &gt;{" "}
                    <span>Volumes and issues</span>
                  </div>
                  <Link href="/">
                    <img
                      src="/tetron.png"
                      alt="Publisher Logo"
                      style={{ width: "120px", height: "auto" }}
                    />
                  </Link>
                </div>

                {/* Main Content Area */}
                <div className="row align-items-center">
                  
                  {/* Left Column: Journal Cover Image */}
                  <div className="col-md-3 col-sm-4 mb-3 mb-md-0">
                    <div style={{ border: "2px solid white", padding: "2px", display: "inline-block", background: "white" }}>
                      <img
                        src={journal.coverImage}
                        alt={`${journal.title} Cover`}
                        className="img-fluid"
                        style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Journal Details */}
                  <div className="col-md-9 col-sm-8">
                    <h1 className="fw-bold mb-1" style={{ textDecoration: "underline", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>
                      {journal.title}
                    </h1>
                    <p className="fs-5 mb-4">{journal.subtitle}</p>

                    <div className="mb-4">
                      <span style={{ fontSize: "0.85rem" }}>Publishing model</span>
                      <br />
                      <strong className="fs-6">{journal.model}</strong>
                    </div>

                    <div className="d-flex flex-wrap align-items-center gap-4">
                      {/* Submit Button */}
                      <Link
                        href={journal.link}
                        className="btn btn-light rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2"
                        style={{ color: "#000" }}
                      >
                        Submit your manuscript
                        <span aria-hidden="true">&rarr;</span>
                      </Link>

                      {/* Save Journal Link */}
                      <button className="btn btn-link text-white text-decoration-none p-0 d-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                        <span className="text-decoration-underline">Save journal</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", fontSize: "0.9rem" }}>
                  <Link href="#" className="text-white fw-bold me-3">Explore open access funding</Link> | 
                  <Link href="#" className="text-white fw-bold ms-3">Select institution</Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls (Arrows positioned on the far left/right) */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" style={{ width: "5%" }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" style={{ width: "5%" }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}