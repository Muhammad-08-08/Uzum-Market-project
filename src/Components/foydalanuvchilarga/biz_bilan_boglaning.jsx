function BizBilanBoglaningPage() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">
        Biz bilan bog'laning
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Agar savollaringiz bo'lsa yoki yordam kerak bo'lsa, biz bilan
        bog'laning!
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Bizga murojaat qilish uchun:
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Telegram:</strong>{" "}
          <a href="https://t.me/uzum" target="_blank" className="text-blue-500">
            https://t.me/uzum
          </a>
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Telefon:</strong> +998 71 123 45 67
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Elektron pochta:</strong>{" "}
          <a
            href="mailto:support@uzum.com"
            target="_blank"
            className="text-blue-500"
          >
            support@uzum.com
          </a>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Bizni ijtimoiy tarmoqlarda topishingiz mumkin:
        </h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://facebook.com/uzum"
              target="_blank"
              className="text-blue-500"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/uzum"
              target="_blank"
              className="text-blue-500"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/uzum"
              target="_blank"
              className="text-blue-500"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BizBilanBoglaningPage;
