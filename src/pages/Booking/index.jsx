import React from "react";
import Header from "../../components/header";
import body from "../../assets/image/body.png";

const Booking = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${body})` }}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="text-gray-700">
            Главная / <span className="text-red-500">Бронирование</span>
          </p>
          <h1 className="text-5xl font-bold mt-4">
            Бронирование
          </h1>
        </div>
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-10 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <label className="font-semibold">Имя</label>
              <input type="text" placeholder="Введите имя" className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500"/>
            </div>
            <div>
              <label className="font-semibold">Телефон</label>
              <input type="tel" placeholder="+998 90 123 45 67" className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500"/>
            </div>
            <div>
              <label className="font-semibold">Дата</label>
              <input type="date" className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500"/>
            </div>
            <div>
              <label className="font-semibold">Время</label>
              <input type="time" className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500"/>
            </div>
            <div>
              <label className="font-semibold">
                Количество гостей
              </label>
              <select className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500">
                <option>1 человек</option>
                <option>2 человека</option>
                <option>3 человека</option>
                <option>4 человека</option>
                <option>5 человек</option>
                <option>6+</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Стол</label>
              <select className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500">
                <option>У окна</option>
                <option>В центре</option>
                <option>VIP</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <label className="font-semibold">
              Комментарий
            </label>
            <textarea rows="5" placeholder="Ваш комментарий..." className="w-full mt-2 p-4 rounded-xl border outline-none focus:border-red-500"></textarea>
          </div>
          <button className="mt-8 bg-black text-white px-10 py-4 rounded-xl hover:bg-red-500 duration-300">
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;