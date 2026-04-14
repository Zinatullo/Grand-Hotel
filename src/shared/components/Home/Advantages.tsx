import { CiWifiOn } from "react-icons/ci";
import { MdOutlineWaves } from "react-icons/md";
import { LuUtensilsCrossed, LuDumbbell } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { ReactNode } from "react";

interface Card {
  id: number;
  icon: ReactNode;
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    id: 1,
    icon: <CiWifiOn className="w-11 h-11 text-amber-700" />,
    title: "Бесплатный Wi-Fi",
    text: "Высокоскоростной интернет во всех номерах и общественных зонах",
  },
  {
    id: 2,
    icon: <MdOutlineWaves className="w-11 h-11 text-amber-700" />,
    title: "Бассейн",
    text: "Крытый бассейн с подогревом и зона отдыха",
  },
  {
    id: 3,
    icon: <LuUtensilsCrossed className="w-11 h-11 text-amber-700" />,
    title: "Ресторан",
    text: "Авторская кухня от шеф-повара международного уровня",
  },
  {
    id: 4,
    icon: <LuDumbbell className="w-11 h-11 text-amber-700" />,
    title: "Фитнес-зал",
    text: "Современное оборудование и персональные тренировки",
  },
  {
    id: 5,
    icon: <FaCarSide className="w-11 h-11 text-amber-700" />,
    title: "Трансфер",
    text: "Бесплатный трансфер от/до аэропорта",
  },
  {
    id: 6,
    icon: <FiCoffee className="w-11 h-11 text-amber-700" />,
    title: "Завтрак включён",
    text: "Шведский стол с большим выбором блюд",
  },
];

export default function Advantages() {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl font-medium">Наши преимущества</h2>
          <p className="text-gray-500 mt-2">Всё для комфортного проживания</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {cards.map((item: Card) => (
            <div
              key={item.id}
              className="w-full max-w-95 mx-auto
                         flex flex-col gap-4
                         border border-gray-300 rounded-xl
                         text-center py-8
                         transition hover:scale-105 hover:shadow-lg group"
            >
              <div
                className="w-20 h-20 mx-auto rounded-full bg-amber-100
                           flex items-center justify-center
                           group-hover:bg-amber-200 transition"
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-normal">{item.title}</h3>
              <p className="text-gray-500 text-[15px] px-12">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}