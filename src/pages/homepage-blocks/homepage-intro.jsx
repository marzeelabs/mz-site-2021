import HomepageIntroMessage from './homepage-intro-message';
import HomepageIntroCards from './homepage-intro-cards';

const HomepageIntro = () =>

 (
    <>
      <section className="homepage-intro__wrapper">

        <HomepageIntroMessage />
        <HomepageIntroCards />

      </section>
      {/* end intro */}
    </>
  );

export default HomepageIntro;
