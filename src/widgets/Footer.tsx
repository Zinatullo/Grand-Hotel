import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import CustomLinkFooter from "../shared/ui/CustomLinkFooter";


  let usl = [
    { uls: "Трансфер" },
    { uls: "Спа и массаж" },
    { uls: "Фитнес-зал" },
    { uls: "Конференц-залы" },
    { uls: "Организация мероприятий" },
  ];
  
   const navs = [
  { id: 1, path: "/", name: "Главная" },
  { id: 2, path: "/about", name: "О нас" },
  { id: 3, path: "/numbers", name: "Номера" },
  { id: 4, path: "/services", name: "Услуги" },
  { id: 5, path: "/restaurant", name: "Ресторан" },
  { id: 6, path: "/galary", name: "Галерея" },
  { id: 7, path: "/reviews", name: "Отзывы" },
  { id: 8, path: "/contacts", name: "Контакты" },
];


export default function Footer() {

  return (
    <>
      <footer className="bg-gray-900 text-white px-5 md:px-10 lg:px-30 py-10 md:py-14 lg:py-18">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            
            <div className="w-full max-w-sm mb-5">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-700 rounded-xl text-white text-lg md:text-xl flex items-center justify-center font-bold">
                  H
                </div>
                <h5 className="text-base md:text-lg font-normal leading-none">
                  Grand Hotel
                </h5>
              </div>
              <p className="text-sm md:text-[15px] font-sans text-gray-300 mt-4 md:mt-5">
                Комфорт и уют в самом сердце города. Работаем с 1998 года,
                предоставляя высочайший уровень сервиса для наших гостей.
              </p>
              <div className="flex gap-3 md:gap-4 mt-4 md:mt-5">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-2 md:p-3 cursor-pointer">
                  <SlSocialFacebook className="w-full h-full" />
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-2 md:p-3 cursor-pointer">
                  <FaInstagram className="w-full h-full" />
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-2 md:p-3 cursor-pointer">
                  <CiTwitter className="w-full h-full" />
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm flex flex-col gap-2">
              <h3 className="mb-2 font-medium text-base md:text-lg">Навигация</h3>
              {navs.slice(0,6).map((el) => (
                  <CustomLinkFooter
                    className="text-gray-300 hover:text-white transition-colors text-sm md:text-base" 
                    href={el.path} 
                    key={el.id}
                  >
                    {el.name}
                  </CustomLinkFooter>
                ))}
            </div>

            <div className="w-full max-w-sm flex flex-col gap-2 md:gap-3">
              <h3 className="mb-2 font-medium text-base md:text-lg">Услуги</h3>
              {usl.map((el, index) => (
                <p key={index} className="text-gray-300 text-sm md:text-base">
                  {el.uls}
                </p>
              ))}
            </div>

            <div className="w-full max-w-sm flex flex-col gap-3 md:gap-4">
              <h3 className="mb-2 font-medium text-base md:text-lg">Контакты</h3>
              <div className="flex items-start gap-2 text-gray-300">
                <MdOutlinePlace className="text-lg md:text-xl mt-0.5 shrink-0" />
                <p className="text-sm md:text-base">г. Москва, ул. Тверская, д. 1</p>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MdOutlinePhone className="text-lg md:text-xl shrink-0" />
                <p className="text-sm md:text-base">+7 (495) 123-45-67</p>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CiMail className="text-lg md:text-xl shrink-0" />
                <p className="text-sm md:text-base">info@grandhotel.ru</p>
              </div>
              <div className="flex flex-col mt-6 md:mt-10">
                <p className="font-medium text-sm md:text-base">Ресепшн работает:</p>
                <p className="font-normal text-sm md:text-base text-gray-300">Круглосуточно, 24/7</p>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            © 2025 Grand Hotel. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}