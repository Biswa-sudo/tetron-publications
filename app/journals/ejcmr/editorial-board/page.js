import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjcmrNavbar from "@/components/allNavbar/EjcmrNavbar";

export default function EJCMREditorialBoard() {
  return (
    <>
      <Header />
      <EjcmrNavbar />

      <section className="container my-5">

        {/* PAGE TITLE */}
        <h3 className="fw-bold mb-4">Editorial Board</h3>

        {/* EDITOR IN CHIEF */}
        <h5 className="fw-bold text-primary mb-3">Editor-in-Chief</h5>

        <p className="fw-semibold mb-1">Dr. Saikarthik Jayakumar</p>
        <p className="small mb-1">
          <strong>Affiliation:</strong> Associate Professor of Anatomy, Department of Maxillofacial Surgery and Diagnostic Sciences
        </p>
        <p className="small mb-1">
          <strong>Institution:</strong> College of Dentistry, Majmaah University
        </p>
        <p className="small mb-1">
          <strong>Email:</strong> saikarthik@mu.edu.sa
        </p>
        <p className="small">
          <strong>Country:</strong> Saudi Arabia
        </p>

        <hr className="my-4" />

        {/* EDITORS */}
        <h5 className="fw-bold text-primary mb-3">Editors</h5>

        {editors.map((editor, index) => (
          <div key={index} className="mb-4">
            <p className="fw-semibold mb-1">{editor.name}</p>
            <p className="small mb-1">
              <strong>Affiliation:</strong> {editor.affiliation}
            </p>
            <p className="small mb-1">
              <strong>Institution:</strong> {editor.institution}
            </p>
            <p className="small mb-1">
              <strong>Email:</strong> {editor.email}
            </p>
            <p className="small">
              <strong>Country:</strong> {editor.country}
            </p>
          </div>
        ))}

      </section>

      <Footer />
    </>
  );
}

/* ===============================
   EDITOR DATA
================================ */

const editors = [
  {
    name: "Dr. Sahar Elderdiri Gafar Osman",
    affiliation: "Assistant Professor",
    institution: "Bahri University",
    email: "saharog@fap.edu.sd",
    country: "Sudan",
  },
  {
    name: "Dr. Samar Mohamed",
    affiliation: "Faculty of Pharmacy, Department of Biochemistry",
    institution: "Mansoura University",
    email: "dr.samar680@std.mans.edu.eg",
    country: "Egypt",
  },
  {
    name: "Mr. Rupam Sarkar",
    affiliation: "Assistant Professor",
    institution: "Maharashtra University of Health Sciences (MUHS)",
    email: "dr.rupamsarkar@mu.edu.in",
    country: "India",
  },
  {
    name: "Dr. Tata Anire Safiatou Coulibaly",
    affiliation: "Assistant Professor, Department of Molecular Genetics",
    institution: "Pasteur Institute of Côte d’Ivoire",
    email: "safiatou.coulibaly@pasteur.ci",
    country: "Côte d’Ivoire",
  },
  {
    name: "Dr. Noha T. Sarhan",
    affiliation: "Lecturer, Department of Neurology, Faculty of Medicine",
    institution: "Zagazig University",
    email: "nohasarhan@medicine.zu.edu.eg",
    country: "Egypt",
  },
  {
    name: "Dr. Mohamed Zakaria El-Sayed",
    affiliation: "Assistant Professor, Department of Medical Imaging Sciences",
    institution: "College of Health Sciences, Gulf Medical University",
    email: "dr.zakaria@gmu.ac.ae",
    country: "United Arab Emirates",
  },
  {
    name: "Dr. Magdy Ali Abdou Gouda",
    affiliation: "Assistant Professor, Department of Medical Imaging Sciences",
    institution: "College of Health Sciences, Gulf Medical University",
    email: "dr.ali@gmu.ac.ae",
    country: "United Arab Emirates",
  },
  {
    name: "Dr. Emanuel J. Silva",
    affiliation: "Head, Department of Neurosurgery",
    institution: "Hospital Central do Lubango Dr. Antonio Agostinho Neto",
    email: "emanueljsilva@hotmail.com",
    country: "Angola",
  },
  {
    name: "Dr. Tesfaye Gebrewold Sadam",
    affiliation: "Assistant Professor, Department of Forensic Medicine and Toxicology",
    institution: "Ethiopian Police University",
    email: "tesfayegebrewold@gmail.com",
    country: "Ethiopia",
  },
  {
    name: "Dr. Asaad Tageldien Idris Abdelhalim",
    affiliation: "Senior Specialist, Department of Allergy & Immunology",
    institution: "King Khalid Hospital",
    email: "asaad@smoh.gov.sa",
    country: "Saudi Arabia",
  },
  {
    name: "Dr. Muluken Alem",
    affiliation: "Lecturer",
    institution: "Debre Berhan University",
    email: "mulukenalem@dbu.edu.et",
    country: "Ethiopia",
  },
  {
    name: "Dr. Hatim Zain Al Abdeen Abdul Bari",
    affiliation: "Assistant Professor and Head, Department of Radiology and Diagnostic Imaging",
    institution: "Orotto College of Medicine and Health Sciences",
    email: "hatimzain74@gmail.com",
    country: "Eritrea",
  },
  {
    name: "Dr. Sukumar Shanmugam",
    affiliation: "Associate Professor, Department of Physiotherapy",
    institution: "College of Health Sciences, Gulf Medical University",
    email: "dr.sukumar@gmu.ac.ae",
    country: "United Arab Emirates",
  },
  {
    name: "Dr. Olugbenga Olawale Eweoya",
    affiliation: "Associate Professor, Department of Anatomical Sciences",
    institution: "University of Abuja",
    email: "gbenge.eweoya@uniabuja.edu.ng",
    country: "Nigeria",
  },
  {
    name: "Dr. Alengtaw Abate",
    affiliation: "Lecturer and Head, Department of Medical Laboratory Sciences",
    institution: "College of Health Sciences, Oda Bultum University",
    email: "abatealengtaw@obu.edu.et",
    country: "Ethiopia",
  },
  {
    name: "Dr. Huda Hakim Abdelrahman",
    affiliation: "Community Medicine Physician",
    institution: "International Academy of Public Health (IAPH)",
    email: "hhakim@iaph.org",
    country: "Jordan",
  },
  {
    name: "Dr. Mohammed Elfatah Hamida",
    affiliation: "Assistant Professor, Department of Medical Microbiology",
    institution: "Orotto College of Medicine and Health Sciences",
    email: "mohamedf77@gmail.com",
    country: "Eritrea",
  },
  {
    name: "Dr. Eyin Simpson",
    affiliation: "Research Assistant, Department of Health Security",
    institution: "Johns Hopkins University",
    email: "esimps10@jhu.edu",
    country: "United States",
  },
  {
    name: "Dr. Segenet Bizuneh",
    affiliation: "Associate Professor, Department of Internal Medicine",
    institution: "University of Gondar",
    email: "segenet.bizuneh@uog.edu.et",
    country: "Ethiopia",
  },
  {
    name: "Dr. Epipode Ntawuyamara",
    affiliation: "Lecturer, Department of Dermatology & Venereology",
    institution: "School of Medicine, University of Burundi",
    email: "epipode.ntawuyamara@ub.edu.bi",
    country: "Burundi",
  },
  {
    name: "Dr. Hanan I. M. Tahir",
    affiliation: "President",
    institution: "Intmar Academy",
    email: "tahir@intmaracademy.com",
    country: "Saudi Arabia",
  },
  {
    name: "Prof. Samith Ahmed",
    affiliation: "Professor, Department of Pathology and Chair, Department of Pathophysiology",
    institution: "Windsor University School of Medicine (WUSOM)",
    email: "samith@windsor.edu",
    country: "Saint Kitts and Nevis",
  },
  {
    name: "Dr. Aloysius Loglo",
    affiliation: "Research Scientist / Postdoctoral Research Fellow",
    institution: "Kumasi Centre for Collaborative Research in Tropical Medicine (KCCR)",
    email: "aloglo@kccr.de",
    country: "Ghana",
  },
  {
    name: "Dr. Nirmala Palayathan",
    affiliation: "Senior Lecturer, Department of Anatomy",
    institution: "Graduate School of Medicine, Perdana University",
    email: "nirmala@perdanauniversity.edu.my",
    country: "Malaysia",
  },
  {
    name: "Dr. Mosab Omer Khalid",
    affiliation: "Associate Professor, Faculty of Medical Laboratory Sciences, Department of Clinical Chemistry",
    institution: "Shendi University",
    email: "mosabkhalid@ushendi.edu.sd",
    country: "Sudan",
  },
  {
    name: "Dr. Nurul Hana Zainal Baharin",
    affiliation: "Lecturer, School of Bioscience, Faculty of Pharmacy and Biomedical Sciences",
    institution: "MAHSA University",
    email: "nurulhana@mahsa.edu.my",
    country: "Malaysia",
  },
  {
    name: "Prof. Erasto Mbui",
    affiliation: "Professor, School of Biomedical Sciences",
    institution: "Muhimbili University of Health and Allied Sciences (MUHAS)",
    email: "erastombui@gmail.com",
    country: "Tanzania",
  },
];
