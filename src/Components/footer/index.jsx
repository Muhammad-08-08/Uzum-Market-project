import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import youtube from "../../assets/youtube.svg";
import facebook from "../../assets/facebook.svg";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg">Biz haqimizda</h4>
          <Link to={"/topshirish_punktlari"}>
            <p className="text-sm text-gray-500">Topshirish punktlari</p>
          </Link>
          <Link to={"/vakansiyalar"}>
            <p className="text-sm text-gray-500">Vakansiyalar</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg">Foydalanuvchilarga</h4>
          <Link to={"/biz_bilan_boglaning"}>
            <p className="text-sm text-gray-500">Biz bilan bogʻlanish</p>
          </Link>
          <Link to={"/savol_javoblar"}>
            <p className="text-sm text-gray-500">Savol-Javob</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg">Tadbirkorlarga</h4>
          <Link to={"/uzumda_sotish"}>
            <p className="text-sm text-gray-500">Uzumda soting</p>
          </Link>
          <Link to={"/sotuvchi_kabineti"}>
            <p className="text-sm text-gray-500">Sotuvchi kabinetiga kirish</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-lg">Ilovani yuklab olish</h4>
          <div className="flex gap-2">
            <img
              className="w-36"
              src="https://book.uz/static/media/AppStore.7eb91760005327d07c10321a5258574e.svg"
              alt="AppStore"
            />
            <img
              className="w-36"
              src="https://book.uz/static/media/GooglePlay.c97382e2ca2ba4dc04a60bd6e146db1d.svg"
              alt="Play Market"
            />
          </div>
          <h4 className="font-medium text-lg">Uzum ijtimoiy tarmoqlarda</h4>
          <div className="flex gap-3">
            <img src={instagram} alt="instagram" />
            <img src={telegram} alt="telegram" />
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
