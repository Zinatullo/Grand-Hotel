import Image from "next/image";

export default function RestChef() {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col xl:flex-row items-center gap-6">
          <div className="relative w-full xl:w-[70%] h-60 sm:h-72 xl:h-96 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?w=1200&h=900&fit=crop"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="xl:w-[55%]">
            <b className="font-medium text-[20px]">Шеф-повар Дмитрий Морозов</b>
            <p className="text-gray-600 mt-4">
              "Для меня готовка — это искусство. Каждое блюдо должно не только
              радовать вкусовые рецепторы, но и визуально вдохновлять. Я
              стремлюсь создавать гастрономические шедевры, используя только
              лучшие ингредиенты."
              <br />
              <br />
              15 лет опыта в ресторанах Michelin. Обучался во Франции и Италии.
              Победитель кулинарного конкурса "Лучший шеф года 2023".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}