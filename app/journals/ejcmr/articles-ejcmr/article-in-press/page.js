"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar"; 

export default function ArticlesInPressEjcmrPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can trigger your API fetch or filtering logic here 
  };

  return (
    <>
      <Header />
      <EjcmrNavbar />   

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

        {/* ARTICLE CARD */}
        <div className="border p-3 rounded mb-4" style={{ backgroundColor: "#fafafa" }}>
          
          {/* Metadata Row 1 */}
          <div className="d-flex flex-wrap gap-4 mb-1 text-muted" style={{ fontSize: "0.85rem" }}>
            <span><strong className="text-dark">Article Type:</strong> Case Report</span>
            <span><strong className="text-dark">Journal:</strong> Article In Press, European Journal of Clinical and Medical Research (EJCMR)</span>
          </div>
          
          {/* Metadata Row 2 */}
          <div className="d-flex flex-wrap gap-4 mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
            <span><strong className="text-dark">Volume:</strong> 1</span>
            <span><strong className="text-dark">Issue:</strong> 2</span>
          </div>
          
          {/* Article Title */}
          <h5 className="mb-2 mt-3">
            <a href="#" className="text-primary text-decoration-underline" style={{ fontWeight: "600", fontSize: "1.1rem" }}>
              Anterograde Amnesia and Psychotic Decompensation Following Temporal Lobe Trauma: A Neurobehavioral Case Study
            </a>
          </h5>
          
          {/* Authors */}
          <p className="mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
            <strong className="text-dark">Author:</strong> Pukar Gupta, Kamal Hamal, Roshni Thapa, Pradeep Adhikari, Prabhat Kaphle, Binita Uchai Thakuri, Rahul Bajimaya
          </p>
          
          {/* Download Link */}
          <a href="#" className="text-decoration-underline mt-1 d-inline-block" style={{ color: "#d9534f", fontSize: "0.85rem" }}>
            Download PDF
          </a>
          
        </div>

      </section>

      <Footer />
    </>
  );
}