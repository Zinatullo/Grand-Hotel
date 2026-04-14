import Link from "next/link";

type GalleryType = "" | "rooms" | "territory" | "restaurant" | "spa";
type GalleryHeight = "tall" | "medium" | "short";

interface GalleryItem {
  img: string;
  type: Exclude<GalleryType, "all">;
  height: GalleryHeight;
}

type Props = {
  currentType: string | undefined;
};

export default async function GalleryBar({ currentType }: Props) {

  const gallery: GalleryItem[] = [
    {
      img: "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjA3MTAzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "rooms",
      height: "tall",
    },
    {
      img: "https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlfGVufDF8fHx8MTc2MDc2OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      type: "rooms",
      height: "medium",
    },
    {
      img: "https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDcwNzk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      type: "territory",
      height: "tall",
    },
    {
      img: "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjA3MTAzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "rooms",
      height: "short",
    },
    {
      img: "https://images.unsplash.com/photo-1654086317502-531c0d05919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjA2ODE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "territory",
      height: "tall",
    },
    {
      img: "https://images.unsplash.com/photo-1654243397456-73da481a623e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZhbWlseSUyMHJvb20lMjB8ZW58MXx8fHwxNzYwNzcwMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "rooms",
      height: "medium",
    },
    {
      img: "https://images.unsplash.com/photo-1738407264676-cc40fc3f5111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzYwNzE4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "spa",
      height: "short",
    },
    {
      img: "https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NzAyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "restaurant",
      height: "short",
    },
    {
      img: "https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGhvdGVsfGVufDF8fHx8MTc2MDc3MDIxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      type: "spa",
      height: "tall",
    },
    {
      img: "https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NzAyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "restaurant",
      height: "medium",
    },
    {
      img: "https://images.unsplash.com/photo-1738407264676-cc40fc3f5111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzYwNzE4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "spa",
      height: "tall",
    },
    {
      img: "https://images.unsplash.com/photo-1738407264676-cc40fc3f5111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzYwNzE4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "territory",
      height: "short",
    },
  ];

  const filteredGallery: GalleryItem[] =
    currentType === "all"
      ? gallery
      : gallery.filter((item) => item.type === currentType);

  const buttons: { label: string; value: GalleryType }[] = [
    { label: "Все фото", value: "" },
    { label: "Номера", value: "rooms" },
    { label: "Территория", value: "territory" },
    { label: "Ресторан", value: "restaurant" },
    { label: "Спа", value: "spa" },
  ];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12 px-4">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1 flex-wrap justify-center max-w-full">
            {buttons.map(({ label, value }) => (
              <Link
                key={value}
                href={value ? `/galary?type=${value}` : `/galary`}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-[14px] transition font-medium ${
                  currentType === value
                    ? "bg-white shadow-sm"
                    : "text-gray-500"
                }  ${
                  (currentType === "all" && !value)
                    ? "bg-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredGallery.map((item: GalleryItem, index: number) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Gallery ${index + 1}`}
                className={`w-full object-cover ${
                  item.height === "tall"
                    ? "h-100"
                    : item.height === "medium"
                      ? "h-70"
                      : "h-50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
