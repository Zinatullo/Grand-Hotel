import { Car, UtensilsCrossed, Wifi } from "lucide-react";

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: <Wifi className="w-8 h-8 text-amber-700" />,
    title: "Бесплатный Wi-Fi",
    description: "Во всех зонах отеля",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-amber-700" />,
    title: "Завтрак",
    description: "Шведский стол включен",
  },
  {
    icon: <Car className="w-8 h-8 text-amber-700" />,
    title: "Парковка",
    description: "Охраняемая парковка",
  },
];

export default function AdvCards() {
  return (
    <section className="py-18 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Дополнительные удобства
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Всё необходимое для комфортного проживания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}