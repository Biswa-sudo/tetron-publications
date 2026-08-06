import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjbNavbar from "@/components/allNavbar/EjbNavbar";

export default function AimsAndScopePage() {
  return (
    <>
      <Header hideNav={true} />
      <EjbNavbar />   

      <section className="container my-5">

        {/* SEARCH BAR (STATIC FOR NOW) */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Type Atleast 4 Characters & Search Articles..."
          />
        </div>

        {/* AIMS AND SCOPE */}
        <h3 className="fw-semibold mb-3">Aims and Scope</h3>

        <p className="small">
          <strong>European Journal of Biosciences (EJB)</strong> is a bi-monthly,
          peer-reviewed, open-access journal dedicated to fostering
          interdisciplinary collaboration and the exchange of knowledge across
          a wide range of academic fields.
        </p>

        <p className="small">
          The journal aims to publish high-quality, original research that
          contributes to the advancement of knowledge in both theoretical and
          applied areas. EJB is committed to providing fast, transparent, and
          rigorous peer review to ensure the highest quality of publications.
          All accepted articles are made freely available online upon
          publication, promoting global access and dissemination of knowledge
          across academic and research communities.
        </p>

        <p className="small">
          The journal covers a broad spectrum of research areas, including but
          not limited to the following:
        </p>

        {/* SUBJECT SECTIONS */}
        <h6 className="fw-semibold mt-4">Biology and Biotechnology</h6>
        <p className="small">
          Research in this area focuses on the study of life forms, genetic
          engineering, cellular and molecular biology, and advancements in
          biotechnology. Topics include genetic modification, gene therapy,
          microbiology, and the application of biotechnology in agriculture and
          environmental sciences.
        </p>

        <h6 className="fw-semibold mt-4">Environmental and Ecological Biosciences</h6>
        <p className="small">
          EJB welcomes research on environmental biosciences, including
          ecosystems, biodiversity conservation, and the impact of human
          activities on the environment. Topics may explore sustainability,
          climate change, and ecological health.
        </p>

        <h6 className="fw-semibold mt-4">Agricultural Biosciences</h6>
        <p className="small">
          Research includes crop science, animal science, agricultural
          biotechnology, plant pathology, and sustainable agricultural
          practices. EJB encourages studies aimed at improving food security
          and agricultural productivity.
        </p>

        <h6 className="fw-semibold mt-4">Pharmaceutical Biosciences</h6>
        <p className="small">
          Research related to drug discovery, drug delivery systems,
          pharmacology, bioinformatics, pharmacogenomics, and natural products
          for therapeutic applications.
        </p>

        <h6 className="fw-semibold mt-4">Molecular and Cellular Biosciences</h6>
        <p className="small">
          This area explores molecular mechanisms of disease, signal
          transduction, protein structure and function, genomics, stem cell
          biology, regenerative medicine, and cancer research.
        </p>

        <h6 className="fw-semibold mt-4">Neuroscience and Neurobiology</h6>
        <p className="small">
          Research focusing on brain biology, neural networks,
          neurodegenerative diseases, cognitive function, and
          neuroinformatics.
        </p>

        <h6 className="fw-semibold mt-4">Bioinformatics and Computational Biology</h6>
        <p className="small">
          Studies on computational methods for understanding biological
          systems, including genomics, proteomics, metabolomics, systems
          biology, and artificial intelligence applications in biosciences.
        </p>

        {/* PUBLICATION FREQUENCY */}
        <h4 className="fw-semibold mt-5">Publication Frequency</h4>
        <p className="small">
          European Journal of Biosciences (EJB) is published bi-monthly,
          ensuring a continuous flow of high-quality, peer-reviewed research
          across disciplines.
        </p>

        {/* INDEXING */}
        <h4 className="fw-semibold mt-4">Indexing / Abstracting</h4>
        <ul className="small">
          <li>CrossRef</li>
          <li>Google Scholar</li>
        </ul>

        {/* ETHICS */}
        <h4 className="fw-semibold mt-4">
          Publication Ethics and Malpractice
        </h4>
        <p className="small">
          At <strong>European Journal of Biosciences (EJB)</strong>, we are
          dedicated to maintaining the highest standards of publication ethics.
          Our editorial practices follow the{" "}
          <a href="#">COPE Code of Conduct and Best Practice Guidelines</a> and
          the <a href="#">Code of Conduct for Journal Publishers</a>.
        </p>

        <p className="small">
          We rigorously follow ethical guidelines in our peer-review process,
          ensuring originality, transparency, and fairness in scholarly
          publishing.
        </p>

        <p className="small">
          EJB supports the <strong>Think. Check. Submit.</strong> initiative,
          helping authors identify trustworthy journals before submission.
        </p>

        <p className="small">
          By adhering to these standards, we aim to create a scholarly
          environment where research is shared with transparency, respect, and
          accountability.
        </p>

      </section>

      <Footer />
    </>
  );
}
