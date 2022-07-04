import { useSanity } from '../../../context/sanity-context';
import AboutCard from './about-card';

const AboutCards = () => {

  const bannerData = useSanity('goalBanner');
  const cardData = useSanity('goalCard');

 return (
    <>
      <section className="about-cards__wrapper">

        <div className="about-cards__intro">
          <h1 className="title-display-small">
            {bannerData.titleTop}
          </h1>
          <h2 className="title-heading-1">
            {bannerData.subtitleTop}
          </h2>
        </div>

        <ul className="about-cards">
         {cardData.map((card) => (
          <AboutCard key={card._id} cardData={card}/>
         ))}
        </ul>


      </section>
      {/* end intro */}
    </>
  );
 }

export default AboutCards;
