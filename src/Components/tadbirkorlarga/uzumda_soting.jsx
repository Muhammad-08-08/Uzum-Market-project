import { useState } from "react";

function Sotish() {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      productImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formni yuborish jarayoni
    console.log(formData);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
        Mahsulot sotish
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Agar sizda mahsulot bo'lsa, uni shu yerda sotishingiz mumkin.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="productName"
            className="block text-lg font-medium text-gray-800"
          >
            Mahsulot nomi
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mahsulot nomini kiriting"
            required
          />
        </div>

        <div>
          <label
            htmlFor="productDescription"
            className="block text-lg font-medium text-gray-800"
          >
            Mahsulot tavsifi
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleInputChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mahsulot tavsifini kiriting"
            rows="4"
            required
          />
        </div>

        <div>
          <label
            htmlFor="productPrice"
            className="block text-lg font-medium text-gray-800"
          >
            Mahsulot narxi
          </label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mahsulot narxini kiriting"
            required
          />
        </div>

        <div>
          <label
            htmlFor="productImage"
            className="block text-lg font-medium text-gray-800"
          >
            Mahsulot rasmini yuklash
          </label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            onChange={handleImageChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Sotish uchun yuborish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sotish;
