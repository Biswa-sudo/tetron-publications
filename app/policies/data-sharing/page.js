import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DataSharingPage() {
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
          <h2 className="mb-0">Data Sharing Tab</h2>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container my-5">
        <div className="row align-items-center"> {/* Changed to align-items-center for cleaner balance */}

          {/* LEFT CONTENT (Expanded column width and increased font size) */}
          <div className="col-md-8">
            <p className="fs-5 text-muted mb-3">
              Tetron Publications encourages authors to share the data and other
              supporting materials related to the results in their manuscript
              by archiving them in an appropriate public repository. Authors
              should include a data availability statement in their manuscript,
              with a link to the repository where the data is stored.
            </p>

            <p className="fs-5 text-muted mb-3">
              This statement will be published alongside the paper, and shared
              data should be properly cited.
            </p>

            <p className="fs-5 text-muted mb-2">
              For NIH-funded researchers, please ensure compliance with the NIH
              Data Sharing guidelines available at:
            </p>

            {/* Kept the link easy to read but wrapped cleanly */}
            <p className="fs-5 text-break mb-0">
              <a
                href="https://grants.nih.gov/grants/guide/notice-files/NOT-OD-21-013.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-underline"
              >
                https://grants.nih.gov/grants/guide/notice-files/NOT-OD-21-013.html
              </a>
            </p>
          </div>

          {/* RIGHT IMAGE (Shrank column width so the image is smaller) */}
          <div className="col-md-4 mt-4 mt-md-0 text-center">
            <img
              src="/openaccess.jpg"
              alt="Data Sharing"
              className="img-fluid rounded border shadow-sm"
              style={{ maxHeight: "280px", objectFit: "cover" }}
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}