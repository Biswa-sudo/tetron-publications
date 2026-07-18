import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar";

export default function EJCMR_APC() {
  return (
    <>
      <Header />
      <EjcmrNavbar />

      <section className="container my-5">

        {/* PAGE TITLE */}
        <h2 className="fw-bold mb-4">Article Processing Charges (APC)</h2>

        {/* INTRO PARAGRAPHS */}
        <p>
          The Article Processing Charge (APC) guarantees immediate open access
          to the article on the <strong>European Journal of Clinical and Medical Research (EJCMR)</strong> website
          without registration or embargo period. The APC covers the publication
          costs, including copy editing, text formatting, figure and table
          composition, peer review management, permanent article archiving, and
          site administration (hosting, maintenance, and file support).
          Additionally, it supports the promotion of the journal and article,
          including global dissemination, indexing services, and customer support.
        </p>

        <p>
          The APC is only applicable once the manuscript is accepted for
          publication following peer review. Please note that{" "}
          <strong>EJCMR does not charge submission or review fees.</strong>
        </p>

        {/* APC TABLE */}
        <div className="table-responsive my-4">
          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th rowSpan="2">Article Types</th>
                <th colSpan="3" className="text-center">
                  Article Processing Charges
                </th>
              </tr>
              <tr>
                <th>
                  Low-Income Countries <br />
                  <small>
                    (For list{" "}
                    <a href="#" className="text-decoration-none">
                      Click here
                    </a>
                    )
                  </small>
                </th>
                <th>
                  High-Income Countries <br />
                  <small>
                    (For list{" "}
                    <a href="#" className="text-decoration-none">
                      click here
                    </a>
                    )
                  </small>
                </th>
                <th>Other Countries</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Original Research / Systematic Review &amp; Meta-Analysis
                </td>
                <td>Zero</td>
                <td>600 USD</td>
                <td>150 USD</td>
              </tr>

              <tr>
                <td>Other Types</td>
                <td>Zero</td>
                <td>500 USD</td>
                <td>100 USD</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FOOTER TEXT */}
        <p>
          We understand the challenges researchers face and strive to support
          the global academic community. If you require a concession on the{" "}
          <strong>Article Processing Charges (APC)</strong>, please reach out to us.
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:editorial.ejcmr@tetronpublications.com">
            editorial.ejcmr@tetronpublications.com
          </a>
        </p>

        <p>
          Our team will review your request promptly. We are committed to
          ensuring accessibility and fairness while maintaining the highest
          standards of publication quality.
        </p>

        <p className="fw-semibold">
          Your research matters, and we&apos;re here to help.
        </p>

      </section>

      <Footer />
    </>
  );
}
