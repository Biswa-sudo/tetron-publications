import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetNavbar from "@/components/allNavbar/EjetiNavbar";

export default function VolumesAndIssuesPage() {
  // Mock data representing the flat list structure from the reference images
  const volumesData = [
    {
      id: "v263",
      volumeTitle: "Volume 263",
      dateRange: "January – July 2026",
      issues: [
        { id: "263-4", name: "Issue 4", date: "July 2026" },
        { id: "263-3", name: "Issue 3", date: "May 2026" },
        { id: "263-2", name: "Issue 2", date: "March 2026" },
        { id: "263-1", name: "Issue 1", date: "January 2026" },
      ],
    },
    {
      id: "v262",
      volumeTitle: "Volume 262",
      dateRange: "January – November 2025",
      issues: [
        { id: "262-6", name: "Issue 6", date: "November 2025" },
        { id: "262-5", name: "Issue 5", date: "September 2025" },
        { id: "262-4", name: "Issue 4", date: "July 2025" },
        { id: "262-3", name: "Issue 3", date: "May 2025" },
        { id: "262-2", name: "Issue 2", date: "March 2025" },
        { id: "262-1", name: "Issue 1", date: "January 2025" },
      ],
    },
    {
      id: "v258",
      volumeTitle: "Volume 258",
      dateRange: "January – November 2021",
      issues: [
        { 
          id: "258-6", 
          name: "Issue 6", 
          date: "November 2021",
          subtitle: "Ultrastructure of Plant Cells" // Example of an issue with a subtitle from the image
        },
        { id: "258-5", name: "Issue 5", date: "September 2021" },
        { id: "258-4", name: "Issue 4", date: "July 2021" },
        { id: "258-3", name: "Issue 3", date: "May 2021" },
        { id: "258-2", name: "Issue 2", date: "March 2021" },
        { id: "258-1", name: "Issue 1", date: "January 2021" },
      ],
    },
  ];

  return (
    <>
      <Header hideNav={true} />
      <EjetNavbar />   

      <section className="container my-5" style={{ minHeight: "60vh", maxWidth: "900px" }}>
        
        <h2 className="mb-4 fw-bold" style={{ fontSize: "2rem" }}>Volumes and issues</h2>

        {/* SEARCH ALL ARTICLES BANNER */}
        <div 
          className="mb-5 d-flex align-items-center" 
          style={{ 
            backgroundColor: "#f2f7fc", 
            borderLeft: "4px solid #005a9c",
            padding: "12px 20px",
            borderRadius: "0 4px 4px 0"
          }}
        >
          <a href="#" className="text-decoration-none fw-bold" style={{ color: "#005a9c", fontSize: "1.05rem" }}>
            Search all Protoplasma articles <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>

        {/* VOLUMES LIST */}
        <div className="volumes-container">
          {volumesData.map((volume) => (
            <div key={volume.id} className="mb-5">
              
              {/* Volume Header */}
              <div className="d-flex justify-content-between align-items-end border-bottom pb-2 mb-3">
                <h3 className="mb-0 fw-bold" style={{ fontSize: "1.75rem" }}>
                  {volume.volumeTitle}
                </h3>
                <span className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>
                  {volume.dateRange}
                </span>
              </div>

              {/* Issues List */}
              <ul className="list-unstyled mb-0">
                {volume.issues.map((issue) => (
                  <li key={issue.id} className="border-bottom py-3">
                    <div className="d-flex align-items-center" style={{ fontSize: "1.05rem" }}>
                      <a 
                        href={`/issue/${issue.id}`} 
                        className="fw-bold" 
                        style={{ 
                          color: "#005a9c", 
                          textDecoration: "underline", 
                          textUnderlineOffset: "3px",
                          minWidth: "90px" 
                        }}
                      >
                        {issue.name}
                      </a>
                      <span className="ms-3 text-dark">
                        {issue.date}
                      </span>
                    </div>
                    {/* Render Subtitle if the issue has one */}
                    {issue.subtitle && (
                      <div className="mt-2 text-dark" style={{ fontSize: "1rem" }}>
                        {issue.subtitle}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}