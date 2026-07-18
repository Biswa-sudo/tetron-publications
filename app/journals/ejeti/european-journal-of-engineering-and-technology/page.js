import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetiNavbar from "@/components/allNavbar/EjetiNavbar";


export default function EJETIJournalPage() {
  return (
    <>
      <Header />
      <EjetiNavbar />

      <section className="container my-5">

        {/* TOP SECTION */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-5">
            <img
              src="/ejeti.jpg"
              alt="European Journal of Engineering and Technology Insights"
              className="img-fluid border rounded"
            />
          </div>

          <div className="col-md-7 mt-4 mt-md-0">
            <p>
              <strong>European Journal of Engineering and Technology Insights (EJETI)</strong> is a
              bi-monthly peer-reviewed open-access journal that publishes high-quality
              original research articles, reviews, case studies, notes, essays,
              commentaries, short communications, opinion pieces, and book reviews
              addressing fundamental, theoretical, and applied research in the fields
              of engineering and technology.
            </p>

            <p>
              We welcome contributions in the following areas:
            </p>

            <p>
              Aerospace Engineering, Agricultural Engineering, Biochemical Engineering,
              Bioengineering, Chemical Engineering, Civil Engineering, Computer Science
              and Engineering, Control Engineering, Electrical Engineering, Environmental
              Engineering, Industrial Engineering, Information Technology, Mechanical
              Engineering, Materials Science, Nanotechnology, Nuclear Engineering,
              Optical Engineering, Petroleum Engineering, Robotics, Software Engineering,
              Structural Engineering, Telecommunications, Transportation Engineering,
              Water Resources Engineering, and other related fields.
            </p>
          </div>
        </div>

        {/* JOURNAL DETAILS */}
        <div className="mb-4">
          <p><strong>Journal Title:</strong> European Journal of Engineering and Technology Insights (EJETI)</p>
          <p><strong>Journal Abbreviation:</strong> Eur. J. Eng. Technol. Insights</p>
          <p><strong>Subject:</strong> Engineering and Technology</p>
          <p><strong>Frequency of Publication:</strong> Bi-monthly</p>
          <p><strong>Language:</strong> English</p>
          <p><strong>Starting year:</strong> 2025</p>
          <p><strong>Format of publication:</strong> Online</p>
          <p><strong>Indexing:</strong> Google Scholar</p>
          <p>
            <strong>Article Submission Email Id:</strong>{" "}
            <a href="mailto:submission.ejeti@tetronpublications.com">
              submission.ejeti@tetronpublications.com
            </a>
          </p>
        </div>

        {/* PEER REVIEW */}
        <div className="mb-4">
          <p>
            <strong>Peer Review Process:</strong> Each research article submitted to the
            journal undergoes a rigorous double-blind peer review process to maintain
            the highest standards of academic quality and integrity.
          </p>
        </div>

        {/* OPEN ACCESS */}
        <div className="mb-4">
          <p>
            <strong>Open Access Policy:</strong> The journal provides immediate and
            unrestricted access to all of its published content, promoting the global
            dissemination of knowledge and encouraging cross-disciplinary collaboration.
          </p>
        </div>

        {/* LICENSE */}
        <div className="mb-5">
          <p>
            <strong>License Information:</strong> All published articles are made available
            under the Creative Commons Attribution (CC BY) 4.0 license. This allows others
            to freely share, adapt, and build upon the work, even for commercial purposes,
            provided the original author(s) are properly credited.
          </p>
        </div>

      </section>

      <Footer />
    </>
  );
}
