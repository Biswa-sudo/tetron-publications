const publications = [
  {
    type: "Original Article",
    journal: "European Journal of Engineering and Technology (EJET)",
    volume: "1",
    issue: "1",
    title:
      "Assessment of the Impact of Dysprosium Ion Doped Magnesium Sulfoborate Glass System on Gamma Radiation Shielding Parameters",
    authors: "M Abubakar and J Ahmad",
  },
  {
    type: "Case Report",
    journal: "European Journal of Clinical and Medical Research (EJCMR)",
    volume: "1",
    issue: "1",
    title:
      "Cardiac Malformations in a Preterm Neonate with Down Syndrome: A Case Report",
    authors: "Rukma R. Kafle et al.",
  },
];

export default function RecentPublications() {
  return (
    <section className="container my-5">
      <h2 className="text-primary mb-4 fw-bold">Recent Publications</h2>

      {publications.map((item, index) => (
        <div className="card mb-4 shadow-sm" key={index}>
          <div className="card-body p-4">
            
            {/* Metadata (Removed 'small' class, added 'fs-6' and bold labels) */}
            <p className="text-muted mb-1 fs-6">
              <strong>Article Type:</strong> {item.type} | <strong>Journal:</strong> {item.journal}
            </p>
            <p className="text-muted mb-3 fs-6">
              <strong>Volume:</strong> {item.volume} | <strong>Issue:</strong> {item.issue}
            </p>

            {/* Title (Changed from h6 to h4 for a much larger, clear heading) */}
            <h4 className="text-primary fw-bold mb-3">{item.title}</h4>

            {/* Author (Added 'fs-5' to make the author text larger) */}
            <p className="mb-3 fs-5">
              <strong>Author(s):</strong> {item.authors}
            </p>

            {/* Link (Removed 'small' class, made it standard text size 'fs-6') */}
            <a href="#" className="text-danger fw-bold fs-6 text-decoration-none">
              Download PDF
            </a>
            
          </div>
        </div>
      ))}
    </section>
  );
}