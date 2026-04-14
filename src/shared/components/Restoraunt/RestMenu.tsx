import { ChefHat, Coffee, Utensils } from "lucide-react";
import Link from "next/link";

type MenuType = "breakfast" | "lunch" | "dinner";

interface FoodItem {
  type: MenuType;
  name: string;
  includes: string;
  price: string;
}

type Props = {
  currentType: string | undefined;
};

const foods: FoodItem[] = [
  { type: "breakfast", name: "Континентальный завтрак", includes: "Круассаны, джемы, кофе", price: "650 ₽" },
  { type: "breakfast", name: "Американский завтрак", includes: "Яйца, бекон, тосты", price: "850 ₽" },
  { type: "breakfast", name: "Блинчики с начинкой", includes: "Творог или ягоды", price: "550 ₽" },
  { type: "breakfast", name: "Омлет", includes: "С овощами и сыром", price: "600 ₽" },

  { type: "lunch", name: "Борщ", includes: "Традиционный со сметаной", price: "450 ₽" },
  { type: "lunch", name: "Стейк из лосося", includes: "С овощами гриль", price: "1200 ₽" },
  { type: "lunch", name: "Паста Карбонара", includes: "Классический рецепт", price: "850 ₽" },
  { type: "lunch", name: "Салат Цезарь", includes: "Курица или креветки", price: "650 ₽" },

  { type: "dinner", name: "Стейк Рибай", includes: "300г, medium, картофель", price: "1800 ₽" },
  { type: "dinner", name: "Морской окунь", includes: "Запечённый с травами", price: "1500 ₽" },
  { type: "dinner", name: "Утиная грудка", includes: "С ягодным соусом", price: "1600 ₽" },
  { type: "dinner", name: "Тирамису", includes: "Классический", price: "450 ₽" },
];

const buttons: { label: string; value: MenuType; icon: React.ReactNode }[] = [
  { label: "Завтрак", value: "breakfast", icon: <Coffee size={18} /> },
  { label: "Обед",    value: "lunch",     icon: <Utensils size={18} /> },
  { label: "Ужин",    value: "dinner",    icon: <ChefHat size={18} /> },
];

export default async function RestMenu({ currentType }: Props) {
  const active: MenuType =
    currentType === "breakfast" || currentType === "lunch" || currentType === "dinner"
      ? currentType
      : "breakfast";

  const filtered = foods.filter((el) => el.type === active);

  return (
    <section className="py-30 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="text-[24px] font-medium">Наше меню</h3>
          <p className="text-gray-500 my-3 text-[15px]">Избранные позиции из нашего меню</p>

          <div className="mt-18 flex bg-gray-100 rounded-full p-1">
            {buttons.map(({ label, value, icon }) => (
              <Link
                key={value}
                href={`/restaurant?menu=${value}`}
                scroll={false}
                className={`flex-1 flex justify-center items-center gap-2 py-2 rounded-full text-[15px] transition font-medium ${
                  active === value
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </div>

          <div className="mt-12 border border-gray-200 rounded-2xl px-6 sm:px-10">
            {filtered.map((el, i) => (
              <div key={i}>
                <div className="flex justify-between items-start gap-4 py-7 text-left">
                  <div>
                    <h4 className="text-[17px] font-normal text-gray-900">{el.name}</h4>
                    <p className="text-[14px] text-gray-500 mt-1.5">{el.includes}</p>
                  </div>
                  <span className="text-[18px] font-normal text-amber-700 whitespace-nowrap">{el.price}</span>
                </div>
                {i < filtered.length - 1 && <hr className="border-gray-200" />}
              </div>
            ))}
          </div>

          <p className="text-[13px] text-gray-500 mt-10">
            Полное меню доступно в ресторане. Цены могут меняться.
          </p>
        </div>
      </div>
    </section>
  );
}