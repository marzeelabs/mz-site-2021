import benefitsSection from '../../../../studio/schemas/documents/benefitsSection';
import { useSanity } from '../../../context/sanity-context';
import ServicesBenefitsCards from './services-benefits-cards';

const ServicesBenefits = () => {

  const benefitCardData = useSanity('benefit');
  const sectionData = useSanity('benefitsSection');

 return (
    <>
      <section className="services-benefits__wrapper">
        <div className="services-benefits__content">

          <h1 className="sevices-benefits__title title-display">{sectionData.title}</h1>

          <ServicesBenefitsCards data={benefitCardData} />

        </div>
      </section>
    </>
  );
 }

export default ServicesBenefits;
