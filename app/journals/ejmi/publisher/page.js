import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjmiNavbar from "@/components/allNavbar/EjmiNavbar";

export default function EJMIPublisherPage() {
  return (
    <>
      <Header />
      <EjmiNavbar />

      <section className="container my-5">

        <p>
          <strong>Tetron Publications</strong> is a dynamic and emerging international
          publisher based in India, committed to advancing scientific excellence
          and fostering global collaboration. Specializing in electronic scientific
          journals, Tetron Publications adheres to the principles of
          <strong> open access</strong>, ensuring all published content is freely
          available to authors and readers worldwide.
        </p>

        <p className="mt-4">
          Currently, Tetron Publications publishes the following journals:
        </p>

        <ul>
          <li><strong>European Journal of Multidisciplinary Insights (EJMI)</strong></li>
          <li><strong>European Journal of Biosciences (EJB)</strong></li>
          <li><strong>European Journal of Clinical and Medical Research (EJCMR)</strong></li>
          <li><strong>European Journal of Engineering and Technology Insights (EJETI)</strong></li>
        </ul>

        <p className="mt-3">
          With a vision to expand further into specialized fields, Tetron Publications
          aims to provide a platform for researchers to disseminate their findings,
          ensuring accessibility, visibility, and impact.
        </p>

        <h4 className="fw-bold mt-5">Commitment to Authors and Readers</h4>

        <p>
          Tetron Publications collaborates with leading indexing databases, full-text
          archives, and content aggregators to maximize the reach of its journals.
          We deeply value the trust placed by researchers in publishing their work
          with us and are dedicated to meeting their needs with the highest
          scientific and ethical standards.
        </p>

        <p>
          Our goal is to enhance the reputation of researchers while supporting
          the global exchange of knowledge.
        </p>

        <h4 className="fw-bold mt-5">Publication Ethics</h4>

        <p>
          Tetron Publications is committed to maintaining the highest standards of
          scientific integrity and ethical publishing. Guided by the principles of
          the{" "}
          <a
            href="https://publicationethics.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Committee on Publication Ethics (COPE)
          </a>
          , we ensure that all participants in the publication process—authors,
          reviewers, editors, and the publisher—adhere to rigorous ethical guidelines.
          Key practices include:
        </p>

        <ol>
          <li>
            <strong>Originality and Plagiarism:</strong> All submissions must be
            original, unpublished, and properly cited if referencing other works.
          </li>
          <li>
            <strong>Conflict of Interest Disclosure:</strong> Authors are required
            to declare any financial or personal conflicts of interest.
          </li>
          <li>
            <strong>Data Integrity:</strong> Manipulation or falsification of data,
            images, or tables is strictly prohibited.
          </li>
          <li>
            <strong>Authorship Transparency:</strong> All contributors must be
            appropriately credited, and no significant contributors can be excluded.
          </li>
          <li>
            <strong>Unbiased Review Process:</strong> Submissions are evaluated
            solely on their scientific merit, with no bias based on gender,
            nationality, or social status.
          </li>
        </ol>

        <p className="mt-3">
          Confirmed cases of ethical misconduct, including plagiarism, will be
          addressed in accordance with COPE guidelines, and articles may be
          withdrawn or retracted as necessary.
        </p>

        <h4 className="fw-bold mt-5">Open Access Policy</h4>

        <p>
          Tetron Publications champions open access, making all content freely
          available to authors and readers without restrictions. All materials are
          licensed under the{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution International License (CC BY 4.0)
          </a>
          , supporting broad dissemination, adaptation, and reuse with proper
          attribution.
        </p>

        <p>
          Tetron Publications remains committed to supporting researchers at all
          stages of their careers and to fostering a global exchange of knowledge
          through its diverse range of journals.
        </p>

      </section>

      <Footer />
    </>
  );
}
