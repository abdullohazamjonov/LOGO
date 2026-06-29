import Header from "../../comonents/header";
import body from "../../assets/image/body.png";

const Menu = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${body})` }}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-gray-700">
          Главная /
          <span className="text-red-500"> Меню</span>
        </p>
        <h1 className="text-5xl font-bold mt-4 mb-10">
          Меню
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/50 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">🍕 Пицца</h2>
            <p className="mt-3">Самые вкусные пиццы.</p>
          </div>
          <div className="bg-white/50 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">🍔 Бургеры</h2>
            <p className="mt-3">Сочные бургеры.</p>
          </div>
          <div className="bg-white/50 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">🥗 Салаты</h2>
            <p className="mt-3">Свежие салаты.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;