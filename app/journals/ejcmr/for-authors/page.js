import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar";

export default function EJCMRForAuthors() {
  return (
    <>
      <Header />
      <EjcmrNavbar />

      <section className="container my-5">

        <h2 className="fw-bold mb-4">Author Guidelines</h2>

        {/* Submission Preparation Checklist */}
        <h5 className="fw-bold mt-4">Submission Preparation Checklist</h5>
        <p>
          Before submitting, authors must ensure that their manuscript meets the
          following criteria. Submissions may be returned if they do not comply
          with these guidelines:
        </p>

        <ul>
          <li>The manuscript has not been previously published or is under consideration elsewhere.</li>
          <li>The submission file is in Microsoft Word format.</li>
          <li>The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines.</li>
          <li>All illustrations, figures, and tables are placed within the text at appropriate points.</li>
          <li>A statement confirming ethical approval and informed consent is included where applicable.</li>
          <li>The manuscript follows the journal’s formatting and referencing style.</li>
        </ul>

        {/* Instructions for Authors */}
        <h5 className="fw-bold mt-4">Instructions for Authors</h5>
        <p>
          The European Journal of Clinical and Medical Research (EJCMR) publishes
          original research articles, reviews, case reports, and other scholarly
          contributions in the field of medical and clinical sciences.
        </p>

        <p>
          Authors are advised to carefully read these instructions before
          submission. Submissions should be sent via the online manuscript
          submission system or through the journal’s official email.
        </p>

        {/* Manuscript Formatting */}
        <h5 className="fw-bold mt-4">Manuscript Formatting</h5>
        <p>
          Manuscripts should be written in clear, concise English. Authors whose
          first language is not English are encouraged to seek professional
          language editing prior to submission.
        </p>

        <p>
          Manuscripts should not exceed 7,000 words, including title page, abstract,
          main text, references, tables, figures, and supplementary material.
        </p>

        {/* Article Types */}
        <h5 className="fw-bold mt-4">Article Types</h5>
        <p>
          EJCMR accepts a variety of article types, including Original Research
          Articles, Review Articles, Short Communications, Case Reports, Case
          Series, and Technical Notes.
        </p>

        {/* Abstract */}
        <h5 className="fw-bold mt-4">Abstract</h5>
        <p>
          The abstract should not exceed 300 words and should be structured where
          applicable.
        </p>

        {/* Manuscript Structure */}
        <h5 className="fw-bold mt-4">Manuscript Structure</h5>
        <p>The manuscript should include the following sections:</p>

        <ol>
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

        {/* References */}
        <h5 className="fw-bold mt-4">References</h5>
        <p>
          Authors are required to follow the Vancouver style for referencing.
          References should be numbered consecutively in the order in which they
          appear in the text.
        </p>

        <p><strong>Example:</strong></p>
        <p className="fst-italic">
          Author(s). Title of the article. Journal Name. Year;Volume(Issue):Pages.
        </p>

        {/* Peer Review */}
        <h5 className="fw-bold mt-4">Peer Review</h5>
        <p>
          All manuscripts submitted to EJCMR undergo a rigorous double-blind
          peer-review process. Each manuscript is reviewed by at least two
          independent experts.
        </p>

        <ul>
          <li>Acceptance with minor revision</li>
          <li>Acceptance with major revision</li>
          <li>Rejection</li>
        </ul>

        {/* Copyright and Licensing */}
        <h5 className="fw-bold mt-4">Copyright and Licensing</h5>
        <p>
          Authors retain the copyright of their work and grant EJCMR the right of
          first publication. Articles are published under the Creative Commons
          Attribution (CC BY 4.0) license.
        </p>

        {/* Author Certification */}
        <h6 className="fw-bold mt-3">Author Certification</h6>
        <ul>
          <li>The manuscript is original and has not been published elsewhere.</li>
          <li>All authors have approved the submission.</li>
          <li>Any conflicts of interest have been disclosed.</li>
        </ul>

        {/* Privacy Statement */}
        <h5 className="fw-bold mt-4">Privacy Statement</h5>
        <p>
          EJCMR is committed to maintaining the confidentiality and privacy of all
          authors and reviewers. Personal information collected will be used
          solely for editorial purposes.
        </p>

        {/* Open Access */}
        <h5 className="fw-bold mt-4">Open Access</h5>
        <p>
          EJCMR provides immediate open access to its content, ensuring global
          dissemination of research findings without restriction.
        </p>

        {/* Plagiarism Policy */}
        <h5 className="fw-bold mt-4">Plagiarism Policy</h5>
        <p>
          Plagiarism in any form is strictly prohibited. Manuscripts are screened
          using plagiarism detection software prior to acceptance.
        </p>

        <ul>
          <li>Similarity below 15% is acceptable</li>
          <li>Similarity above 25% may result in rejection</li>
        </ul>

        <p>
          If plagiarism is detected after publication, EJCMR reserves the right
          to retract the article in accordance with COPE guidelines.
        </p>

        {/* Self-Plagiarism */}
        <h6 className="fw-bold mt-3">Self-Plagiarism</h6>
        <p>
          Authors must avoid redundant publication. Any overlap with previously
          published work must be appropriately cited and justified.
        </p>

      </section>

      <Footer />
    </>
  );
}
