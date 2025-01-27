function Vakansiyalar() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
        Vakansiyalar
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Bizning jamoamizga qo‘shiling! Quyidagi pozitsiyalarni egallash uchun
        murojaat qiling.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Frontend Dasturchi
          </h3>
          <p className="text-gray-600">
            Texnologiyalar: React, JavaScript, HTML, CSS
          </p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> To'liq
          </p>
          <p className="text-gray-500">
            <strong>Joylashuv:</strong> Toshkent
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 71 123 45 67
          </p>
          <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Murojaat qilish
          </button>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Backend Dasturchi
          </h3>
          <p className="text-gray-600">
            Texnologiyalar: Node.js, Express, MongoDB
          </p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> To'liq
          </p>
          <p className="text-gray-500">
            <strong>Joylashuv:</strong> Samarkand
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 66 789 01 23
          </p>
          <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Murojaat qilish
          </button>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            UX/UI Dizayner
          </h3>
          <p className="text-gray-600">
            Texnologiyalar: Figma, Adobe XD, Sketch
          </p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> To'liq
          </p>
          <p className="text-gray-500">
            <strong>Joylashuv:</strong> Buxoro
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 65 345 67 89
          </p>
          <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Murojaat qilish
          </button>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Marketolog</h3>
          <p className="text-gray-600">Texnologiyalar: SEO, Google Ads, SMM</p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> To'liq
          </p>
          <p className="text-gray-500">
            <strong>Joylashuv:</strong> Andijon
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 74 543 21 10
          </p>
          <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Murojaat qilish
          </button>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Sotuvchilar</h3>
          <p className="text-gray-600">
            Texnologiyalar: Savdo va mijozlar bilan ishlash
          </p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> Qisman
          </p>
          <p className="text-gray-500">
            <strong>Joylashuv:</strong> Farg'ona
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 73 234 56 78
          </p>
          <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Murojaat qilish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vakansiyalar;
