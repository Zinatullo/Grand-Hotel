import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactCard {
  name: string;
  info: string;
  icon: React.ReactNode;
}

const conCards: ContactCard[] = [
  { name: "Телефон", info: "+7 (495) 123-45-67", icon: <Phone /> },
  { name: "Email", info: "info@grandhotel.ru", icon: <Mail /> },
  { name: "Адрес", info: "г. Москва, ул. Тверская, д. 1", icon: <MapPin /> },
  { name: "Ресепшн", info: "Круглосуточно 24/7", icon: <Clock /> },
];

export default function ContactCards() {
  return (
    <section className="my-20 md:my-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conCards.map((card: ContactCard, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center text-center py-8 px-6 md:py-10 md:px-8 border border-gray-300 rounded-xl"
            >
              <div className="text-4xl text-amber-700 mb-4 bg-amber-100 p-4 rounded-full">
                {card.icon}
              </div>
              <h3 className="text-lg font-normal">{card.name}</h3>
              <p className="text-gray-600 text-base md:text-lg max-w-xs">
                {card.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
