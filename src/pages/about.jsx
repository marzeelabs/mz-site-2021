import Header from './components-global/header';
import AboutIntro from './pages-sections/about/about-intro';
import AboutIntroList from './pages-sections/about/about-intro-list';
import AboutMessage from './pages-sections/about/about-message';
import AboutCards from './pages-sections/about/about-cards';
import Footer from './components-global/footer';

import { client } from '../lib/client';
import { SanityProvider } from '../context/sanity-context';

const About = ({ data }) => {

  return (
    <SanityProvider data={data}>
      <>
        <Header />
        <main>
          <AboutIntro />
          <AboutIntroList />
          <AboutMessage />
          <AboutCards />
        </main>
        <Footer />
      </>
    </SanityProvider>
  )

};

export const getStaticProps = async () => {
  const data = await client.fetch(
    '*[_type in [ "aboutIntro","aboutList","originBanner","goalBanner","goalCard","socials"] && !(_id in path(\'drafts.**\'))] | order(order asc)',
  );

  return {
    props: {
      data,
    },
  };
}

export default About;
