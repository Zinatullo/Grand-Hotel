type Props = {
  title: string;
  description: string;
};

export default function PageUpperInfo({ title, description }: Props) {
  return (
    <section className="h-85 bg-[#FFF7DC] flex flex-col items-center justify-center text-center mt-15">
      <div
        className={`transition-all duration-700 ease-out
          my-animate`}
      >
        <h3 className="text-[17px] font-normal text-black mb-7">{title}</h3>
        <p className="text-[19px] text-gray-500">{description}</p>
      </div>
    </section>
  );
}
