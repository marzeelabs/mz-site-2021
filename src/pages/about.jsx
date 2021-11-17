import Header from './components-global/header';
import AboutIntro from './pages-sections/about/about-intro';
import AboutIntroList from './pages-sections/about/about-intro-list';
import AboutIntroMessage from './pages-sections/about/about-message';

import Footer from './components-global/footer';

const About = () => (
  <>
    <Header />
    <main>
      <AboutIntro />
      <AboutIntroList />
      <AboutIntroMessage />
    </main>
    <Footer />
  </>
);

export default About;
