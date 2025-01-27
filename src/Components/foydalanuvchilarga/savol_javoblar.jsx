import { useState } from "react";

function SavolJavoblar1() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
        Savol-Javoblar
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Bu yerda tez-tez beriladigan savollar va javoblar mavjud.
      </p>

      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleAnswer(0)}
            className="w-full text-left text-xl font-semibold text-gray-800 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Savol 1: Qanday qilib ro'yxatdan o'tish mumkin?
          </button>
          {activeIndex === 0 && (
            <p className="text-gray-600 mt-2 px-4">
              Ro'yxatdan o'tish uchun saytning yuqori qismidagi "Ro'yxatdan
              o'tish" tugmasini bosing va kerakli ma'lumotlarni kiriting.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleAnswer(1)}
            className="w-full text-left text-xl font-semibold text-gray-800 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Savol 2: To'lovni qanday amalga oshirish mumkin?
          </button>
          {activeIndex === 1 && (
            <p className="text-gray-600 mt-2 px-4">
              To'lovni bank kartasi yoki elektron pul o‘tkazmalari orqali amalga
              oshirishingiz mumkin.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleAnswer(2)}
            className="w-full text-left text-xl font-semibold text-gray-800 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Savol 3: Qachon yetkazib berish bo'ladi?
          </button>
          {activeIndex === 2 && (
            <p className="text-gray-600 mt-2 px-4">
              Yetkazib berish muddati odatda 3-5 ish kuni davom etadi, lekin bu
              manzilga bog'liq bo'lishi mumkin.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleAnswer(3)}
            className="w-full text-left text-xl font-semibold text-gray-800 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Savol 4: Mahsulotni qanday qaytarish mumkin?
          </button>
          {activeIndex === 3 && (
            <p className="text-gray-600 mt-2 px-4">
              Mahsulotni qaytarish uchun bizning mijozlarga xizmat ko'rsatish
              bo'limimizga murojaat qiling va kerakli hujjatlarni taqdim eting.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavolJavoblar1;
