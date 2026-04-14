import { Award, Heart, Trophy, Users } from "lucide-react"
export default function Achives() {
  return (
    <section className="bg-amber-700 text-white min-h-55 py-5 ">
      <div className="max-w-7xl mx-auto max-h-45 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center my-10">
          <div className="flex flex-col gap-4 justify-center">
            <Users 
              className="w-12 h-12 mx-auto mb-4 opacity-80"
             />
            <h2 className="text-4xl mb-2">50,000+</h2>
            <p className="text-sm opacity-90">Довольных гостей</p>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <Award 
              className="w-12 h-12 mx-auto mb-4 opacity-80"
             />
            <h2 className="text-4xl mb-2">27</h2>
            <p className="text-sm opacity-90">Лет работы</p>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <Trophy 
              className="w-12 h-12 mx-auto mb-4 opacity-80"
            />
            <h2 className="text-4xl mb-2">15</h2>
            <p className="text-sm opacity-90">Наград</p>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <Heart 
              className="w-12 h-12 mx-auto mb-4 opacity-80"
            />
            <h2 className="text-4xl mb-2">98%</h2>
            <p className="text-sm opacity-90">Положительных отзывов</p>
          </div>
        </div>
      </div>
    </section>
  );
}
