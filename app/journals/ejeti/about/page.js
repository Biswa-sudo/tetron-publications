import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetiNavbar from "@/components/allNavbar/EjetiNavbar";

export default function EJETIAimsScopePage() {
  return (
    <>
      <Header />
      <EjetiNavbar />

      <section className="container my-5">

        {/* AIMS & SCOPE */}
        <h2 className="fw-bold mb-3">Aims and Scope</h2>

        <p>
          <strong>European Journal of Engineering and Technology Insights (EJETI)</strong> is a
          bi-monthly, peer-reviewed, open-access journal dedicated to fostering
          interdisciplinary collaboration and the exchange of knowledge across a wide
          range of academic fields. The journal aims to publish high-quality, original
          research that contributes to the advancement of knowledge in both theoretical
          and applied areas. EJETI is committed to providing fast, transparent, and
          rigorous peer review to ensure the highest quality of publications. All
          accepted articles are made freely available online upon publication,
          promoting global access and the dissemination of knowledge across academic
          and research communities.
        </p>

        <p>
          The journal covers a broad spectrum of research areas, including but not
          limited to the following:
        </p>

        {/* SCOPE LIST */}
        <div className="mb-4">
          <p className="fw-bold">Engineering Design and Manufacturing</p>
          <p>
            This category includes research on the principles, processes, and
            methodologies involved in engineering design, product development, and
            manufacturing technologies. Topics include sustainable manufacturing,
            advanced materials, automation, and the integration of new technologies
            in production systems.
          </p>

          <p className="fw-bold">Electrical, Electronics, and Computer Engineering</p>
          <p>
            Research in this field covers topics in electrical systems, electronics,
            communications, computer science, and information technology. This includes
            innovations in software engineering, artificial intelligence, machine
            learning, cybersecurity, telecommunications, and emerging technologies
            such as blockchain and quantum computing.
          </p>

          <p className="fw-bold">Civil, Mechanical, and Aerospace Engineering</p>
          <p>
            This broad category focuses on advancements in civil, mechanical, and
            aerospace engineering, covering structural design, construction
            technologies, energy systems, and transportation infrastructure. It
            includes topics such as robotics, thermodynamics, aerodynamics, renewable
            energy, and sustainable building practices.
          </p>

          <p className="fw-bold">Environmental and Energy Engineering</p>
          <p>
            Research in environmental and energy engineering includes sustainable
            energy solutions, water treatment, waste management, environmental
            pollution mitigation, and the development of clean technologies. This
            section focuses on the application of engineering principles to address
            climate change, resource conservation, and environmental sustainability.
          </p>

          <p className="fw-bold">Biotechnology, Nanotechnology, and Bioengineering</p>
          <p>
            This category explores the intersection of engineering and life sciences,
            focusing on the development of biotechnology, biomedical devices,
            nanomaterials, and bioengineering solutions. Topics include the application
            of nanotechnology in healthcare, genetic engineering, bioprocessing, and
            the design of bio-compatible materials for medical and environmental
            applications.
          </p>
        </div>

        {/* PUBLICATION FREQUENCY */}
        <h3 className="fw-bold mt-5">Publication Frequency</h3>
        <p>
          <strong>European Journal of Engineering and Technology Insights (EJETI)</strong> is
          published bi-monthly, ensuring a continuous flow of high-quality,
          peer-reviewed research across disciplines.
        </p>

        {/* INDEXING */}
        <h3 className="fw-bold mt-5">Indexing/Abstracting</h3>
        <ul>
          <li>CrossRef</li>
          <li>Google Scholar</li>
        </ul>

        {/* ETHICS */}
        <h3 className="fw-bold mt-5">Publication Ethics and Malpractice</h3>

        <p>
          At <strong>European Journal of Engineering and Technology Insights (EJETI)</strong>,
          we are dedicated to maintaining the highest standards of publication ethics.
          We believe that integrity is essential to the trust and credibility of
          scientific research, and we uphold this principle in all stages of the
          publication process. Our editorial practices are guided by the{" "}
          <a
            href="https://publicationethics.org/resources/code-conduct"
            target="_blank"
            rel="noopener noreferrer"
          >
            COPE Code of Conduct and Best Practice Guidelines for Journal Editors
          </a>
          , as well as the{" "}
          <a
            href="https://publicationethics.org/resources/code-conduct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code of Conduct for Journal Publishers
          </a>.
        </p>

        <p>
          To ensure transparency and fairness, we rigorously follow ethical guidelines
          in our peer-review process, striving to publish only original research free
          from plagiarism, data manipulation, or any other form of scientific
          misconduct.
        </p>

        <p>
          We are proud supporters of the{" "}
          <a
            href="https://thinkchecksubmit.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Think. Check. Submit.
          </a>{" "}
          initiative, which helps researchers identify trustworthy and credible
          journals. This campaign offers a simple checklist to guide authors in
          evaluating the legitimacy of journals and publishers before submitting their
          work.
        </p>

        <p>
          As part of Tetron Publisher, <strong>EJETI</strong> takes its responsibility
          seriously and ensures a professional, ethical approach throughout the
          entire publishing process. From submission to final publication, we are
          committed to maintaining the integrity of scholarly communication.
        </p>

        <p>
          By adhering to these ethical standards, we aim to contribute to a scholarly
          environment where research is shared with transparency, respect, and
          accountability.
        </p>

      </section>

      <Footer />
    </>
  );
}
