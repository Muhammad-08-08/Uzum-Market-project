import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import OsonQidiruv from "./components/oson_qidiruv/index";
import ProductDetail from "./components/productPage/index";
import Home from "./components/home";
import MenHaqimda from "./components/men_haqimda";
import { Routes, Route } from "react-router";
import Footer from "./components/footer";
import TopshirishPunktlari from "./components/biz_haqimizda/topshirishPunktlari";
import Vakansiyalar from "./components/biz_haqimizda/vakansiyalar";
import BizBilanBoglaningPage from "./components/foydalanuvchilarga/biz_bilan_boglaning";
import SavolJavoblar1 from "./components/foydalanuvchilarga/savol_javoblar";
import Sotish from "./components/tadbirkorlarga/uzumda_soting";
import SotuvchiKabineti from "./components/tadbirkorlarga/sotuvchi_kabineti";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <OsonQidiruv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/menHaqimda" element={<MenHaqimda />} />
        <Route path="/topshirish_punktlari" element={<TopshirishPunktlari />} />
        <Route path="/vakansiyalar" element={<Vakansiyalar />} />
        <Route
          path="/biz_bilan_boglaning"
          element={<BizBilanBoglaningPage />}
        />
        <Route path="/savol_javoblar" element={<SavolJavoblar1 />} />
        <Route path="/uzumda_sotish" element={<Sotish />} />
        <Route path="/sotuvchi_kabineti" element={<SotuvchiKabineti />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
