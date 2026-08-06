import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetiNavbar from "@/components/allNavbar/EjetiNavbar";


export default function EJETIAPCPage() {
  return (
    <>
      <Header hideNav={true} />
      <EjetiNavbar />

      <section className="container my-5">

        <h2 className="fw-bold mb-4">Article Processing Charges (APC)</h2>

        <p>
          The Article Processing Charge (APC) guarantees immediate open access
          to the article on the <em>European Journal of Engineering and Technology Insights (EJETI)</em>
          website without registration or embargo period. The APC covers the
          publication costs, including copy editing, text formatting, figure
          and table composition, peer review management, permanent article
          archiving, and site administration (hosting, maintenance, and file
          support). Additionally, it supports the promotion of the journal and
          article, including global dissemination, indexing services, and
          customer support.
        </p>

        <p>
          The APC is only applicable once the manuscript is accepted for
          publication following peer review. Please note that <strong>EJETI</strong> does
          not charge submission or review fees.
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
                  (For List <a href="#">Click here</a>)
                </th>
                <th>
                  High-Income Countries <br />
                  (For list <a href="#">click here</a>)
                </th>
                <th>Other Countries</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Original Research / Systematic Review & Meta-Analysis
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

        <p>
          We understand the challenges researchers face and strive to support
          the global academic community. If you require a concession on the
          <strong> Article Processing Charges (APC)</strong>, please reach out to us.
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:editorial.ejet@tetronpublications.com">
            editorial.ejet@tetronpublications.com
          </a>
        </p>

        <p>
          Our team will review your request promptly. We are committed to
          ensuring accessibility and fairness while maintaining the highest
          standards of publication quality.
        </p>

        <p className="fw-semibold">
          Your research matters, and we’re here to help.
        </p>

      </section>

      <Footer />
    </>
  );
}
