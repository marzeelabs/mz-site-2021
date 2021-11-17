import Header from './components-global/header';

import AboutIntro from './pages-sections/about/about-intro';
import AboutIntroList from './pages-sections/about/about-intro-list';
import AboutMessage from './pages-sections/about/about-message';
import AboutCards from './pages-sections/about/about-cards';

import Footer from './components-global/footer';

const About = () => (
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
);

export default About;
