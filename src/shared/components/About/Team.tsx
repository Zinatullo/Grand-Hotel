interface TeamMember {
  name: string;
  role: string;
}

const team: TeamMember[] = [
  { name: "Александр Волков", role: "Генеральный директор" },
  { name: "Елена Соколова",   role: "Управляющий отелем" },
  { name: "Дмитрий Морозов",  role: "Шеф-повар" },
];

function getAvatar(name: string): string {
  return name[0] + name.split(" ")[1][0];
}

export default function Team() {
  return (
    <section className="py-20 md:py-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[22px] md:text-[24px] mb-4">Наша команда</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Профессионалы своего дела, готовые сделать ваше пребывание незабываемым
          </p>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {team.map((el) => (
    <div
      key={el.name}
      className="border border-gray-200 rounded-2xl py-10 text-center"
    >
      <div className="w-24 h-24 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-[22px] text-orange-700 mb-6">
        {getAvatar(el.name)}
      </div>
      <p className="mb-4">{el.name}</p>
      <p className="text-gray-500">{el.role}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}