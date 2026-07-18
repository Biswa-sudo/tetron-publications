import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPublisherPage() {
  return (
    <>
      <Header />

      {/* Page Title Bar */}
      <section
        className="py-3 text-white"
        style={{
          background: "linear-gradient(to right, #2b1c6b, #b4b3e6)",
        }}
      >
        <div className="container">
          <h2 className="mb-0">About Publisher</h2>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="container my-5">
        <div className="row align-items-center">
          {/* Shrank image column to col-md-4 */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <img
              src="/about1.png"
              alt="Research and Innovation"
              className="img-fluid border rounded shadow-sm"
              style={{ maxHeight: "280px", objectFit: "cover" }}
            />
          </div>

          {/* Expanded text column to col-md-8 and added fs-5 */}
          <div className="col-md-8">
            <p className="fs-5 text-muted">
              Tetron Publications is a premier open-access publishing house
              dedicated to advancing research and innovation across a wide
              range of disciplines. We specialize in publishing high-quality,
              peer-reviewed journals that cover diverse fields, including
              health, life sciences, engineering, technology, and
              interdisciplinary studies.
            </p>

            <p className="fs-5 text-muted mb-0">
              Our mission is to foster innovation, empower knowledge sharing,
              and promote global collaboration among researchers, academics,
              and professionals.
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* SECTION 2 (REVERSED) */}
      <section className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          {/* Shrank image column to col-md-4 */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <img
              src="/about2.png"
              alt="Peer Review Process"
              className="img-fluid border rounded shadow-sm"
              style={{ maxHeight: "280px", objectFit: "cover" }}
            />
          </div>

          {/* Expanded text column to col-md-8 and added fs-5 */}
          <div className="col-md-8">
            <p className="fs-5 text-muted">
              With a commitment to academic excellence, our in-house peer-review
              management system ensures a seamless and efficient publication
              process while upholding the highest standards of quality and
              integrity.
            </p>

            <p className="fs-5 text-muted mb-0">
              As an open-access publisher, we believe in the power of
              unrestricted knowledge sharing, making cutting-edge research
              accessible to a global audience and enabling researchers to
              address complex challenges through collaboration and innovation.
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* SECTION 3 */}
      <section className="container my-5">
        <div className="row align-items-center">
          {/* Shrank image column to col-md-4 */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <img
              src="/about3.png"
              alt="Multidisciplinary Research"
              className="img-fluid border rounded shadow-sm"
              style={{ maxHeight: "280px", objectFit: "cover" }}
            />
          </div>

          {/* Expanded text column to col-md-8 and added fs-5 */}
          <div className="col-md-8">
            <p className="fs-5 text-muted">
              Tetron Publications provides a trusted platform for publishing
              impactful research that drives progress in fields such as
              medicine, biology, biotechnology, engineering, applied sciences,
              and interdisciplinary studies.
            </p>

            <p className="fs-5 text-muted mb-0">
              Our journals are designed to bridge traditional boundaries
              between disciplines, encouraging cross-field collaboration and
              the exchange of transformative ideas.
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* SECTION 4 (REVERSED) */}
      <section className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          {/* Shrank image column to col-md-4 */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <img
              src="/about4.png"
              alt="Global Collaboration"
              className="img-fluid border rounded shadow-sm"
              style={{ maxHeight: "280px", objectFit: "cover" }}
            />
          </div>

          {/* Expanded text column to col-md-8 and added fs-5 */}
          <div className="col-md-8">
            <p className="fs-5 text-muted">
              With a focus on fostering global collaboration and promoting the
              free exchange of ideas, Tetron Publications is driven by the
              mission to "Empower Knowledge, Foster Growth, and Shape the
              Future".
            </p>

            <p className="fs-5 text-muted mb-0">
              By choosing Tetron Publications, authors gain access to a
              professional and supportive publishing environment that
              prioritizes academic rigor, global reach, and impactful
              dissemination. Our role is shaping the future of scientific
              discovery, innovation, and knowledge sharing through our
              comprehensive and inclusive publishing platform.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}