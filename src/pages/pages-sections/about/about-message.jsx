import { useSanity } from '../../../context/sanity-context';

const AboutMessage = () => {

  const data = useSanity('originBanner');

 return (
    <>
      <section className="about-message__wrapper">

        <div className="about-message__content">
          <h1 className="about-message__pretitle title-heading-1">
            {data.titleTop}
          </h1>
          <h2 className="about-message__title title-display-small">
            {data.subtitleTop}
          </h2>

          <h2 className="about-message__title-big title-display">
            {data.titleBottom}
          </h2>
          
          <h3 className="about-message__pretitle title-heading-2">
            {data.subtitleBottom}
          </h3>
        </div>

      </section>
      {/* end intro */}
    </>
  );

 }

export default AboutMessage;
