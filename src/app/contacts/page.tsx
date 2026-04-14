
import ContactCards from '../../shared/components/Contacts/ContactCards';
import ContactFlex from '../../shared/components/Contacts/ContactFlex';
import ContactQuestions from '../../shared/components/Contacts/ContactQuestions';
import PageUpperInfo from '@/src/shared/components/PageUpperInfo';
export default function page() {
  return (
    <>
          <PageUpperInfo
        title="  Контакты"
        description="Свяжитесь с нами удобным для вас способом"
      />
    <ContactCards/>
    <ContactFlex/>
    <ContactQuestions/>
    </>
  )
}
