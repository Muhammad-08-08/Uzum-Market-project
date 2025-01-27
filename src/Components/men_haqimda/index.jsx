import React from "react";

function MenHaqimda() {
  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto flex gap-4">
      <div className="w-[350px]">
        <div className="w-full py-4 pl-5 rounded-md hover:bg-gray-300 cursor-pointer">
          <h2>Buyurtmalarim</h2>
        </div>
        <div className="w-full py-4 pl-5 rounded-md hover:bg-gray-300 cursor-pointer">
          <h2>Ma'lumotlarim</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-gray-400">
        <div className="border w-[300px] border-gray-400 rounded-lg">
          <h2 className="text-lg font-medium px-2 pr-12 py-3">Muhammad</h2>
        </div>
        <div className="border w-[300px] border-gray-400 rounded-lg">
          <h2 className="text-lg font-medium px-2 pr-12 py-3">Nuraliyev</h2>
        </div>
      </div>
    </div>
  );
}

export default MenHaqimda;
