


export default function History() {
  return (
    <>
      <section className="my-20 px-4 md:px-10 lg:px-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-15">
            
            <div>
              <h3 className="font-normal mb-8 text-xl md:text-2xl">
                Наша история
              </h3>

              <p className="text-gray-600 max-w-full xl:w-150 leading-loose text-sm md:text-base">
                Grand Hotel был основан в 1998 году как небольшая гостиница на 20 номеров. За более чем 25 лет работы мы превратились в один из ведущих отелей города, предлагая высочайший уровень сервиса и комфорта.
                <br /><br />
                Наша миссия — создавать незабываемые впечатления для каждого гостя. Мы постоянно совершенствуем наши услуги, следим за последними тенденциями в индустрии гостеприимства и инвестируем в обучение нашей команды.
                <br /><br />
                Сегодня Grand Hotel — это 120 комфортабельных номеров, ресторан авторской кухни, спа-центр, конференц-залы и многое другое. Мы гордимся тем, что более 50,000 гостей выбрали нас для своего проживания.
              </p>
            </div>

            <div className="w-full">
              <img
                className="rounded-xl w-full
                           h-60 md:h-75 xl:h-auto
                           object-cover"
                src="https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDcwNzk4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt=""
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
