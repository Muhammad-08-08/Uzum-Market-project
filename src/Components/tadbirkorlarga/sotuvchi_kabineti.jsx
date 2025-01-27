import { useState } from "react";

function SotuvchiKabineti() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userProducts, setUserProducts] = useState([
    // Misol uchun, foydalanuvchining oldingi mahsulotlari
    { id: 1, name: "Mahsulot 1", price: 150000, description: "Tavsif 1" },
    { id: 2, name: "Mahsulot 2", price: 250000, description: "Tavsif 2" },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Foydalanuvchi kirishi uchun ma'lumotlarni tekshirish (misol uchun)
    if (username === "sotuvchi" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Login yoki parol noto'g'ri!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      {!isLoggedIn ? (
        // Agar foydalanuvchi tizimga kirgan bo'lmasa
        <div>
          <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
            Sotuvchi Kabinetiga Kirish
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-800"
              >
                Foydalanuvchi nomi
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Foydalanuvchi nomini kiriting"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-800"
              >
                Parol
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Parolni kiriting"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
              >
                Kirish
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Agar foydalanuvchi tizimga kirgan bo'lsa
        <div>
          <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
            Sizning Mahsulotlaringiz
          </h1>

          <div className="space-y-4">
            {userProducts.length > 0 ? (
              userProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                >
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold text-gray-800">
                    {product.price} so'm
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                Sizda hali mahsulotlar mavjud emas.
              </p>
            )}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
            >
              Chiqish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SotuvchiKabineti;
