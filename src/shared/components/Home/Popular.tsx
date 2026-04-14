import { GoPeople } from "react-icons/go";
import { CiWifiOn } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';

interface Room {
  id: number;
  image: string;
  price: string;
  title: string;
  text: string;
  guests: string;
  size: string;
}

const numbers: Room[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1670800050441-e77f8c82963f",
    price: "от 4 500₽/ночь",
    title: "Стандартный номер",
    text: "Уютный номер с современным дизайном и всеми удобствами",
    guests: "2 гостей",
    size: "25 м²",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1759223198981-661cadbbff36",
    price: "от 8 500₽/ночь",
    title: "Люкс",
    text: "Просторный номер класса люкс с панорамным видом на город",
    guests: "2 гостей",
    size: "45 м²",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1654243397456-73da481a623e",
    price: "от 6 500₽/ночь",
    title: "Семейный номер",
    text: "Идеальный выбор для семейного отдыха с детьми",
    guests: "4 гостей",
    size: "35 м²",
  },
];

export default function Popular() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium">Популярные номера</h2>
          <p className="text-gray-500 text-lg mt-2">
            Выберите идеальный номер для проживания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {numbers.map((el: Room) => (
            <div
              key={el.id}
              className="flex flex-col h-full border border-gray-300 rounded-xl overflow-hidden bg-white"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <span className="absolute top-3 right-3 z-10 bg-amber-700 text-white text-sm px-3 py-1 rounded-lg">
                  {el.price}
                </span>
                <Image
                  src={el.image}
                  alt={el.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="flex flex-col gap-4 p-6 flex-1">
                <h3 className="text-lg font-medium">{el.title}</h3>
                <p className="text-gray-500 text-sm">{el.text}</p>

                <div className="flex gap-5 text-gray-500 text-sm mt-auto">
                  <span className="flex items-center gap-1">
                    <GoPeople /> {el.guests}
                  </span>
                  <span>{el.size}</span>
                  <span className="flex items-center gap-1">
                    <CiWifiOn /> Wi-Fi
                  </span>
                </div>

                <Link
                  href="/booking"
                  className="mt-4 h-10 rounded-xl text-center py-2.5
                             bg-amber-700 text-white font-medium
                             hover:bg-amber-800 transition"
                >
                  Забронировать
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/numbers"
          className="border border-gray-300 px-6 py-2 rounded-xl font-medium hover:bg-gray-100 transition"
        >
          Посмотреть все номера →
        </Link>
      </div>
    </section>
  );
}