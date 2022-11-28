import AboutCard from './about-card';
import AboutCard2 from './about-card2';
const AboutCards = () =>

 (
    <>
      <section className="about-cards__wrapper">

        <div className="about-cards__intro">
          <h1 className="title-display-small">
            Your business goals matter to us
          </h1>
          <h2 className="title-heading-1">
            and we will use all of our technical expertise and culture to help you achieve more. 
          </h2>
        </div>

        <ul className="about-cards">
          <AboutCard />
          <AboutCard2 />
          <AboutCard />
          <AboutCard2 />
        </ul>


      </section>
      {/* end intro */}
    </>
  );

export default AboutCards;
