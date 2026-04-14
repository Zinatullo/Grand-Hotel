import { Clock, Utensils } from "lucide-react";

export default function RestAbout() {
  return (
    <section className="my-50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col xl:flex-row items-center gap-10">

          <div className="w-full xl:w-[55%] shrink-0 xl:pl-2">
            <h4>О нашем ресторане</h4>
            <br />

            <p className="text-gray-600">
              Наш ресторан предлагает уникальное сочетание традиционной и
              современной кухни. Шеф-повар Дмитрий Морозов создает блюда из
              свежих сезонных продуктов, сочетая классические техники с
              инновационными подходами.
            </p>
            <br />

            <p className="text-gray-600">
              Элегантный интерьер и панорамные окна создают идеальную атмосферу
              для романтического ужина или делового обеда. Наша винная карта
              включает более 200 позиций вин со всего мира.
            </p>

            <div className="flex items-center gap-3 flex-col sm:flex-row">
              <div className="border border-gray-300 rounded-xl p-4 mt-10 flex flex-col items-left gap-8 w-full sm:w-90 xl:w-110">
                <Clock className="text-amber-700 w-9 h-9" />
                <span>Режим работы</span>
                <p className="text-gray-600">
                  Ежедневно <br />
                  7:00 - 23:00
                </p>
              </div>

              <div className="border border-gray-300 rounded-xl p-4 mt-10 flex flex-col items-left gap-8 w-full sm:w-90 xl:w-110">
                <Utensils className="text-amber-700 w-9 h-9" />
                <span>Места</span>
                <p className="text-gray-600">
                  80 мест <br />
                  + терраса (лето)
                </p>
              </div>
            </div>
          </div>

          <img
            className="object-cover w-full xl:w-[45%] h-80 sm:h-96 xl:h-130 rounded-xl"
  src="https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?w=1200&h=900&fit=crop"

            alt="Restaurant Interior"
          />
        </div>
      </div>
    </section>
  );
}
