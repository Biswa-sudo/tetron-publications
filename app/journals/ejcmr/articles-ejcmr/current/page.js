"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar"; 

export default function CurrentIssueEjcmrPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can trigger your API fetch or filtering logic here 
  };

  // Array of articles based on the screenshot provided
  const articlesData = [
    {
      id: 1,
      type: "Original Article",
      journal: "European Journal of Clinical and Medical Research (EJCMR)",
      volume: "1",
      issue: "1",
      title: "Improving Compound Selection in Drug Discovery: A Quantitative Approach for Biased Data Modelling",
      author: "Shema Shirley Mamachen"
    },
    {
      id: 2,
      type: "Case Report",
      journal: "European Journal of Clinical and Medical Research (EJCMR)",
      volume: "1",
      issue: "1",
      title: "Cardiac Malformations in a Preterm Neonate with Down Syndrome: A Case Report",
      author: "Rukma R. Kafle, Rakshya A. Kandel, Rupak Subedi, Chandan Shah, Sakil Rahman"
    },
    {
      id: 3,
      type: "Case Report",
      journal: "European Journal of Clinical and Medical Research (EJCMR)",
      volume: "1",
      issue: "1",
      title: "Six Months Gastric Retention of a Foreign Body in a 6-Year-Old Child Residing in a Refugee Camp: Case Report",
      author: "Segenet Bizuneh Mengistu, Suleiman Ayalew Belaym, Rediet Getu Degu, Alazar Wogayehu Gebrehana, Bi-niam Yoannes Wotango"
    },
    {
      id: 4,
      type: "Original Article",
      journal: "European Journal of Clinical and Medical Research (EJCMR)",
      volume: "1",
      issue: "1",
      title: "Socio-Cultural Determinants of Artificial Reproductive Technology (ART) uptake among Infertile Couples Visiting Fertility Clinics in FCT, Abuja",
      author: "O. O. Fweoya, H. T. Dike, O. O. Adeniyi and S. B. Kareem"
    },
    {
      id: 5,
      type: "Case Report",
      journal: "European Journal of Clinical and Medical Research (EJCMR)",
      volume: "1",
      issue: "1",
      title: 'Unusual Presentation of Inflammatory Polyps in Ulcerative Colitis: "Spider-web" Colon: A Case Report',
      author: "Segenet Bizuneh Mengistu, Alazar Wogayehu Gebrehana, Suleiman Ayalew Belay, Samuel Addisu Abera"
    }
  ];

  return (
    <>
      <Header hideNav={true} />
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