import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function JournalsPage() {
  return (
    <>
      <Header />

      <section className="container my-5">

        {/* ===== EJB ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6">
            <h5 className="fw-bold fs-3">
              European Journal of Biosciences (EJB)
            </h5>
            <p className="fs-5">
              European Journal of Biosciences (EJB) is a bi-monthly peer-reviewed
              open-access journal that publishes high-quality original research
              articles, reviews, case studies, notes, essays, commentaries, short
              communications, opinion pieces, and book reviews addressing
              fundamental, theoretical, and applied research in the field of
              biosciences.
            </p>
            <p className="fs-5">
              We welcome contributions in the following areas: Agricultural
              Biotechnology, Biochemistry, Bioengineering, Bioinformatics,
              Biophysics, Botany, Cell Biology, Clinical and Translational Research,
              Cognitive Neuroscience, Developmental Biology, Ecology,
              Environmental Biology, Evolutionary Biology, Genetics, Genomics,
              Immunology, Marine Biology, Medical Biotechnology, Microbiology,
              Molecular Biology, Neuroscience, Nutritional Science, Pharmacology,
              Physiology, Plant Biotechnology, Reproductive Biology, Systems
              Biology, Toxicology, Zoology, and other related fields.
            </p>
            <a href="/journals/ejb/european-journal-of-biosciences" className="fw-semibold fs-5">
              The Journal Website
            </a>
          </div>
          <div className="col-md-6 text-center">
            <Image
              src="/ejb.jpg"
              alt="European Journal of Biosciences"
              width={500}
              height={620}
              className="img-fluid"
            />
          </div>
        </div>

        {/* ===== EJCMR ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6 text-center order-md-1 order-2">
            <Image
              src="/ejcmr.jpg"
              alt="European Journal of Clinical and Medical Research"
              width={500}
              height={620}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <h5 className="fw-bold fs-3">
              European Journal of Clinical and Medical Research (EJCMR)
            </h5>
            <p className="fs-5">
              European Journal of Clinical and Medical Research (EJCMR) is a
              bi-monthly peer-reviewed open-access journal that publishes
              high-quality original research articles, reviews, case studies,
              notes, essays, commentaries, short communications, opinion pieces,
              and book reviews addressing fundamental, theoretical, and applied
              research in the fields of medical and clinical sciences.
            </p>
            <p className="fs-5">
              We welcome contributions in the following areas: Anatomy,
              Anesthesiology, Biochemistry, Biopharmaceuticals, Biomedical
              Engineering, Cancer Research, Cardiology, Clinical Epidemiology,
              Clinical Immunology, Clinical Microbiology, Clinical Nutrition,
              Clinical Pharmacology, Dermatology, Diagnostics, Emergency Medicine,
              Endocrinology, Family Medicine, Gastroenterology, Genetics,
              Geriatrics, Gynecology, Hematology, Hepatology, Infectious Diseases,
              Internal Medicine, Medical Imaging, Medical Microbiology, Medical
              Physics, Medical Technology, Neurology, Nephrology, Obstetrics,
              Oncology, Ophthalmology, Orthopedics, Otolaryngology, Pathology,
              Pediatrics, Pharmacology, Public Health, Radiology, Reproductive
              Medicine, Rheumatology, Surgery, Toxicology, Translational Medicine,
              Urology, and other related fields.
            </p>
            <a href="/journals/ejcmr/european-journal-of-clinical-and-medical-research" className="fw-semibold fs-5">
              The Journal Website
            </a>
          </div>
        </div>

        {/* ===== EJETI ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6">
            <h5 className="fw-bold fs-3">
              European Journal of Engineering and Technology Insights (EJETI)
            </h5>
            <p className="fs-5">
              European Journal of Engineering and Technology Insights (EJETI) is a
              bi-monthly peer-reviewed open-access journal that publishes
              high-quality original research articles, reviews, case studies,
              notes, essays, commentaries, short communications, opinion pieces,
              and book reviews addressing fundamental, theoretical, and applied
              research in the fields of engineering and technology.
            </p>
            <p className="fs-5">
              We welcome contributions in the following areas: Aerospace
              Engineering, Agricultural Engineering, Biochemical Engineering,
              Bioengineering, Chemical Engineering, Civil Engineering, Computer
              Science and Engineering, Control Engineering, Electrical
              Engineering, Environmental Engineering, Industrial Engineering,
              Information Technology, Mechanical Engineering, Materials Science,
              Nanotechnology, Nuclear Engineering, Optical Engineering, Petroleum
              Engineering, Robotics, Software Engineering, Structural Engineering,
              Telecommunications, Transportation Engineering, Water Resources
              Engineering, and other related fields.
            </p>
            <a href="/journals/ejeti/european-journal-of-engineering-and-technology" className="fw-semibold fs-5">
              The Journal Website
            </a>
          </div>
          <div className="col-md-6 text-center">
            <Image
              src="/ejeti.jpg"
              alt="European Journal of Engineering and Technology Insights"
              width={500}
              height={620}
              className="img-fluid"
            />
          </div>
        </div>

        {/* ===== EJMI ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6 text-center order-md-1 order-2">
            <Image
              src="/ejmi.jpg"
              alt="European Journal of Multidisciplinary Insights"
              width={500}
              height={620}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <h5 className="fw-bold fs-3">
              European Journal of Multidisciplinary Insights (EJMI)
            </h5>
            <p className="fs-5">
              European Journal of Multidisciplinary Insights (EJMI) is a bi-monthly
              peer-reviewed open-access journal that publishes high-quality
              original research articles, reviews, case studies, notes, essays,
              commentaries, short communications, opinion pieces, and book reviews
              addressing fundamental, theoretical, and applied research across a
              wide range of academic disciplines.
            </p>
            <p className="fs-5">
              We welcome contributions in the following areas: Agriculture,
              Anthropology, Artificial Intelligence, Arts, Astronomy, Biological
              Sciences, Bioengineering, Bioinformatics, Botany, Business and
              Management, Cardiovascular Research, Chemical Engineering,
              Chemistry, Cognitive Science, Communication Studies, Computational
              Biology, Computer Science, Cultural Studies, Design, Development
              Studies, Digital Humanities, Economics, Education, Electronics,
              Engineering Sciences, Environmental Engineering, Environmental
              Policy, Environmental Sciences, Ethnography, Finance, Fishery,
              Forensic Science, Forestry, Gender Studies, Geography, Geographic
              Information Systems, Global Health, Health Informatics, Health
              Sciences, History, Human Rights, Information Systems, Information
              Technology, Industrial Engineering, Labor Economics, Law, Library
              and Information Science, Linguistics, Literature, Marine Biology,
              Marine Sciences, Materials Engineering, Mathematical Biology,
              Mathematics, Media Arts, Media Studies, Microbiology, Molecular
              Biology, Music, Music Technology, Nanotechnology, Neuroscience,
              Nuclear Engineering, Nutritional Science, Oceanography, Optics,
              Pharmacy, Philosophy, Philosophy of Science, Physics, Political
              Science, Political Theory, Psychology, Public Health, Religious
              Studies, Renewable Energy, Robotics, Social Psychology, Social
              Sciences, Social Work, Software Engineering, Sociology, Space
              Engineering, Space Sciences, Statistics, Sustainability Studies,
              Technology Management, Toxicology, Transportation, Urban Studies,
              Veterinary Sciences, Water Resources, Wildlife Conservation,
              Women’s Studies, Zoology, and other related fields.
            </p>
            <a href="/journals/ejmi/european-journal-of-multidisciplinary-insights" className="fw-semibold fs-5">
              The Journal Website
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}