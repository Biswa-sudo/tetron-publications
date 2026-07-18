import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjbNavbar from "@/components/allNavbar/EjbNavbar";

export default function AuthorGuidelinesPage() {
  return (
    <>
      <Header />
      <EjbNavbar />

      <section className="container my-5">

        <h3 className="fw-semibold mb-4">Author Guidelines</h3>

        {/* SUBMISSION PREPARATION CHECKLIST */}
        <h5 className="fw-semibold text-primary mt-4">
          Submission Preparation Checklist
        </h5>

        <p className="small">
          Before submitting authors must ensure that their manuscript meets the
          following requirements:
        </p>

        <ul className="small">
          <li>The manuscript has not been previously published or submitted elsewhere.</li>
          <li>The submission file is in Microsoft Word format.</li>
          <li>Figures and tables are embedded in the manuscript at appropriate places.</li>
          <li>All URLs and references are provided where available.</li>
          <li>The text follows the stylistic and bibliographic requirements outlined below.</li>
        </ul>

        {/* INSTRUCTIONS FOR AUTHORS */}
        <h5 className="fw-semibold text-primary mt-4">
          Instructions for Authors
        </h5>

        <p className="small">
          The European Journal of Biosciences (EJB) publishes high-quality
          original research articles, reviews, case studies, short
          communications, opinion pieces, and technical notes.
        </p>

        <p className="small">
          Manuscripts should be written in clear, professional English.
          Submissions that do not meet formatting, ethical, or quality standards
          may be returned for revision before peer review.
        </p>

        {/* WORD LIMIT */}
        <h6 className="fw-semibold mt-3">Word Limit</h6>
        <p className="small">
          Full-length research articles should not exceed 7,000 words,
          excluding references, tables, figures, and supplementary materials.
        </p>

        {/* ARTICLE TYPES */}
        <h6 className="fw-semibold mt-3">Article Types</h6>
        <p className="small">
          EJB accepts the following article types:
        </p>
        <ul className="small">
          <li>Original Research Articles</li>
          <li>Review Articles</li>
          <li>Systematic Reviews & Meta-Analyses</li>
          <li>Case Studies</li>
          <li>Short Communications</li>
          <li>Opinion Pieces</li>
          <li>Technical Notes</li>
        </ul>

        {/* MANUSCRIPT STRUCTURE */}
        <h6 className="fw-semibold mt-3">Manuscript Structure</h6>
        <p className="small">
          The manuscript should include the following sections:
        </p>

        <ol className="small">
          <li>Title Page</li>
          <li>Abstract and Keywords</li>
          <li>Introduction</li>
          <li>Materials and Methods</li>
          <li>Results</li>
          <li>Discussion</li>
          <li>Conclusion</li>
          <li>Acknowledgements (optional)</li>
          <li>References</li>
        </ol>

        {/* REFERENCES */}
        <h5 className="fw-semibold text-primary mt-4">References</h5>
        <p className="small">
          Authors are required to follow the Vancouver style of referencing.
          References should be numbered consecutively in the order in which
          they appear in the text.
        </p>

        <p className="small">
          <strong>Example:</strong><br />
          Smith AB, Jones CD. Title of article. <em>Journal Name</em>.
          2023;15(4):123–130.
        </p>

        {/* PEER REVIEW */}
        <h5 className="fw-semibold text-primary mt-4">Peer Review</h5>
        <p className="small">
          All manuscripts submitted to EJB undergo a rigorous double-blind
          peer-review process. Reviewers are selected based on subject
          expertise, and editorial decisions are based on scientific merit,
          originality, and relevance.
        </p>

        {/* COPYRIGHT & LICENSING */}
        <h5 className="fw-semibold text-primary mt-4">
          Copyright and Licensing
        </h5>
        <p className="small">
          Authors retain copyright of their work. All articles are published
          under the Creative Commons Attribution (CC BY 4.0) license.
        </p>

        <p className="small">
          This license permits unrestricted use, distribution, and reproduction
          in any medium, provided the original author(s) and source are credited.
        </p>

        {/* AUTHOR CERTIFICATION */}
        <h6 className="fw-semibold mt-3">Author Certification</h6>
        <ul className="small">
          <li>The manuscript is original and has not been published elsewhere.</li>
          <li>All authors have approved the final version.</li>
          <li>Any conflicts of interest have been disclosed.</li>
        </ul>

        {/* PRIVACY STATEMENT */}
        <h5 className="fw-semibold text-primary mt-4">Privacy Statement</h5>
        <p className="small">
          Personal information provided by authors and reviewers will be used
          exclusively for editorial and publishing purposes and will not be
          shared with third parties without explicit consent.
        </p>

        {/* OPEN ACCESS */}
        <h5 className="fw-semibold text-primary mt-4">Open Access</h5>
        <p className="small">
          The European Journal of Biosciences (EJB) is a fully open-access
          journal. All published articles are freely available online without
          subscription or registration barriers.
        </p>

        {/* PLAGIARISM POLICY */}
        <h5 className="fw-semibold text-primary mt-4">
          Plagiarism Policy
        </h5>
        <p className="small">
          EJB strictly prohibits plagiarism in all forms. All manuscripts are
          screened using plagiarism detection software.
        </p>

        <p className="small">
          Manuscripts found to contain plagiarism will be rejected immediately.
          Any instance of plagiarism identified after publication may result in
          article retraction.
        </p>

        {/* SELF-PLAGIARISM */}
        <h6 className="fw-semibold mt-3">Self-Plagiarism</h6>
        <p className="small">
          Self-plagiarism, including redundant publication or reuse of
          substantial portions of previously published work without proper
          citation, is not permitted.
        </p>

      </section>

      <Footer />
    </>
  );
}
