export default function HeroSlider() {
  return (
    <section
      className="h-[420px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-center bg-black/50 px-6 py-3 rounded">
        European Journal of Clinical and<br />
        Medical Research (EJCMR)
      </h1>
    </section>
  );
}
