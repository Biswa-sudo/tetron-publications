export default async function dbConnect() {
  if (!process.env.MONGODB_URI && !process.env.DATABASE_URL) {
    console.warn("No database connection configured for auth routes. Using dev-safe no-op DB connector.");
  }

  return true;
}
