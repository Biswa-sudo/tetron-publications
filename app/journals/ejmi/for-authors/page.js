import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjmiNavbar from "@/components/allNavbar/EjmiNavbar";

export default function EJMIForAuthorsPage() {
  return (
    <>
      <Header hideNav={true} />
      <EjmiNavbar />

      <section className="container my-5">

        <h2 className="fw-bold mb-4">Author Guidelines</h2>

        <h5 className="fw-semibold">Submission Preparation Checklist</h5>
        <p>
          Before submitting, authors must ensure that their manuscript meets the
          following criteria. Submissions may be returned if they do not comply
          with these guidelines.
        </p>

        <ul>
          <li>The manuscript has not been previously published or under consideration by another journal.</li>
          <li>The submission file is in Microsoft Word format.</li>
          <li>The text is double-spaced, uses a standard font size, and all illustrations, figures, and tables are placed within the text.</li>
          <li>All URLs for references have been provided where available.</li>
          <li>The manuscript follows the ethical standards and submission requirements of the journal.</li>
          <li>A separate plagiarism declaration and conflict of interest statement is included.</li>
        </ul>

        <h5 className="fw-semibold mt-4">Instructions for Authors</h5>
        <p>
          The <strong>European Journal of Multidisciplinary Insights (EJMI)</strong> welcomes
          original research articles, reviews, case studies, short communications,
          essays, and opinion pieces across multidisciplinary domains. Manuscripts
          must be written in clear English and should present original work.
        </p>

        <p>
          Authors are advised to submit their manuscripts via Microsoft Word format
          in accordance with these instructions. Submissions should be sent to the
          editorial email address provided on the journal website.
        </p>

        <h6 className="fw-semibold mt-4">Manuscript Length</h6>
        <p>
          The total word count should not exceed 7000 words, including the title,
          abstract, main text, references, tables, figures, and supplementary
          information (where applicable).
        </p>

        <h6 className="fw-semibold mt-4">Article Types</h6>
        <ul>
          <li>Original Research Articles</li>
          <li>Review Articles</li>
          <li>Short Communications</li>
          <li>Case Studies</li>
          <li>Opinion Pieces</li>
          <li>Technical Notes</li>
        </ul>

        <h6 className="fw-semibold mt-4">Abstract</h6>
        <p>
          The abstract should not exceed 300 words and should be structured into
          background, methodology, results, and conclusions where appropriate.
        </p>

        <h6 className="fw-semibold mt-4">Manuscript Structure</h6>
        <ol>
          <li>Title Page</li>
          <li>Abstract</li>
          <li>Keywords</li>
          <li>Introduction</li>
          <li>Materials and Methods</li>
          <li>Results</li>
          <li>Discussion</li>
          <li>Conclusion</li>
          <li>References</li>
          <li>Acknowledgements (optional)</li>
        </ol>

        <h5 className="fw-semibold mt-5">References</h5>
        <p>
          Authors are required to follow the Vancouver style for referencing.
          References should be numbered consecutively in the order in which they
          appear in the text.
        </p>

        <h5 className="fw-semibold mt-5">Peer Review</h5>
        <p>
          All submissions undergo a rigorous double-blind peer review process.
          Reviewers are selected based on their expertise in the subject area.
          Editorial decisions are based on reviewers’ comments and academic merit.
        </p>

        <h5 className="fw-semibold mt-5">Copyright and Licensing</h5>
        <p>
          Authors retain copyright of their work and grant EJMI the right of first
          publication. All articles are published under the
          <strong> Creative Commons Attribution (CC BY 4.0) License</strong>,
          permitting unrestricted use, distribution, and reproduction provided
          the original work is properly cited.
        </p>

        <h6 className="fw-semibold mt-4">Author Certification</h6>
        <ul>
          <li>The manuscript is original and has not been published elsewhere.</li>
          <li>All authors have contributed significantly to the research.</li>
          <li>All conflicts of interest have been disclosed.</li>
        </ul>

        <h5 className="fw-semibold mt-5">Privacy Statement</h5>
        <p>
          The names and email addresses entered on this journal site will be used
          exclusively for the stated purposes of the journal and will not be made
          available for any other purpose.
        </p>

        <h5 className="fw-semibold mt-5">Open Access</h5>
        <p>
          EJMI is an open-access journal. All published articles are freely
          available online without subscription or access fees, supporting the
          global dissemination of research.
        </p>

        <h5 className="fw-semibold mt-5">Plagiarism Policy</h5>
        <p>
          The journal strictly prohibits plagiarism. All manuscripts are screened
          using plagiarism detection software. Any manuscript found to contain
          plagiarism beyond acceptable limits will be rejected.
        </p>

        <h6 className="fw-semibold mt-3">Plagiarism Threshold</h6>
        <ul>
          <li>Up to 15%: Acceptable</li>
          <li>15% – 25%: Minor revision required</li>
          <li>Above 25%: Rejection</li>
        </ul>

        <h6 className="fw-semibold mt-4">Self-Plagiarism</h6>
        <p>
          Authors must avoid self-plagiarism. Reuse of previously published work
          must be properly cited and justified.
        </p>

      </section>

      <Footer />
    </>
  );
}
