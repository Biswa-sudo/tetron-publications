import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjbNavbar from "@/components/allNavbar/EjbNavbar";

export default function EditorialBoardPage() {
  return (
    <>
      <Header hideNav={true} />
      <EjbNavbar />

      <section className="container my-5">

        {/* PAGE TITLE */}
        <h3 className="fw-semibold mb-4">Editorial Board</h3>

        {/* EDITOR IN CHIEF */}
        <h5 className="fw-semibold text-primary mb-3">Editor-in-Chief</h5>
        <p className="small text-muted">
          (Information will be updated as per journal records)
        </p>

        {/* EDITORS */}
        <h5 className="fw-semibold text-primary mt-5 mb-3">Editors</h5>

        {/* EDITOR ITEM */}
        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Amita Chandanshive</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Assistant Professor, Department of Botany
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Satish Pradhaan Dnyansadhana College of Arts, Commerce and Science
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:AmitaC@dnyansadhanacollege.org">
              AmitaC@dnyansadhanacollege.org
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> India
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Shaikh Nusrat Jahan</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Assistant Professor, Department of Zoology
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> KET’s V.G. Vaze College of Arts, Science and Commerce
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:nusrat@vazecollege.net">
              nusrat@vazecollege.net
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> India
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Sangamesh Uday</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Project Coordinator
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> ReefWatch Marine Conservation
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:projectcoordinator.ani@reefwatchindia.org">
              projectcoordinator.ani@reefwatchindia.org
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> India
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Paromita Das</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Team Lead
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Perfact Researchers Pvt Ltd
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:paromita.das@perfactgroup.in">
              paromita.das@perfactgroup.in
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> India
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Prakash Piruthiviraj</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Assistant Professor, Department of Biotechnology
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Srimad Andavan Arts and Science College
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:prakash@andavancollege.ac.in">
              prakash@andavancollege.ac.in
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> India
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Garima Singh</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Associate Professor, Department of Nutrition & Dietetics
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Galgotias University
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:garima.singh@galgotias.edu.in">
              garima.singh@galgotias.edu.in
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> India
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Prof. Ahmed M. Eed</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Professor, Department of Plant Production
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Ibb University
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:ahmedeed72@gmail.com">
              ahmedeed72@gmail.com
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> Yemen
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Philippe Sessou</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Associate Professor, Department of Food and Industrial Microbiology
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> University of Abomey-Calavi
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:philippe.sessou@uac.bj">
              philippe.sessou@uac.bj
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> Republic of Benin
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Dr. Loubna Benidire</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Associate Professor, Sciences and Technology Research Team
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Ibn Zohr University
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:l.benidire@uiz.ac.ma">
              l.benidire@uiz.ac.ma
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> Morocco
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-semibold">Prof. Samira Abdul Wajid</h6>
          <p className="small mb-1">
            <strong>Affiliation:</strong> Professor, Department of Microbiology and Immunology,
            Chair, Department of Molecular Sciences
          </p>
          <p className="small mb-1">
            <strong>Institution:</strong> Windsor University School of Medicine (WUSOM)
          </p>
          <p className="small mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:drsamira@windsor.edu">
              drsamira@windsor.edu
            </a>
          </p>
          <p className="small">
            <strong>Country:</strong> Saint Kitts and Nevis
          </p>
        </div>

      </section>

      <Footer />
    </>
  );
}
