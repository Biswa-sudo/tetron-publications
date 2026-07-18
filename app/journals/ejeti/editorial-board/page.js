import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjetiNavbar from "@/components/allNavbar/EjetiNavbar";

export default function EJETIEditorialBoardPage() {
  return (
    <>
      <Header />
      <EjetiNavbar />

      <section className="container my-5">

        {/* EDITOR-IN-CHIEF */}
        <h2 className="fw-bold mb-4">Editor-in-Chief</h2>

        <div className="mb-4">
          <h5 className="text-primary fw-bold">Dr. P. Naga Kavitha</h5>
          <p className="mb-1">
            <strong>Affiliation:</strong> Associate Professor, Department of Computer Applications - PG,
            <strong> Institution:</strong> St. Ann's College for Women, Mehdipatnam, Hyderabad
          </p>
          <p className="mb-1"><strong>Email:</strong> kavitha.reddy@stannscollegehyd.com</p>
          <p><strong>Country:</strong> India</p>
        </div>

        {/* EDITORS */}
        <h2 className="fw-bold mt-5 mb-4">Editors</h2>

        <Editor
          name="Dr. Sandeep Mishra"
          affiliation="Associate Professor, School of Computer Science & Engineering"
          institution="Galgotias University"
          email="sandeep.mishra@galgotiasuniversity.edu.in"
          country="India"
        />

        <Editor
          name="Dr. Fares D Alsewailem"
          affiliation="Research Professor, Materials Research Institute"
          institution="King Abdulaziz City for Science and Technology"
          email="fsewailem@kacst.edu.sa"
          country="Saudi Arabia"
        />

        <Editor
          name="Dr. Kaustubh Kumar Shukla"
          affiliation="Associate Professor, Department of Computer Science & Engineering"
          institution="Dronacharya Group of Institutions"
          email="kaustubh.shukla@gnindia.dronacharya.info"
          country="India"
        />

        <Editor
          name="Prof. Dina Darwish"
          affiliation="Professor, Department of Artificial Intelligence"
          institution="Ahram Canadian University"
          email="dina.darwish@acu.edu.eg"
          country="Egypt"
        />

        <Editor
          name="Dr. P. Arularasan"
          affiliation="Assistant Professor, Department of Physics"
          institution="D G Vaishnav College"
          email="arularasan@dgvaishnavcollege.edu.in"
          country="India"
        />

        <Editor
          name="Dr. C. Padmaja"
          affiliation="Assistant Professor, Department of Electronics and Communication Engineering"
          institution="G. Narayanamma Institute of Technology & Science (for Women), Hyderabad"
          email="c.padmaja@gnits.ac.in"
          country="India"
        />

        <Editor
          name="Dr. V. Y. Kondaiah"
          affiliation="Assistant Professor, Department of Electrical and Electronics Engineering"
          institution="Nitte Meenakshi Institute of Technology (NMIT), Bangalore Campus"
          email="kondaiah.vy@nmit.ac.in"
          country="India"
        />

        <Editor
          name="Prof. Juan Pablo Villazón Richter"
          affiliation="Associate Chair, Department of Computer Systems Engineering and Industrial Engineering"
          institution="Universidad Privada del Valle"
          email="jvillazon@univalle.edu"
          country="Bolivia"
        />

        <Editor
          name="Dr. Daniel Mesafint Belete"
          affiliation="Assistant Professor, Department of Computer Science & Information Technology"
          institution="Debre Tabor University"
          email="danielmesafint1985@dtu.edu.et"
          country="Ethiopia"
        />

        <Editor
          name="Dr. Omayma Husain"
          affiliation="Assistant Professor, Department of Information Technology"
          institution="University of Khartoum"
          email="omyma.husain@uofk.edu"
          country="Sudan"
        />

        <Editor
          name="Prof. Rivo Mahandrisoa Randriamaroson"
          affiliation="Professor, Department of Electronics"
          institution="Ecole Supérieure Polytechnique d’Antananarivo"
          email="rivo.randriamaroson@univ-antananarivo.mg"
          country="Madagascar"
        />

        <Editor
          name="Dr. Fadi Alhaddadin"
          affiliation="Assistant Professor, Department of Computer Science"
          institution="Heriot-Watt University"
          email="f.haddadin@hw.ac.uk"
          country="UAE"
        />

        <Editor
          name="Dr. Nasr Gad"
          affiliation="Associate Professor, Department of Physics"
          institution="Ain Shams University"
          email="ngad@sci.asu.edu.eg"
          country="Egypt"
        />

        <Editor
          name="Dr. Rabbia Mahum"
          affiliation="Lecturer, Department of Computer Science"
          institution="UET, Taxila"
          email="rabbia.mahum@uettaxila.edu.pk"
          country="Pakistan"
        />

      </section>

      <Footer />
    </>
  );
}

/* REUSABLE EDITOR COMPONENT */
function Editor({ name, affiliation, institution, email, country }) {
  return (
    <div className="mb-4">
      <h6 className="text-primary fw-bold">{name}</h6>
      <p className="mb-1">
        <strong>Affiliation:</strong> {affiliation},
        <strong> Institution:</strong> {institution}
      </p>
      <p className="mb-1"><strong>Email:</strong> {email}</p>
      <p><strong>Country:</strong> {country}</p>
    </div>
  );
}
