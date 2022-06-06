import { useSanity } from '../../../context/sanity-context';

// import HomepageIntroMessage from './homepage-intro-message';
import HomepageIntroMessageCentered from './homepage-intro-message-centered';
import HomepageIntroCards from './homepage-intro-cards';


const HomepageIntro = () => {
  
  const servicesData = useSanity('services');
  const bannerData = useSanity('banner');

 return (
    <>
      <section className="homepage-intro__wrapper">
        {/* <HomepageIntroMessage /> */}
        <HomepageIntroMessageCentered data={bannerData}/>
        <HomepageIntroCards data={servicesData} />

      </section>
      {/* end intro */}
    </>
  );

 };

export default HomepageIntro;
