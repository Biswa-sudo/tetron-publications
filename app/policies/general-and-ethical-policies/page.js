import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GeneralEthicalPoliciesPage() {
  return (
    <>
      <Header />

      {/* PAGE TITLE BAR */}
      <section
        className="py-3 text-white"
        style={{
          background: "linear-gradient(to right, #2b1c6b, #b4b3e6)",
        }}
      >
        <div className="container">
          {/* Added fs-2 to increase main title size */}
          <h2 className="mb-0 fs-2">General and Ethical Policies</h2>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container my-5">

        {/* AUTHOR INSTRUCTIONS */}
        {/* Added fs-3 to increase subheading size */}
        <h5 className="fw-semibold text-primary fs-3">Author Instructions</h5>
        {/* Removed 'small', added 'fs-5' to increase paragraph text size */}
        <p className="fs-5">
          To access detailed author instructions, please visit the dedicated
          <em> Author Instructions</em> section on the respective journal’s
          website. For instance, if you wish to submit your work to the
          <em> European Journal of Biosciences (EJB)</em>, you can find specific
          guidelines at <a href="#">Author Guidelines</a>. Each journal provides
          tailored guidance to streamline the submission process.
        </p>

        {/* PEER REVIEW PROCESS */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">Peer-Review Process</h5>
        <p className="fs-5">
          All journals published under our platform follow a rigorous
          double-blind peer-review process, ensuring that both authors and
          reviewers remain anonymous to maintain objectivity. Each manuscript
          is reviewed by a minimum of two experts in the same field, who provide
          detailed comments and constructive feedback.
        </p>
        <p className="fs-5">
          This process is overseen by the journal’s Editor, ensuring adherence
          to the highest standards of academic integrity.
        </p>

        {/* ETHICAL GUIDELINES */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">Ethical Guidelines</h5>
        <p className="fs-5">
          Tetron Publications and its journals are built on a foundation of
          integrity and ethical publishing practices, ensuring that only the
          highest-quality manuscripts are selected for publication. We rely on
          the dedication and honesty of our Editors to uphold the journal’s
          mission and adhere to the highest ethical standards in scholarly
          publishing.
        </p>
        <p className="fs-5">
          Tetron Publications encourages its Editors to follow the{" "}
          <a href="#">Best Practice Guidelines for Journal Editors</a> as
          outlined by the Committee on Publication Ethics (COPE).
        </p>
        <p className="fs-5">
          Tetron Publications strictly adheres to professional and industry
          standards for scientific publications, including the{" "}
          <em>
            Recommendations for the Conduct, Reporting, Editing, and Publication
            of Scholarly Work in Medical Journals (ICMJE)
          </em>{" "}
          and the{" "}
          <em>
            Principles of Transparency and Best Practice in Scholarly Publishing
          </em>
          , a joint statement by{" "}
          <a href="#">COPE</a>, <a href="#">DOAJ</a>, <a href="#">WAME</a>, and{" "}
          <a href="#">OASPA</a>. These guidelines ensure transparency, accuracy,
          and the integrity of the scholarly publishing process.
        </p>

        {/* PLAGIARISM */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">Plagiarism</h5>
        <p className="fs-5">
          Plagiarism involves the unethical practice of using another’s ideas,
          words, or work without proper acknowledgment. This includes presenting
          existing ideas or content as new and original. Tetron Publications
          also recognizes <em>self-plagiarism</em> as a violation of ethical
          standards.
        </p>
        <p className="fs-5">
          To maintain the integrity of published work, we utilize advanced
          plagiarism detection software such as{" "}
          <a href="#">iThenticate</a>, integrated into the manuscript management
          system for Editors and Reviewers. Manuscripts identified with
          plagiarized content will be immediately rejected.
        </p>

        {/* PEER REVIEW */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">Peer Review</h5>
        <p className="fs-5">
          Tetron Publications employs a robust double-blind peer-review process
          to ensure the highest quality of published research. In this process,
          the identities of both authors and reviewers remain anonymous to each
          other, ensuring impartiality and objectivity.
        </p>
        <p className="fs-5">
          Our peer-review process strictly adheres to the guidelines established
          by the Committee on Publication Ethics (COPE). To learn more, please
          visit <a href="#">COPE Guidelines</a>. For detailed guidance for
          reviewers, refer to <a href="#">Reviewer Guidelines</a>.
        </p>

      </section>

      <Footer />
    </>
  );
}