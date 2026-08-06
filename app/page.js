import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
import HeroSlider from "@/components/HeroSlider";
import RecentPublications from "@/components/RecentPublications";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* <HeroSection /> */}
      <HeroSlider />
      <RecentPublications />
      <Footer />
    </main>
  );
}
