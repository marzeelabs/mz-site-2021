import Header from './components/header';
import HomepageIntro from './homepage-blocks/homepage-intro';
import HomepageInfographic from './homepage-blocks/homepage-infographic';
import HomepageCaseStudies from './homepage-blocks/homepage-case-studies';
import HomepageTestimonials from './homepage-blocks/homepage-testimonials';

const Home = () => (
  <>
    <Header />
    <main>

      <HomepageIntro />
      <HomepageInfographic />
      <HomepageCaseStudies />
      <HomepageTestimonials />

    </main>
    <footer className="footer">
      <h2>Footer</h2>
    </footer>
  </>
);

export default Home;
