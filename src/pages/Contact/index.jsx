import Header from "../../components/header";
import body from "../../assets/image/body.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${body})` }}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-gray-700">
          Главная / <span className="text-red-500">Контакты</span>
        </p>
        <h1 className="text-5xl font-bold mt-4 mb-12">
          Контакты
        </h1>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">
              Свяжитесь с нами
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">📍 Адрес</h4>
                <p>г. Ташкент, Узбекистан</p>
              </div>
              <div>
                <h4 className="font-bold">📞 Телефон</h4>
                <p>+998 (90) 758-38-33</p>
              </div>
              <div>
                <h4 className="font-bold">📧 Email</h4>
                <p>info@bmgsoft.com</p>
              </div>
              <div>
                <h4 className="font-bold">🕘 Рабочее время</h4>
                <p>09:00 - 23:00</p>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">
              Напишите нам
            </h2>
            <input type="text" placeholder="Ваше имя" className="w-full p-4 border rounded-xl mb-5 outline-none"/>
            <input type="email" placeholder="Email" className="w-full p-4 border rounded-xl mb-5 outline-none"/>
            <textarea rows="6" placeholder="Ваше сообщение" className="w-full p-4 border rounded-xl outline-none"></textarea>
            <button className="mt-6 bg-black text-white px-8 py-4 rounded-xl hover:bg-red-500 duration-300">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;