"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetNavbar from "@/components/allNavbar/EjetiNavbar"; 

export default function ArticlesInPressEjetPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Add API fetch or filtering logic here when ready
  };

  return (
    <>
      <Header hideNav={true} />
      <EjetNavbar />   

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

        {/* ARTICLES RESULT MESSAGE */}
        <div>
          <p className="text-start">No articles found.</p>
        </div>

      </section>

      <Footer />
    </>
  );
}