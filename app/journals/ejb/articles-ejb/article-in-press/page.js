import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EjbNavbar from "@/components/allNavbar/EjbNavbar";

export default function ArticlesInPressPage() {
  return (
    <>
      <Header />
      <EjbNavbar />   

      {/* Main Content Section */}
      <section className="container my-5" style={{ minHeight: "40vh" }}>
        
        {/* SEARCH BAR */}
        <div className="row mb-5">
          <div className="col-md-8 col-lg-6 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Type Atleast 4 Characters & Search Articles..."
            />
          </div>
        </div>

        {/* ARTICLES RESULT MESSAGE */}
        <div>
          <p className="text-start">No articles found.</p>
        </div>

      </section>

      <Footer />
    </>
  );
}