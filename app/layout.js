import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Tetron Publications",
  description: "Empower Knowledge, Foster Growth, Shape the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  );
}
