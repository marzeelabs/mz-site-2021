// import HomepageIntroMessage from './homepage-intro-message';
import HomepageIntroMessageCentered from './homepage-intro-message-centered';
import HomepageIntroCards from './homepage-intro-cards';
import HomepageBubbles from './homepage-bubbles';

const HomepageIntro = () =>

 (
    <>
      <section className="homepage-intro__wrapper">
        {/* <HomepageIntroMessage /> */}
        <HomepageIntroMessageCentered />
        <HomepageIntroCards />
        <HomepageBubbles />
      </section>
      {/* end intro */}
    </>
  );

export default HomepageIntro;
