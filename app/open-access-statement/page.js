import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OpenAccessStatementPage() {
  return (
    <>
      <Header />

      {/* PAGE TITLE BAR */}
      <section
        className="py-3 text-white"
        style={{
          background: "linear-gradient(to right, #2b1c6b, #b4b3e6)",
        }}
      >
        <div className="container">
          <h2 className="mb-0">Open Access Statement</h2>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container my-5">
        <div className="row align-items-center"> {/* Changed align-items-start to center for better visual balance */}

          {/* LEFT TEXT (Increased column width to 8 and bumped up font size) */}
          <div className="col-md-8">
            <p className="fs-5 text-dark mb-3">
              Tetron Publications is committed to high ethical standards in
              academic publishing. All of our journals are gold open access,
              ensuring that all articles are freely accessible to readers
              worldwide.
            </p>

            <p className="fs-5 text-dark mb-3">
              For article processing charges, please visit the respective
              journal pages for detailed information.
            </p>

            <p className="fs-5 text-dark mb-0">
              In partnership with learned societies, we facilitate the global
              dissemination of open access research. All content is published
              under various Creative Commons licenses to support the open
              sharing and reuse of scientific knowledge.
            </p>
          </div>

          {/* RIGHT IMAGE (Decreased column width to 4 so it sits smaller) */}
          <div className="col-md-4 mt-4 mt-md-0 text-center">
            <img
              src="/openaccess.jpg"
              alt="Open Access Research"
              className="img-fluid rounded border shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }} 
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}