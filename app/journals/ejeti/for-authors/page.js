import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetiNavbar from "@/components/allNavbar/EjetiNavbar";


export default function EJETIAuthorGuidelines() {
  return (
    <>
      <Header />
      <EjetiNavbar />

      <section className="container my-5">

        <h2 className="fw-bold mb-4">Author Guidelines</h2>

        <h5 className="fw-semibold">Submission Preparation Checklist</h5>
        <p>
          Before submitting, authors must ensure that their manuscript meets
          the following criteria. Submissions may be returned if they do not
          comply with these guidelines:
        </p>

        <ul>
          <li>The manuscript has not been previously published or is not under consideration elsewhere.</li>
          <li>The submission follows the formatting and style requirements of EJETI.</li>
          <li>All URLs and references are properly formatted and verified.</li>
          <li>The text adheres to ethical standards and plagiarism guidelines.</li>
          <li>Figures and tables are included within the manuscript and cited appropriately.</li>
          <li>A statement confirming originality and ethical compliance is provided.</li>
        </ul>

        <hr />

        <h4 className="fw-bold mt-4">Instructions for Authors</h4>
        <p>
          The <strong>European Journal of Engineering and Technology Insights (EJETI)</strong>
          welcomes original research contributions across all areas of engineering
          and technology. Following these instructions will facilitate efficient
          peer review and publication.
        </p>

        <p>
          Authors are advised to submit their manuscripts via Microsoft Word
          format in accordance with these instructions. Submissions should be
          sent to the submission email address provided by the journal.
        </p>

        <h5 className="fw-semibold mt-4">Manuscript Preparation</h5>
        <p>
          Manuscripts should be written in clear, concise academic English.
          Authors whose native language is not English are encouraged to seek
          professional language editing prior to submission.
        </p>

        <h6 className="fw-semibold mt-3">Word Limit</h6>
        <p>
          The total word count should not exceed <strong>7,000 words</strong>,
          including the title, abstract, main text, references, tables, figures,
          and supplementary information (where applicable).
        </p>

        <h6 className="fw-semibold mt-3">Article Types</h6>
        <p>
          EJETI accepts the following article types:
        </p>
        <ul>
          <li>Original Research Articles</li>
          <li>Review Articles</li>
          <li>Short Communications</li>
          <li>Case Reports</li>
          <li>Case Series</li>
          <li>Technical Notes</li>
          <li>Letters to the Editor</li>
          <li>Methodology Papers</li>
          <li>Conference Proceedings</li>
        </ul>

        <h6 className="fw-semibold mt-3">Abstract</h6>
        <p>
          The abstract should not exceed <strong>300 words</strong> and should be
          structured logically to summarize the objectives, methodology, key
          results, and conclusions.
        </p>

        <h6 className="fw-semibold mt-3">Manuscript Structure</h6>
        <ol>
          <li>Title Page</li>
          <li>Abstract</li>
          <li>Keywords</li>
          <li>Introduction</li>
          <li>Materials and Methods</li>
          <li>Results</li>
          <li>Discussion</li>
          <li>Conclusion</li>
          <li>Acknowledgements (optional)</li>
          <li>References</li>
        </ol>

        <hr />

        <h4 className="fw-bold mt-4">References</h4>
        <p>
          Authors are required to follow the <strong>Vancouver style</strong> for
          referencing. References should be cited numerically in the text and
          listed in the order of appearance.
        </p>

        <p><strong>Example (Journal Article):</strong></p>
        <p>
          Smith J, Brown K. Title of the article. Journal Name. 2023;15(4):210–218.
        </p>

        <hr />

        <h4 className="fw-bold mt-4">Peer Review</h4>
        <p>
          EJETI follows a <strong>double-blind peer review process</strong>. All
          manuscripts are reviewed by at least two independent experts to ensure
          scientific quality, originality, and relevance.
        </p>

        <ul>
          <li>Initial editorial screening</li>
          <li>Double-blind peer review</li>
          <li>Editorial decision</li>
          <li>Revision (if required)</li>
          <li>Final acceptance</li>
        </ul>

        <hr />

        <h4 className="fw-bold mt-4">Copyright and Licensing</h4>
        <p>
          All articles published in EJETI are licensed under the{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
            Creative Commons Attribution International License (CC BY 4.0)
          </a>.
          Authors retain copyright while granting the journal the right of
          first publication.
        </p>

        <h6 className="fw-semibold mt-3">Author Certification</h6>
        <ul>
          <li>The manuscript is original and unpublished.</li>
          <li>All authors have approved the submission.</li>
          <li>Any conflicts of interest have been disclosed.</li>
        </ul>

        <hr />

        <h4 className="fw-bold mt-4">Privacy Statement</h4>
        <p>
          EJETI is committed to maintaining the confidentiality and privacy of
          authors and reviewers. Personal information is used solely for journal
          operations and will not be shared without consent.
        </p>

        <hr />

        <h4 className="fw-bold mt-4">Open Access</h4>
        <p>
          EJETI is an open-access journal. All published content is freely
          accessible without restrictions, supporting global knowledge sharing
          and scientific collaboration.
        </p>

        <hr />

        <h4 className="fw-bold mt-4">Plagiarism Policy</h4>
        <p>
          EJETI uses plagiarism detection software to screen all submissions.
          Manuscripts containing plagiarism will be rejected immediately.
        </p>

        <h6 className="fw-semibold mt-3">Acceptable Similarity Levels</h6>
        <ul>
          <li>Overall similarity: ≤ 25%</li>
          <li>Single source similarity: ≤ 10%</li>
        </ul>

        <h6 className="fw-semibold mt-3">Self-Plagiarism</h6>
        <p>
          Authors must avoid reuse of previously published material without
          proper citation. Redundant publication is strictly prohibited.
        </p>

      </section>

      <Footer />
    </>
  );
}
