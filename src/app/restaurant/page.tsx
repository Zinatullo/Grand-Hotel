
import RestourauntHome from '../../shared/components/Restoraunt/RestorauntHome';
import RestAbout from '../../shared/components/Restoraunt/RestAbout';
import RestMenu from '../../shared/components/Restoraunt/RestMenu';
import RestChef from '../../shared/components/Restoraunt/RestChef';
import RestBooking from '../../shared/components/Restoraunt/RestBooking';

type Props = {
  searchParams: Promise<Record<string, string>>;
};
export default async function page({searchParams}:Props) {
const { menu } = await searchParams;

  return (
  <>

  <RestourauntHome/>
  <RestAbout/>
<RestMenu currentType={menu} />

  <RestChef/>
  <RestBooking/>
  </>)

}
