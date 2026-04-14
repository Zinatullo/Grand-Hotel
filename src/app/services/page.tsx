import ServicesHome from "../../shared/components/Services/ServicesHome";
import Advant from "../../shared/components/Services/Advant";
import AdvCards from "../../shared/components/Services/AdvCards";
import AdvRest from "../../shared/components/Services/AdvRest";
import PageUpperInfo from "@/src/shared/components/PageUpperInfo";
export default function page() {
  return (
    <>
      <PageUpperInfo
        title="Наши услуги"
        description="Всё для вашего комфорта и удобства"
      />
      <Advant />
      <AdvCards />
      <AdvRest />
    </>
  );
}
