import NumbersHome from "../../shared/components/Numbers/NumbersHome";
import Rooms from "../../shared/components/Numbers/Rooms";
import Choose from "../../shared/components/Numbers/Choose";
import RoomAmenities from "../../shared/components/Numbers/RoomAmenties";
import PageUpperInfo from "@/src/shared/components/PageUpperInfo";
  type Props = {
  searchParams: Promise<Record<string, string>>;
};
export default async function page({ searchParams } : Props) {
  const {type} = await searchParams;

  return (
    <>
      <PageUpperInfo
        title="  Номера и цены"
        description="Выберите идеальный номер для вашего проживанияВыберите идеальный номер для вашего проживания"
      />
      <Rooms currentType={ type } />
      <RoomAmenities />
      <Choose />
    </>
  );
}
