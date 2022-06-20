import { useSanity } from '../../../context/sanity-context';

const ServicesIntro = () => {

  const data = useSanity('serviceBanner');

  return (
      <>
        <section className="services-intro__wrapper">
          <div className="services-intro__content">

            <h1 className="sevices-intro__title title-display">{data.titleTop}</h1>
            <h1 className="sevices-intro__title title-display">{data.subtitleTop}</h1>

            <h2 className="sevices-intro__subtitle title-heading-1">{data.regularA} <strong>{data.strongA}</strong> {data.regularB} <strong> {data.strongB} </strong></h2>

            <button className="button-secondary services-intro__cta" type="button" >{data.cta}</button>
          </div>
        </section>
      </>
  );
 }
export default ServicesIntro;
