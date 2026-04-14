import Achives from "@/src/shared/components/About/Achives";
import History from "@/src/shared/components/About/History";
import Missions from "@/src/shared/components/About/Missions";
import Sertificate from "@/src/shared/components/About/Sertificate";
import Team from "@/src/shared/components/About/Team";
import PageUpperInfo from "@/src/shared/components/PageUpperInfo";

export default function page() {
  return (
<>
<PageUpperInfo title = "О нас" description = "История, миссия и наши ценности"/>
<History/>
<Achives/>
<Missions/>
<Team/>
<Sertificate/>
</>
  )
}
