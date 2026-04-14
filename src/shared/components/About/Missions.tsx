export default function Missions() {
  const cards: { name: string; text: string }[] = [
    {
      name: "Качество",
      text: "Мы следим за каждой деталью, чтобы обеспечить высочайшее качество обслуживания",
    },
    {
      name: "Гостеприимство",
      text: "Наша команда всегда рада помочь и сделать ваше пребывание приятным",
    },
    {
      name: "Инновации",
      text: "Мы внедряем современные технологии для вашего комфорта",
    },
  ];

  return (
    <section className="my-24 px-5">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h4 className="text-[16px] mb-8">Наша миссия и ценности</h4>
          <p className="text-gray-600">
            Мы верим, что отель — это не просто место для ночлега, это ваш дом вдали от дома.
            Наша цель — сделать каждое пребывание максимально комфортным, безопасным и запоминающимся.
          </p>
        </div>

        <div className="mt-10 flex gap-5 justify-center text-center flex-wrap">
          {cards.map((card) => (
            <div
              key={card.name}
              className="border border-gray-300 rounded-xl px-5 py-8 w-[320px] shrink-0"
            >
              <b className="font-medium text-[20px]">{card.name}</b>
              <p className="text-gray-600 mt-6">{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}