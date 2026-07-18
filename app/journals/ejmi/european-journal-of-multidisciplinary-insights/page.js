import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjmiNavbar from "@/components/allNavbar/EjmiNavbar";

export default function EJMIPage() {
  return (
    <>
      <Header />
      <EjmiNavbar />

      <section className="container my-5">

        <div className="row mb-5">
          <div className="col-md-5">
            <img
              src="/ejmi.jpg"
              alt="European Journal of Multidisciplinary Insights"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-7">
            <p>
              <strong>European Journal of Multidisciplinary Insights (EJMI)</strong> is a
              bi-monthly peer-reviewed open-access journal that publishes high-quality
              original research articles, reviews, case studies, notes, essays,
              commentaries, short communications, opinion pieces, and book reviews
              addressing fundamental, theoretical, and applied research across a wide
              range of academic disciplines.
            </p>

            <p>
              We welcome contributions in the following areas:
            </p>

            <p>
              Agriculture, Anthropology, Artificial Intelligence, Arts, Astronomy,
              Biological Sciences, Bioengineering, Bioinformatics, Botany, Business and
              Management, Cardiovascular Research, Chemical Engineering, Chemistry,
              Cognitive Science, Communication Studies, Computational Biology, Computer
              Science, Cultural Studies, Design, Development Studies, Digital Humanities,
              Economics, Education, Electronics, Engineering Sciences, Environmental
              Engineering, Environmental Policy, Environmental Sciences, Ethnography,
              Finance, Fishery, Forensic Science, Forestry, Gender Studies, Geography,
              Geographic Information Systems, Global Health, Health Informatics, Health
              Sciences, History, Human Rights, Information Systems, Information
              Technology, Industrial Engineering, Labor Economics, Law, Library and
              Information Science, Linguistics, Literature, Marine Biology, Marine
              Sciences, Materials Engineering, Mathematical Biology, Mathematics, Media
              Arts, Media Studies, Microbiology, Molecular Biology, Music, Music
              Technology, Nanotechnology, Neuroscience, Nuclear Engineering, Nutritional
              Science, Oceanography, Optics, Pharmacy, Philosophy, Philosophy of Science,
              Physics, Political Science, Political Theory, Psychology, Public Health,
              Religious Studies, Renewable Energy, Robotics, Social Psychology, Social
              Sciences, Social Work, Software Engineering, Sociology, Space Engineering,
              Space Sciences, Statistics, Sustainability Studies, Technology Management,
              Toxicology, Transportation, Urban Studies, Veterinary Sciences, Water
              Resources, Wildlife Conservation, Women’s Studies, Zoology, and other
              related fields.
            </p>
          </div>
        </div>

        <hr />

        <div className="mt-4">
          <p><strong>Journal Title:</strong> European Journal of Multidisciplinary Insights (EJMI)</p>
          <p><strong>Journal Abbreviation:</strong> Eur. J. Multidiscip. Insights</p>
          <p><strong>Subject:</strong> Multidisciplinary</p>
          <p><strong>Frequency of Publication:</strong> Bi-monthly</p>
          <p><strong>Language:</strong> English</p>
          <p><strong>Starting year:</strong> 2025</p>
          <p><strong>Format of publication:</strong> Online</p>
          <p><strong>Indexing:</strong> Google Scholar</p>
          <p>
            <strong>Article Submission Email Id:</strong>{" "}
            <a href="mailto:submission.ejmi@tetronpublications.com">
              submission.ejmi@tetronpublications.com
            </a>
          </p>
        </div>

        <hr />

        <h4 className="fw-bold mt-4">Peer Review Process</h4>
        <p>
          Each research article submitted to the journal undergoes a rigorous
          double-blind peer review process to maintain the highest standards of
          academic quality and integrity.
        </p>

        <h4 className="fw-bold mt-4">Open Access Policy</h4>
        <p>
          The journal provides immediate and unrestricted access to all of its
          published content, promoting the global dissemination of knowledge and
          encouraging cross-disciplinary collaboration.
        </p>

        <h4 className="fw-bold mt-4">License Information</h4>
        <p>
          All published articles are made available under the{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution (CC BY) 4.0 license
          </a>.
          This allows others to freely share, adapt, and build upon the work,
          even for commercial purposes, provided the original author(s) are
          properly credited.
        </p>

      </section>

      <Footer />
    </>
  );
}
