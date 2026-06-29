import Header from "../../components/header";
import body from "../../assets/image/body.png";

const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${body})` }}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-gray-700">
          Главная / <span className="text-red-500">О нас</span>
        </p>
        <h1 className="text-5xl font-bold mt-4 mb-12">
          О нас
        </h1>
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Добро пожаловать!
          </h2>
          <p className="text-lg text-gray-700 leading-9">
            Мы предлагаем лучшие блюда европейской и национальной кухни.
            Наш ресторан работает уже много лет и ежедневно радует гостей
            вкусной едой, приятной атмосферой и качественным сервисом.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-red-500">10+</h3>
              <p className="mt-3">Лет опыта</p>
            </div>
            <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-red-500">5000+</h3>
              <p className="mt-3">Довольных клиентов</p>
            </div>
            <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-red-500">50+</h3>
              <p className="mt-3">Авторских блюд</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;