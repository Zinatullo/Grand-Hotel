export default function RoomAmenities() {
  const amenities: string[] = [
    'Бесплатный Wi-Fi',
    'Кондиционер',
    'Мини-бар',
    'Сейф',
    'Телевизор Smart TV',
    'Халаты и тапочки',
    'Косметика премиум',
    'Завтрак включен',
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-700 text-lg md:text-xl font-normal mb-12">
          Все номера включают
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {amenities.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center sm:justify-start gap-3 text-gray-600"
            >
              <div className="w-3 h-3 bg-orange-500 rounded-full shrink-0" />
              <p className="text-base md:text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}