import { useSanity } from '../../../context/sanity-context';

const ServicesContext = () => {

  const contextData = useSanity("context");

 return (
    <>
      <section className="services-context__wrapper">
        <div className="services-context__content">
         {contextData.map(context => (
          <p>{context.detail}</p>
         ))}
        </div>
      </section>
    </>
  );

 }

export default ServicesContext;
