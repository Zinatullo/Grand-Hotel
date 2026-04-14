import Link from "next/link";

interface Review {
  id: number;
  name: string;
  date: string;
  star: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Мария Иванова",
    date: "15 октября 2025",
    star: "⭐⭐⭐⭐⭐",
    text: "Потрясающий отель! Отличный сервис, чистота, комфорт. Обязательно вернёмся снова. Особенно понравился завтрак и вид из окна.",
  },
  {
    id: 2,
    name: "Алексей Петров",
    date: "8 октября 2025",
    star: "⭐⭐⭐⭐⭐",
    text: "Идеальное место для деловой поездки. Тихо, удобно, быстрый Wi-Fi. Персонал всегда готов помочь.",
  },
  {
    id: 3,
    name: "Екатерина Смирнова",
    date: "1 октября 2025",
    star: "⭐⭐⭐⭐⭐",
    text: "Провели здесь выходные с семьёй. Детям особенно понравился бассейн. Номера просторные и чистые.",
  },
];

function getAvatar(name: string): string {
  const parts = name.split(" ");
  return (
    (parts[0]?.[0]?.toUpperCase() ?? "") +
    (parts[1]?.[0]?.toUpperCase() ?? "")
  );
}

export default function Reviews() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col gap-3 mb-10">
          <h2 className="font-medium text-lg md:text-[20px]">
            Отзывы наших гостей
          </h2>
          <p className="text-gray-500 font-normal text-base md:text-lg">
            Узнайте, что говорят о нас наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review: Review) => (
            <div
              key={review.id}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-medium text-sm">
                    {getAvatar(review.name)}
                  </div>
                  <div>
                    <h3 className="text-lg font-normal">{review.name}</h3>
                    <span className="text-sm">{review.star}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>

              <p className="text-gray-500 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-block px-6 py-2 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Все отзывы &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}