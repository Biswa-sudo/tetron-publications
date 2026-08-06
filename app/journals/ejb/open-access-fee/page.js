import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjbNavbar from "@/components/allNavbar/EjbNavbar";

export default function ArticleProcessingChargesPage() {
  return (
    <>
      <Header hideNav={true} />
      <EjbNavbar />

      <section className="container my-5">

        {/* PAGE TITLE */}
        <h3 className="fw-semibold mb-4">
          Article Processing Charges (APC)
        </h3>

        {/* INTRO */}
        <p className="small">
          The Article Processing Charge (APC) guarantees immediate open access
          to the article on the <strong>European Journal of Biosciences (EJB)</strong>{" "}
          website without registration or embargo period. The APC covers
          publication costs, including copy editing, text formatting, figure
          and table composition, peer review management, permanent article
          archiving, and site administration.
        </p>

        <p className="small">
          Additionally, it supports the promotion of the journal and article,
          including global dissemination, indexing services, and customer
          support.
        </p>

        <p className="small">
          The APC is applicable only once the manuscript is accepted for
          publication following peer review. Please note that EJB does not
          charge submission or review fees.
        </p>

        {/* APC TABLE */}
        <div className="table-responsive my-4">
          <table className="table table-bordered align-middle small">
            <thead className="table-light">
              <tr>
                <th rowSpan="2">Article Types</th>
                <th colSpan="3" className="text-center">
                  Article Processing Charges
                </th>
              </tr>
              <tr>
                <th>
                  Low-Income Countries<br />
                  <small>
                    (For list <a href="#">Click here</a>)
                  </small>
                </th>
                <th>
                  High-Income Countries<br />
                  <small>
                    (For list <a href="#">Click here</a>)
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
        <p className="small">
          We understand the challenges researchers face and strive to support
          the global academic community. If you require a concession on the{" "}
          <strong>Article Processing Charges (APC)</strong>, please reach out to us.
        </p>

        <p className="small">
          <strong>Email:</strong>{" "}
          <a href="mailto:editorial.ejb@tetronpublications.com">
            editorial.ejb@tetronpublications.com
          </a>
        </p>

        <p className="small">
          Our team will review your request promptly. We are committed to
          ensuring accessibility and fairness while maintaining the highest
          standards of publication quality.
        </p>

        <p className="small fw-semibold">
          Your research matters, and we’re here to help.
        </p>

      </section>

      <Footer />
    </>
  );
}
