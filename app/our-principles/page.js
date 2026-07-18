import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurPrinciplesPage() {
  return (
    <>
      <Header />

      {/* PAGE TITLE */}
      <section
        className="py-3 text-white"
        style={{
          background: "linear-gradient(to right, #2b1c6b, #b4b3e6)",
        }}
      >
        <div className="container">
          <h2 className="mb-0">Our Principles</h2>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container my-4">

        {/* PRINCIPLE 1 */}
        <div className="row bg-light p-4 mb-4 align-items-center rounded border">
          <div className="col-md-3 mb-3 mb-md-0">
            <img
              src="/ourprinciples1.webp"
              alt="Excellence and Integrity"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 fs-5 text-muted">
            At Tetron Publications, we are driven by a deep commitment to
            excellence and integrity in everything we do. Our core principles
            guide us as we work to empower authors, editors, and researchers,
            ensuring that every aspect of the publishing process is handled
            with the utmost professionalism and care.
          </div>
        </div>

        {/* PRINCIPLE 2 (IMAGE RIGHT) */}
        <div className="row bg-light p-4 mb-4 align-items-center rounded border flex-md-row-reverse">
          <div className="col-md-3 mb-3 mb-md-0">
            <img
              src="/ourprinciples2.webp"
              alt="Expert Team"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 fs-5 text-muted">
            We are a passionate team of professionals with expertise in academic
            publishing, particularly in the fields of health, life sciences,
            interdisciplinary studies, engineering, and technology. Our
            collective dedication to quality, innovation, and collaboration
            ensures that we consistently meet the highest standards in the
            publishing industry.
          </div>
        </div>

        {/* PRINCIPLE 3 */}
        <div className="row bg-light p-4 mb-4 align-items-center rounded border">
          <div className="col-md-3 mb-3 mb-md-0">
            <img
              src="/ourprinciples3.webp"
              alt="Integrity and Transparency"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 fs-5 text-muted">
            Integrity and transparency are at the heart of our operations. We
            value the trust placed in us by our authors, editors, reviewers, and
            society clients, and we prioritize open communication and honest
            collaboration at every stage of the process. Our focus is always on
            building lasting relationships based on mutual respect and trust.
          </div>
        </div>

        {/* PRINCIPLE 4 (IMAGE RIGHT) */}
        <div className="row bg-light p-4 mb-4 align-items-center rounded border flex-md-row-reverse">
          <div className="col-md-3 mb-3 mb-md-0">
            <img
              src="/ourprinciples4.webp"
              alt="Editorial Leadership"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 fs-5 text-muted">
            The interests of our Editor-in-Chief and key stakeholders are always
            paramount. We strive to ensure that their vision aligns with a
            smooth, efficient, and seamless publishing experience for all
            parties involved, particularly our authors. Our approach is
            designed to support the success of each journal while meeting the
            evolving needs of the academic community.
          </div>
        </div>

        {/* PRINCIPLE 5 */}
        <div className="row bg-light p-4 mb-4 align-items-center rounded border">
          <div className="col-md-3 mb-3 mb-md-0">
            <img
              src="/ourprinciples5.webp"
              alt="Author Support"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 fs-5 text-muted">
            At Tetron Publications, we believe in offering a friendly,
            stress-free publishing experience. Our team is dedicated to
            providing personalized, hands-on support, allowing authors to focus
            on their research while we take care of the details.
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
