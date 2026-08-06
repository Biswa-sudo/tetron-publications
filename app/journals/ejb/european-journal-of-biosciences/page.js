import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjbNavbar from "@/components/allNavbar/EjbNavbar";

export default function JournalDetailPage() {
  return (
    <>
      <Header hideNav={true} />   {/* ← hides the main nav */}
      <EjbNavbar />

      <section className="container my-5">
        <div className="row">

          {/* LEFT IMAGE */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src="/ejb.jpg"
              alt="European Journal of Biosciences"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-7">

            <h4 className="fw-semibold text-primary">
              European Journal of Biosciences (EJB)
            </h4>

            <p className="small">
              European Journal of Biosciences (EJB) is a bi-monthly peer-reviewed
              open-access journal that publishes high-quality original research
              articles, reviews, case studies, notes, essays, commentaries,
              short communications, opinion pieces, and book reviews addressing
              fundamental, theoretical, and applied research in the field of
              biosciences.
            </p>

            <p className="small">
              We welcome contributions in the following areas:
            </p>

            <p className="small">
              Agricultural Biotechnology, Biochemistry, Bioengineering,
              Bioinformatics, Biophysics, Botany, Cell Biology, Clinical and
              Translational Research, Cognitive Neuroscience, Developmental
              Biology, Ecology, Environmental Biology, Evolutionary Biology,
              Genetics, Genomics, Immunology, Marine Biology, Medical
              Biotechnology, Microbiology, Molecular Biology, Neuroscience,
              Nutritional Science, Pharmacology, Physiology, Plant
              Biotechnology, Reproductive Biology, Systems Biology, Toxicology,
              Zoology, and other related fields.
            </p>

          </div>
        </div>

        {/* JOURNAL METADATA */}
        <div className="row mt-5">
          <div className="col-md-12">

            <p className="small"><strong>Journal Title:</strong> European Journal of Biosciences (EJB)</p>
            <p className="small"><strong>Journal Abbreviation:</strong> Eur. J. Biosci.</p>
            <p className="small"><strong>Subject:</strong> Bioscience</p>
            <p className="small"><strong>Frequency of Publication:</strong> Bi-monthly</p>
            <p className="small"><strong>Language:</strong> English</p>
            <p className="small"><strong>Starting Year:</strong> 2025</p>
            <p className="small"><strong>Format of Publication:</strong> Online</p>
            <p className="small"><strong>Indexing:</strong> Google Scholar</p>
            <p className="small">
              <strong>Article Submission Email Id:</strong>{" "}
              <a href="mailto:submission.ejb@tetronpublications.com">
                submission.ejb@tetronpublications.com
              </a>
            </p>

            <p className="small">
              <strong>Peer Review Process:</strong> Each research article
              submitted to the journal undergoes a rigorous double-blind peer
              review process to maintain the highest standards of academic
              quality and integrity.
            </p>

            <p className="small">
              <strong>Open Access Policy:</strong> The journal provides immediate
              and unrestricted access to all of its published content,
              promoting the global dissemination of knowledge and encouraging
              cross-disciplinary collaboration.
            </p>

            <p className="small">
              <strong>License Information:</strong> All published articles are
              made available under the Creative Commons Attribution (CC BY) 4.0
              license. This allows others to freely share, adapt, and build upon
              the work, even for commercial purposes, provided the original
              author(s) are properly credited.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}