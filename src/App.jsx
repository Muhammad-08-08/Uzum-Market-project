import Header from "./Components/header";
import Navbar from "./Components/navbar";
import OsonQidiruv from "./Components/oson_qidiruv";
import Carousel from "./Components/carousel";
import ArzonNarxlar from "./Components/arzon_narxlar";
import Elektronika from "./Components/elektronika";
import OshxanaUchunTexnika from "./Components/oshxona_uchun_texnika";
import MuddatliTolovReklamasi from "./Components/muddatli_tolov_img";
import MuddatliTolov from "./Components/muddatli_tolov";
import IssiqTexnikaReklamasi from "./Components/issiq_texnika_reklamasi";
import IssiqTexnika from "./Components/issiq_texnika";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <OsonQidiruv />
      <Carousel />
      <ArzonNarxlar />
      <Elektronika />
      <OshxanaUchunTexnika />
      <MuddatliTolovReklamasi />
      <MuddatliTolov />
      <IssiqTexnikaReklamasi />
      <IssiqTexnika />
    </div>
  );
}

export default App;
