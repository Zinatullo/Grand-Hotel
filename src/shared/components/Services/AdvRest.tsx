import Image from "next/image";

const features: string[] = [
  "Залы вместимостью от 10 до 200 человек",
  "Современное аудио-визуальное оборудование и Wi-Fi",
  "Кейтеринг и coffee-break от нашего ресторана",
  "Персональный менеджер мероприятия",
];

export default function AdvRest() {
  return (
    <section className="py-18 md:py-16">
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NzAyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Деловые мероприятия и праздники"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Деловые мероприятия и праздники
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Мы специализируемся на организации корпоративных мероприятий, конференций,
              семинаров и частных праздников. Наши специалисты помогут с планированием,
              декором и кейтерингом.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-2 h-2 mt-2 bg-amber-600 rounded-full shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-amber-100 mt-12 md:mt-16 py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
            Для получения подробной информации о стоимости услуг и бронирования,
            пожалуйста,{" "}
            <span className="text-amber-700 font-medium">свяжитесь с нами</span> по
            телефону{" "}
            <span className="text-amber-700 font-medium">+7 (495) 123-45-67</span>
          </p>
        </div>
      </div>
    </section>
  );
}