import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConflictsOfInterestPage() {
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
          <h2 className="fw-semibold fs-2">Conflicts of Interest</h2>
          {/* Removed 'small', added 'fs-5' to increase paragraph text size */}
          <p className="fs-5 mt-2 mb-0">
            At Tetron Publications, authors are required to disclose any
            potential conflicts of interest or financial relationships that
            may influence their research during manuscript submission. This
            ensures transparency and maintains the integrity of the
            publication process. If the manuscript is accepted, the disclosed
            conflicts of interest will be included in the published article.
            Our policy aligns with COPE guidelines on conflicts of interest.
            More details can be found <a href="#" className="text-white text-decoration-underline">here</a>.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container my-5">

        {/* IN-HOUSE SUBMISSIONS */}
        {/* Added fs-3 to increase subheading size */}
        <h5 className="fw-semibold text-primary fs-3">
          Journal Policy on In-House Submissions
        </h5>
        {/* Removed 'small', added 'fs-5' to increase paragraph text size */}
        <p className="fs-5">
          For in-house submissions involving any editorial board member’s
          work, the respective board member will not participate in the
          review process. All decisions regarding such manuscripts will be
          handled by an independent editor, and the manuscripts will be
          reviewed by two external reviewers.
        </p>

        {/* PERMISSIONS */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Permissions to Reproduce Previously Published Material
        </h5>
        <p className="fs-5">
          Authors must obtain permission from the copyright holder to
          reproduce material, such as illustrations, from other sources.
          Articles cannot be published without these permissions in place.
        </p>

        {/* PATIENT CONSENT */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Patient Consent Forms
        </h5>
        <p className="fs-5">
          Informed consent must be obtained from potential participants
          before involvement in research. Authors should ensure that
          participants are fully informed about the research’s purpose,
          methods, risks, benefits, and alternatives.
        </p>
        <p className="fs-5">
          A statement confirming that informed consent was obtained must be
          included in the manuscript’s <em>Methods</em> section. Editors may
          request a copy of the consent form if necessary.
        </p>

        {/* AI POLICY */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Policy on Artificial Intelligence (AI) Used in Manuscripts
        </h5>
        <p className="fs-5">
          We follow the World Association of Medical Editors (WAME)
          recommendations regarding the use of artificial intelligence in
          scientific publications. AI tools such as ChatGPT or Large Language
          Models (LLMs) cannot be listed as authors, as only humans are
          accountable for authorship.
        </p>
        <p className="fs-5">
          If AI is used in any part of the research process—such as data
          collection, writing, editing, table preparation, or image
          creation—authors must disclose its use in the manuscript. Authors
          remain fully responsible for the content of their work, including
          accuracy and ensuring the absence of plagiarism, even when AI tools
          are involved.
        </p>

        {/* ETHICS APPROVAL */}
        <h5 className="fw-semibold text-primary mt-4 fs-3">
          Ethics Committee Approval
        </h5>
        <p className="fs-5">
          All studies involving human participants must have approval from
          the respective Institutional Review Board (IRB) or Ethics
          Committee. Guidelines for approval may vary by country, and
          country-specific ethical standards must be followed.
        </p>
        <p className="fs-5">
          The IRB and protocol numbers should be clearly stated in the
          manuscript. If the study adheres to the World Medical Association’s
          (WMA) Declaration of Helsinki ethical principles for medical
          research involving human subjects, this should be clearly mentioned
          in the <em>Methods</em> section.
        </p>
        <p className="fs-5">
          For studies involving drugs under investigation, such as clinical
          trials, approval from the FDA or equivalent regulatory authority
          must be obtained and cited in the manuscript. For studies involving
          animals, approval from the Institutional Animal Care and Use
          Committee (IACUC) must be obtained, and the protocol number should
          be included in the manuscript.
        </p>
        <p className="fs-5">
          We adhere to the latest Core Practice Guidelines for Editors and
          Journal Publishers as outlined by <a href="#">COPE</a>.
        </p>

      </section>

      <Footer />
    </>
  );
}