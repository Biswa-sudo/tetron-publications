import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PublicationIntegrityPolicyPage() {
  return (
    <>
      <Header />

      {/* PAGE TITLE + INTRO */}
      <section
        className="py-4 text-white"
        style={{
          background: "linear-gradient(to right, #2b1c6b, #b4b3e6)",
        }}
      >
        <div className="container">
          {/* Added fs-2 to increase main title size */}
          <h2 className="fw-semibold fs-2">
            Publication Integrity and Content Correction Policy
          </h2>
          {/* Removed 'small', added 'fs-4' to match header text sizes */}
          <p className="fs-5 mt-2 mb-0">
            At Tetron Publications, we adhere to the highest standards of ethical
            publishing to ensure the accuracy, transparency, and reliability of
            the content we release. Our operational procedures for handling
            issues related to errata, retractions, withdrawals, and expressions
            of concern are designed to maintain the integrity of scientific
            literature while ensuring that all content is produced and
            distributed responsibly.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container my-5">

        {/* ERRATA */}
        {/* Added fs-3 to increase subheading size */}
        <h5 className="fw-semibold text-primary fs-3">Errata and Corrections</h5>
        {/* Removed 'small', added 'fs-5' to increase paragraph text size */}
        <p className="fs-5">
          If a factual error is identified in a published work that does not
          affect the overall conclusions, we will issue an erratum to correct
          the mistake. This erratum will clearly explain the correction, and the
          necessary updates will be made to the article’s DOI and communicated
          to indexing agencies.
        </p>
        <p className="fs-5">
          We take corrective action quickly and transparently to maintain the
          accuracy of the published work.
        </p>

        {/* RETRACTIONS */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">Retractions</h5>
        <p className="fs-5">
          In cases where a published work contains serious errors, plagiarism,
          or misconduct, Tetron Publications will issue a retraction. A
          retraction is a formal notice that the article is no longer valid, and
          we will provide a clear explanation for the retraction.
        </p>
        <p className="fs-5">
          We also ensure that the retracted article remains available online to
          preserve the scientific record, but with a “retracted” watermark and
          a link to the retraction statement. Retraction notices will be made
          prominent, and all changes will be updated in the DOI record and
          communicated to indexing agencies.
        </p>

        {/* PROCESS FOR RETRACTION */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Process for Retraction
        </h5>
        <p className="fs-5">
          If an article, post-publication, is retracted, a retraction statement
          will be issued separately. This statement will explain why the
          article was retracted and provide details of the issue.
        </p>
        <p className="fs-5">
          The retracted article and the retraction notice will be clearly linked
          in the electronic database, ensuring that the retraction is apparent
          to anyone accessing the original article.
        </p>

        {/* WITHDRAWALS */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">Withdrawals</h5>
        <p className="fs-5">
          Manuscripts can be withdrawn before or after acceptance, but there
          are different procedures and conditions based on the timing of the
          withdrawal:
        </p>
        {/* Removed 'small', added 'fs-5' to increase list text size */}
        <ul className="fs-5">
          <li>
            <strong>Before Acceptance:</strong> Authors can withdraw a manuscript
            without any charge, provided a valid reason is given.
          </li>
          <li>
            <strong>After Acceptance:</strong> If the manuscript is withdrawn
            after acceptance, a <strong>$100 USD processing fee</strong> will
            apply. This fee covers administrative and editorial costs associated
            with the withdrawal process. Authors must provide a valid and
            detailed reason to ensure transparency and ethical handling.
          </li>
        </ul>

        {/* EXPRESSIONS OF CONCERN */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Expressions of Concern
        </h5>
        <p className="fs-5">
          If there are concerns regarding the validity or reliability of a
          published work, Tetron Publications may issue an expression of
          concern. This notice will inform readers that the article is under
          review due to potential issues, though no final decision has been
          made regarding retraction or correction.
        </p>
        <p className="fs-5">
          The publisher and editorial team will investigate the issue
          thoroughly and, if necessary, take appropriate action.
        </p>

        {/* COMPLAINTS */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Complaints and Dispute Resolution
        </h5>
        <p className="fs-5">
          In cases where an author or other parties wish to challenge a
          retraction, correction, or related issue, Tetron Publications provides
          a structured procedure for handling complaints.
        </p>
        <p className="fs-5">
          Complaints can be submitted directly to Tetron Publications via email
          at{" "}
          <a href="mailto:support@tetronpublications.com">
            support@tetronpublications.com
          </a>.
          We will conduct a thorough investigation, reviewing all relevant
          correspondence and gathering additional responses where needed. The
          goal of the investigation is to ensure that decisions are based on
          academic criteria and are free from personal bias.
        </p>

      </section>

      <Footer />
    </>
  );
}