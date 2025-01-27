function TopshirishPunktlari() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
        Topshirish punktlari
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Bizning tezkor yetkazib berish xizmatimiz yordamida, o'zingizga qulay
        bo'lgan manzildan tovarni olib ketishingiz mumkin.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Shahar: Tashkent
          </h3>
          <p className="text-gray-600">Manzil: ABC ko'chasi, 5-uy</p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> 09:00 - 18:00 (dushanba - jum'a)
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 71 123 45 67
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Shahar: Samarkand
          </h3>
          <p className="text-gray-600">Manzil: XYZ ko'chasi, 10-uy</p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> 10:00 - 17:00 (shanba - yakshanba)
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 66 789 01 23
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Shahar: Bukhara
          </h3>
          <p className="text-gray-600">Manzil: 123 ko'chasi, 3-uy</p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> 08:00 - 20:00 (dushanba - yakshanba)
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 65 345 67 89
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Shahar: Andijon
          </h3>
          <p className="text-gray-600">Manzil: 45 ko'chasi, 8-uy</p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> 09:00 - 18:00 (dushanba - juma)
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 74 543 21 10
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Shahar: Fergana
          </h3>
          <p className="text-gray-600">Manzil: 9 ko'chasi, 2-uy</p>
          <p className="text-gray-500 font-medium">
            <strong>Ish vaqti:</strong> 10:00 - 16:00 (shanba - yakshanba)
          </p>
          <p className="text-gray-500">
            <strong>Telefon:</strong> +998 73 234 56 78
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopshirishPunktlari;
