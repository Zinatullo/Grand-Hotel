import { ChefHat } from 'lucide-react'

export default function RestourauntHome() {


  return (
    <section className="text-white mt-10">
      <div className="">
        <div className="relative bg-black text-center">
          
          <img
            className="object-cover w-full h-125 opacity-50"
            src="https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NzAyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Restaurant"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center max-w-7xl mx-auto">
            <div
              className={`transition-all duration-700 ease-out
                my-animate`}
            >
              <ChefHat className="w-12 h-12 mb-4 mx-auto" />
              <h2 className="text-4xl font-medium">Ресторан Grand</h2>
              <p className="mt-4 text-lg">
                Авторская кухня от шеф-повара международного уровня
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}