"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjmiNavbar from "@/components/allNavbar/EjmiNavbar"; 

export default function CurrentIssueEjmiPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can trigger your API fetch or filtering logic here 
  };

  // Array of EJMI "Current Issue" articles based on the screenshot
  const articlesData = [
    {
      id: 1,
      type: "Concept Paper",
      journal: "European Journal of Multidisciplinary Insights (EJMI)",
      volume: "1",
      issue: "1",
      title: "Reconceptualizing Inclusive Education in Vanuatu: The Need for a Contextualized Model Integrating Special Education Components",
      author: "Lincoln Hlatywayo, Kathleen Arthur, and Sophie Hlatywayo"
    }
  ];

  return (
    <>
      <Header hideNav={true} />
      <EjmiNavbar />   

      {/* Main Content Section */}
      <section className="container my-5" style={{ minHeight: "40vh" }}>
        
        {/* SEARCH BAR */}
        <div className="row mb-5">
          <div className="col-md-8 col-lg-6 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Type Atleast 4 Characters & Search Articles..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* ARTICLES LIST */}
        <div>
          {articlesData.map((article) => (
            <div key={article.id} className="border p-3 rounded mb-4" style={{ backgroundColor: "#fafafa" }}>
              
              {/* Metadata Row 1 */}
              <div className="d-flex flex-wrap gap-4 mb-1 text-muted" style={{ fontSize: "0.85rem" }}>
                <span><strong className="text-dark">Article Type:</strong> {article.type}</span>
                <span><strong className="text-dark">Journal:</strong> {article.journal}</span>
              </div>
              
              {/* Metadata Row 2 */}
              <div className="d-flex flex-wrap gap-4 mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
                <span><strong className="text-dark">Volume:</strong> {article.volume}</span>
                <span><strong className="text-dark">Issue:</strong> {article.issue}</span>
              </div>
              
              {/* Article Title */}
              <h5 className="mb-2 mt-3">
                <a href="#" className="text-primary text-decoration-underline" style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                  {article.title}
                </a>
              </h5>
              
              {/* Authors */}
              <p className="mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
                <strong className="text-dark">Author:</strong> {article.author}
              </p>
              
              {/* Download Link */}
              <a href="#" className="text-decoration-underline mt-1 d-inline-block" style={{ color: "#d9534f", fontSize: "0.85rem" }}>
                Download PDF
              </a>
              
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}