

export default function ContactMap() {
  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-xl font-normal text-neutral-900 mb-6">Как нас найти</h2>

      <div className="w-full h-125 rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7551009883447!2d72.79096507570254!3d40.53546227135566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac06060fffff%3A0x19f90debff595765!2sOsh%20Grand%20hotel%20CHAVO!5e0!3m2!1sru!2skg!4v1707667234567!5m2!1sru!2skg"
          width="100%"
          height="100%"
          className="w-full h-125 rounded-lg overflow-hidden border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>

      <div className="mt-10 bg-[#FFF7DC] p-5 rounded-xl flex flex-col gap-3">
        <h4 className="font-medium">Как добраться</h4>
        <span className='text-gray-500'>• От метро "Тверская" - 5 минут пешком</span>
        <span className='text-gray-500'>• От аэропорта Шереметьево - 40 минут на автомобиле</span>
        <span className='text-gray-500'>• От Казанского вокзала - 15 минут на такси</span>
      </div>
    </div>
  )
}