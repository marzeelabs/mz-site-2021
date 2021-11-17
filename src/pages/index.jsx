import Header from './components/header';
import HomepageIntro from './homepage-blocks/homepage-intro';
import HomepageInfographic from './homepage-blocks/homepage-infographic';
import HomepageCaseStudies from './homepage-blocks/homepage-case-studies';
import HomepageTestimonials from './homepage-blocks/homepage-testimonials';
import HomepageForm from './homepage-blocks/homepage-form';
import Footer from './components/footer';

const Home = () => (
  <>
    <Header />
    <main>
      <HomepageIntro />
      <HomepageInfographic />
      <HomepageCaseStudies />
      <HomepageTestimonials />
      <HomepageForm />
    </main>
    <Footer />
  </>
);

export default Home;
