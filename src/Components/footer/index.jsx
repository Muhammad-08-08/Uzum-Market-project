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
            <a
              href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056"
              target="_blank"
            >
              <img
                className="w-36"
                src="https://book.uz/static/media/AppStore.7eb91760005327d07c10321a5258574e.svg"
                alt="AppStore"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uz.uzum.app"
              target="_blank"
            >
              <img
                className="w-36"
                src="https://book.uz/static/media/GooglePlay.c97382e2ca2ba4dc04a60bd6e146db1d.svg"
                alt="Play Market"
              />
            </a>
          </div>
          <h4 className="font-medium text-lg">Uzum ijtimoiy tarmoqlarda</h4>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/uzum.market" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://t.me/uzum_market" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"
              target="_blank"
            >
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://www.facebook.com/uzummarket" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
