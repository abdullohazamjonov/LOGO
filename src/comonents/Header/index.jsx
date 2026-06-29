import React from 'react'
import logo from "../../assets/image/logo.svg"
import flag from "../../assets/image/flag.svg"
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className='items-center inset-0 backdrop-blur-md bg-black/20'>
            <div className='max-w-7xl mx-auto pt-5'>
                <div className='flex items-center gap-160'>
                    <div className='flex items-center gap-10'>
                        <li><a href="+998(90)758383833" className=' hover:text-[#ff0000]'>📞 +998(90)758383833</a></li>
                        <li><a href="info@bmgsoft.com" className=' hover:text-[#ff0000]'>📨 info@bmgsoft.com</a></li>
                    </div>
                    <div className='flex items-center gap-10'>
                        <a href="#" className=' flex gap-1.5 hover:text-[#ff0000]'><img src={flag} alt="flag-img" /> Русский ▼</a>
                        <button className='bg-black text-white hover:bg-[#ff0000] hover:text-black px-2 py-1 rounded-lg'>
                            Вход в аккаунт
                        </button>
                    </div>
                </div>
                <div className='max-w-7xl py-5 mx-auto bg-white/30 backdrop-blur-xl rounded-[50px] mt-14'>
                    <div className='flex justify-around items-center'>
                        <img src={logo} alt="" />
                        <nav>
                            <ul className="flex gap-9">
                                <li>
                                    <NavLink to="/menu" className={({isActive}) => isActive ? "text-red-500" : "hover:text-red-500"}>
                                        Меню
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/news" className={({isActive}) => isActive ? "text-red-500" : "hover:text-red-500"}>
                                        Новости
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/booking" className={({isActive}) => isActive ? "text-red-500" : "hover:text-red-500"}>
                                        Бронирование
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about" className={({isActive}) => isActive ? "text-red-500" : "hover:text-red-500"}>
                                        О нас
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-500" : "hover:text-red-500"}>
                                        Контакты
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex justify-around items-center gap-9">
                            <button className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-[#ff0000]">
                                <FaRegHeart className="text-xl" />
                            </button>
                            <button className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-[#ff0000]">
                                <BsCart2 className="text-xl" />
                            </button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Header