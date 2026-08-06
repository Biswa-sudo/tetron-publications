import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar";

export default function AboutEJCMR() {
  return (
    <>
      <Header hideNav={true} />
      <EjcmrNavbar />
      <section className="container my-5">

        {/* AIMS & SCOPE */}
        <h3 className="fw-bold mb-3">Aims and Scope</h3>

        <p className="small">
          <strong>European Journal of Clinical and Medical Research (EJCMR)</strong> is a
          bi-monthly, peer-reviewed, open-access journal dedicated to fostering
          interdisciplinary collaboration and the exchange of knowledge across
          a wide range of academic fields. The journal aims to publish
          high-quality, original research that contributes to the advancement
          of knowledge in both theoretical and applied areas.
        </p>

        <p className="small">
          EJCMR is committed to providing fast, transparent, and rigorous peer
          review to ensure the highest quality of publications. All accepted
          articles are made freely available online upon publication,
          promoting global access and the dissemination of knowledge across
          academic and research communities.
        </p>

        <p className="small">
          The journal covers a broad spectrum of research areas, including but
          not limited to the following:
        </p>

        {/* SUBJECT AREAS */}
        <h6 className="fw-semibold mt-4">Clinical Medicine and Therapeutics</h6>
        <p className="small">
          This category encompasses a wide range of research in clinical
          medicine, focusing on patient care, treatment modalities, clinical
          trials, and therapeutic advancements. It includes studies related
          to improving diagnosis, treatment effectiveness, and patient
          outcomes across various medical disciplines.
        </p>

        <h6 className="fw-semibold">Medical Technologies and Innovations</h6>
        <p className="small">
          Research in this area includes the development and application of
          cutting-edge medical technologies, devices, and diagnostic tools.
          It covers innovations in imaging, surgical instruments,
          robotic-assisted surgeries, and medical software that enhance
          clinical practice and patient care.
        </p>

        <h6 className="fw-semibold">Disease Mechanisms and Pathophysiology</h6>
        <p className="small">
          Studies in this field explore the biological mechanisms behind
          diseases, including the molecular, cellular, and genetic factors
          involved. Topics include cancer, cardiovascular diseases,
          infectious diseases, neurodegenerative disorders, autoimmune
          conditions, and metabolic diseases.
        </p>

        <h6 className="fw-semibold">Public Health and Epidemiology</h6>
        <p className="small">
          This broad category covers studies related to the prevention,
          control, and management of diseases at a population level. It
          includes research on epidemiological trends, health policy, public
          health interventions, and the societal impact of diseases and
          healthcare systems.
        </p>

        <h6 className="fw-semibold">Immunology and Infectious Diseases</h6>
        <p className="small">
          Research focusing on the immune system and its role in health and
          disease. This includes studies on vaccines, immunotherapy,
          autoimmune diseases, and the diagnosis, treatment, and prevention
          of infectious diseases, including emerging pathogens.
        </p>

        <h6 className="fw-semibold">Neuroscience and Neurology</h6>
        <p className="small">
          Research in this field includes studies on brain function,
          neurological diseases, mental health, and cognitive disorders.
          Topics include neurodegenerative diseases, stroke, epilepsy,
          psychiatric conditions, and neurogenetic disorders.
        </p>

        <h6 className="fw-semibold">Cardiovascular and Respiratory Health</h6>
        <p className="small">
          Studies related to cardiovascular diseases (heart diseases, stroke,
          hypertension) and respiratory conditions (asthma, COPD, lung
          diseases). This section covers diagnostic techniques, treatment
          innovations, and preventive measures in heart and lung health.
        </p>

        <h6 className="fw-semibold">Endocrinology and Metabolic Disorders</h6>
        <p className="small">
          Research on endocrine and metabolic conditions such as diabetes,
          obesity, thyroid disorders, and hormonal imbalances. This area also
          covers advancements in understanding and treating disorders related
          to metabolism and the endocrine system.
        </p>

        <h6 className="fw-semibold">Pediatric and Geriatric Medicine</h6>
        <p className="small">
          This section covers healthcare for both pediatric and elderly
          populations. It includes research on child development, pediatric
          diseases, geriatric syndromes, aging-related health issues, and the
          unique healthcare needs of these age groups.
        </p>

        <h6 className="fw-semibold">Health Systems and Clinical Practice</h6>
        <p className="small">
          Studies focusing on improving healthcare delivery systems,
          healthcare management, clinical decision-making, and the
          implementation of evidence-based practices. This section also
          covers research on healthcare infrastructure, patient safety, and
          healthcare quality improvement.
        </p>

        <h6 className="fw-semibold">Health Informatics and Digital Health</h6>
        <p className="small">
          This category covers the integration of digital technologies in
          healthcare, including electronic health records (EHR),
          telemedicine, mobile health applications, artificial intelligence
          in healthcare, and data analytics. Research focuses on how
          technology can improve clinical practice, patient engagement, and
          healthcare outcomes.
        </p>

        <h6 className="fw-semibold">Pharmacology and Drug Development</h6>
        <p className="small">
          Research in this field covers the development of new drugs, drug
          delivery systems, pharmacokinetics, and the study of drug efficacy
          and safety. It also includes clinical trials, pharmaceutical
          innovations, and the impact of drug therapy on patient care.
        </p>

        {/* PUBLICATION FREQUENCY */}
        <h4 className="fw-bold mt-5">Publication Frequency</h4>
        <p className="small">
          <strong>European Journal of Clinical and Medical Research (EJCMR)</strong> is
          published bi-monthly, ensuring a continuous flow of high-quality,
          peer-reviewed research across disciplines.
        </p>

        {/* INDEXING */}
        <h4 className="fw-bold mt-4">Indexing / Abstracting</h4>
        <ul className="small">
          <li>CrossRef</li>
          <li>Google Scholar</li>
        </ul>

        {/* ETHICS */}
        <h4 className="fw-bold mt-4">Publication Ethics and Malpractice</h4>

        <p className="small">
          At <strong>European Journal of Clinical and Medical Research (EJCMR)</strong>,
          we are dedicated to maintaining the highest standards of publication
          ethics. We believe that integrity is essential to the trust and
          credibility of scientific research, and we uphold this principle in
          all stages of the publication process.
        </p>

        <p className="small">
          Our editorial practices are guided by the{" "}
          <a href="#" className="text-decoration-none">
            COPE Code of Conduct and Best Practice Guidelines for Journal Editors
          </a>{" "}
          as well as the{" "}
          <a href="#" className="text-decoration-none">
            Code of Conduct for Journal Publishers
          </a>.
        </p>

        <p className="small">
          To ensure transparency and fairness, we rigorously follow ethical
          guidelines in our peer-review process, striving to publish only
          original research free from plagiarism, data manipulation, or any
          other form of scientific misconduct.
        </p>

        <p className="small">
          We are proud supporters of the{" "}
          <strong>Think. Check. Submit.</strong> initiative, which helps
          researchers identify trustworthy and credible journals.
        </p>

        <p className="small">
          By adhering to these ethical standards, we aim to contribute to a
          scholarly environment where research is shared with transparency,
          respect, and accountability.
        </p>

      </section>

      <Footer />
    </>
  );
}
