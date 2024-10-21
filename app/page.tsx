import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RowRiwayat from "./components/rowRiwayat";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowPekerjaan from "./components/rowPekerjaan";
import "./riezz-style.css";
import WarnaFavorit from "./components/WarnaFavorit";
import ContactForm from "./components/ContactForm";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <WarnaFavorit />
      <ContactForm />
    </section>
  );
}