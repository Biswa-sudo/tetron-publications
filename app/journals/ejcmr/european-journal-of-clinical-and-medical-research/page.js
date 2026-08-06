import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar";

export default function JournalDetailPage() {
  return (
    <>
      <Header hideNav={true} />
      <EjcmrNavbar />

      <section className="container my-5">

        {/* TOP SECTION */}
        <div className="row">

          {/* LEFT IMAGE */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src="/ejcmr.jpg"
              alt="European Journal of Clinical and Medical Research"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="col-md-7">
            <h4 className="fw-semibold text-primary">
              European Journal of Clinical and Medical Research (EJCMR)
            </h4>

            <p className="small">
              European Journal of Clinical and Medical Research (EJCMR) is a
              bi-monthly peer-reviewed open-access journal that publishes
              high-quality original research articles, reviews, case studies,
              notes, essays, commentaries, short communications, opinion pieces,
              and book reviews addressing fundamental, theoretical, and applied
              research in the fields of medical and clinical sciences.
            </p>

            <p className="small">
              We welcome contributions in the following areas:
            </p>

            <p className="small">
              Anatomy, Anesthesiology, Biochemistry, Biopharmaceuticals,
              Biomedical Engineering, Cancer Research, Cardiology, Clinical
              Epidemiology, Clinical Immunology, Clinical Microbiology,
              Clinical Nutrition, Clinical Pharmacology, Dermatology,
              Diagnostics, Emergency Medicine, Endocrinology, Family Medicine,
              Gastroenterology, Genetics, Geriatrics, Gynecology, Hematology,
              Hepatology, Infectious Diseases, Internal Medicine, Medical
              Imaging, Medical Microbiology, Medical Physics, Medical
              Technology, Neurology, Nephrology, Obstetrics, Oncology,
              Ophthalmology, Orthopedics, Otolaryngology, Pathology,
              Pediatrics, Pharmacology, Public Health, Radiology,
              Reproductive Medicine, Rheumatology, Surgery, Toxicology,
              Translational Medicine, Urology, and other related fields.
            </p>
          </div>
        </div>

        {/* JOURNAL DETAILS */}
        <div className="row mt-5">
          <div className="col-md-12">

            <p className="small">
              <strong>Journal Title:</strong> European Journal of Clinical and
              Medical Research (EJCMR)
            </p>

            <p className="small">
              <strong>Journal Abbreviation:</strong> Eur. J. Clin. Med. Res.
            </p>

            <p className="small">
              <strong>Subject:</strong> Medical Science
            </p>

            <p className="small">
              <strong>Frequency of Publication:</strong> Bi-monthly
            </p>

            <p className="small">
              <strong>Language:</strong> English
            </p>

            <p className="small">
              <strong>Starting year:</strong> 2025
            </p>

            <p className="small">
              <strong>Format of publication:</strong> Online
            </p>

            <p className="small">
              <strong>Indexing:</strong> Google Scholar
            </p>

            <p className="small">
              <strong>Article Submission Email Id:</strong>{" "}
              <a href="mailto:submission.ejcmr@tetronpublications.com">
                submission.ejcmr@tetronpublications.com
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
              made available under the Creative Commons Attribution (CC BY)
              4.0 license. This allows others to freely share, adapt, and build
              upon the work, even for commercial purposes, provided the
              original author(s) are properly credited.
            </p>

          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
