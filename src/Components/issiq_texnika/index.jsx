import teg_icon from "../../assets/teg.svg";
import Cards from "../Cards";
import kungaboqar_yogi from "../../assets/kungaboqar_yogi.png";
import bag_svg from "../../assets/bag_svg.svg";
import redmi_note_13 from "../../assets/redmi_note_13.png";
import oila_tanlovi_kukuni from "../../assets/oila_tanlovi_kukuni.png";

function IssiqTexnika() {
  const cardlar = [
    {
      rasm: kungaboqar_yogi,
      malumot:
        "Kungaboqar yog'i Oila tanlovi, tozalangan va xidsizlantirilgan, 90…",
      bolishi_mumkin: "Eksklyuziv",
      rating: "4.9",
      sharh: "(4092 sharh)",
      oyiga_tolov: "1 560 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "15 000 so'm",
      chegirma_narx: "13 000 so'm",
    },
    {
      rasm: redmi_note_13,
      malumot: "Smartfon Xiaomi Redmi Note 13, 6/128 GB, 8/128 GB, 8/256GB,…",
      bolishi_mumkin: "Aksiya",
      rating: "5.0",
      sharh: "(8 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "3 010 000 so'm",
      chegirma_narx: "2 499 000 so'm",
    },
    {
      rasm: oila_tanlovi_kukuni,
      malumot: "Kir yuvish kukuni Oila tanlovi Ayoztazeligi, avtomat, 3 kg",
      bolishi_mumkin: "Aksiya",
      rating: "4.5",
      sharh: "(123 sharh)",
      oyiga_tolov: "4 920 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "57 000 so'm",
      chegirma_narx: "41 000 so'm",
    },
    {
      rasm: kungaboqar_yogi,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      bolishi_mumkin: "Aksiya",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      rasm: kungaboqar_yogi,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      bolishi_mumkin: "Aksiya",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
  ];
  return (
    <div className="w-[1519px] px-40 py-6 bg-white mx-auto">
      <div className="flex gap-6 items-center">
        <p className="text-[28px] h-[49px] text-[#1F2026] font-bold">
          Issiq texnika
        </p>
        <img src={teg_icon} alt="" />
      </div>

      <div className="flex gap-2 flex-wrap">
        {cardlar.map((item) => {
          return (
            <Cards
              rasm={item.rasm}
              malumot={item.malumot}
              rating={item.rating}
              sharh={item.sharh}
              oyiga_tolov={item.oyiga_tolov}
              eski_narx={item.eski_narx}
              chegirma_narx={item.chegirma_narx}
              bag_svg={item.bag_svg}
              bolishi_mumkin={item.bolishi_mumkin}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IssiqTexnika;
