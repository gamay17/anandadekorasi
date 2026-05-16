import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          Ananda Dekorasi
        </h1>
      </section>
    </main>
  );
}