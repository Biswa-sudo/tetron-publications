import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjmiNavbar from "@/components/allNavbar/EjmiNavbar";

export default function ArticlesPage() {
  // Mock data reflecting the scientific articles seen in the reference image
  const articles = [
    {
      id: 1,
      title: "Integrative analysis of transcriptome and metabolome reveals the mechanism of color formation in specific flowers",
      authors: "Hua Li, Jianhui Wang, Xingguang Li, Wei Zhang",
      type: "OriginalPaper",
      date: "05 August 2026",
      openAccess: true,
      image: "https://via.placeholder.com/120x80?text=Figure+1",
    },
    {
      id: 2,
      title: "Genome-wide identification and expression analysis of the AP2/ERF gene family in relation to plant development",
      authors: "Yong-Qiang Zhao, Ming-Hao Yu, Xiao-Yan Li",
      type: "OriginalPaper",
      date: "03 August 2026",
      openAccess: true,
      image: "https://via.placeholder.com/120x80?text=Figure+2",
    },
    {
      id: 3,
      title: "Characterization of a novel stress-responsive gene under drought conditions",
      authors: "John Smith, Emma Watson",
      type: "Review Article",
      date: "28 July 2026",
      openAccess: false,
      image: "https://via.placeholder.com/120x80?text=Figure+3",
    },
    {
      id: 4,
      title: "Molecular mechanisms underlying the biosynthesis of secondary metabolites",
      authors: "Anna Karenina, Leo Tolstoy",
      type: "OriginalPaper",
      date: "15 July 2026",
      openAccess: true,
      image: "https://via.placeholder.com/120x80?text=Figure+4",
    }
  ];

  return (
    <>
      <Header hideNav={true} />
      <EjmiNavbar />   

      <section className="container my-5" style={{ minHeight: "60vh", maxWidth: "960px" }}>
        
        <h2 className="mb-4" style={{ fontSize: "1.75rem", fontWeight: "300" }}>Articles</h2>

        {/* SEARCH WITHIN JOURNAL BOX */}
        <div 
          className="p-3 mb-4 rounded" 
          style={{ backgroundColor: "#eef3f8", border: "1px solid #d5e3ef" }}
        >
          <h6 className="mb-3 text-primary fw-bold" style={{ fontSize: "0.9rem" }}>
            Search within journal
          </h6>
          <div className="row g-2 align-items-end">
            <div className="col-md-2 col-sm-4">
              <label className="form-label mb-1 text-muted" style={{ fontSize: "0.8rem" }}>Volume</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-2 col-sm-4">
              <label className="form-label mb-1 text-muted" style={{ fontSize: "0.8rem" }}>Issue</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-6 col-sm-12">
              <label className="form-label mb-1 text-muted" style={{ fontSize: "0.8rem" }}>Keyword or Author</label>
              <input 
                type="text" 
                className="form-control form-control-sm" 
              />
            </div>
            <div className="col-md-2 col-sm-12 text-end">
              <button className="btn btn-primary btn-sm w-100 fw-bold" style={{ backgroundColor: "#005a9c", border: "none" }}>
                Search <i className="bi bi-search ms-1"></i>
              </button>
            </div>
          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-4">
          <h5 className="mb-0" style={{ fontSize: "1.2rem", fontWeight: "400" }}>
            709 Results
          </h5>
          <div className="d-flex align-items-center">
            <span className="text-muted me-2" style={{ fontSize: "0.85rem" }}>Sort by:</span>
            <select className="form-select form-select-sm border-0 shadow-none bg-transparent fw-bold" style={{ width: "auto", cursor: "pointer" }}>
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
          </div>
        </div>

        {/* ARTICLE LIST */}
        <div>
          {articles.length > 0 ? (
            articles.map((article) => (
              <article key={article.id} className="row mb-4 pb-4 border-bottom">
                
                {/* Left Side: Article Details */}
                <div className="col-md-9 col-sm-8 pe-md-4">
                  <h3 className="mb-2" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                    <a href={`/article/${article.id}`} className="text-decoration-none" style={{ color: "#005a9c" }}>
                      {article.title}
                    </a>
                  </h3>
                  
                  <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                    {article.authors}
                  </p>
                  
                  <div className="d-flex flex-wrap align-items-center gap-3 mb-2" style={{ fontSize: "0.85rem" }}>
                    <span className="text-muted">{article.type}</span>
                    <span className="text-muted">Published: {article.date}</span>
                  </div>

                  {/* Open Access & PDF Link Row */}
                  <div className="d-flex align-items-center gap-4 mt-3" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                    {article.openAccess && (
                      <span style={{ color: "#e87722" }}> {/* Springer's typical orange color */}
                        <i className="bi bi-unlock-fill me-1"></i> Open Access
                      </span>
                    )}
                    <a href={`/article/${article.id}/pdf`} className="text-decoration-none" style={{ color: "#005a9c" }}>
                      Download PDF <i className="bi bi-download ms-1"></i>
                    </a>
                  </div>
                </div>

                {/* Right Side: Thumbnail */}
                <div className="col-md-3 col-sm-4 d-flex justify-content-end align-items-start mt-3 mt-sm-0">
                  {article.image && (
                    <img 
                      src={article.image} 
                      alt="Article figure thumbnail" 
                      className="img-fluid border" 
                      style={{ 
                        maxWidth: "100%", 
                        maxHeight: "100px", 
                        objectFit: "cover",
                        padding: "2px",
                        backgroundColor: "#fff"
                      }} 
                    />
                  )}
                </div>
              </article>
            ))
          ) : (
            <p className="text-start">No articles found.</p>
          )}
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-center mt-5 mb-5">
          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="#" style={{ backgroundColor: "#005a9c", border: "none" }}>1</a>
            </li>
            <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">...</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">15</a></li>
            <li className="page-item">
              <a className="page-link text-dark" href="#">
                <i className="bi bi-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>

      </section>

      <Footer />
    </>
  );
}