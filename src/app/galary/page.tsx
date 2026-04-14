import GalleryBar from "../../shared/components/Galary/GalaryBar";
import PageUpperInfo from "@/src/shared/components/PageUpperInfo";

type Props = {
  searchParams: Promise<Record<string, string>>;
};
export default async function page({ searchParams }: Props) {
  const {type} = await searchParams;

  return (  
    <>
            <PageUpperInfo
        title=" 
          Галерея
        "
        description="
          Посмотрите наши номера, интерьеры и удобства
        "
      />
      <GalleryBar currentType={type || "all"} />
    </>
  );
}
