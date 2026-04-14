
import Reviewss from '../../shared/components/Reviews/Reviewss';
import RevBook from '../../shared/components/Reviews/RevBook';
import PageUpperInfo from '@/src/shared/components/PageUpperInfo';
export default function page() {
  return (
<>
      <PageUpperInfo
        title="  Отзывы гостей"
        description="Узнайте, что говорят о нас наши клиенты"
      />
<Reviewss/>
<RevBook/>
</>
  )
}
