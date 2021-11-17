import Header from './components-global/header';
import HomepageIntro from './pages-sections/homepage/homepage-intro';
import HomepageInfographic from './pages-sections/homepage/homepage-infographic';
import HomepageCaseStudies from './pages-sections/homepage/homepage-case-studies';
import HomepageTestimonials from './pages-sections/homepage/homepage-testimonials';
import HomepageForm from './pages-sections/homepage/homepage-form';
import Footer from './components-global/footer';

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
