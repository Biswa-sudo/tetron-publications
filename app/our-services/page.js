import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurServicesPage() {
  return (
    <>
      <Header />

      {/* PAGE TITLE SECTION */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(to right, #0b0f3b, #b7b9e6)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Our Services</h1>
          
          {/* Removed 'small', added 'fs-5' for larger lead text */}
          <p className="mb-0 fs-5">
            Tetron Publications is proud to introduce a suite of innovative and
            researcher-focused publishing services as part of our commitment to
            advancing academic excellence. With a strong emphasis on quality,
            efficiency, and discoverability, our services are tailored to meet
            the needs of authors, editors, and academic societies alike.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="container my-5">

        {/* SERVICE ITEM */}
        <div className="row p-4 mb-4 bg-light border rounded shadow-sm align-items-center">
          {/* Added 'fs-4' and 'text-primary' to make the title larger and stand out */}
          <div className="col-md-4 fs-4 fw-bold text-primary mb-3 mb-md-0">
            Efficient Manuscript Submission and Review Process
          </div>
          {/* Removed 'small', added 'fs-5' for much larger, readable text */}
          <div className="col-md-8 fs-5 text-muted">
            Our advanced manuscript management system allows authors to easily
            submit articles and track their progress from submission through to
            publication. This platform is equipped with essential tools,
            including iThenticate for plagiarism detection and a reviewer
            recommendation system to ensure smooth, efficient peer review.
          </div>
        </div>

        {/* SERVICE ITEM */}
        <div className="row p-4 mb-4 bg-light border rounded shadow-sm align-items-center">
          <div className="col-md-4 fs-4 fw-bold text-primary mb-3 mb-md-0">
            High-Quality Editorial and Production Services
          </div>
          <div className="col-md-8 fs-5 text-muted">
            We offer professional editing services, ensuring clarity, accuracy,
            and consistency throughout each manuscript. Once edited, articles
            move seamlessly through our typesetting and HTML conversion
            process, where they are prepared for digital and print publication,
            ensuring every piece is polished and ready for a global audience.
          </div>
        </div>

        {/* SERVICE ITEM */}
        <div className="row p-4 mb-4 bg-light border rounded shadow-sm align-items-center">
          <div className="col-md-4 fs-4 fw-bold text-primary mb-3 mb-md-0">
            Advancing Indexing Opportunities
          </div>
          <div className="col-md-8 fs-5 text-muted">
            As we establish, Tetron Publications is working closely with
            editorial teams to prepare our journals for indexing in leading
            platforms such as DOAJ, UGC-CARE, Web of Science (ESCI/SCIE/AHCI/SSCI),
            PubMed, and SCOPUS. Our focus is to meet the criteria for indexing
            and submit metadata for early and in-issue articles to enhance
            discoverability across major academic databases.
          </div>
        </div>

        {/* SERVICE ITEM */}
        <div className="row p-4 mb-4 bg-light border rounded shadow-sm align-items-center">
          <div className="col-md-4 fs-4 fw-bold text-primary mb-3 mb-md-0">
            Enhanced Discoverability and Visibility
          </div>
          <div className="col-md-8 fs-5 text-muted">
            To amplify the reach of published research, we employ advanced SEO
            strategies and leverage social media platforms. Dedicated
            promotional efforts highlight key articles and issues, with a
            special focus on thematic or special editions to attract a broader
            audience.
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}